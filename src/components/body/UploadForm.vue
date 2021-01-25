<template>
  <div>
    <InfoHeader/>
    <div class="form-box">
      <div class="file-choose">
        <input type="file" accept="image/jpeg" id="file" v-on:change="handleFileSubmit($event)" multiple/>
      </div>
      <div class="file-submit" v-if="readyForSubmit">
        <button v-on:click="submitFile()">Submit</button>
      </div>
      <div class="error">
        <a v-if="error">{{ error }}</a>
      </div>
    </div>
  </div>
</template>


<script>
import InfoHeader from "@/components/header/InfoHeader";
export default {
  name: "UploadForm",
  components: {InfoHeader},
  data: function () {
    return {
      files: "",
      readyForSubmit: false,
      error: null
    }
  },
  methods: {
    submitFile: function () {
      let formData = new FormData();
      for (let x of this.files) {
        formData.append("file", x);
      }
      console.log(formData);
      this.$root.$emit("sendFiles", formData);
    },
    handleFileSubmit: function (event) {
      this.files = []
      if (event.target.files.length > 10 || event.target.files.length === 0) {
        this.error = "Attached files number should be between 1 and 10"
        return;
      }
      for (let file of event.target.files) {
        this.files.push(file);
      }
      this.readyForSubmit = true;
      this.error = null;
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
  margin-bottom: 1rem;
}

.form-box .file-submit {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.file-download {
  margin-top: 1rem;
}

.form-box .error {
  color:red;
  font-size: 0.8rem;
}
</style>