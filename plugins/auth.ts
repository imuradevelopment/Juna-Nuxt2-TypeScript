import { Auth } from '@nuxtjs/auth-next'

export default function ({ $auth }: { $auth: Auth }) {
    $auth.onError((error, name) => {
        console.error(error)
        console.error(name)
        $nuxt.$toast.global.defaultError({ msg: '認証エラー' })
    })
}
