import { Blockquote } from '@tiptap/extension-blockquote'

const CustomBlockquote = Blockquote
    .extend({
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-q': () => this.editor.commands.toggleBlockquote(),
            }
        },
    }).configure({
        // classの追加
        HTMLAttributes: {
            class: 'ml-4 pl-4 border-l-4 border-sold',
        },
    })

export default CustomBlockquote
