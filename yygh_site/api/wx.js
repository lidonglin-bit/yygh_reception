import request from '@/utils/request'

const api_name = `/user/ucenter/wx`

export default {
  getLoginParam() {
    return request({
      url: `${api_name}/param`,
      method: `get`
    })
  },
  createNative(orderId) {
    return request({
      url: `/api/order/weixin/${orderId}`,
      method: `get`
    })
  },
  queryPayStatus(orderId) {
    return request({
        url: `/api/order/weixin/status/${orderId}`,
        method: 'get'
    })
},
cancelOrder(orderId) {
  return request({
      url: `/api/order/orderInfo/cancel/${orderId}`,
      method: 'get'
  })
},
}