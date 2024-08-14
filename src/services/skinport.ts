import axios from "axios";
import { appConfig } from "../common";

export class SkinPort {
    async getInventory() {
        const response = await axios.get(`https://api.skinport.com/v1/items?app_id=${appConfig.skinPort.appId}&currency=EUR&tradable=0`,
            { responseType: "json" }
        );

        return response.data;
    }
}