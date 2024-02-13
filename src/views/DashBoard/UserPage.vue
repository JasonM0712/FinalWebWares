<template>
    <div class="dashboard">
        <!-- SideBar -->
        <div class="menusidebar" v-show="showSide">
            <div class="sidebar">
                <p class="titre"> User DashBoard</p>
            </div>
            <div class="sidemenu">
                <div class="box">
                    <router-link to="/" class="cat"  >
                        <img src="images/accueil.png" alt="">
                        <p>Accueil</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/UserProfile" class="cat"  >
                        <img src="images/profil.png" alt="">
                        <p>Mon profil</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/usermsg" class="cat"  >
                        <img src="images/email.png" alt="">
                        <p>Ma messagerie</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/panierview" class="cat"  >
                        <img src="images/panier.png" alt="">
                        <p>Mon panier</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/" class="cat"  >
                        <img src="images/commandes.png" alt="">
                        <p>Mes commandes</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/userparametre" class="cat"  >
                        <img src="images/parametres.png" alt="">
                        <p>Paramètres</p>
                    </router-link>
                </div>

               
            </div>
        </div>

        <!-- Main -->
        <div class="header">

            <!-- Hambuger menu -->
            <div class="main">
                <div class="hamburger">
                    <div @click="toggleSideBar">
                        <img src="images/menu.png" alt="">
                    </div>
                </div>


                        <!-- User login -->
            <div @click="toggleDrop">
                <div class="user">
                    <img src="images/user.png" alt="">
                    <div>
                        <div>Sophie Son</div>
                        <div class="">Utilisateur</div>
                    </div>

                </div>
            </div>

                                <!-- Drop down -->
            <div v-show="showDropDown">
                    <div class="menuser">
                        <ul>
                            <li><a href="/UserPage"></a>Profil</li>
                            <li><a href="/"></a>Panier</li>
                            <li><a href="/"></a>Achats</li>
                        </ul>
                        <form method="POST" action="#" role="none">
                            <button type="submit" >Déconnection</button>
                        </form>
                    </div>
                </div>
        </div>
                <div class="affichage">
                    <router-view></router-view>
                </div>
                
 
        </div>
    </div>


        

</template>

<script>
    
export default {
    data () {
        return {
            showDropDown: false,
            showSide: true,
        }
    },
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide      },
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        }
    }
}
</script>

<style scoped>
.dashboard {
    margin-top: 150px;
    display: flex;
    width: max-content;
   height: max-content;
    color: white;
    font-size: 25px;
}
.menusidebar {
    height: 100vh;
     width: 300px;
    background-color: #5e3c1a;
}
.sidebar {
    width: 300px;
    height: 100px;
    font-weight: bolder;
    background-color: #472e16;
    display: flex;
    justify-content: center;
    align-items: center;

}
.sidemenu {
    display: flex;
    flex-direction: column;
}
.cat {
    display: block;
    position: relative;
    color: white; 
    text-decoration: none;
    cursor: pointer;
    margin-top: 5px; 
}
.box {
    margin-top: 30px;
}
.box:hover {
    background-color: #472e16;
    border-radius: 10px;

}
.box img {
    float: left;
    margin-left: 50px;
}
.box p {
    float: left;
    margin-left: 20px;
}
.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: auto;
    background-color: #5e3c1a;

}
.hamburger {
    display: flex;
    justify-content: center;
    margin-left: 20px; 
}
.hamburger img {
    width: 40px;
    height: 40px;
}
.header {
    height: 100vh;
     width: 1600px;
     background-color: #dec5b1;
}
.header .affichage {
    height: 70vh;
    width: 173vh;
    border: 2px solid #5e3c1a;
    margin-top: 15px;
    margin-left: 15px;
    background-color: #b98d68;
}
.header p {
    margin-top: 100px;
}
.user {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
}
.user img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
}
.showDropDown {
            display: flex;
            position: absolute;
            right: 10px;
            z-index: 10;
            top: 50px;
            background-color: white;
            border-radius: 10px;
}
.menuser{
    background-color: #dec5b1;
    color: #5e3c1a;
    padding: 30px 30px;
}
.menuser li{
    list-style: none;
    cursor: pointer;
    margin-bottom: 5px;
}
.menuser a{
    text-decoration: none;
    color: white;
}
.menuser button{
    background-color: #b98d68;
    color: white;
    border: none;
    padding: 10px 10px;
    margin-top: 20px;
    font-weight: bold;
}
.menuser button:hover {
    background-color: #5e3c1a;
}
</style>
