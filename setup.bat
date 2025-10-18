@echo off
setlocal enabledelayedexpansion

REM Google Cloud TheTree 설정 스크립트 (Windows Batch)
REM 프로젝트: minecraft-475302
REM 지역: asia-northeast3 (서울)

set PROJECT_ID=minecraft-475302
set REGION=asia-northeast3
set ZONE=asia-northeast3-a
set INSTANCE_NAME=thetree-db
set MONGO_USER=thetree_user
set SERVICE_NAME=meilisearch

echo.
echo ========================================
echo Google Cloud TheTree 자동 설정 시작
echo 프로젝트: %PROJECT_ID%
echo 지역: %REGION% (서울)
echo ========================================
echo.

REM 1. 프로젝트 설정
echo [1/6] 프로젝트 설정
gcloud config set project %PROJECT_ID%
gcloud config set compute/region %REGION%
gcloud config set compute/zone %ZONE%

REM 2. API 활성화
echo.
echo [2/6] Google Cloud API 활성화
gcloud services enable sqladmin.googleapis.com storage-api.googleapis.com container.googleapis.com run.googleapis.com compute.googleapis.com

REM 3. Cloud SQL MongoDB 생성
echo.
echo [3/6] Cloud SQL MongoDB 인스턴스 생성
echo 이 작업은 5-10분 정도 소요됩니다...
echo.

gcloud sql instances create %INSTANCE_NAME% --database-version=MONGODB_6_0 --tier=db-f1-micro --region=%REGION% --availability-type=ZONAL --backup-start-time=03:00 --enable-bin-log 2>nul

REM MongoDB 사용자 생성
echo MongoDB 사용자 생성 중...
gcloud sql users create %MONGO_USER% --instance=%INSTANCE_NAME% --type=BUILT_IN 2>nul

REM 4. Google Cloud Storage 버킷 생성
echo.
echo [4/6] Google Cloud Storage 버킷 생성
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c%%a%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
set BUCKET_NAME=thetree-uploads-%mydate%-%mytime%

echo 버킷 생성 중: %BUCKET_NAME%
gsutil mb -l %REGION% gs://%BUCKET_NAME% 2>nul

REM CORS 설정
echo CORS 설정 중...
(
echo [
echo   {
echo     "origin": ["*"],
echo     "method": ["GET", "HEAD"],
echo     "responseHeader": ["Content-Type", "Cache-Control"],
echo     "maxAgeSeconds": 3600
echo   }
echo ]
) > cors.json

gsutil cors set cors.json gs://%BUCKET_NAME% 2>nul
del cors.json

REM HMAC 키 생성
echo.
echo HMAC 키 생성 중...
for /f "delims=" %%i in ('gcloud storage hmac create --project=%PROJECT_ID% 2^>^&1 ^| findstr "Access Key"') do set HMAC_LINE=%%i
for /f "tokens=3" %%i in ("%HMAC_LINE%") do set HMAC_ACCESS_KEY=%%i

for /f "delims=" %%i in ('gcloud storage hmac create --project=%PROJECT_ID% 2^>^&1 ^| findstr "Secret"') do set HMAC_SECRET_LINE=%%i
for /f "tokens=2" %%i in ("%HMAC_SECRET_LINE%") do set HMAC_SECRET_KEY=%%i

REM 5. Meilisearch Cloud Run 배포
echo.
echo [5/6] Meilisearch를 Cloud Run에 배포
echo Meilisearch 배포 중...

REM 임의의 마스터 키 생성 (간단한 버전)
for /f %%i in ('powershell -Command "[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(24))"') do set MEILISEARCH_KEY=%%i

gcloud run deploy %SERVICE_NAME% --image=getmeili/meilisearch:latest --region=%REGION% --memory=512Mi --set-env-vars="MEILI_MASTER_KEY=%MEILISEARCH_KEY%" --allow-unauthenticated --timeout=3600 2>nul

REM Meilisearch URL 가져오기
echo Meilisearch URL 확인 중...
for /f %%i in ('gcloud run services describe %SERVICE_NAME% --region=%REGION% --format="value(status.url)" 2^>nul') do set MEILISEARCH_URL=%%i

REM 6. 정보 수집
echo.
echo [6/6] .env 파일 생성
echo MongoDB 호스트 확인 중...
for /f %%i in ('gcloud sql instances describe %INSTANCE_NAME% --format="value(ipAddresses[0].ipAddress)" 2^>nul') do set MONGO_HOST=%%i

REM SESSION_SECRET 생성
for /f %%i in ('powershell -Command "[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))"') do set SESSION_SECRET=%%i

REM .env 파일 생성
(
echo # 서버 설정
echo PORT=3000
echo IP_HEADER=x-forwarded-for
echo SESSION_SECRET=%SESSION_SECRET%
echo.
echo # MongoDB 설정 (Google Cloud SQL^)
echo MONGODB_HOST=%MONGO_HOST%
echo MONGODB_PORT=27017
echo MONGODB_USER=%MONGO_USER%
echo MONGODB_PASSWORD=
echo MONGODB_DATABASE=TheTree
echo.
echo # Redis 설정 (선택사항^)
echo USE_REDIS=false
echo REDIS_HOST=127.0.0.1
echo REDIS_PORT=6379
echo REDIS_PASSWORD=
echo.
echo # Google Cloud Storage 설정
echo S3_ENDPOINT=https://storage.googleapis.com
echo S3_ACCESS_KEY_ID=%HMAC_ACCESS_KEY%
echo S3_SECRET_ACCESS_KEY=%HMAC_SECRET_KEY%
echo S3_BUCKET_NAME=%BUCKET_NAME%
echo S3_REGION=auto
echo S3_PUBLIC_HOST=https://storage.googleapis.com/%BUCKET_NAME%
echo.
echo # Meilisearch 설정
echo MEILISEARCH_HOST=%MEILISEARCH_URL%
echo MEILISEARCH_KEY=%MEILISEARCH_KEY%
echo MEILISEARCH_INDEX=TheTreeDocuments
echo.
echo # 기타
echo DISABLE_EVAL=false
) > .env

echo.
echo ========================================
echo 완료!
echo ========================================
echo.
echo 생성된 리소스 정보:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Cloud SQL 인스턴스: %INSTANCE_NAME%
echo   호스트: %MONGO_HOST%
echo   포트: 27017
echo   사용자: %MONGO_USER%
echo.
echo Google Cloud Storage: gs://%BUCKET_NAME%
echo.
echo Meilisearch: %MEILISEARCH_URL%
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 중요: MongoDB 비밀번호를 .env 파일에 설정하세요!
echo.
echo 다음 단계:
echo 1. .env 파일 확인: type .env
echo 2. MONGODB_PASSWORD= 부분에 비밀번호 입력
echo 3. npm install
echo 4. npm run build
echo 5. npm start
echo.
echo 설정이 완료되었습니다!
echo.
pause