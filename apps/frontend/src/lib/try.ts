export type WithTryFunction = 
    <F extends (...args: any) => any, R extends ReturnType<F>, D extends R | null | undefined>(fn: F, ifError: D) => (...args: Parameters<F>) => D extends null ? R | null : (D extends undefined ? R | undefined : R)

export function withTry<F extends (...args: any) => any, R extends ReturnType<F>, D extends R | null | undefined>(fn: F, ifError: D) : (...args: Parameters<F>) => D extends null ? R | null : (D extends undefined ? R | undefined : R)
{
    return function wrapped (...invokedArgs: Parameters<F>) : D extends null ? R | null : (D extends undefined ? R | undefined : R) {
        try {
            return fn(...invokedArgs)
        } catch {
            return ifError as D extends null ? R | null : (D extends undefined ? R | undefined : R)
        }
    }
}

export default withTry