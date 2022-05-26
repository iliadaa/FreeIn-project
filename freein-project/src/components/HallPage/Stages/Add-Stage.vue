
<template>
  <div class="container">
    <div class="form-group">
        <div class="ph-layout">
            <h3>Foto tappa (obbligatorio)</h3>
            <div class="stage-ph" v-cloak @drop.prevent="addFile" @dragover.prevent>
                <li v-for="(file,id) in files" :key="id" class="list-group-item mb-3 border-top">
                {{ file.name }} ({{ file.size }} kb)
                </li>
                
                <!-- icona qui -->
                <p>Carica immagine <br> Dimensioni minime di "808 x 632 pixel"</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default{
    data (){
        return {
            files: [],
            }
    
    },
    methods: {
         addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach(file => {
        this.files.push(file);
        console.log(this.files)
      });
    }
    }
}

</script>

<style scoped>

.container{
    max-width: 1440px;
    background-color: #E6E6E6;
    margin-left: auto;
    margin-right: auto;
    height: 1000px;
    align-content: center;
    justify-content: center;
    display: flex;
    
}
.form-group{
    width: 1300px;
    margin-top: 80px;
    background-color: #F2F2F2;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2%;
    
}

.ph-layout{
    margin-top: 100px;
    margin-left: 80px;
}

.ph-layout h3{
   color: #939393;
   font-size: 20px;
   margin-bottom: 20px;
}

.stage-ph{
    height: 350px;
    border-radius: 5%;
    width: 30%;
    background-color: #FFFFFF;
    border: dashed;
    border-color: lightgray;
    justify-content: center;
    align-items: center;
}

.stage-ph p{
    margin-top: 180px;
    text-align: center;
}

</style>

