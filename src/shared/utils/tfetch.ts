export const ErrorType = {
  UnexpectedServerError: 0,
} as const;

async function tFetchBase<T>(
  baseUrl: string,
  url: string,
  opts?: RequestInit
): Promise<TResponse<T>> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...opts?.headers,
      },
      ...opts,
    });

    const data = (await response.json()) as TResponse<T>;
    return data;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return {
      success: false,
      error: { code: ErrorType.UnexpectedServerError, message: errorMessage },
    };
  }
}

export function tFetch<T>(
  url: string,
  opts?: RequestInit
): Promise<TResponse<T>> {
  return tFetchBase<T>(process.env.NEXT_PUBLIC_MUSIC_API_URL, url, opts);
}

export type TErrorType = (typeof ErrorType)[keyof typeof ErrorType];
export type TError = {
  code: TErrorType;
  message: string; // Always English
};

export type TResponse<T> =
  | { success: true; result: T }
  | { success: false; error: TError };
