import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function safeFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
  timeoutMs = 7000,
): Promise<Response | null> {
  let controller: AbortController | null = null;
  const providedSignal = (init as any)?.signal as AbortSignal | undefined;
  const signal = providedSignal
    ? providedSignal
    : ((controller = new AbortController()), controller.signal);

  const timeout = setTimeout(() => {
    try {
      if (controller) controller.abort();
    } catch (e) {
      /* ignore */
    }
  }, timeoutMs);

  try {
    const response = await fetch(input, { ...(init || {}), signal });
    return response;
  } catch (e: any) {
    // If the request was aborted, suppress noisy logs and return null so callers can fallback safely
    const isAbort = e && (e.name === "AbortError" || e instanceof DOMException);
    if (!isAbort) {
      console.warn("safeFetch error:", e);
    }
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
