import request from '@/utils/request';
import Resource from '@/api/resource';

class UserResource extends Resource {
    constructor() {
        super('product');
    }
}

export { UserResource as default };
