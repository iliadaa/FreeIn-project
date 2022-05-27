<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>

      <div class="list-business">
        <img src="@/assets/image business 1.jpg" />
      </div>
      <div class="bussines-button"><button>Avanti >></button></div>
    </div>
  </div>
</template>
<script>
import Header from "../Header.vue";
export default {
  components: { Header },
  name: "BusinessCard1",
};
</script>
<style scoped>
.container-business-user {
  display: flex;
  justify-content: center;
  font-family: "Roboto";
}
.card {
  width: 841px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 660px;

  border-radius: 40px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
}

.card-header {
  padding: 3%;
  background-color: #ea5b0c;
  color: white;
  font-size: x-large;
  text-align: center;
}
.card-header:first-child {
  border-radius: calc(2.25rem) calc(2.25rem) 0 0;
}
.list-business > img {
  max-width: 869px;
  width: 100%;
}
</style>
