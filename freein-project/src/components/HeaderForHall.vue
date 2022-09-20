<template>
  <b-navbar>
    <b-navbar-brand @click="linkTo()"
      ><img src="@/assets/logo.png"
    /></b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },

  methods: {
    linkTo() {
      if (this.inSession[0].userObj.roles.includes("business" || "admin")) {
        this.$router.push({
          name: "BusinessProfile",
        });
        return true;
      } else {
        this.$router.push({
          name: "Privatprofile",
        });
        return false;
      }
    },
  },
  computed: {
    inSession() {
      return this.$store.state.inSession;
    },
  },
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
