export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

export default
class Documents {
    constructor() {
        this.register.attributes = {
            name: 'bemily-documents',
            version: '0.1.0'
        };
    }

    register:IRegister = (server, options, next) => {
        server.bind(this);
        this._register(server, options);
        next();
    };

    private _register(server, options) {
        // Register
        return 'register';
    }

    errorInit(error) {
        if (error) {
            console.log('Error: Failed to load plugin:', error);
        }
    }
}