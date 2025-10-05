export type TryCatchResult<T, E = unknown> =
  | readonly [E, null]
  | readonly [null, T];

export async function tryCatch<T, E = unknown>(
  input: PromiseLike<T>
): Promise<TryCatchResult<T, E>>;
export async function tryCatch<T, E = unknown>(
  input: () => T | PromiseLike<T>
): Promise<TryCatchResult<Awaited<T>, E>>;
export async function tryCatch<T, E = unknown>(
  input: PromiseLike<T> | (() => T | PromiseLike<T>)
): Promise<TryCatchResult<Awaited<T>, E>> {
  try {
    const value =
      typeof input === "function"
        ? (input as () => T | PromiseLike<T>)()
        : input;
    const data = await value;
    return [null, data] as const;
  } catch (error) {
    return [error as E, null] as const;
  }
}
