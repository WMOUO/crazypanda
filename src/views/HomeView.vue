<script setup>
</script>
<template>
  <div class="box">
    <div class="box-orange">
    </div>
    <div class="box-white">
      <h2>
        Welcome to pandaPage
      </h2>
    </div>
  </div>
  <div class="box-text">
    <span class="introduce-text">
      這是一個個人網頁<br>
      同時也是一個通識作業<br>
      現在臨時不知道要放什麼在這<br>
      所以就來留一下這串字吧<br>
    </span>
    <span class="introduce-text-man">
      --crazypanda上
    </span>
  </div>
</template>
<style scoped>
h2{
  font-size: 90px;
  color: rgb(61, 56, 56);
  text-align: center;
  margin: 5%;
}

.box{
  height: 600px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: relative;
}

.box-orange{
  height: 80%;
  width: 36%;
  background-color: rgb(245, 218, 192);
  position: absolute;
  top: 10%;
  left: 10%;
}

.box-white{
  height: 45%;
  width: 50%;
  background-color: rgb(255, 248, 238);
  float: right;
  position: absolute;
  bottom: 25%;
  right: 20%;
}

.box-text{
  width: 60%;
  height: 36%;
  left: 20%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.introduce-text{
  font-size: 36px;
  color: rgb(61, 56, 56);
  
}

.introduce-text-man{
  font-size: 22px;
  margin-left: auto;
}
</style>