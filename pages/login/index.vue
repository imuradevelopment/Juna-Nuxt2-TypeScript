<template>
    <div>
        <form @submit.prevent="userLogin">
            <div>
              <t-input-group label="ユーザーID" feedback="@から始まる登録時のID">
                <t-input v-model="loginData.user_id" type="text"/>
              </t-input-group>
            </div>
            <div>
              <t-input-group label="パスワード" feedback="パスワード">
                <t-input v-model="loginData.password" type="password"/>
              </t-input-group>
            </div>
            <div>
              <t-button type="submit">送信</t-button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'

// export default Vue.extend({
//     data() {
//         return {
//             login: {
//                 user_id: '',
//                 password: '',
//             },
//         }
//     },
//     methods: {
//         async userLogin() {
//             try {
//                 // debugger
//                 await this.$auth.loginWith('local', {
//                     data: this.login,
//                 })
//                 this.$toasted.global.defaultSuccess({
//                     msg: 'ユーザーの認証に成功',
//                 })
//             } catch (err) {
//                 console.log(err)
//                 this.$toasted.global.defaultError({
//                     msg: 'ユーザー名またはパスワードが無効です。',
//                 })
//             }
//         },
//     },
// })

import { useContext } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const loginData = {
            user_id:'admin',
            password:'password',
        }
        const { $toast } = useContext()
        const { $auth } = useContext()
        // const { $axios } = useContext()
        const userLogin = async () => {
            // try {
            //     await $auth.loginWith('local', {
            //         data: loginData,
            //     }).catch(err => {$toast.global.defaultError(err)})
            //     $toast.global.defaultSuccess({
            //         msg: 'ユーザーの認証に成功',
            //     })
            // } catch (err) {
            //   console.log(err)
            //     $toast.global.defaultError({
            //         msg: err,
            //     })
            // }
            await $auth.loginWith('local', {
                data: loginData,
            }).then(() => $toast.success('Logged In!'))
                .catch(err => {$toast.global.defaultError({msg: err.response.status})})
            // .catch(err => {$toast.global.defaultError({msg: err})})
            // .then($toast.global.defaultSuccess({msg: 'ユーザーの認証に成功',}))
        }
        return {
            loginData,
            userLogin
        }
    },
})
</script>
