import Vue from 'vue';

const OrderStatuses = [
	'Pending',
	'Accepted',
];


Vue.filter('orderStatus', function (value) {
	return OrderStatuses[value] ? OrderStatuses[value] : 'Rejected';
});


