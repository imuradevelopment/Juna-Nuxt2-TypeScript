<template>
  <button
    class="w-7 h-7 text-white p-1"
    :class="{ 'bg-primaryDarkColor': isActive ? isActive(): null }"
    :title="title"
    @click="action"
  >
    <svg
        class="remix w-full h-full"
        fill="currentColor"
    >
      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
    </svg>
  </button>
</template>

<script>
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        action: {
            type: Function,
            required: true,
        },

        isActive: {
            type: Function,
            default: null,
        },
    },

    data() {
        return {
            remixiconUrl,
        }
    },
}
</script>
