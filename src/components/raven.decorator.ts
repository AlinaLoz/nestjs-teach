import {RavenService} from "../providers/raven.service";

export function raven(type?: string) {
    return (target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<any>
    ): TypedPropertyDescriptor<any> => {
        switch (type) {
            default:
                const originalMethod = descriptor.value;
                descriptor.value = (...args: any[]) => {
                    let result = null;
                    try {
                        result = originalMethod.apply(this, args);
                        return result;
                    } catch(error) {
                        throw raven.service.error(error, propertyKey);
                    }
                };
                return descriptor;
        }
    };
}

raven.service = new RavenService();
