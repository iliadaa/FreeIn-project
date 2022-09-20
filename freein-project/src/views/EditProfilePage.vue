<template>
  <div>
    <HeaderForHall style="z-index: 1" />
    <EditProfile />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import EditProfile from "../components/EditProfile/EditProfile.vue";

export default {
  name: "Homeview",
  components: {
    HeaderForHall,
    EditProfile,
  },
  methods: {
    changeData(data) {
      console.log(data);
    },
  },
};
</script>