<template>
  <div>
    <div class="form-box">
      <div class="file-choose">
        <input type="file" id="file" v-on:change="handleFileSubmit($event)" multiple/>
      </div>
      <div class="file-submit">
        <button v-on:click="submitFile()">Submit</button>
      </div>
    </div>
    <template v-if="fileIsReady">
      <div class="file-download">
        <button v-on:click="downloadFile()">Download</button>
      </div>
    </template>
  </div>
</template>


<script>
export default {
  name: "UploadForm",
  props: ["fileIsReady"],
  data: function () {
    return {
      file: ""
    }
  },
  methods: {
    submitFile: function () {
      let formData = new FormData();
      for (let x of this.file) {
        formData.append("file", x);
      }
      console.log(formData);
      this.$root.$emit("PostFile", formData);
    },
    handleFileSubmit: function (event) {
      this.file = []
      for (let file of event.target.files) {
        this.file.push(file);
      }
    },
    downloadFile: function () {
      this.$root.$emit("downloadFile");
    }
  }
}
</script>

<style scoped>
.form-box {
  border: 1px solid darkgreen;
}

.form-box .file-choose {
  margin-top: 1rem;
}

.form-box .file-submit {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.file-download {
  margin-top: 1rem;
}
</style>