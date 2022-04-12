import { AuthLogout, AuthParams, AuthToken } from "model/auth";
import { BaseResponse } from "types/base-response";
import HttpApiService from "./HttpApiService";

export class AuthService extends HttpApiService {

    /**
     * login()
     * Method login API
     */
    async login(params: AuthParams): Promise<AuthToken | undefined> {
        try {
            const response = await this.post<BaseResponse<AuthToken>>('login', params)
            return response.data;
        } catch(error) {
            return undefined;
        }
    }

    /**
     * logout()
     * Method logout API
     * @param data
     * @param conf
     *  */
    async logout(data: any, conf = {}) {
        try {
            const response = await this.post<BaseResponse<AuthLogout>>('logout', data, conf);
            return response.data;
        } catch (error) {
            localStorage.clear();
            return undefined;
        }
    }
    
}