<template>
  <div class="modal-backdrop">
    <button type="button" class="btn-close" @click="close">x</button>

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
        <a
          href="https://signin.travelappeal.com/#/login?redirect=)"
          target="iframe_a"
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
</template>

<script>
export default {
  name: "DialogTest2",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  z-index: 111;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
</style>
