import { Auth } from '@nuxtjs/auth-next'

// import { NuxtAxiosInstance } from '@nuxtjs/axios'
// export default function ($auth:Auth) {
//     $auth.onError(
//         (error, name) => {
//             console.error(error, name)
//         }
//     )
// }

export default function ({ $auth }: { $auth: Auth }) {
    $auth.onError((error, name) => {
        console.error(error)
        console.error(name)
        $nuxt.$toast.global.defaultError({ msg: '認証エラー' })
    })
}
