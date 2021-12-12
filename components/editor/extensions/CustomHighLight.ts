import HighLight from '@tiptap/extension-highlight'

const CustomHighLight = HighLight
    .extend({
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-h': () => this.editor.commands.toggleHighlight(),
            }
        },
    }).configure({
        // classの追加
        HTMLAttributes: {
            class: 'bg-secondaryColor dark:bg-secondaryDarkColor',
        },
    })

export default CustomHighLight
