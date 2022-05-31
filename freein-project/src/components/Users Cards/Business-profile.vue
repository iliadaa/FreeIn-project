<template>
  <div class="box">
    <div class="personal-group">
      <h4>My personal attitude</h4>
      <div class="personal-icons">
        <img class="art-culture" src="@/assets/art.png" />
        <img class="relax" src="@/assets/relax.png" />
        <img class="sea" src="@/assets/Mare.png" />
        <img class="nature-adventure" src="@/assets/Natura_Avventura.png" />
        <img class="gourmet-explorer" src="@/assets/Gourmet-Explorer.png" />
        <img class="party" src="@/assets/Party.png" />
        <div class="profile">
          <img class="pig" src="@/assets/pig.png" />
          <img class="ringbell" src="@/assets/active.png" />
          <img class="settings" src="@/assets/settings.png" />
          <img class="avatar" src="@/assets/avatar.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business-profile",
};
</script>

<style scoped>
.box {
  padding: 0 5% 0 5%;
}
.personal-group h4 {
  margin-bottom: 15px;
}
.profile {
  float: right;
  display: inline-flex;
  border-radius: 50%;
  align-items: center;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
img.art-culture {
  background-color: #ff6343;
}
img.relax {
  background-color: #dc2d6c;
  margin: 0 20px 0 20px;
}
img.sea {
  background-color: #2d2e83;
}
img.nature-adventure {
  background-color: #ffa600;
  margin: 0 20px 0 20px;
}
img.gourmet-explorer {
  background-color: #009fe3;
}
img.party {
  background-color: #952685;
  margin: 0 20px 0 20px;
}
img.ringbell {
  margin: 0 30px 0 30px;
}
img.settings {
  margin-right: 70px;
}
h4 {
  color: #ea5b0c;
}
img.avatar {
  width: 120px;
  height: auto;
}
</style>
