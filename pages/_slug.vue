<template>
  <nuxt-content :document="article" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'


export default Vue.extend({
    data(){
        return {
            article: {
                async asyncData({ $content, params }: Context) {
                    const article = await $content(params.slug || 'hello').fetch()
                    return { article }
                }
            }
        }
    }

// export default {
// }
})
</script>
