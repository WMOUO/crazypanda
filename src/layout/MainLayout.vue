<script setup>
  const goToPage = (item) => {
    console.log(item) 
    router.push({name:item})
  }

</script>
<template>
  <div class="bg">
    <div class="row">
      <button class="title-btn">
        <router-link class="linktext" to="home">
          <div class="h3-head">
            <span>Crazypanda</span>
          </div>
          <div class="h3-body">
            <span>の網頁練習</span>
          </div>
        </router-link>
      </button>
      <div class="grop_btn">
        <button class="btn">
          <router-link class="linktext" to="me">
            About Me
          </router-link>
        </button>
        <button class="btn">
          <router-link class="linktext" to="family">
            MyFamily
          </router-link>
        </button>
        <button class="btn">
          <router-link class="linktext" to="lover">
            MyLover
          </router-link>
        </button>
      </div>
      <div class="row-nav">
        <nav>
          <a href="https://www.instagram.com/crazypanda_0328/" target="_blank">
            <img src="../assets/icon-ins.png" width="50" height="50">
          </a>
          <a href="https://www.facebook.com/profile.php?id=100016475980741" target="_blank">
            <img src="../assets/icon-facebook.png" width="50" height="50">
          </a>   
          <a href="https://steamcommunity.com/profiles/76561199089255128/" target="_blank">
            <img src="../assets/icon-steam.png" width="50" height="50">
          </a>
        </nav>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
body{
  background-color: rgb(255, 255, 255);
}

.bg{
  background-color: rgb(255, 248, 238);
}

.title-btn{
  background-color: transparent;
  border-style: none;
  text-align: center;
}

nav a{
  padding: 10px;
}

.h3-head{
  padding: 15px 10px 0px 10px;
  font-family:Microsoft JhengHei;
  color:rgb(0, 0, 0);
  font-size:26px;
}

.h3-body{
  padding-left: 0px;
  padding-bottom: 10px;
  font-family:Microsoft JhengHei;
  color:rgb(89, 91, 92);
  font-size:16px;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.row-nav{
  padding: 15px 15px 0px;
}

.grop_btn{
  display:flex;
  flex-direction: row;
}

.linktext{
  color: #000000;
  text-decoration: none;
}

.linktext:active{
  color: #000000;
}

.btn {
  padding: 10px 20px 0px 20px; 
  font-size: 26px;
  line-height: 0px;
  background-color: transparent;
  border-style: none;
  font-style: normal;
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
}

.btn:hover{
  padding-bottom: .1em;
  border-bottom: 10px double #3d414d;
}
</style>
