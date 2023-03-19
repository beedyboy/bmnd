import { loginKey, userKey } from "utils"; 

function setItem(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

function getItem(key: string) {
  const val = window.localStorage.getItem(key);
  if (val !== null && val.length > 0) {
    return val;
  }
  return null;
}

function removeItem(key: string) {
  window.localStorage.removeItem(key);
}

function clearStorage() {
  window.localStorage.clear();
}

function logout() {
  removeItem(loginKey);
  removeItem(userKey);
}




// eslint-disable-next-line
export default {
  set: setItem,
  remove: removeItem,
  get: getItem,
  clear: clearStorage,
  logout
};
