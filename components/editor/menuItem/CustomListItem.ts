import { ListItem } from '@tiptap/extension-list-item'

export const CustomListItem = ListItem.extend({
    name: 'CustomlistItem',
    content: 'paragraph block*',

    addKeyboardShortcuts() {
        return {
            Enter: () => this.editor.commands.splitListItem('CustomlistItem'),
            Tab: () => this.editor.commands.sinkListItem('CustomlistItem'),
            'Shift-Tab': () => this.editor.commands.liftListItem('CustomlistItem'),
        }
    },
})
