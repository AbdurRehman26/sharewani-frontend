export default {
    user: (state) => JSON.parse(localStorage.getItem('user')),
    token: (state) => JSON.parse(localStorage.getItem('token')),
}
