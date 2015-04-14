export interface IRegister {
    (server: any, options: any, next: any): void;
    attributes?: any;
}
export default class Documents {
    constructor();
    register: IRegister;
    private _register(server, options);
    errorInit(error: any): void;
}
