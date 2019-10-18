import store from '@/store/index';

export function getToken() {
     return !!store.getters.token ? store.getters.token : null;
}

export function removeToken() {
     return ''//Cookies.remove(TokenKey);
}
