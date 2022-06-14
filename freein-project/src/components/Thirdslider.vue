<template>
<div class="container">
    <div>
        <img src="@/assets/girls.png" alt="">
    </div>
    
    <div>
            <div class="heading">
                <p>Freein ti porta alla</p>
                <p>scoperta di nuovi</p>
                <p>itinerari di viaggio</p>
            </div>
            
            <div class="text1">
                <p>Conoscerai nuovi itinerari di viaggio</p>
                <p>attraverso l'esperienza dei tuoi nuovi amici.</p>
            </div>     
    </div>
            
        <div class="circles">
            <div class="circle"><p>1</p></div>
            <div class="circle"><p>2</p></div>
            <div class="circle"><p>3</p></div>
            <div class="circle"><p>4</p></div>
        </div>
</div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

img {
    margin-top: 40px;
    margin-left: 100px;
}
p {
    text-align: right;
    color: #2B3081;
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
    margin-top: 40px;
}
.circles {
    display: flex;
    justify-content: space-between;
}

.circle {
    width: 20px;
    line-height: 120px;
    border-radius: 50%;
    text-align: center;
    font-size: 32px;
    border: 3px solid #000;
}
</style>


<script>
export default {
  name: "Thirdslider",
 
};</script>