var Documents = (function () {
    function Documents() {
        var _this = this;
        this.register = function (server, options, next) {
            server.bind(_this);
            _this._register(server, options);
            next();
        };
        this.register.attributes = {
            name: 'bemily-documents',
            version: '0.1.0'
        };
    }
    Documents.prototype._register = function (server, options) {
        // Register
        return 'register';
    };
    Documents.prototype.errorInit = function (error) {
        if (error) {
            console.log('Error: Failed to load plugin:', error);
        }
    };
    return Documents;
})();
exports.default = Documents;
