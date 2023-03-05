import request from '@/utils/request'

const api_name = `/user/userinfo`

export default {
    login(userInfo) {
        return request({
            url: `${api_name}/login`,
            method: `post`,
            data: userInfo
        })
    },

    getUserInfo() {
        return request({
            url: `${api_name}/info`,
            method: `get`
        })
    },

    saveUserAuah(userAuah) {
        return request({
             url: `${api_name}/update`,
             method: 'put',
             data: userAuah
        })
    }
}