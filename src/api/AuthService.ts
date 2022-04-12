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
            localStorage.setItem('token', response.data.data.token);
            return response.data.data;
        } catch(error) {
            return undefined;
        }
    }

    /**
     * logout()
     * Method logout API
     *  */
    async logout() {
        try {
            const response = await this.post<BaseResponse<AuthLogout>>('logout', {}, {});
            return response.data.data;
        } catch (error) {
            return undefined;
        }
    }
}

export const AuthApiService = new AuthService();