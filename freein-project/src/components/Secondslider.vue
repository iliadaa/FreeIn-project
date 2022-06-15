<template>
<div class="second-slider-component">
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
    </div>
</div>
</template>

<style scoped>
.second-slider-component {
    display: flex;
    justify-content: space-between;

}

img {
    margin-top: 400px;
    margin-left: 100px;
}

.second-slider-text {
    margin-top: -22%;
}
p {
    text-align: right;
    color: #ea5b0c;
    margin-right: 100px;
}
.heading {
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
}

.text1 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 30px;
}

.text2 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}

.text3 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}

.text4 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}
</style>


<script>
export default{
    name:"Secondslider",
}
</script>