<template>
    <div v-if="editor" class="custom_container">
        <tiptap-menu-bar class="sticky top-0 z-50 bg-primaryColor dark:bg-primaryColor" :editor="editor" />
        <editor-content class="editor__content relative" :editor="editor" />
        <tiptap-menu-bar class="sticky bottom-0 z-50 bg-primaryColor dark:bg-primaryColor" :editor="editor" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import { CustomHighLight } from './menuItem/CustomHighLight'
import { CustomBulletList } from './menuItem/CustomBulletList'
import { CustomHeading } from './menuItem/CustomHeading'
import TiptapMenuBar from './TiptapMenuBar.vue'

export default defineComponent({
    components: {
        EditorContent,
        TiptapMenuBar,
    },
    setup() {
        const editor = reactive(new Editor({
            content: '',
            extensions: [
                StarterKit.configure({
                    bold:{
                        HTMLAttributes: {
                            class: 'font-black',
                        },
                    },
                    italic:false,
                    orderedList:false,
                    paragraph:{
                        HTMLAttributes:{
                            class:'my-4'
                        },
                    },
                }),
                CustomHeading,
                CustomBulletList,
                CustomHighLight,
            ],
        }))

        return{
            editor
        }
    },
})
</script>

<style>
    .editor__content > *:focus:not(.focus-visible) {
        outline: none;
    }
    .custom_container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>
