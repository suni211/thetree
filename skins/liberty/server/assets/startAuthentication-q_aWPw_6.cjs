"use strict";
const toAuthenticatorAttachment = require("./toAuthenticatorAttachment-CuNDwn0n.cjs");
function browserSupportsWebAuthnAutofill() {
  if (!toAuthenticatorAttachment.browserSupportsWebAuthn()) {
    return _browserSupportsWebAuthnAutofillInternals.stubThis(new Promise((resolve) => resolve(false)));
  }
  const globalPublicKeyCredential = globalThis.PublicKeyCredential;
  if ((globalPublicKeyCredential == null ? void 0 : globalPublicKeyCredential.isConditionalMediationAvailable) === void 0) {
    return _browserSupportsWebAuthnAutofillInternals.stubThis(new Promise((resolve) => resolve(false)));
  }
  return _browserSupportsWebAuthnAutofillInternals.stubThis(globalPublicKeyCredential.isConditionalMediationAvailable());
}
const _browserSupportsWebAuthnAutofillInternals = {
  stubThis: (value) => value
};
function identifyAuthenticationError({ error, options }) {
  const { publicKey } = options;
  if (!publicKey) {
    throw Error("options was missing required publicKey property");
  }
  if (error.name === "AbortError") {
    if (options.signal instanceof AbortSignal) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: error
      });
    }
  } else if (error.name === "NotAllowedError") {
    return new toAuthenticatorAttachment.WebAuthnError({
      message: error.message,
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  } else if (error.name === "SecurityError") {
    const effectiveDomain = globalThis.location.hostname;
    if (!toAuthenticatorAttachment.isValidDomain(effectiveDomain)) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: `${globalThis.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: error
      });
    } else if (publicKey.rpId !== effectiveDomain) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: `The RP ID "${publicKey.rpId}" is invalid for this domain`,
        code: "ERROR_INVALID_RP_ID",
        cause: error
      });
    }
  } else if (error.name === "UnknownError") {
    return new toAuthenticatorAttachment.WebAuthnError({
      message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
      code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
      cause: error
    });
  }
  return error;
}
async function startAuthentication(options) {
  var _a, _b;
  if (!options.optionsJSON && options.challenge) {
    console.warn("startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.");
    options = { optionsJSON: options };
  }
  const { optionsJSON, useBrowserAutofill = false, verifyBrowserAutofillInput = true } = options;
  if (!toAuthenticatorAttachment.browserSupportsWebAuthn()) {
    throw new Error("WebAuthn is not supported in this browser");
  }
  let allowCredentials;
  if (((_a = optionsJSON.allowCredentials) == null ? void 0 : _a.length) !== 0) {
    allowCredentials = (_b = optionsJSON.allowCredentials) == null ? void 0 : _b.map(toAuthenticatorAttachment.toPublicKeyCredentialDescriptor);
  }
  const publicKey = {
    ...optionsJSON,
    challenge: toAuthenticatorAttachment.base64URLStringToBuffer(optionsJSON.challenge),
    allowCredentials
  };
  const getOptions = {};
  if (useBrowserAutofill) {
    if (!await browserSupportsWebAuthnAutofill()) {
      throw Error("Browser does not support WebAuthn autofill");
    }
    const eligibleInputs = document.querySelectorAll("input[autocomplete$='webauthn']");
    if (eligibleInputs.length < 1 && verifyBrowserAutofillInput) {
      throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');
    }
    getOptions.mediation = "conditional";
    publicKey.allowCredentials = [];
  }
  getOptions.publicKey = publicKey;
  getOptions.signal = toAuthenticatorAttachment.WebAuthnAbortService.createNewAbortSignal();
  let credential;
  try {
    credential = await navigator.credentials.get(getOptions);
  } catch (err) {
    throw identifyAuthenticationError({ error: err, options: getOptions });
  }
  if (!credential) {
    throw new Error("Authentication was not completed");
  }
  const { id, rawId, response, type } = credential;
  let userHandle = void 0;
  if (response.userHandle) {
    userHandle = toAuthenticatorAttachment.bufferToBase64URLString(response.userHandle);
  }
  return {
    id,
    rawId: toAuthenticatorAttachment.bufferToBase64URLString(rawId),
    response: {
      authenticatorData: toAuthenticatorAttachment.bufferToBase64URLString(response.authenticatorData),
      clientDataJSON: toAuthenticatorAttachment.bufferToBase64URLString(response.clientDataJSON),
      signature: toAuthenticatorAttachment.bufferToBase64URLString(response.signature),
      userHandle
    },
    type,
    clientExtensionResults: credential.getClientExtensionResults(),
    authenticatorAttachment: toAuthenticatorAttachment.toAuthenticatorAttachment(credential.authenticatorAttachment)
  };
}
exports.startAuthentication = startAuthentication;
