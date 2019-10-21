export default {
    setUser(state, payload) {
    	localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload
    },
    setToken(state, payload) {
    	localStorage.setItem('token', JSON.stringify(payload));
        state.token = payload
    },
}
