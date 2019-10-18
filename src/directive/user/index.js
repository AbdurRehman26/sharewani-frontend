import user from './user';

const install = function(Vue) {
  Vue.directive('user', user);
};

if (window.Vue) {
  window['user'] = user;
  Vue.use(install); // eslint-disable-line
}

user.install = install;
export default user;
