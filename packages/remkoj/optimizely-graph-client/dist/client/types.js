export var AuthMode;
(function (AuthMode) {
    AuthMode["Public"] = "epi-single";
    AuthMode["Basic"] = "use-basic";
    AuthMode["HMAC"] = "use-hmac";
    AuthMode["Token"] = "use-token";
})(AuthMode || (AuthMode = {}));
