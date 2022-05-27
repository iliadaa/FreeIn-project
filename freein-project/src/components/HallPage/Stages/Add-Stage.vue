<template>
  <div class="container">
    <div class="form-group">
      <div class="ph-layout">
        <h3>Foto tappa (obbligatorio)</h3>
        <div
          class="wrapper px-2 stage-ph"
          v-cloak
          @drop.prevent="addFile"
          @dragover.prevent
        >
          <p href="#">Carica immagine</p>
          <br />
          <p style="margin-top: -40px">
            Dimensioni minime di "808 x 632 pixel"
          </p>
          <ul class="list-group">
            <li class="list-group-item" v-for="(file, id) in files" :key="id">
              {{ file.name }} ({{ file.size | kb }} kb)
              <button
                class="btn btn-danger btn-sm float-right"
                @click="removeFile(file)"
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="classify-stage">
        <h2>
          Come classificheresti questa Tappa?
          <p style="font-size: 12px">(obbligatorio)</p>
        </h2>
      </div>
      <div class="percentages">
        <p style="margin-bottom: 0px">arte e cultura</p>
        <div class="value-range">
          {{ value }}%
          <br />
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="-100"
            max="100%"
          >
          </b-form-input>
        </div>
        <p style="margin-bottom: 0px">arte e cultura</p>
        <div class="value-range">
          {{ value }}%
          <br />
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="-100"
            max="100%"
          >
          </b-form-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      value: "2",
    };
  },
  filters: {
    kb(val) {
      return Math.floor(val / 1024);
    },
  },
  methods: {
    addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach((file) => {
        this.files.push(file);
        kb(val);
        console.log(this.files);
      });
    },
    removeFile(file) {
      this.files = this.files.filter((f) => {
        return f != file;
      });
    },
  },
};
</script>

<style scoped>
.value-range {
  margin-left: 130px;
}

.value {
  margin-left: 150px;
}

.percentages {
  margin-left: 80px;
  display: flex;
}

.container {
  max-width: 1440px;
  background-color: #e6e6e6;
  margin-left: auto;
  margin-right: auto;
  height: 1000px;
  align-content: center;
  justify-content: center;
  display: flex;
}
.form-group {
  width: 1300px;
  margin-top: 80px;
  background-color: #f2f2f2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
  color: #939393;
}

.ph-layout {
  margin-top: 100px;
  margin-left: 80px;
}

.ph-layout h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.wrapper {
  width: 350px;
  height: 350px;
  border: 2px dotted gray;
  text-align: center;
}

.wrapper p {
  color: #939393;
  margin-top: 180px;
}

.stage-ph {
  height: 350px;
  border-radius: 5%;
  width: 30%;
  background-color: #ffffff;
  border: dashed;
  border-color: lightgray;
  justify-content: center;
  align-items: center;
}

.classify-stage {
  margin-top: 80px;
  margin-left: 80px;
}

.classify-stage h2 {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
