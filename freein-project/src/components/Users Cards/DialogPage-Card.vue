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
        <iframe class="responsive-iframe"
          seamless="seamless"
          scrolling="yes"
          src="_blank"
          name="iframe_a"
          height="100%"
          width="100%"
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
  height: 500px;
  width: 135px;
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
  padding-top: 150px;
  padding-left: 1px;
}
@media (max-width: 575.98px) {
.dialogpage1 {
  display: block;
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
}
.dialogpage-links {
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px 10px 0px 0px;
  height: auto;
  width: 100%;
}
.dialogpage-links p {
  font-size: 14px;
  font-weight: 500;
  padding-top: 10px;
  padding-left: 0;
}
.dialogpage-links img {
  display: none;
}
.dialogpage-iframe {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 100%; /* 1:1 Aspect Ratio */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /*width: 100%;
  height: 100%;*/
  border: none;
}
}
</style>
