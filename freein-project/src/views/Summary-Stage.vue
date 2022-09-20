<template>
  <div>
    <HeaderForHall />
    <div class="container">
      <summaryStage />
    </div>
    <Footer />
  </div>
</template>

<script>
import summaryStage from "../components/HallPage/Stages/Summary-Stage.vue";
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "SummaryStage",
  components: { summaryStage, HeaderForHall, Footer },
};
</script>