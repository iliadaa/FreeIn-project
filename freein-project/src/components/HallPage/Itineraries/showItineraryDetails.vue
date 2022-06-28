<template>
  <div class="container">
    <div
      class="cards-info"
      v-for="itinerary in itineraries"
      :key="itinerary.id"
    >
      <b-card no-body class="overflow-hidden" style="max-width: 800px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="itinerary.img"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="itinerary.itineraryTitle">
              <b-card-text v-for="stage in stages" :key="stage.id">
                {{ itinerary.todo }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    itineraries() {
      return this.$store.state.itineraries;
    },
    stages() {
      return this.$store.state.stage;
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 1920px;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: wheat;
}
.cards-info {
}
</style>