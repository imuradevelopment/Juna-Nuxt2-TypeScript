<template>
  <button
    class="w-9 h-9 md:w-auto md:h-14 text-white p-1 md:py-1 md:px-3"
    :class="{ 'bg-primaryDarkColor': isActive ? isActive(): null }"
    :title="title"
    @click="action"
  >
    <svg
        class="w-full h-full md:mx-auto md:w-8 md:h-8"
        fill="currentColor"
    >
      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
    </svg>
    <div class="hidden md:block text-xs">{{ keyboardShortcut }}</div>
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

        keyboardShortcut:{
            type:String,
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
