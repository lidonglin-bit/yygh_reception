import request from '@/utils/request'

export default {
  //医院列表
  getPageList(pageNum,pageSize,searchObj) {
    return request ({
      url: `/admin/hosp/${pageNum}/${pageSize}`,
      method: 'get',
      params: searchObj  
    })
  },
  //查询dictCode查询下级数据字典
  getChildList(pid) {
    return request({
        url: `/admin/cmn/childList/${pid}`,
        method: 'get'
      })
    },
    //更新上线状态
    updateStatus(id,status){
        return request({
            url: `/admin/hosp/${id}/${status}`,
            method: 'put'
        })
    },
    //查看医院详情
    getHospById(id){
        return request({
            url: `/admin/hosp/detail/${id}`,
            method: 'get'
        })
    },
  
}