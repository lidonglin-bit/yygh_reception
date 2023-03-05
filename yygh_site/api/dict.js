import request from '@/utils/request'

const api_name = '/admin/cmn'

export default {
    getChildList(pid) {
        return request({
            url: `${api_name}/childList/${pid}`,
            method: 'get'
        })
    },

}