import { AxiosError } from "axios";
import { ValidationError } from "yup";

export const loginKey = "BMD_USR-TK_";
export const userKey = "BMD_USR_";
export const cartKey = "_USR_CRT_";
export const cartPricing = "_USR_CRT_PC_";
export const referral = "_USR_REFERRAL_";
export const ENCRYPTION_KEY = "usr-encry-tks";

export const Routes = {
  Login: "/auth/login",
  Signup: "/auth/signup",
  ForgotPassword: "/auth/forgot-password",
  EmailSent: "/auth/email-sent",
  ResetPassword: "/auth/reset-password",
  OnBoarding: "/onboarding",
  Home: "/my-orders",
  ClientAccount: "/account",
  PlaceOrder: "/",
  ClientOrdersAddress: "/place-order/address",
  GuestConfirmationPage: "/order-success",
  Contact: "/contact",
  AdminLogin: "/auth/admin/login",
  AdminDashboard: "/admin/dashboard",
  AdminOrders: "/admin/orders",
  AdminCustomer: "/admin/customers",
  AdminInventory: "/admin/inventory",
  AdminRunners: "/admin/runners",
  AdminPartners: "/admin/partners",
  Verify: "/verify",
};

export enum UserRoles {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER'
}
 

export function responsiveLg<T = string>(mobile: T, desktop: T) {
  return [mobile, null, null, desktop];
}

export function responsiveMd<T = string>(mobile: T, desktop: T) {
  return [mobile, null, desktop];
}


export function capitalizeFirstLetter(string: string) {
  const words = string.toLowerCase().split(/\s+/);
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

export const isYupError = (error: any): error is ValidationError => {
  return error.name === 'ValidationError' && error.inner instanceof Array;
};

export const isGenericError = (error: any): error is Error => {
  return typeof error.message !== 'undefined';
};

export const isAxiosError = (error: any): error is AxiosError<Partial<PRApiError>> => {
  return error.isAxiosError === true;
};

export function parseError(error: any): string {
  if (isAxiosError(error)) {
    return error.response?.data?.message || 'Something went wrong';
  }
  if (isYupError(error)) {
    return error.inner.map((e) => e.message).join(', ');
  }
  if (isGenericError(error)) {
    return error.message;
  }
  return 'Something went wrong';
}