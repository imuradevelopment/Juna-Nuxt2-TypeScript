import { BulletList } from '@tiptap/extension-bullet-list'

export const CustomBulletList = BulletList
    .extend({
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-l': () => this.editor.commands.toggleBulletList(),
            }
        },
    }).configure({
        // classの追加
        HTMLAttributes: {
            class: 'pl-5 list-disc',
        },
    })
