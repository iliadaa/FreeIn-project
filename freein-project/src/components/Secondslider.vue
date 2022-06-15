<template>
<div class="second-slider-component">
    <div class="second-slider-imagetext">
        <div class="second-slider-image">
            <img src="@/assets/girls.png" alt="">
        </div>
        
        <div class="second-slider-text">
                <div class="heading">
                    <p>Freein il primo vero </p>
                    <p>Social travel</p>
                    <p>che ti premia.</p>
                </div>
        
                <div class="text1">
                    <p>Freein ti premia</p>
                </div>
        
        
                <div class="text2">
                    <p>Crea e condividi il tuo itinerario e</p>
                    <p>guadagnerai ogni volta che i tuoi amici lo</p>
                    <p>salveranno</p>
                </div>
        
                <div class="text3">
                    <p>Potrai spendere i tuoi crediti scegliendo</p>
                    <p>le tappe che ti ispirano di piu'</p>
                </div>
        
                <div class="text4">
                    <p>Se sei un'azienda turistica potrai utilizzare</p>
                    <p>i tuoi crediti sponsorizzando la tua attivita'</p>
                </div>

                <div class="function">
                    <div><a href="#">Scopri come funziona</a></div>
                    <div><a href="#"><i class="fas fa-angle-double-right"></i></a></div>
                </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.second-slider-imagetext {
    display: flex;
    justify-content: space-evenly;
    margin-top: 150px;
}

.second-slider-image {
    margin-top: 180px;
}

.second-slider-text {
    margin-top: 20px;
}
.second-slider-text p {
    text-align: right;
    color: #ea5b0c;
}
.second-slider-text .heading {
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
}

.second-slider-text .text1 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 30px;
}

.second-slider-text .text2, .text3, .text4 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}
.function {
    display: flex;
    float: right;
    margin-top: 40px;
}

.function a {
  text-decoration: none;
  color: #ea5b0c;
  font-size: 18px;
}
.function i {
  color: #ea5b0c;
  font-size: 25px;
  padding-top: 3px;
  padding-left: 10px;
}
</style>


<script>
export default{
    name:"Secondslider",
}
</script>