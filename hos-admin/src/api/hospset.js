import request from '@/utils/request'


const API = "/admin/hosp/hospitalSet"
//es6导入语法
export default{
    //分页
    getHospsetPage(pageNum,size,searchObj) {
        return request({
          url: `${API}/page/${pageNum}/${size}`,
          method: 'post',
          //如果携带的是普通参数:params,如果携带的json数据:data
          data:searchObj
        })
      },
      //删除
      removeById(id){
        return request({
          url:`${API}/${id}`,
          method:'delete'
        })
      },
      //新增
      save(hospset){
        return request({
          url:`${API}/save`,
          method:'post',
          data:hospset
        })
      },
      //修改之回显数据
      detail(id){
        return request({
          url:`${API}/detail/${id}`,
          method:'get'
        })
      },
      //修改之修改数据
      update(hospset){
        return request({
          url:`${API}/update`,
          method:'put',
          data:hospset
        })
      },
      //批量删除
      delete(ids){
        return request({
          url:`${API}/delete`,
          method:'delete',
          data:ids
        })
      },
      //锁定与解锁
      status(id,status){
        return request({
          url:`${API}/status/${id}/${status}`,
          method:'post'
        })
      }

}