<template>
    <form @submit.prevent="userLogin">
        <t-input-group label="ユーザーID" feedback="@から始まる登録時のID">
        <t-input v-model="loginData.user_id" type="text"/>
        </t-input-group>
        <t-input-group label="パスワード" feedback="パスワード">
        <t-input v-model="loginData.password" type="password"/>
        </t-input-group>
        <t-button type="submit">送信</t-button>
    </form>
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const loginData = reactive({
            user_id:'admin',
            password:'password',
        })
        const { $toast } = useContext()
        const { $auth } = useContext()
        const userLogin = async () => {
            try {
                await $auth.loginWith(
                    'local',
                    { data: loginData, }
                )
                $toast.global.defaultSuccess({
                    msg: 'ようこそ、' + loginData.user_id + 'さん',
                })
            } catch (e) {
                // プラグインでデフォルトエラー出力記述
            }
        }
        return {
            loginData,
            userLogin
        }
    },
})
</script>

<style scoped>
.test {
    height:100vh;
}
</style>
