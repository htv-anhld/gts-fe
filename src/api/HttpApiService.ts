import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';

export enum EnumContentType {
  JSON = "application/json",
  XML = "application/xml",
  FORM = "application/x-www-form-urlencoded",
}

class HttpApiService {
  private _axiosInstance: AxiosInstance | undefined;
  private _baseURL: string;
  private _token: string | null;

  constructor() {
    this._baseURL = process.env.REACT_APP_API_URI;
    this._token = null;

    this.createAxiosInstance();
  }

  private defaultOptions = (): any => {
    // Set the AUTH token for any request

    const authHttpHeader = "Bearer token" // Token goes here
    this._token = authHttpHeader;
    const options = {
      baseURL: this._baseURL,
      // withCredentials: true, // Window Authentification
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `${authHttpHeader}` // OAuth Authetification
      }
    };
    return options;
  };

  /**
   * createAxiosInstance
   * Create instance to axios
   */
  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());

    // this.checkAutorization()

    // Add a request interceptor
    this._axiosInstance.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        console.log({config});
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this._axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  /**
   * getToken()
   * Method getToken API
   */
  protected getToken() {
    return this._token;
  }

  /**
   * get
   * Method get API
   */
  protected get<T>(endpoint: string, conf = {}): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this._axiosInstance!
        .get<T>(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * create()
   * Method create API
   */
  protected create<T>(endpoint: string, data: {}, conf = {}): AxiosPromise<T> {
    return this.post<T>(endpoint, data, conf)
  }

  protected post<T>(endpoint: string, data: {}, conf = {}): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this._axiosInstance!
        .post<T>(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * update()
   * Method update API
   */
  protected update<T>(endpoint: string, data: {}, conf = {}): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this._axiosInstance!
        .put<T>(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  /**
   * delete()
   * Method delete API
   */
  protected delete<T>(endpoint: string, id: any, conf = {}): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this._axiosInstance!
        .delete<T>(`${endpoint}/${id}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * deleteFile()
   * Method deleteFile API
   */
  protected deleteFile(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!
        .delete(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * uploadFile()
   * Method uploadFile API
   */
  protected uploadFile<T>(endpoint: string, data: FormData, conf = {}): AxiosPromise<T> {
    return this.post<T>(endpoint, data, conf)
  }

  /**
   * downloadFile()
   * Method downloadFile API
   */
  protected downloadFile(endpoint: string): AxiosPromise {
    const conf = {
      responseType: 'blob', // important
      timeout: 30000,
    }
    return this.get(endpoint, conf)
  }

  /**
   * handleSuccess()
   * Method handleSuccess API
   */  
  handleSuccess(response: AxiosResponse) {
    // console.log('handleSuccess' + JSON.stringify(response))
    return response;
  }

  /**
   * handleError()
   * Method handleError API
   */    
  handleError = (err: any) => {
    console.log(`HttpService::Error : ${err}`)
    if (!err.response) {
        console.log(`Network error: ${err}`);
    } else {
      if (err.response !== undefined) {
        const { status } = err.response;
        if (status === 500) {
          console.log(`HttpService::Error(500) : ${err.response.data.Message}`);
        }
        if (status === 401) {
          console.log(`HttpService::Error(401) : ${err.response.data.Message}`);
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(err);
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };
}

export default HttpApiService;
