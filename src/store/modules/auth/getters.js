export default {
	user: (state) => {
		return JSON.parse(localStorage.getItem('user'))
	},
	token: (state) => {
		return JSON.parse(localStorage.getItem('token'))
	},
}
