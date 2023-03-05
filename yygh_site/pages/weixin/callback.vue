<template>
    <!-- header -->
    <div>
    </div>
    <!-- footer -->
  </template>
  
  <script>
  export default {
    layout: "empty",
    data() {
      return {
      }
    },
    mounted() {
      //params获取/:id的参数
      let token = this.$route.query.token  //query获取？后的参数https://e/md?Id=91975
      let name = this.$route.query.name
      let openid = this.$route.query.openid
      // 调用父vue方法
      window.parent['loginCallback'](name, token, openid)
    }
  }
  </script>