<template>
  <node-view-wrapper class="code-block">
    <select v-model="selectedLanguage" contenteditable="false">
      <option :value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      <option v-for="(language, index) in languages" :value="language" :key="index">
        {{ language }}
      </option>
    </select>
    <pre><node-view-content as="code" /></pre>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-2'

export default {
    components: {
        NodeViewWrapper,
        NodeViewContent,
    },

    props: nodeViewProps,

    data() {
        return {
            languages: this.extension.options.lowlight.listLanguages(),
        }
    },

    computed: {
        selectedLanguage: {
            get() {
                return this.node.attrs.language
            },
            set(language) {
                this.updateAttributes({ language })
            },
        },
    },
}
</script>

<style>
.code-block {
  position: relative;
}
.code-block select {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
}

.hljs-comment,
.hljs-quote {
    color: #616161;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
    color: #F98181;
}

.hljs-number,
.hljs-meta,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params {
    color: #FBBC88;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
    color: #B9F18D;
}

.hljs-title,
.hljs-section {
    color: #FAF594;
}

.hljs-keyword,
.hljs-selector-tag {
    color: #70CFF8;
}

.hljs-emphasis {
    font-style: italic;
}

.hljs-strong {
    font-weight: 700;
}
</style>
