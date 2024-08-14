import { NextFunction, Request, Response, Router } from "express";
import { Cache } from "memory-cache";
import { SkinPort } from "../services";
import { appConfig } from "../common";

const router = Router();
const cache = new Cache();
const skinPort = new SkinPort();

function cacheMiddleware(req: Request, res: Response, next: NextFunction) {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedBody = cache.get(key);
    if (cachedBody) {
        return res.send(cachedBody);
    } else {
        return next();
    }
}

router.get("/", cacheMiddleware, async (req, res) => {
    const response = await skinPort.getInventory();
    cache.put("__express__" + req.originalUrl || req.url, response, appConfig.skinPort.cacheTimeout);
    res.send(response);
});

export default router;
