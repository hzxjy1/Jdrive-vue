<template>
  <div>
    <video ref="video" controls :src="videoUrl"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'https://example.com/my-video.mp4',
      playing: false,
      volume: 0.5,
    }
  },
  mounted() {
    this.$refs.video.addEventListener('play', () => {
      this.playing = true
    })
    this.$refs.video.addEventListener('pause', () => {
      this.playing = false
    })
    this.$refs.video.addEventListener('ended', () => {
      this.playing = false
    })

    if (this.playing) {
      this.$refs.video.play()
    }

    this.$refs.video.volume = this.volume
  },
}
</script>