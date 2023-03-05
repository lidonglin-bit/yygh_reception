import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
 submitOrder(scheduleId, patientId) {
  return request({
    url: `${api_name}/${scheduleId}/${patientId}`,
    method: 'post'
  })
 },
 //订单列表
 getPageList(pageNum, pageSize, searchObj) {
    return request({
        url: `${api_name}/${pageNum}/${pageSize}`,
        method: `get`,
        params: searchObj
    })
},
//订单状态
 getStatusList() {
    return request({
         url: `${api_name}/list`,
         method: 'get'
    })
 },
 //订单详情
getOrders(orderId) {
    return request({
        url: `${api_name}/${orderId}`,
        method: `get`
    })
},
}