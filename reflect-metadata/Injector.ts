import 'reflect-metadata';
import {Type} from "./Util";

/**
 * The Injector stores services and resolves requested instances.
 */
export const Injector = new class {
    /**
     * Resolves instances by injecting required services
     * @param {Type<any>} target
     * @returns {T}
     */
    resolve<T>(target: Type<any>): T {
        console.log('I target', target)
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [],
            injections = tokens.map(token => Injector.resolve<any>(token));

        console.log('tokens', tokens)
        console.log('injections', injections)

        return new target(...injections);
    }
};
