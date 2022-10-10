declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string;
    MONGODB_URI?: string;
    DB_NAME?: string;
  }
}
