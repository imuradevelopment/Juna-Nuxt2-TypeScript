<template>
    <div>
        <div v-if="editor" >
            <tiptap-menu-bar class="editor__header bg-primaryColor dark:bg-primaryColor" :editor="editor" />
            <editor-content class="editor__content" :editor="editor" />
        </div>
    </div>
</template>

<script lang="ts">
import { mergeAttributes } from '@tiptap/core'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import BaseHeading from '@tiptap/extension-heading'
import HighLight from '@tiptap/extension-highlight'
import TiptapMenuBar from './TiptapMenuBar.vue'


type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
}

export const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
    renderHTML({ node, HTMLAttributes }) {
        const hasLevel = this.options.levels.includes(node.attrs.level)
        const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

        return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                class: `${classes[level]}`,
            }),
            0,
        ]
    },
})

export default {
    components: {
        EditorContent,
        TiptapMenuBar,
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: '',
            extensions: [
                StarterKit.configure({
                    bold:{
                        HTMLAttributes: {
                            class: 'font-black',
                        }
                    },
                    italic:false,
                    heading:{
                        levels:[1, 2, 3]
                    },
                    bulletList:{
                        HTMLAttributes:{
                            class:'pl-5 list-disc'
                        }
                    },
                    orderedList:{
                        HTMLAttributes:{
                            class:'pl-5 list-decimal'
                        }
                    },
                    paragraph:{
                        HTMLAttributes:{
                            class:''
                        },
                    },
                }),
                HighLight.configure({
                    HTMLAttributes:{
                        class: 'bg-secondaryColor dark:bg-secondaryDarkColor'
                    }
                }),
                Heading,
            ],
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>
