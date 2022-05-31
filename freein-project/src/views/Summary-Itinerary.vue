<template>
  <div>
    <Header />
    <div class="container">
      <summaryItinerary />
    </div>
    <Footer />
  </div>
</template>

<script>
import summaryItinerary from "../components/HallPage/Itineraries/Summary-Itinerary.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "SummaryItinerary",
  components: { summaryItinerary, Header, Footer },
};
</script>