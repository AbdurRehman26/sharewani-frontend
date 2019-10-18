export default {
    setUser(state, payload) {
    	localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload
    },
    setToken(state, payload) {
    	console.log(JSON.stringify(payload));
    	localStorage.setItem('token', JSON.stringify(payload));
        state.token = payload
    },
}
