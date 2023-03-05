import request from '@/utils/request'

const api_name = `/user/hosp/schedule`

export default {
    getSchedulePage(hoscode,depcode,pageNum,pageSize) {
        return request({
            url: `${api_name}/${hoscode}/${depcode}/${pageNum}/${pageSize}`,
            method: `get`
        })
    },
    getScheduleDetail(hoscode,depcode,workdate) {
        return request({
            url: `${api_name}/${hoscode}/${depcode}/${workdate}`,
            method: `get`
        })
    },
    getSchedule(id) {
        return request({
            url: `${api_name}/getSchedule/${id}`,
            method: 'get'
        })
    }
}