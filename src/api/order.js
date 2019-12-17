import request from '@/utils/request';
import Resource from '@/api/resource';

class OrderResource extends Resource {
    constructor() {
        super('order');
    }

  	validateOrderDate(query) {
    return request({
      url: '/' + this.uri + '/validate-order-date?selected_date='+query.selected_date+'&period='+query.period.key+'&product_id='+query.product_id,
      method: 'get',
    });
  }
  	calculateRent(query) {
    return request({
      url: '/' + this.uri + '/calculate-rent?selected_date='+query.selected_date+'&period='+query.period.key+'&product_id='+query.product_id,
      method: 'get',
    });
  }


}

export { OrderResource as default };
