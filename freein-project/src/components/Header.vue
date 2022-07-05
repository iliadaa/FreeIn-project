<template>
  <b-navbar>
    <b-navbar-brand href="#/"><img src="@/assets/logo.png" /></b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.navbar-brand {
  padding-left: 10%;
  padding-bottom: 2rem;
}
.navbar {
  background-color: white;
  box-shadow: none;
}

@media (max-width: 575.98px) {
.navbar {
  width: 25%;
  height: auto;
}
img {
  width: 100%;
}
.navbar-brand {
  padding-left: 17%;
  padding-bottom: 0rem;
}
}
</style>
