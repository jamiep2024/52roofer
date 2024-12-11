declare namespace NodeJS {
  interface ProcessEnv {
    APPS_SCRIPT_URL: string;
    // Add other environment variables here as needed
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
