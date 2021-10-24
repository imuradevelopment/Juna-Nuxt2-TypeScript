export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'juna_nuxt',
        meta: [
            { charset: 'utf-8' },
            { lang: 'ja' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css/styles.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/api',
        '~/plugins/vuetailwind.ts'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs:[
            '~/components',
            '~/components/editor'
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/composition-api/module',
    ],
    generate: {
        // choose to suit your project
        interval: 2000,
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxtjs/auth-next',
        '@nuxtjs/toast'
    ],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true,
        // baseURL: 'http://127.0.0.1:8000/api',
    },
    proxy: {
        '/api3/': {
            target: 'http://127.0.0.1:8000',
            pathRewrite: {'^/api3/': '/api/'}
        },
    },
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'ja'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, { isClient }) {
            if (isClient) {
                // config.devtool = 'source-map';
                // config.devtool = 'inline-cheap-module-source-map';
                config.devtool = 'eval-source-map'
            }
        },
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
    },
    router: {
        middleware: ['auth']
    },
    auth: {
        localStorage: false,
        plugins: ['~plugins/auth.ts',],
        redirect: {
            login: '/login',
            logout: '/login',
            callback: false,
            home: '/',
        },
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'access',
                    global: true,
                    type: 'JWT',
                    // maxAge: 300,
                },
                refreshToken: {
                    property: 'refresh',
                    data: 'refresh',
                },
                user: {
                    property: false,
                    autoFetch: true,
                },
                endpoints: {
                    login: {
                        url: '/api3/v1/auth/jwt/create/',
                        method: 'post',
                    },
                    refresh: { url: '/api3/v1/auth/jwt/refresh/', method: 'post' },
                    user: {
                        url: '/api3/v1/users/me/',
                        method: 'get',
                    }
                },
            },
        },
    },
    toast: {
        position: 'top-center',
        iconPack: 'fontawesome',
        duration: 3000,
        register: [
            {
                name: 'defaultSuccess',
                message: (payload) =>
                    !payload.msg ? '操作は正常に行われました' : payload.msg,
                options: {
                    type: 'success',
                    icon: 'check',
                },
            },
            {
                name: 'defaultError',
                message: (payload) =>
                    !payload.msg ? '予期せぬエラー' : payload.msg,
                options: {
                    type: 'error',
                    icon: 'times',
                },
            },
        ],
        singleton: true,
        closeOnSwipe: true,
    },
    colorMode:{
        classSuffix: '',
    },
}
