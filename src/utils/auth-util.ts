import { createDecipheriv, randomBytes } from "crypto";
import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
import { ENCRYPTION_KEY, userKey, Routes } from "utils";
import storage from "./storage";

export const encrypt_key = (token: any) => {
    const encryptedToken = aes.encrypt(token, ENCRYPTION_KEY).toString();

    return encryptedToken;
};

export const decrypt_key = (token: string) => {
    if (token) {
        const decryptedToken = aes.decrypt(token, ENCRYPTION_KEY);
        const decryptedTokenSting = decryptedToken?.toString(enc);
        return decryptedTokenSting;
    }
    return token;
};

export const encrypt_userobj = (user: IAuthResponse) => {
    const encryptedUser = aes
        .encrypt(JSON.stringify(user), ENCRYPTION_KEY)
        .toString();

    return encryptedUser;
};

export const decrypt_user0bj = (user: any) => {
    if (user) {
        const decryptedUser = aes.decrypt(user, ENCRYPTION_KEY);
        return JSON.parse(decryptedUser.toString(enc));
    } else {
        return "";
    }
};
 

export const getUserId = () => {
    const { userId } = decrypt_user0bj(storage.get(userKey));
    return userId;
};
//logout functionality
export const handleLogout = () => {
    storage.logout();
    // window.location.reload();
    // const navigate = useNavigate();
    window.location.href = Routes.PlaceOrder;
    // navigate(Routes.PlaceOrder);
};

export const decryptedToken = (token: string) => {
    const iv = randomBytes(16);
    const Securitykey = randomBytes(32);
    const algorithm = "aes-256-ctr";

    const decipher = createDecipheriv(algorithm, Securitykey, iv);
    let decryptedData: any = decipher.update(token, "hex", "utf8");
    decryptedData += decipher.final("utf8");
    const newDecryptedValue: any = JSON.parse(decryptedData);
    return newDecryptedValue;
};
