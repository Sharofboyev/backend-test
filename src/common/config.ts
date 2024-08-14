import { config } from "dotenv";
config();

export const appConfig = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "test",
    },
    skinPort: {
        appId: Number(process.env.SKINPORT_APP_ID) || 730,
        cacheTimeout: Number(process.env.SKINPORT_CACHE_TIMEOUT) || 3000000,
    }
}