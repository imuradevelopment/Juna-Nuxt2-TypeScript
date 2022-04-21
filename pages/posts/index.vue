<template>
    <div>
        <client-only>
            <tip-tap-editor-vue-2 />
        </client-only>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    layout:'ignore',
    auth: false,
})
</script>
