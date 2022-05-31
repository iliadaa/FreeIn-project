<template>
  <div>
    <Header />
    <div class="container">
      <summaryStage />
    </div>
    <Footer />
  </div>
</template>

<script>
import summaryStage from "../components/HallPage/Stages/Summary-Stage.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "SummaryStage",
  components: { summaryStage, Header, Footer },
};
</script>