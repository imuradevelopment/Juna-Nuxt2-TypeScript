<template>
    <div v-if="editor" class="custom_container">
        <tiptap-menu-bar class="sticky top-0 z-50 bg-primaryColor dark:bg-primaryColor" :editor="editor" />
        <editor-content class="editor__content relative" :editor="editor" />
        <tiptap-menu-bar class="sticky bottom-0 z-50 bg-primaryColor dark:bg-primaryColor" :editor="editor" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { Editor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-2'
import { Document } from '@tiptap/extension-document'
import { Placeholder } from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { Image } from '@tiptap/extension-image'
import { CustomHighLight } from './menuItem/CustomHighLight'
import { CustomListItem } from './menuItem/CustomListItem'
import { CustomBulletList } from './menuItem/CustomBulletList'
import { CustomHeading } from './menuItem/CustomHeading'
import { CustomBlockquote } from './menuItem/CustomBlockquote'
import { CustomCodeBlock } from './menuItem/CustomCodeBlock'
import CodeBlockComponent from './CodeBlockComponent.vue'
import TiptapMenuBar from './TiptapMenuBar.vue'

const CustomDocument = Document.extend({
    content: 'heading paragraph block*',
})

export default defineComponent({
    components: {
        EditorContent,
        TiptapMenuBar,
    },
    setup() {
        const editor = reactive(new Editor({
            content: '',
            extensions: [
                CustomDocument,
                StarterKit.configure({
                    blockquote:false,
                    bulletList:false,
                    codeBlock:false,
                    document: false,
                    heading:false,
                    horizontalRule:false,
                    listItem:false,
                    orderedList:false,
                    code:false,
                    italic:false,
                    strike:false,
                    dropcursor:false,
                    gapcursor:false,
                    bold:{
                        HTMLAttributes: {
                            class: 'font-black',
                        },
                    },
                    paragraph:{
                        HTMLAttributes:{
                            class:'my-4'
                        },
                    },
                }),
                Image,
                CustomHeading,
                CustomBulletList,
                CustomListItem,
                CustomCodeBlock.extend({
                    addNodeView() {
                        // @ts-ignore
                        return VueNodeViewRenderer(CodeBlockComponent)
                    }
                }),
                CustomHighLight,
                CustomBlockquote,
                Placeholder.configure({
                    placeholder: ({ node }:any) => {
                        if (node.type.name === 'heading') {
                            return '記事タイトル'
                        }
                        return '執筆を始める。'
                    },
                    emptyEditorClass: 'is-editor-empty',
                    showOnlyWhenEditable: false,
                    emptyNodeClass: 'is-empty',
                    showOnlyCurrent: false
                }),
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

.ProseMirror h1.is-empty:nth-child(1)::before  {
    content: attr(data-placeholder);
    float: left;
    pointer-events: none;
    height: 0;
    @apply text-gray-300 dark:text-gray-600;

    /* color: #ced4da; */
}

.ProseMirror > p.is-empty:nth-child(2)::before {
    content: attr(data-placeholder);
    float: left;
    pointer-events: none;
    height: 0;
    @apply text-gray-300 dark:text-gray-600;

    /* color: #ced4da; */
}
</style>
