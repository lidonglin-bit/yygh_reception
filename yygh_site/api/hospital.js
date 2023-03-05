import request from '@/utils/request'

const api_name = `/user/hosp/hospital`

export default {
    getHospitalList(searchObj) {
        return request({
            url: `${api_name}/list`,
            method: 'get',
            params:searchObj
        })
    },
    getByHosname(name) {
        return request({
            url: `${api_name}/${name}`,
            method: 'get'
        })
    },

    getHospitalDetail(hoscode) {
        return request({
            url: `${api_name}/detail/${hoscode}`,
            method: 'get'
        })
    },
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    },
}