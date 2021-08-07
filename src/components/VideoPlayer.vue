<template>
    <div class="video-js" style="width: 100%; height: 95%;">

        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>

import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'

import videojs from 'video.js';

export default {
    name: "VideoPlayer",
    // props: {
    //     options: {
    //         type: Object,
    //         default() {
    //             return {};
    //         }
    //     }
    // },
    data() {
        return {
            videoUrl:'',
            videoOptions: {
                live: true,
                autoplay: true,
                controls: true,
                muted: false,
                preload: 'auto',
                aspectRatio: '7: 4',
                fluid: true,

                sources: [
					{
					src: "",
                    type: "rtmp/flv",
					}
				],

                },
                techOrder: [ 'flash', 'html5'],


                flash: {
                    hls: {
                    withCredentials: false
                        },


                },


            }

        }
    ,
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeUnmount() {
        if (this.player) {
            this.player.dispose()
            console.log('closePlayerReady', this);
        }
    }
}
</script>
