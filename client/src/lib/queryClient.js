import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res) {
  if (!res.ok) {
    let errorText;
    try {
      const errorJson = await res.json();
      errorText = errorJson.message || `Error ${res.status}`;
    } catch (e) {
      errorText = `Error ${res.status}`;
    }
    const error = new Error(errorText);
    error.status = res.status;
    throw error;
  }
}

export async function apiRequest(method, url, data) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);
  await throwIfResNotOk(res);

  if (res.status === 204) {
    return undefined;
  }

  return await res.json();
}

export const getQueryFn = (options) => {
  return async ({ queryKey }) => {
    const [url] = queryKey;
    const res = await fetch(url);
    
    if (res.status === 401 && options.on401 === "returnNull") {
      return null;
    }
    
    await throwIfResNotOk(res);
    
    if (res.status === 204) {
      return undefined;
    }
    
    return await res.json();
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});