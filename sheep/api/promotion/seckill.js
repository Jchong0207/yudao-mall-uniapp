import request from "@/sheep/request";

const SeckillApi = {
	// 获得秒杀时间段列表
	getSeckillConfigList: () => {
		return request({
			url: '/app-api/promotion/seckill-config/list',
			method: 'GET'
		});
	},

	// 获得当前秒杀活动
	getNowSeckillActivity: () => {
		return request({
			url: '/app-api/promotion/seckill-activity/get-now',
			method: 'GET'
		});
	},

	// 获得秒杀活动分页
	getSeckillActivityPage: () => {
		return request({
			url: '/app-api/promotion/seckill-activity/page',
			method: 'GET'
		});
	},

	/**
	 * 获得秒杀活动明细
	 * @param {number} id 秒杀活动编号
	 * @return {*}
	 */
	getSeckillActivity: (id) => {
		return request({
			url: '/app-api/promotion/seckill-activity/get-detail',
			method: 'GET',
			params: {
				id
			}
		});
	}
}

export default SeckillApi;