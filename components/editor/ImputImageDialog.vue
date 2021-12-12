<template>
    <div>
        <dashboard-modal :uppy="uppy" :plugins="['Webcam']" :props="{theme: 'light', onRequestCloseModal:handleClose}" :open="modalStatusProps" />
    </div>
</template>

<script>
import { DashboardModal } from '@uppy/vue'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

import Uppy from '@uppy/core'
import Webcam from '@uppy/webcam'
import AwsS3 from '@uppy/aws-s3'

import md5 from '~/node_modules/js-md5'

export default {
    components: {
        DashboardModal
    },
    props:{
        modalStatusProps:
        {
            type:Boolean,
            default:false
        },
        editor: {
            type: Object,
            required: true,
        },
    },
    computed: {
        uppy(){
            const vm = this
            const tiptap = this.editor
            const test = md5
            return (
                new Uppy()
                    .use(Webcam)
                    .use(
                        AwsS3,
                        {
                            metaFields: [],
                            getUploadParameters (file) {
                                // Send a request to our PHP signing endpoint.
                                return $nuxt.$axios.post('/api3/v1/aws/presignedURL/', {
                                    key: vm.$auth.user.id + '/' + test(file.source) + '.' + file.extension,
                                    content_type: file.type,
                                }).then((response) => {
                                // Parse the JSON response.
                                    return response.data
                                }).then((data) => {
                                    // Return an object in the correct shape.
                                    return {
                                        method: data.method,
                                        url: data.url,
                                        fields: data.fields,
                                        // Provide content type header required by S3
                                        headers: {
                                            'Content-Type': file.type,
                                        },
                                    }
                                })
                            },
                            getResponseData(responseText, response){
                                console.log(responseText)
                                return {'URL': response.responseURL.split('?')[0] }
                            }
                        }
                    )
                    .on(
                        'upload-success', function (file, response) {
                            console.log(file)
                            tiptap.chain().focus().setImage({ src: response.body.URL ,size:'large'}).run()
                        }
                    )
            )
        },
    },
    beforeDestroy () {
        this.uppy.close()
    },
    methods:{
        handleClose(){
            this.$emit('closeModal', false)
        },
        parentTest(test){
            this.$parent.URL = test
        }
    }
}
</script>
