
type Nullable<T> = T | null;


// Client Interfaces
interface PRApiError {
  error: string;
  message: string;
  statusCode: number;
}

interface ApiHeader {
  Authorization?: string;
  "Content-type": string;
}

interface ApiResponse<T> {
  data: Nullable<T>;
  statusCode: number;
  status: boolean;
  message: string;
}

type TBody = Record<string, unknown>;

interface OptionsArgs {
  body?: TBody;
  headers?: Record<string, unknown>;
  [props: string]: unknown;
}

interface ClientParams {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: OptionsArgs;
  headers?: ApiHeader;
}
interface QueryKeyInterface {
  pageParam: string;
  queryKey: [];
}



// Navbar
interface IMenuList {
  path: string;
  name: string;
  isAuthenticated?: boolean;
}

interface IAllergies extends Record<string, unknown> {
  medications: string[];
  allergies: string[];
  noAllergies: boolean;
  noMedications: boolean;
}

interface SocialIcon {
  url: string;
  icon: JSX.Element;
}
interface IAuthResponse extends Record<string, unknown> {
  firstName?: string;
  id?: string;
  userId?: string;
  roles: [];
  token?: string;
  type?: string;
  username?: string;
  data?: [
    data?: {},
    data?: [],
    message?: string,
    status?: boolean,
    statusCode?: number
  ];
}