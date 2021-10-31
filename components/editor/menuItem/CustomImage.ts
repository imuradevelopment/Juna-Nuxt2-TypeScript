import { Image } from '@tiptap/extension-image'

export const CustomImage = Image
    .extend({
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-i': () => this.editor.commands.toggleImage(),
            }
        },
    }).configure({
        // classの追加
        HTMLAttributes: {
            class: 'ml-4 pl-4 border-l-4 border-sold',
        },
    })
