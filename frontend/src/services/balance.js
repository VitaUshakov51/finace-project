import {CustomHttp} from "./custom-http.js";
import config from "../../config/config.js";

export class Balance {
     static async getBalance() {
        const result = await CustomHttp.request(config.host + '/balance', 'GET');
        if (result) {
            return '$' + result.balance ;
        }
    }

    static updateBalance(){

    }

}