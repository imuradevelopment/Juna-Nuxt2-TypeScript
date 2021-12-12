<template>
  <div>
    <template v-for="(item, index) in items">
      <div v-if="item.type === 'divider'" :key="`divider${index}`" class="block md:inline" />
      <tiptap-menu-item v-else :key="index" v-bind="item" />
    </template>
    <input-image-dialog :editor="editor" :modalStatusProps="showModal" @closeModal="changeModalStatus"/>
  </div>
</template>

<script>
import TiptapMenuItem from './TiptapMenuItem.vue'
import InputImageDialog from './InputImageDialog.vue'

export default {
    components: {
        TiptapMenuItem,
        InputImageDialog,
    },

    props: {
        editor: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            showModal: false,
            URL: '',
            items: [
                {
                    icon: 'h-2',
                    title: 'Heading 2',
                    keyboardShortcut: 'ctrl + 2',
                    action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
                    isActive: () => this.editor.isActive('heading', { level: 2 }),
                },
                {
                    icon: 'h-3',
                    title: 'Heading 3',
                    keyboardShortcut: 'ctrl + 3',
                    action: () => this.editor.chain().focus().toggleHeading({ level: 3 }).run(),
                    isActive: () => this.editor.isActive('heading', { level: 3 }),
                },
                {
                    icon: 'bold',
                    title: 'Bold',
                    keyboardShortcut: 'ctrl + B',
                    action: () => this.editor.chain().focus().toggleBold().run(),
                    isActive: () => this.editor.isActive('bold'),
                },
                {
                    icon: 'mark-pen-line',
                    title: 'Highlight',
                    keyboardShortcut: 'ctrl + H',
                    action: () => this.editor.chain().focus().toggleHighlight().run(),
                    isActive: () => this.editor.isActive('highlight'),
                },
                {
                    icon: 'list-unordered',
                    title: 'Bullet List',
                    keyboardShortcut: 'ctrl + L',
                    action: () => this.editor.chain().focus().toggleBulletList().run(),
                    isActive: () => this.editor.isActive('bulletList'),
                },
                {
                    icon: 'text-wrap',
                    title: 'Hard Break',
                    keyboardShortcut: 'Shift + Enter',
                    action: () => this.editor.chain().focus().setHardBreak().run(),
                },
                // {
                //     type: 'divider',
                // },
                {
                    icon: 'double-quotes-l',
                    title: 'Blockquote',
                    keyboardShortcut: 'ctrl + Q',
                    action: () => this.editor.chain().focus().toggleBlockquote().run(),
                    isActive: () => this.editor.isActive('blockquote'),
                },
                {
                    icon: 'code-box-line',
                    title: 'Code Block',
                    keyboardShortcut: 'ctrl + M',
                    action: () => this.editor.chain().focus().toggleCodeBlock().run(),
                    isActive: () => this.editor.isActive('codeBlock'),
                },
                {
                    icon: 'image-line',
                    title: 'Image',
                    keyboardShortcut: 'ctrl + I',
                    action:() => {
                        // 一応動作
                        // const url = window.prompt(
                        //     'Image URL',
                        //     // Using picsum.photo/id/... and NOT
                        //     // picsum.photos/w/h or the image will
                        //     // change when we change the size and
                        //     // tiptap redraws
                        //     `https://picsum.photos/id/${
                        //         Math.floor(Math.random() * 200) + 1
                        //     }/1920/1080`
                        // )

                        // if (url) {
                        //     this.editor.chain().focus().setImage({ src: url ,size:'large'}).run()
                        // }

                        // お試し
                        this.changeModalStatus()
                    },
                    isActive: () => this.editor.isActive('custom-image'),
                }
            ],
        }
    },
    methods:{
        changeModalStatus(){
            this.showModal = !this.showModal
            console.log(this.showModal)
        }
    }
}
</script>
