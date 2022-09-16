<template id="Business-profile">
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
      </div>
      <div class="profile">
        <div id="container-pig">
          <button class="button-area" @click="showModalDashBoard">
            <img class="pig" src="@/assets/pig.png" />
          </button>
          <Dashboard
            v-show="isModalDashBoardVisible"
            @close="closeModalDashBoard($event)"
          ></Dashboard>
        </div>
        <div id="container-bell">
          <button class="button-area" @click="showModal">
            <img class="ringbell" src="@/assets/active.png" />
          </button>
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>
        <div id="container-settings">
          <button class="button-area" @click="showModal">
            <img class="settings" src="@/assets/settings.png" />
          </button>
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>
        <div id="container-avatar">
          <button class="button-area" @click="showModal">
            <img class="avatar" src="@/assets/avatar.png" />
          </button>
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Modal from "../Modal.vue";
import Dashboard from "../DashBoard/ModalDashBoard.vue";

export default {
  name: "Business-profile",
  pig: "#container-pig",
  bell: "#container-bell",
  settings: "#container-settings",
  avatar: "#container-avatar",
  components: {
    Modal,
    Dashboard,
  },
  data() {
    return {
      isModalVisible: false,
      isModalDashBoardVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModalDashBoard() {
      this.isModalDashBoardVisible = true;
    },
    closeModalDashBoard(data) {
      this.isModalDashBoardVisible = false;
    },
  },
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
.btn-info:hover {
  background-color: transparent;
  border-color: transparent;
}
.button-area {
  background-color: transparent;
  border-color: transparent;
  box-shadow: transparent;
}
.modal-container {
  opacity: 1;
}
</style>
