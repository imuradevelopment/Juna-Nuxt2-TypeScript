import { Document } from '@tiptap/extension-document'

const CustomDocument = Document.extend({
    content: 'heading paragraph block*',
})

export default CustomDocument
