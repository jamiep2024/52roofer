declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APPS_SCRIPT_URL: string;
    // Add other environment variables here as needed
    NODE_ENV: "development" | "production" | "test";
  }
}
