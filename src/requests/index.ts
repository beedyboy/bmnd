import axios, { AxiosRequestConfig } from "axios";
import { loginKey, userKey } from "utils";
import Alert from "../utils/Alert";
import { decrypt_key } from "../utils/auth-util";
import storage from "../utils/storage";

export type DefaultResponse = Record<string, unknown>;

/** Axios interceptors to transform error message for clientFn */
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      Alert.error({ message: "session expired" });
      localStorage.removeItem(loginKey);
      localStorage.removeItem(userKey);
      window.location.href = "/auth/login";
    } else if (error.response?.status === 403) {
      // Handle 403 errors 
      Alert.error({ message: error.response?.data.message });
      return Promise.reject(error.response.data.message);
    } else if (error.response?.status === 501 || error.response?.status === 504) {
      return Promise.reject("Something went wrong! Please try again later");
    }
    else if (Array.isArray(error.response?.data.message)) {
      return Promise.reject(error.response.data.message.join(", "));
    } else {
      return Promise.reject(error.response.data.message);
    }
  }
);

export async function client<ResponseType>(
  endpoint: string,
  method?: any,
  { body, headers: customHeaders, ...customConfig }: OptionsArgs = {}
) {

  const encrypted_token = storage.get(loginKey);
  let token = "";

  if (encrypted_token) {
    token = decrypt_key(encrypted_token);
  }

  const headers: ApiHeader = {
    "Content-type": "application/json; charset=UTF-8"
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const bodyPayload = { ...body };
  const params: AxiosRequestConfig = {
    method,
    url: endpoint,
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders
    },
    data: bodyPayload,
  };

  try {
    const { data } = await axios.request<ResponseType>(params);
    return data as ResponseType;
  } catch (error) {
    // Alert.error({ message: parseError(error) });
  }
}
