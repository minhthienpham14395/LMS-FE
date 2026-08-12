const required = (name: string, fallback = "") => {
  const value = import.meta.env[name] ?? fallback;

  if (!value && import.meta.env.PROD) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
};

export const env = Object.freeze({
  apiBaseUrl: required("VITE_API_BASE_URL", "/api"),
  appName: import.meta.env.VITE_APP_NAME || "LMS Tiếng Anh",
  enableMock:
    import.meta.env.VITE_ENABLE_MOCK === "true" ||
    (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK !== "false"),
});
