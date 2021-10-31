import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import lowlight from 'lowlight'

export const CustomCodeBlock = CodeBlockLowlight
    .extend({
        // キーボードショートカット
        addKeyboardShortcuts() {
            return {
                'Mod-m': () => this.editor.commands.toggleCodeBlock(),
            }
        }
    }).configure({
        lowlight
    })
