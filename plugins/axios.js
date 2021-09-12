export default function (context) {
    const $router = context.app.router;
    const {$axios, $auth} = context;
    $axios.interceptors.response.use((response) => {
        console.log('token');
        console.log($nuxt.refresh);
        console.log('token');
        return response;
    }, async function (error) {
        if ($auth.loggedIn) {
            const originalRequest = error.config;
            if (
                error.response.status === 401 &&
        error.response.data.message === 'Token has expired' &&
        !originalRequest._retry
            ) {
                originalRequest._retry = true;
                // return await $axios.post('api/auth/refresh/').then(res => {
                return await $nuxt.$api.v1.auth.jwt.refresh.post($axios.refresh).then(res => {
                    console.log(res.data.access);
                    $auth.setUserToken(res.data.access);
                    $axios.setToken(res.data.access, 'JWT');
                    originalRequest.headers.Authorization = 'JWT ' + res.data.access;
                    return $axios.request(originalRequest);
                }).catch(err => {
                    // error handling
                    console.log('refresh');
                    console.log(err);
                    console.log('refresh');
                });
            }
        }
        if (error.response.status === 500 && (
            error.response.data.message === 'Token has expired and can no longer be refreshed' ||
      error.response.data.message === 'The token has been blacklisted'
        )) {
            await $router.push({name: 'admin-login'});
        }
        return Promise.reject(error);
    });
}
