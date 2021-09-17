type PromiseResolved<T extends Promise<unknown>> = T extends Promise<infer U>
    ? U
    : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncFn = (...args: any[]) => Promise<any>

type ErrorHandleableArrayResult<T extends AsyncFn> =
    | [PromiseResolved<ReturnType<T>>, void]
    | [void, unknown]

type ErrorHandleableObjectResult<T extends AsyncFn> =
    | { result: PromiseResolved<ReturnType<T>>; succeed: true }
    | { error: unknown; succeed: false }

interface ErrorHandleableResult<T extends AsyncFn> {
    asArray: () => ErrorHandleableArrayResult<T>
    asObject: () => ErrorHandleableObjectResult<T>
}

export async function errorHandleableAsync<T extends AsyncFn>(
    asyncFn: T,
    ...params: Parameters<T>
): Promise<ErrorHandleableResult<T>> {
    try {
        const result = await asyncFn(...params)
        return {
            asObject:
                function returnPromiseResultAsObject(): ErrorHandleableObjectResult<T> {
                    return {
                        result,
                        succeed: true,
                    }
                },
            asArray:
                function returnPromiseResultAsArray(): ErrorHandleableArrayResult<T> {
                    return [result, undefined]
                },
        }
    } catch (error) {
        return {
            asObject:
                function returnPromiseResultAsObject(): ErrorHandleableObjectResult<T> {
                    return { error, succeed: false }
                },
            asArray:
                function returnPromiseResultAsArray(): ErrorHandleableArrayResult<T> {
                    return [undefined, error]
                },
        }
    }
}

export default errorHandleableAsync
