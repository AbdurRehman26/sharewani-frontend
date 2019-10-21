import { login } from '@/api/auth';

export default {
    async login({ commit, dispatch }, payLoad) {
     
         try {

        /*
         *  get results doc of the session using
         *  organization, team and session id from payLoad ( params )
         */
         const response = await login(payLoad)

         commit('setUser', response.data.user);
         commit('setToken', response.data.token);

         } catch (error) {
        
            console.log('error', error)
        
        }
    },

}