<template>
  <button
    class="w-7 h-7 md:w-16 md:h-14 text-white p-1"
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
    <div class="text-xs">{{ keyboardShortcut }}</div>
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
