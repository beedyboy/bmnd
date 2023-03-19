import { client } from "..";
// import config from "../../config";


// async function signUp(body: ISignUpRequest) {
//   const response = await client<any>(
//     `${config.AUTH_BASE_URL}/api/auth/register/customer`,
//     "POST",
//     { body }
//   );
//   return response;
// }

// async function updateAddress(body: IUserAddress) {
//   const response = await client<any>(
//     `${config.AUTH_BASE_URL}/api/user/delivery-address`,
//     "PUT",
//     { body }
//   );
//   return response;
// }

// async function forgotPassword(body: IEmail) {
//   const response = await client<any>(
//     `${config.AUTH_BASE_URL}/api/auth/forgot-password`,
//     "POST",
//     { body }
//   );
//   return response;
// }


// async function resetPassword(payload: IForgotPasswordRequest) {

//   const response = await fetch(
//     `${config.AUTH_BASE_URL}/api/auth/reset-password`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),

//     } 
//   ).then((res) => res.json());
//   return response;
// }

// async function SignIn(body: ILoginRequest) {
//   const response = await client<any>(
//     `${config.AUTH_BASE_URL}/api/auth/login`,
//     "POST",
//     { body }
//   );
//   return response;
// }
// export {
//   signUp,
//   updateAddress,
//   forgotPassword,
//   resetPassword,
//   SignIn,
// };
