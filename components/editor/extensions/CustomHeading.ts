import { mergeAttributes } from '@tiptap/core'
import BaseHeading from '@tiptap/extension-heading'

type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
}

const CustomHeading = BaseHeading
    .configure({
        levels: [1, 2, 3]
    })
    .extend({
        marks: '',
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
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-2': () => this.editor.commands.toggleHeading({ level: 2 }),
                'Mod-3': () => this.editor.commands.toggleHeading({ level: 3 }),
            }
        },
    })

export default CustomHeading
