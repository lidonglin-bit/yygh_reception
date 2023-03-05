import request from '@/utils/request'


export default{
    getScheduleRule(pageNum, pageSize, hoscode, depcode) {
        return request({
            url: `/admin/hosp/schedule/${pageNum}/${pageSize}/${hoscode}/${depcode}`,
            method: 'get'
        })
    },
    //查询排班详情
    getScheduleDetail(hoscode,depcode,workDate) {
        return request ({
            url: `/admin/hosp/schedule/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    },
}