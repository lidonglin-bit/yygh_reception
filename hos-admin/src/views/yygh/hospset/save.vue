<template>
    <div class="app-container">
      <el-form label-width="120px" :rules="rules" :model="hospset" ref="ruleForm">
      <el-form-item label="医院名称" prop="hosname">
        <el-input v-model="hospset.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号" prop="hoscode">
        <el-input v-model="hospset.hoscode"/>
      </el-form-item>
      <el-form-item label="api地址" prop="apiUrl">
        <el-input v-model="hospset.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人" prop="contactsName">
        <el-input v-model="hospset.contactsName"/>
      </el-form-item>
      <el-form-item label="电话" prop="contactsPhone">
        <el-input v-model="hospset.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
    </div>
  </template>
<script>
import hospset from '@/api/hospset';
export default{
  data(){
    return{
      hospset:{},
      saveBtnDisabled:false, //保存按钮是否禁用
      rules: {  //校验
          hosname: [
            { required: true, message: '请输入医院名称', trigger: 'blur' },
          ],
          hoscode: [
            { required: true, message: '请输入医院编号', trigger: 'blur' }
          ],
          apiUrl: [
          { required: true, message: '请输入医院url', trigger: 'blur' }
          ],
          contactsName: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
          ],
          contactsPhone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
      saveOrUpdate(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveBtnDisabled=true
            if(!this.hospset.id){
              //添加操作
              hospset.save(this.hospset).then(res=>{
                this.$message.success('添加成功')
                //路由跳转
                this.$router.push({path:'/yygh/hospset/list'})
            })
            }else{
              //修改操作
              hospset.update(this.hospset).then(res=>{
                this.$message.success('修改成功')
                //路由跳转
                this.$router.push({path:'/yygh/hospset/list'})
              })
            }
          } else {
            this.$message.error('表单填写有误')
            return false;
          }
        });
      }
    },
    created(){
      if(this.$route.params && this.$route.params.id){  //this.$route.params.id是对应path: 'edit/:id'
        var id = this.$route.params.id  
        hospset.detail(id).then(res=>{
          this.hospset = res.data.items
        })
      }
    }


    }
</script>
