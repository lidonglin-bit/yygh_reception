import request from '@/utils/request'

const api_name = `/user/userinfo/patient`

export default {
    //就诊人列表
    findList() {
        return request({
            url: `${api_name}/all`,
            method: `get`
        })
    },
    //根据id查询就诊人信息
    getById(id) {
        return request({
            url: `${api_name}/detail/${id}`,
            method: 'get'
        })
},
    //添加就诊人信息
    save(patient) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: patient
        })
    },
    //修改就诊人信息
    updateById(patient) {
        return request({
            url: `${api_name}/update`,
            method: 'post',
            data: patient
        })
    },
    //删除就诊人信息
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        })
    }
}