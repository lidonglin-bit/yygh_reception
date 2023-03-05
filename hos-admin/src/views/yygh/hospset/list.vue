<template>
    <div class="app-container">
      <el-form :inline="true" :model="searchObj" class="demo-form-inline">
        <el-form-item label="医院名称">
          <el-input v-model="searchObj.hosname" placeholder="医院名称"></el-input>
        </el-form-item>
        <el-form-item label="医院编号">
          <el-input v-model="searchObj.hoscode" placeholder="医院编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="empty">清空</el-button>
        </el-form-item>
      </el-form>
      
      <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="数据加载中"
          border
          fit
          highlight-current-row @selection-change="handleSelectionChange">

    <el-table-column
      type="selection"
      width="55">
    </el-table-column>

    <el-table-column
                     label="序号"
                     width="70"
                     align="center">
        <template slot-scope="scope">
            {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
    </el-table-column>

    <el-table-column prop="hosname" label="医院名称" width="180" />

    <el-table-column prop="hoscode" label="医院编号" width="160" />

    <el-table-column prop="apiUrl" label="地址" width="200"/>

    <el-table-column prop="contactsName" label="联系人"/>

    <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
            {{ scope.row.status===1?'可用':'不可用' }}
        </template>
    </el-table-column>

    <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
            <router-link :to="'/yygh/hospset/edit/'+scope.row.id">
                <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
            </router-link>
            <el-button type="danger" size="mini" icon="el- -delete" @click="removeDataById(scope.row.id)">删除</el-button>
            <el-button v-if="scope.row.status==1" type="primary" size="mini" 
                 icon="el-icon-delete" @click="lockHostSet(scope.row.id,0)">锁定</el-button>
            <el-button v-if="scope.row.status==0" type="danger" size="mini" 
                 icon="el-icon-delete" @click="lockHostSet(scope.row.id,1)">取消锁定</el-button>
        </template>
    </el-table-column>
</el-table>

    <el-button type="primary" @click="removeRows()">批量删除</el-button>

    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="limit"
      layout="total,  prev, pager, next, jumper"
      style="padding: 30px 0; text-align: center;"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import hospset from '@/api/hospset.js'
export default {
    data(){
      return{
        listLoading:false,  // 是否显示loading信息
        list:[],  // 数据列表
        page:1,  // 页码
        limit:3,  // 每页记录数
        searchObj:{},  // 查询条件
        total:0,  // 总记录数
        multipleSelection:[] // 批量选择中选择的记录列表
      }  
   },
    methods:{ // 调用api层获取数据库中的数据
     //锁定和取消锁定
     lockHostSet(id,status){
      hospset.status(id,status).then(res=>{
        this.getPageInfo()
      })
     },
      //批量删除
      removeRows(){
        this.$confirm('此操作将永久删除医院设置信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var ids = []
          for(var i = 0;i<this.multipleSelection.length;i++){
            var obj = this.multipleSelection[i]
            ids.push(obj.id)
          }
          hospset.delete(ids).then(res=>{
            console.log(ids)
            this.$message.success('批量删除成功')
          })
          this.getPageInfo()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 当表格复选框选项发生变化的时候触发
      handleSelectionChange(selection){
        this.multipleSelection = selection

      },
      
      //分页查询
      getPageInfo(val=1){
        this.page = val
        this.listLoading = true
        hospset.getHospsetPage(this.page,this.limit,this.searchObj).then(res=>{
          this.total = res.data.total
          this.list = res.data.rows
          this.listLoading = false
      })
      },
      //分页事件
      handleCurrentChange(val){
        this.getPageInfo(val)
      },
      //提交查询
      onSubmit(){
        this.getPageInfo()
      },
      //清空
      empty(){
        this.searchObj={},
        this.getPageInfo();
      },
      //删除
      removeDataById(id){
        this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          hospset.removeById(id).then(res=>{
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          const totalPage = Math.ceil((this.total - 1) / this.limit)
          this.page = this.page > totalPage ? totalPage : this.page
          this.page = this.page < 1 ? 1 : this.page
          this.handleCurrentChange(this.page)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    created(){  // 当页面加载时获取数据
      this.getPageInfo()
    }
}
</script>
