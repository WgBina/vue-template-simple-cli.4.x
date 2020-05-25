<template>
  <div class="login">
    <div v-if="!isForget" class="box-login absoluteCenter">

      <div class="box-img">IMG</div>

      <div class="box-input">

        <div class="inner-line">
          <div class="inner-input">
            <i class="el-icon-edit"/>
            <input type="text" name="search-input" class="no-outline" placeholder="请输入邮箱" />
          </div>
        </div>

        <div class="inner-line">
          <div class="inner-input">
            <i class="el-icon-edit"/>
            <input type="text" name="search-input" class="no-outline" placeholder="请输入密码"/>
          </div>
        </div>

        <div class="inner-line">
          <div class="inner-input">
            <p class="forget-psd" @click="forgetPswHandle">忘记密码?</p>
          </div>
        </div>

      </div>

      <div class="box-btn">
        <div class="btn-login" @click="loginHandle">登录</div>
      </div>
    </div>

    <div v-else class="box-login absoluteCenter">
      <div class="btn-back" @click="backHandle"><i style="color:#303133" class="el-icon-arrow-left"/>返回</div>
      <div class="box-img">IMG</div>

      <div class="box-input">

        <div class="inner-line">
          <div class="inner-input">
            <i class="el-icon-edit"/>
            <input type="text" name="search-input" class="no-outline" placeholder="请输入邮箱" />
          </div>
        </div>

        <div class="inner-line">
          <div class="inner-input" style="position:relative">
            <i class="el-icon-edit"/>
            <input v-model="phoneCode" type="text" name="search-input" class="no-outline" placeholder="请输入验证码"/>
            <div v-if="!time_start" class="get-phone-code" @click="GetSend()">发送验证码</div>
            <div v-else class="get-phone-code">{{ time }}</div>
          </div>
        </div>

        <div class="inner-line">
          <div class="inner-input">
            <i class="el-icon-edit"/>
            <input type="text" name="search-input" class="no-outline" placeholder="请输入新密码" />
          </div>
        </div>

      </div>
      <div class="box-btn">
        <div class="btn-login" @click="forgetPswHandle">提交</div>
      </div>
    </div>

  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',

  data() {
    return {

      isForget: false,

      // 验证码变量
      phone: '',
      phoneCode: '',
      time: 60,
      time_start: false
    }
  },

  methods: {
    /**
     * clickHandle
    */
    loginHandle() {
      setToken(['admin'])
      this.$router.push('/')
    },
    forgetPswHandle() {
      this.isForget = true
    },
    backHandle() {
      this.isForget = false
    },

    /**
     * 验证码
    */
    // 验证码倒计时
    downTime() {
      const time = setInterval(() => {
        this.time = this.time - 1
        if (this.time === 0) {
          clearInterval(time)
          this.time_start = false
          this.time = 60
        }
      }, 1000)
    },
    // 发送验证码
    GetSend() {
      const registerPhone = this.phone
      if (!(/^1[34578]\d{9}$/.test(registerPhone))) {
        this.$Message.error('请输入正确的手机号')
        console.log('请输入正确的手机号')
        return
      }

      this.validatePhone(registerPhone)
    }
    // 获取验证码
    // validatePhone(registerPhone) {
    //   API.validatePhone({ phone: registerPhone }).then(data => {
    //     console.log('验证码接口成功', data)
    //     if (data.code !== 0) {
    //       this.$Message.error('参数错误，或者网络错误，请重试')
    //     } else {
    //       this.time_start = true

    //       this.downTime()

    //       this.$Message.success('验证码获取成功，请查收')
    //     }
    //   }).catch(err => {
    //     console.log('验证码接口失败', err)
    //   })
    // }

  }
}
</script>

<style lang="scss" scoped>

</style>
