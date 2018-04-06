import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(getBaseUrl() + url).then(onSuccess, onError);
}

function onSuccess(res) {
    return res.json();
}

function onError(error) {
    console.error(error); // eslint-disable-line no-console
}
