import { action, computed, makeObservable, observable } from 'mobx';
import storage from '../../utils/storage'; 
import { RootStore } from '..';
import { loginKey, userKey } from 'utils';
import { decrypt_key, decrypt_user0bj } from 'utils/auth-util';
// import { resetPassword, SignIn, signUp as register } from '../../requests/auth';

interface ISignupRes {
  status: boolean;
  message: string;
  isAdmin?: boolean;
}

export class AuthStore { 
  isLoading = {
    signUp: false,
    login: false,
    resetPassword: false
  };

  isAuthenticated = !!this.token;
  loading = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      isLoading: observable,
      isAuthenticated: observable,
      loading: observable,

      // login: action.bound,
      // signUp: action.bound,
      isAdmin: action.bound,

      token: computed,
      user: computed
    });
    this.rootStore = rootStore;
  }

  // async signUp(data: ISignUpRequest): Promise<ISignupRes> {
  //   this.isLoading.signUp = true;

  //   try {
  //     const response = await register(data);
  //     if (response.status) {
  //       storage.set(loginKey, encrypt_key(response.data.token));
  //       storage.set(userKey, encrypt_userobj(response.data));
  //       this.isAuthenticated = true;
  //       return {
  //         status: true,
  //         message: response.message
  //       };
  //     }
  //     return {
  //       status: false,
  //       message: response.message
  //     };
  //   } catch (error: any) {
  //     return {
  //       status: false,
  //       message: error.response.data.message
  //     };
  //   } finally {
  //     this.isLoading.signUp = false;
  //   }
  // }

  // async resetPassword(payload: IForgotPasswordRequest) {
  //   this.isLoading.resetPassword = true;
  //   try {
  //     const response = await resetPassword(payload);
  //     if (response.status) {
  //       return {
  //         status: true,
  //         message: response.message
  //       };
  //     }
  //     return {
  //       status: false,
  //       message: response.message
  //     };
  //   } catch (error: any) {
  //     return {
  //       status: false,
  //       message: error.response.data.message
  //     };
  //   } finally {
  //     this.isLoading.resetPassword = false;
  //   }
  // }

  // async login(data: ILoginRequest): Promise<ISignupRes> {
  //   this.isLoading.login = true;
  //   try {
  //     const response = await SignIn(data);

  //     if (response.status) {
  //       storage.set(userKey, encrypt_userobj(response.data));
  //       storage.set(loginKey, encrypt_key(response.data.token));
  //       this.isAuthenticated = true;
        
  //       return {
  //         status: true,
  //         message: response.message,
  //         isAdmin: this.isAdmin(response.data.role)
  //       };
  //     } else {
  //       return {
  //         status: false,
  //         message: response.message
  //       };
  //     }
  //   } catch (error: any) {
  //     return {
  //       status: false,
  //       message: error.response.data.message
  //     };
  //   } finally {
  //     this.isLoading.login = false;
  //   }
  // }
 

  isAdmin(role: string) {
    const roles = ['VIEWER', 'SUPERADMIN', 'ADMIN'];
    return roles.includes(role);
  }

  get token() {
    const key = storage.get(loginKey);
    if (key) {
      return decrypt_key(key);
    } else {
      return null;
    }
  }

  get user() {
    const key = storage.get(userKey);
    if (key) {
      return decrypt_user0bj(key);
    } else {
      return null;
    }
  }
  set addFormData(data: any) {
    storage.set('formData', JSON.stringify(data));
  }
  updateFormData(data: any) {
    // update data from storage
    const formData = JSON.parse(storage.get('formData') || '{}');
    const newData = { ...formData, ...data };
    this.addFormData(newData);
  }
}
