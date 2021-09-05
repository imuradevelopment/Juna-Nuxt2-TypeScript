<template>
    <div>
        <form @submit.prevent="userLogin">
            <div>
                <label>Username</label>
                <input v-model="login.user_id" type="text" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="login.password" type="text" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            login: {
                user_id: '',
                password: '',
            },
        };
    },
    methods: {
        async userLogin() {
            try {
                // debugger
                await this.$auth.loginWith('local', {
                    data: this.login,
                });
                this.$toasted.global.defaultSuccess({
                    msg: 'ユーザーの認証に成功',
                });
            } catch (err) {
                console.log(err);
                this.$toasted.global.defaultError({
                    msg: 'ユーザー名またはパスワードが無効です。',
                });
            }
        },
    },
});
</script>
