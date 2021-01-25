<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  methods: {
    sendFiles: function (formData) {
      console.log(formData.get("file"));
      axios.post("/convertFile", formData, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/pdf'
      }})
          .then(
              (response) => {
                this.fileIsReady = true;
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf'); //or any other extension
                document.body.appendChild(link);
                link.click();
              }
          ).catch((error) => console.log(error));
    }
  },
  beforeCreate() {
    this.$root.$on("sendFiles", (formData) => {
      this.sendFiles(formData);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
