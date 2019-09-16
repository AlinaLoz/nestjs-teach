export interface IRavenService {
    init();
    install();
    uninstall();
    warning(message: string, additionalData?: object);
    message(message: string, additionalData?: object);
    error(error: Error, key: string, additionalData?: object);
}
