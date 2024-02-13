<template>
    <div class="dashboard">
        <!-- SideBar -->
        <div class="menusidebar" v-show="showSide">
            <div class="sidebar">
                <p class="titre"> Admin DashBoard</p>
            </div>
            <div class="sidemenu">
                <div class="box">
                    <router-link to="/" class="cat"  >
                        <img src="images/accueil.png" alt="">
                        <p>Accueil</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminMsg" class="cat"  >
                        <img src="images/email.png" alt="">
                        <p>Messagerie</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminProfile" class="cat"  >
                        <img src="images/resume.png" alt="">
                        <p>Tableau de bord</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreUser" class="cat"  >
                        <img src="images/utilisateurs.png" alt="">
                        <p>Utilisateurs</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreProduit" class="cat"  >
                        <img src="images/colis.png" alt="">
                        <p>Produits</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreCat" class="cat"  >
                        <img src="images/colis.png" alt="">
                        <p>Catégories</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminCommande" class="cat"  >
                        <img src="images/commandes.png" alt="">
                        <p>Commandes</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminParametre" class="cat"  >
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
                        <div>Franck Fort</div>
                        <div class="">Admin</div>
                        </div>
                    </div>  
                </div>
                    <!-- Drop down -->

                <div v-show="showDropDown">
                    <div class="menuser">
                        <ul>
                            <a href="/UserPage"><li>Profil</li></a>
                            <a href="/adminprofile"><li>Dashboard</li></a>
                            <a href="/AdminParametre"><li>Paramètres</li></a>
                        </ul>
                        <form method="POST" action="#" role="none">
                            <button type="submit" >Déconnection</button>
                        </form>
                    </div>
                </div>
                
            </div>
                <div class="affichage">
                    <!-- <h1>DashBoard Admin</h1>
                    <br>
                    <h2>Bienvenue </h2>
                    <h2>Admin Franck Fort</h2> -->

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
        },
    }
}
</script>

<style scoped>
.dashboard {
    margin-top: 150px;
    display: flex;
    width: 100%;
   height: 100%;
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
.header .affichage {
    height: 70vh;
    width: 174vh;
    border: 2px solid #5e3c1a;
    margin-top: 0.625rem;
    margin-left: 0.625rem;
}
.user {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.625rem;
    margin-right: 2.5rem;
}
.user img {
    width: 3.125rem;
    height: 3.125rem;
    margin-right: 0.9375rem;
}
.menuser{
    background-color: #dec5b1;
    color: #5e3c1a;
    margin-right: 1.25rem;
    margin-top: 18.75rem;
}
.menuser li{
    display : flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    padding: 0.625rem 1.25rem;
    margin-top: 0.625rem;
}
.menuser li i {
  margin: 0px !important;
}
.menuser li:hover {
    color: #dec5b1;
}
.menuser a{
    text-decoration: none;
    color: white;
}
.menuser button{
    background-color: #b98d68;
    color: white;
    border: none;
    padding: 0.625rem 0.625rem;
    margin-top: 1.25rem;
    font-weight: bold;
}
.menuser button:hover {
    background-color: #5e3c1a;
}

.affichage {
    background-color: #dec5b1;
    overflow: scroll;
}

/* .affichage h1 {
    margin-top: 40px;
} */



</style>
