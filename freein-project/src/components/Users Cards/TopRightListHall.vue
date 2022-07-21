<template>
  <div class="container2">
    <div class="edit-sections">
      <div class="container">
        <div class="wrap">
          <div class="left-section">
            <div class="text-color" id="texts">

              <div class="iconNameEmail">
                <b-button type="button" class="btn-close" @click="close()">
                </b-button>
                <div class="flexID">
                  <img class="avatar" src="@/assets/user1.svg" />
                  <h2>{{ takingValue.name }}</h2>
                  <p>{{ takingValue.email }}</p>
                  <button @click="changePage" class="edit-profile">
                    Modifica profilo
                  </button>
                </div>
              </div>

              <button style="margin-top: -50px" @click="alert">
                <div class="space-margin-left">
                  <img src="@/assets/flag1.svg" alt="">
                  <span class="section-text">Tappa</span>
                </div>
              </button>

              <button @click="alert">
                <div class="space-margin-left">
                  <img src="@/assets/location.svg" alt="">
                  <span class="section-text">Itinerario</span>
                </div>
              </button>

              <button @click="alert">
                <div class="space-margin-left">
                  <img src="@/assets/basket1.svg" alt="">
                  <span class="section-text">Shop territoriale</span>
                </div>
              </button>

              <button id="inners" @click="alert">
                <div class="space-margin-left">
                  <span class="fa-regular fa-user"></span>
                  <span class="section-text">Inners</span>
                </div>
              </button>

              <button @click="alert">
                <div class="space-margin-left">
                  <span class="fas fa-piggy-bank"></span>
                  <span class="section-text">Cashback</span>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    close() {
      this.$emit("close");
    },

    isRolee() {
      this.$store.commit("isRole");
    },
    //need a new method that is going to let chanePage if all the forms are compiled
    //correctly :)

    changePage() {
      this.$router.push({
        name: "EditProfilePage",
      });
    },
    alert(event) {
      event.preventDefault();
      alert("!!");
    },
    switchBox() {
      var checkBox1 = document.getElementById("ck1");
      var checkBox2 = document.getElementById("ck2");

      if (checkBox1.checked == true) {
        checkBox2.checked = false;
      } else if (checkBox2.checked == true) {
        checkBox1.checked = false;
      }
    },
  },
  computed: {
    inSession() {
      return this.$store.state.inSession;
    },

    takingValue: function () {
      //jquery in this function is working because the function is dinamic it's like a continious method (idea of computed)
      $(document).ready(function () {
        if ((this.isRolee = false)) {
          $("#inners").css("display", "none");
        } else {
          $("#texts").css("height", "52 0px");
        }
      });
      //return because without it i won't be able to get a singular data.
      //this return also give me the possibility to write just takingValue.name exc because i get the data of the userObj
      return this.inSession[0].userObj;
    },
  },
};
</script>

<style scoped>
.container2 {
  width: auto;
}
.wrap {
  /*min-width: 300px;*/
  margin-top: 10px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  z-index: 1;
  position: absolute;
  right: 50px;
}
/*.left-section {
  flex: 0 0 400px;
}*/
.text-color {
  min-width: 400px;
  display: flex;
  color: grey;
  flex-direction: column;
  height: 500px;
}
.iconNameEmail {
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding-left: 60px;
}
button {
  width: auto;
  height: 67px;
  align-items: center;
  border-color: none;
  color: grey;
  background-color: whitesmoke;
  display: inline-flex;
  border: transparent;
  text-decoration: none;
  border-bottom: 1px solid grey;
  margin-left: 40px;
  margin-right: 10px;
}
.btn-close {
  position: absolute;
  right: 2px;
  top: 10px;
  border-color: transparent;
  background-color: whitesmoke;
  height: 10px;
  width: 10px;
  font-size: 10px;
}
.btn-close:hover {
  background-color: #ea5b0c;
  border-color: transparent;
}
.flexID p, h2 {
  position: relative;
  left: 60%;
  bottom: 43%;
}
.flexID h2 {
  margin-bottom: -4px;
  font-size: 20px;
}
.flexID p {
  font-style: italic;
}
.edit-profile {
  background-color: #ea5b0c;
  border-bottom: none;
  color: white;
  width: 72%;
  height: 28px;
  position: relative;
  left: 90px;
  bottom: 75px;
}
.avatar {
  height: 65px;
  /*display: flex;
  align-items: center;
  font-size: 50px;
  margin-left: -11px;*/
}
.space-margin-left {
  font-size: 35px;
  margin-left: 15px;
}

.space-margin-left img {
  height: 45px;
  padding-right: 45px;
}
.section-text {
  font-size: 24px;
  letter-spacing: 1px;
}
.fa-user {
  padding-right: 50px;
  margin-left: 10px;
}
.fa-piggy-bank {
  padding-right: 45px;
  margin-left: 5px;
}

@media (max-width: 575.98px) {
.wrap {
  right: 2px;
}
.text-color {
  min-width: 370px;
  height: 505px;
}
.space-margin-left {
  font-size: 30px;
}

.space-margin-left img {
  height: 40px;
}
.section-text {
  font-size: 18px;
}
}

</style>
