import store from '@/store';

export default {
  inserted(el, binding, vnode) {
    const user = store.getters && store.getters.user;
    
    if (user && user.length) {
      
      el.parentNode && el.parentNode.removeChild(el)
    
    }
  },
  update(el, binding, vnode) {
    const user = store.getters && store.getters.user;
    
    if (user && user.length) {

        el.parentNode && el.parentNode.removeChild(el)
      

    }
  },
};
