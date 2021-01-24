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
  </div>
</template>


<script>
export default {
  name: "UploadForm",
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
      this.$root.$emit("sendFiles", formData);
    },
    handleFileSubmit: function (event) {
      this.file = []
      for (let file of event.target.files) {
        this.file.push(file);
      }
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