<template>
  <div class="container">
    <h1>Il Tuo profilo &egrave;</h1>

    <div class="circles">
      <div class="circle1">
        <img class="img1" src="@/assets/gourmet.png" alt="" />
      </div>
      <div class="circle2">
        <img class="img2" src="@/assets/donna.png" alt="" />
      </div>
    </div>
    <h1>L'Acculturato</h1>
    <div class="cards">
      <div class="arte">
        <div class="image1">
          <img src="@/assets/art.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>Arte &AMP; Cultura</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="arte"
          ></VueProgressBar>
        </div>
      </div>
      <div class="mare">
        <div class="image1">
          <img src="@/assets/Mare.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>Mare</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="mare"
          ></VueProgressBar>
        </div>
      </div>
      <div class="gourmet">
        <div class="image2">
          <img src="@/assets/Gourmet-Explorer.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>Gourmet Explorer</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="gourmet"
          ></VueProgressBar>
        </div>
      </div>
      <div class="relax">
        <div class="image3">
          <img src="@/assets/relax.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>Relax</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="relax"
          ></VueProgressBar>
        </div>
      </div>
      <div class="party">
        <div class="image4">
          <img src="@/assets/Party.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>Party</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="party"
          ></VueProgressBar>
        </div>
      </div>
      <div class="natura">
        <div class="image5">
          <img src="@/assets/Natura_Avventura.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>Natura &AMP; Avventura</p>
        </div>
        <div class="progress_container1">
          <VueProgressBar
            type="line"
            :border="true"
            :line-height="4"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="natura"
          ></VueProgressBar>
        </div>
      </div>
    </div>

    <div class="text">
      <p>
        Viaggiatore interessato agli aspetti artistici dei luoghi, ovvero
        interessato a città storiche, siti di interesse (Colosseo, Piramidi,
        ecc) e con una spiccata propensione verso la conoscenza dei luoghi (sei
        un turista che utilizza guide e materiale informativo).
      </p>
    </div>

    <div class="button1">
      <a href="#" class="button" @click="testCompletedAccultured()"
        >portami alla mia hall</a
      >
    </div>
  </div>
</template>

<script>
import UsersJson from "/Users.json";
export default {
  data() {
    return {
      arte: 89,
      mare: 50,
      gourmet: 10,
      relax: 40,
      party: 55,
      natura: 19,
      users: UsersJson.registrations,
    };
  },
  methods: {
    isRolee() {
      this.$store.commit("isRole");
    },

    testCompletedAccultured() {
      var i;
      this.inSession[0].userObj.testDone = true;
      this.inSession[0].userObj.profileTest.name = "Acculturato";
      this.inSession[0].userObj.profileTest.arte = this.arte;
      this.inSession[0].userObj.profileTest.mare = this.mare;
      this.inSession[0].userObj.profileTest.cibo = this.gourmet;
      this.inSession[0].userObj.profileTest.relax = this.relax;
      this.inSession[0].userObj.profileTest.party = this.party;
      this.inSession[0].userObj.profileTest.nature = this.natura;
      console.log(this.registrations);
      for (i = 0; i < this.users.length; i++) {
        console.log("sono nel for");
        if (this.users[i].userObj.email == this.inSession[0].userObj.email) {
          this.users[i].userObj = this.inSession[0].userObj;
          console.log("Ci sonooo", this.users);
          this.isRolee();
          break;
        } else {
          console.log("Non sta!");
        }
      }
    },
  },

  computed: {
    total() {
      return this.$store.state.registrations.length;
    },

    inSession() {
      return this.$store.state.inSession;
    },

    registrations() {
      return this.$store.state.registrations;
    },
  },
};
</script>
<style>
.k-progress {
  flex-direction: column;
}
.k-progress-text {
  order: -1;
}
.k-progress-outer {
  padding-right: 0;
}
</style>
<style scoped>
.container {
  margin-top: 40px;
  margin-bottom: 100px;
}
h1 {
  color: #ea5b0c;
  font-size: 40px;
  text-align: center;
}
.circles {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-left: 100px;
  margin-bottom: 75px;
}
.circle1,
.circle2 {
  height: 225px;
  width: 225px;
  border-radius: 50%;
}
.circle1 {
  background: #009ee2;
}
.circle2 {
  background: #ea5b0c;
  transform: translateX(-100px);
  z-index: 2;
}
.img1 {
  width: 131px;
  height: 170px;
  margin-left: 60px;
  margin-top: 30px;
}
.img2 {
  width: 181px;
  height: 170px;
  margin-left: 25px;
  margin-top: 25px;
}
.cards {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 70px;
}
img {
  width: 71px;
  height: 90px;
}
.arte {
  background-color: #ec624c;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.mare {
  background-color: #2c307f;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.gourmet {
  background-color: #009ee2;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.relax {
  background-color: #dc2c6c;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.party {
  background-color: purple;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.natura {
  background-color: #f6a314;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
}
.image1 {
  padding: 10px;
}
.image2 {
  padding-bottom: 20px;
  padding-left: 20px;
}
.image3 {
  padding-bottom: 20px;
  padding-left: 7px;
}
.image4 {
  padding-bottom: 20px;
  padding-left: 15px;
}
.image5 {
  padding-bottom: 20px;
  padding-left: 10px;
}
.cardcontainer1 {
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-align: center;
  position: absolute;
  line-height: 11px;
  top: 95px;
}
.cardcontainer2 {
  font-size: 15px;
  font-weight: bold;
  color: white;
  position: absolute;
  line-height: 11px;
  top: 105px;
  left: 28px;
}
.text {
  text-align: justify;
  margin-left: 320px;
  margin-right: 318px;
}

.button1 {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
.button {
  background-color: #ea5b0c;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
}
.progress_container1 {
  width: 100%;
  padding-top: 20px;
}

@media (max-width: 575.98px) {
  .container {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  h1 {
    font-size: 25px;
  }
  .circles {
    margin-bottom: 50px;
  }
  .circle1,
  .circle2 {
    height: 200px;
    width: 200px;
  }
  .img1 {
    margin-right: 60px;
    margin-top: 10px;
  }
  .img2 {
    width: 141px;
    height: 130px;
    margin-right: 25px;
  }
  .cards {
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: 50px;
    margin-right: 5px;
  }
  img {
    width: 51px;
    height: 70px;
  }
  .arte {
    width: 70px;
    height: 100px;
    margin-right: inherit;
    margin-bottom: 50px;
  }
  .mare {
    width: 70px;
    height: 100px;
    margin-right: inherit;
    margin-bottom: 50px;
  }
  .gourmet {
    width: 70px;
    height: 100px;
    margin-right: inherit;
    margin-bottom: 50px;
  }
  .relax {
    width: 70px;
    height: 100px;
    margin-right: inherit;
  }
  .party {
    width: 70px;
    height: 100px;
    margin-right: inherit;
  }
  .natura {
    width: 70px;
    height: 100px;
  }
  .cardcontainer1 {
    top: 75px;
  }
  .cardcontainer2 {
    top: 85px;
    left: 17px;
  }
  .text {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .button1 {
    margin-top: 50px;
  }
  .button {
    padding: 10px 22px;
    font-size: 17px;
  }
}
</style>
