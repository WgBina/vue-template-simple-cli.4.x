<template>
    <div class="login">
        <div v-if="!isForget" class="box-login absoluteCenter">
            <div class="box-img">IMG</div>

            <div class="box-input">
                <div class="inner-line">
                    <div class="inner-input">
                        <i class="el-icon-edit" />
                        <input type="text" name="search-input" class="no-outline" placeholder="请输入邮箱" />
                    </div>
                </div>

                <div class="inner-line">
                    <div class="inner-input">
                        <i class="el-icon-edit" />
                        <input type="text" name="search-input" class="no-outline" placeholder="请输入密码" />
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
            <div class="btn-back" @click="backHandle"><i style="color:#303133" class="el-icon-arrow-left" />返回</div>
            <div class="box-img">IMG</div>

            <div class="box-input">
                <div class="inner-line">
                    <div class="inner-input">
                        <i class="el-icon-edit" />
                        <input type="text" name="search-input" class="no-outline" placeholder="请输入邮箱" />
                    </div>
                </div>

                <div class="inner-line">
                    <div class="inner-input" style="position:relative">
                        <i class="el-icon-edit" />
                        <input v-model="phoneCode" type="text" name="search-input" class="no-outline" placeholder="请输入验证码" />
                        <div v-if="!time_start" class="get-phone-code" @click="GetSend()">发送验证码</div>
                        <div v-else class="get-phone-code">{{ time }}</div>
                    </div>
                </div>

                <div class="inner-line">
                    <div class="inner-input">
                        <i class="el-icon-edit" />
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
import { setToken } from '@/utils/auth';
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
        };
    },

    methods: {
        /**
         * clickHandle
         */
        loginHandle() {
            setToken(['admin']);
            this.$router.push('/');
        },
        forgetPswHandle() {
            this.isForget = true;
        },
        backHandle() {
            this.isForget = false;
        },
        async getBasicInfo() {
            const { success, code } = await this.$HTTP.check({ code:'0000000000' });
            console.log(success, code);
        }
    },

    mounted() {
        this.getBasicInfo();
    }
};
</script>

<style lang="scss" scoped></style>
