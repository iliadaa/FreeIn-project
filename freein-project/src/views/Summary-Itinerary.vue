<template>
  <div>
    <HeaderForHall />
    <div class="container">
      <summaryItinerary />
    </div>
    <Footer />
  </div>
</template>

<script>
import summaryItinerary from "../components/HallPage/Itineraries/Summary-Itinerary.vue";
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "SummaryItinerary",
  components: { summaryItinerary, HeaderForHall, Footer },
};
</script>