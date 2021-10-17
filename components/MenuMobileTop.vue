<template>
    <header class="sticky top-0 z-50 headroom bg-primaryColor dark:bg-primaryColor body-font"  :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll()">
    <div class="container mx-auto flex flex-wrap px-2 py-2 flex-row items-center">
        <nav class="flex w-2/5 flex-wrap items-center text-base">
            <a class="mr-5 hover:text-gray-900">First Link</a>
        </nav>
        <a class="flex order-none w-1/5 title-font font-medium text-gray-900 items-center justify-center mb-0">
            <img class="h-10 w-10" src="~assets/image/svg_40_dark.svg" />
        </a>
        <div class="w-2/5 inline-flex justify-end ml-0 text-xs">
        使い方
        </div>
    </div>
    </header>
    <!-- <nav class="sticky top-0 z-50 headroom bg-primaryColor dark:bg-primaryColor"  :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll()" >
        <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10" src="~assets/image/svg_40_dark.svg" />
                    </div>
                    <div class="title text-5xl font-medium">JUNA</div>
                    <div class="title text-5xl font-normal">JUNA</div>
                </div>
            </div>
        </div>
    </nav> -->
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const limitPosition = ref(0)
        const scrolled = ref(false)
        const lastPosition = ref(0)

        const handleScroll = () => {
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
                // scrolled.value = window.scrollY > 16;
            }
        }

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
