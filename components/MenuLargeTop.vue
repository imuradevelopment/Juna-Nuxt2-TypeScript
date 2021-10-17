<template>
  <div class="sticky top-0 z-50 bg-primaryColor dark:bg-primaryColor">
    <div class="mx-auto py-3 max-w-screen-xl px-8">
      <div class="relative flex items-center justify-center space-x-16">
        <ul class="items-center space-x-8 flex">
          <li
              v-for="(headerInfo, index) in headerLeftInfos"
              :key="index"
          >
            <NuxtLink
              class="font-semibold"
              :to="headerInfo.link"
              :class="(currentPath == headerInfo.link) ? 'text-secondaryColor dark:text-secondaryColor' : ''"
            >
              {{ headerInfo.name }}
            </NuxtLink>
          </li>
        </ul>
        <a
          href="/"
          class="inline-flex items-center"
        >
          <img class="h-10 w-10" src="~assets/image/svg_40_dark.svg" />
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >Company</span
          >
        </a>
        <ul class="items-center space-x-8 flex">
          <li
              v-for="(headerInfo, index) in headerRightInfos"
              :key="index"
          >
            <NuxtLink
              class="font-semibold"
              :to="headerInfo.link"
              :class="(currentPath == headerInfo.link) ? 'text-secondaryColor dark:text-secondaryColor' : ''"
            >
              {{ headerInfo.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from '@nuxtjs/composition-api'
import { defineComponent, computed } from '@vue/composition-api'

type HeaderInfo = {
  name:string,
  link:string,
  d1:string,
  d2:string
}

export default defineComponent({
    setup() {
        const headerLeftInfos:HeaderInfo[] = [
            { name : 'ホーム', link : '/', d1 : '', d2:'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' },
            { name : '人気', link : '/popular', d1 : '', d2:'M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z'},
        ]

        const headerRightInfos:HeaderInfo[] = [
            { name : '検索', link : '/search', d1 : 'M9 9a2 2 0 114 0 2 2 0 01-4 0z', d2:'M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z'},
            { name : '投稿', link : '/posts', d1 : 'M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z', d2:'M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'},
            { name : '設定', link : '/settings', d1 : '', d2: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'}
        ]

        const route = useRoute()
        const currentPath = computed(() => route.value.path)

        return {
            headerLeftInfos,
            headerRightInfos,
            currentPath
        }
    },
})
</script>
