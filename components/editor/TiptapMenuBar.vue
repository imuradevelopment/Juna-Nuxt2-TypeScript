<template>
  <div>
    <template v-for="(item, index) in items">
      <div v-if="item.type === 'divider'" :key="`divider${index}`" class="inline md:inline" />
      <tiptap-menu-item v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>

<script>
import TiptapMenuItem from './TiptapMenuItem.vue'

export default {
    components: {
        TiptapMenuItem,
    },

    props: {
        editor: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
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
                // {
                //     icon: 'italic',
                //     title: 'Italic',
                //     action: () => this.editor.chain().focus().toggleItalic().run(),
                //     isActive: () => this.editor.isActive('italic'),
                // },
                // {
                //     icon: 'strikethrough',
                //     title: 'Strike',
                //     action: () => this.editor.chain().focus().toggleStrike().run(),
                //     isActive: () => this.editor.isActive('strike'),
                // },
                // {
                //     icon: 'code-view',
                //     title: 'Code',
                //     action: () => this.editor.chain().focus().toggleCode().run(),
                //     isActive: () => this.editor.isActive('code'),
                // },
                {
                    icon: 'mark-pen-line',
                    title: 'Highlight',
                    keyboardShortcut: 'ctrl + H',
                    action: () => this.editor.chain().focus().toggleHighlight().run(),
                    isActive: () => this.editor.isActive('highlight'),
                },
                // {
                //     icon: 'paragraph',
                //     title: 'Paragraph',
                //     action: () => this.editor.chain().focus().setParagraph().run(),
                //     isActive: () => this.editor.isActive('paragraph'),
                // },
                {
                    icon: 'list-unordered',
                    title: 'Bullet List',
                    keyboardShortcut: 'ctrl + M',
                    action: () => this.editor.chain().focus().toggleBulletList().run(),
                    isActive: () => this.editor.isActive('bulletList'),
                },
                // {
                //     icon: 'list-ordered',
                //     title: 'Ordered List',
                //     keyboardShortcut: 'ctrl + Shift + 7',
                //     action: () => this.editor.chain().focus().toggleOrderedList().run(),
                //     isActive: () => this.editor.isActive('orderedList'),
                // },
                {
                    icon: 'format-clear',
                    title: 'Clear Format',
                    keyboardShortcut: '-',
                    action: () => this.editor.chain()
                        .focus()
                        .clearNodes()
                        .unsetAllMarks()
                        .run(),
                },
                // {
                //     icon: 'list-check-2',
                //     title: 'Task List',
                //     action: () => this.editor.chain().focus().toggleTaskList().run(),
                //     isActive: () => this.editor.isActive('taskList'),
                // },
                {
                    icon: 'text-wrap',
                    title: 'Hard Break',
                    keyboardShortcut: 'Shift + Enter',
                    action: () => this.editor.chain().focus().setHardBreak().run(),
                },
                {
                    type: 'divider',
                },
                {
                    icon: 'double-quotes-l',
                    title: 'Blockquote',
                    keyboardShortcut: 'ctrl + Shift + B',
                    action: () => this.editor.chain().focus().toggleBlockquote().run(),
                    isActive: () => this.editor.isActive('blockquote'),
                },
                {
                    icon: 'code-box-line',
                    title: 'Code Block',
                    keyboardShortcut: 'ctrl + Alt + C',
                    action: () => this.editor.chain().focus().toggleCodeBlock().run(),
                    isActive: () => this.editor.isActive('codeBlock'),
                },
                {
                    icon: 'separator',
                    title: 'Horizontal Rule',
                    keyboardShortcut: '-',
                    action: () => this.editor.chain().focus().setHorizontalRule().run(),
                },
                // {
                //     type: 'divider',
                // },
                // {
                //     icon: 'arrow-go-back-line',
                //     title: 'Undo',
                //     action: () => this.editor.chain().focus().undo().run(),
                // },
                // {
                //     icon: 'arrow-go-forward-line',
                //     title: 'Redo',
                //     action: () => this.editor.chain().focus().redo().run(),
                // },
            ],
        }
    },
}
</script>
