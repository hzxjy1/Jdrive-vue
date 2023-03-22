<template>
  <div>
    <img :src="imageUrl" alt="Image">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: null,
    };
  },
  mounted() {
    this.fetchImage();
  },
  methods: {
    fetchImage() {
      axios.get(this.imageSrc, { responseType: 'arraybuffer' })
        .then(response => {
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);
          this.imageUrl = imageUrl;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>