<template>
  <div class="modal-backdrop">
    <div class="dialogpage1">
      <button type="button" class="btn-close" @click="close"></button>
      <div class="dialogpage-links">
        <p>
          <a href="https://templates.ener-web.it/freeintest/" target="iframe_a"
            >E-commerce</a
          >
        </p>
        <p>
          <a href="https://www.contattipower.it/" target="iframe_a">Marketing</a>
        </p>
        <p>
          <a href="https://signin.travelappeal.com/#/login?redirect=)" target="iframe_a"
            >Benchmark</a
          >
        </p>
        <p>
          <a href="https://app.tanaza.com/signin" target="iframe_a">Wi-Fi</a>
        </p>
        <img src="@/assets/dots.png" alt="" />
      </div>

      <div class="dialogpage-iframe">
        <iframe
          seamless="seamless"
          scrolling="no"
          src="_blank"
          name="iframe_a"
          height="600px"
          width="950px"
          title="Iframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogPage",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  opacity: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: absolute;
  right: 60px;
}
.btn-close {
  position: absolute;
  right: 8%;
  top: 6%;
}
.dialogpage1 {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
}

.dialogpage-links {
  background-color: #ea5b0c;
  border-radius: 25px 0px 0px 25px;
  height: 600px;
  width: 170px;
}

.dialogpage-links p {
  font-size: 18px;
  padding-top: 30px;
  padding-left: 20px;
}

.dialogpage-links a {
  color: white;
  text-decoration: none;
}

.dialogpage-links img {
  padding-top: 253px;
  padding-left: 5px;
}
</style>
