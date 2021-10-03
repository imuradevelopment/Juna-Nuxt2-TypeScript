<template>
    <nav class="sticky top-0 z-50 headroom bg-primaryColor dark:bg-primaryColor"  :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll" >
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
                    <div class="title text-5xl font-black">JUNA</div>
                    <div class="title text-5xl font-extrabold">JUNA</div>
                    <div class="title text-5xl font-semibold">JUNA</div>
                    <div class="title text-5xl font-medium">JUNA</div>
                    <div class="title text-5xl font-normal">JUNA</div>
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
import { defineComponent, ref, onUnmounted, reactive } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const limitPosition = ref(500)
        const scrolled = ref(false)
        const lastPosition = ref(0)

        const handleScroll = reactive(() => {
            if (process.browser) {
                if (lastPosition.value < window.scrollY && limitPosition.value < window.scrollY) {
                    scrolled.value = true;
                    // up
                }
                if (lastPosition.value > window.scrollY) {
                    scrolled.value = false;
                    // down
                }
                lastPosition.value = window.scrollY;
                scrolled.value = window.scrollY > 16;
            }
        })

        if (process.browser) {
            window.addEventListener('scroll', handleScroll)
        }

        onUnmounted(
            () => {
                window.removeEventListener('scroll',handleScroll)
            }
        )
        return {
            limitPosition,
            scrolled,
            lastPosition,
            handleScroll
        }
    },
})
</script>

<style>
    .pc_header_item {
        @apply ml-4 px-3 py-2 text-gray-300 focus:text-white text-sm font-medium hover:bg-gray-700 rounded-md focus:outline-none;
    }

    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }
    .headroom--pinned {
        transform: translateY(0%);
    }
    .headroom--unpinned {
        transform: translateY(-100%);
    }
  .title{
         font-family: 'BlackArea';
       }
</style>
