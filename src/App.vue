<template>
  <div id="app">
    <UploadForm :fileIsReady="fileIsReady"/>
  </div>
</template>

<script>

import UploadForm from "@/components/body/UploadForm";
import axios from "axios";

export default {
  name: 'App',
  data: function () {
    return {
      fileIsReady : null
    }
  },
  components: {
    UploadForm
  },
  methods: {
    sendSingleFile: function (formData) {
      console.log(formData.get("file"));
      axios.post("https://jpeg2pdf.herokuapp.com/convertFile", formData)
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
    },
    downloadFile: function () {
      axios.get("https://jpeg2pdf.herokuapp.com/convertFile/download",
          {
            responseType: 'arraybuffer',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/pdf'
            }
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
      }).catch((error) => console.log(error));
    }
  },
  beforeCreate() {
    this.$root.$on("PostFile", (formData) => {
      this.sendSingleFile(formData);
    });
    this.$root.$on("downloadFile", () => {
      this.downloadFile();
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
