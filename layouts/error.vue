<template>
  <div class="container">
    <h1 v-if="errorObj.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { NuxtError } from '@nuxt/types'

export default defineComponent({
    props: {
        error: {
            type: Object as () => NuxtError,
            required: true,
        }
    },
    setup(props) {
        const errorObj = reactive<NuxtError>(props.error)
        return {
            errorObj
        }
    },
})
</script>
