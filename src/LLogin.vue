<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;" class="btn">
      <el-button type="primary" style="width:46%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:46%;" @click.native.prevent="loogin" :loading="logining">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Cookies from "js-cookie";
  export default {
    name: 'Loogin',
    data() {
      return {
        logining: false,
        loginForm: {
          account: 'admin',
          password: '123456'
        },
        fieldRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      loogin() {
        let userInfo = {account:this.loginForm.account, password:this.loginForm.password}
        this.$axios.post(url,JSON.stringify(userInfo)).then((res) => {
            Cookies.set('token', res.data.token) // 放置token到Cookie
            sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
            this.$router.push('/home')  // 登录成功，跳转到主页
          }).catch(function(res) {
            alert(res);
          });
      },
      reset() {
        this.$refs.loginForm.resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .btn{
        padding-left: 5px;
    }
  }
</style>