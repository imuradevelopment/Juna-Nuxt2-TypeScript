import { BulletList } from '@tiptap/extension-bullet-list'

const CustomBulletList = BulletList
    .extend({
        name: 'CustomBulletList',
        group: 'block list',
        content: 'CustomlistItem+',
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-l': () => this.editor.commands.toggleBulletList(),
            }
        },
        addCommands() {
            return {
                toggleBulletList: () => ({ commands }) => {
                    return commands.toggleList('CustomBulletList', 'CustomlistItem')
                },
            }
        },
    }).configure({
        // classの追加
        HTMLAttributes: {
            class: 'pl-8 list-disc',
        },
    })

export default CustomBulletList
