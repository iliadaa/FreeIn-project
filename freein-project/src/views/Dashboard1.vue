<template>
  <div>
    <Header />
    <div class="container">
      <dashboard1 />
    </div>
    <Footer />
  </div>
</template>

<script>
import dashboard1 from "../components/DashBoard/Dashboard1.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Dashboard1",
  components: { dashboard1, Header, Footer },
};
</script>