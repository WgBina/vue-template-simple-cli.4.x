const TokenKey = 'creativeX_roleId';
const NameKey = 'creativeX_name';

export function getToken() {
    return localStorage.getItem(TokenKey);
}

export function setToken(token) {
    return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
    return localStorage.removeItem(TokenKey);
}

export function getName() {
    return localStorage.getItem(NameKey);
}

export function setName(name) {
    return localStorage.setItem(NameKey, name);
}
export function removeName() {
    return localStorage.removeItem(NameKey);
}
