<template>
    <nav class="bg-gray-800">
        <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <!-- ヘッダーロゴ -->
                    <div class="flex-shrink-0">
                        <img
                            class="w-8 h-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                            alt="Workflow logo"
                        />
                    </div>
                    <!-- /ヘッダーロゴ -->
                    <!-- PC:ヘッダーアイテム -->
                    <!-- <div class="hidden md:block">
                        <div class="flex items-baseline ml-10">
                            <div
                                v-for="headerItem in headerItems"
                                :key="headerItem.headerName"
                            >
                                <NuxtLink
                                    v-if="headerItem.activate"
                                    :class="
                                        headerItem.linkValue == $route.path
                                            ? 'bg-gray-900 text-white'
                                            : ''
                                    "
                                    class="pc_header_item"
                                    :to="headerItem.linkValue"
                                    >{{ headerItem.headerName }}</NuxtLink
                                >
                            </div>
                        </div>
                    </div> -->
                    <!-- /PC:ヘッダーアイテム -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

// const anonymousUsername: string = 'ゲスト'

export default Vue.extend({
    // data() {
    //     return {
    //         isOpen: false,
    //     }
    // },
    // computed: {
    //     loggedIn(): boolean {
    //         return this.$auth.loggedIn
    //     },
    //     username(): string {
    //         return this.$auth.user == null ||
    //             typeof this.$auth.user.username !== 'string'
    //             ? anonymousUsername
    //             : this.$auth.user.username
    //     },
    //     headerItems(): Array<{
    //         headerName: string
    //         linkValue: string
    //         activate: boolean
    //     }> {
    //         return [
    //             { headerName: 'ホーム', linkValue: '/home', activate: true },
    //             { headerName: '人気', linkValue: '/popular', activate: true },
    //             { headerName: '検索', linkValue: '/search', activate: true },
    //             { headerName: '投稿', linkValue: '/post', activate: this.loggedIn },
    //             { headerName: '投稿', linkValue: '/login', activate: !this.loggedIn },
    //             {
    //                 headerName: '設定',
    //                 linkValue: '/setting',
    //                 activate: this.loggedIn,
    //             },
    //         ]
    //     },
    // },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.pc_header_item {
    @apply ml-4 px-3 py-2 text-gray-300 focus:text-white text-sm font-medium hover:bg-gray-700 rounded-md focus:outline-none;
}
</style>
