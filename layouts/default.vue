<template>
  <div class="custom_container">
    <menu-large-top class="hidden md:block" />
    <menu-mobile-top class="md:hidden"/>
    <nuxt class="container relative" />
    <menu-mobile-bottom class="md:hidden"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import MenuLargeTop from '~/components/MenuLargeTop.vue'
import MenuMobileBottom from '~/components/MenuMobileBottom.vue'
const tailwindConfig = require('~/tailwind.config')

export default defineComponent({
    components: { MenuLargeTop, MenuMobileBottom },
    setup() {
        const bpsm = ref(Number(tailwindConfig.theme.screens.sm.replace('px', '')))
        const bpmd = ref(Number(tailwindConfig.theme.screens.md.replace('px', '')))
        const bplg = ref(Number(tailwindConfig.theme.screens.lg.replace('px', '')))
        const bpxl = ref(Number(tailwindConfig.theme.screens.xl.replace('px', '')))
        const bp2xl = ref(Number(tailwindConfig.theme.screens['2xl'].replace('px', '')))

        return {
            bpsm,
            bpmd,
            bplg,
            bpxl,
            bp2xl
        }
    },
})
</script>


<style>
    .custom_container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>
