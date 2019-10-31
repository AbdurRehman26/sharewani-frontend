import request from '@/utils/request';
import Resource from '@/api/resource';

class GlobalSettingResource extends Resource {
    constructor() {
        super('global-setting');
    }

    getByKey(key) {
    return request({
      url: '/' + this.uri + '-key/' + key,
      method: 'get',
    });
  }
  
}

export { GlobalSettingResource as default };
