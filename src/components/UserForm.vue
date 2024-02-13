<template>
  <div class="container">
    <!-- <p>{{ this.email }} {{ this.password }}</p> -->
    <form 
    @submit.prevent="submitForm" 
    class="formulaire">

    <h2 class="title">{{ title }}</h2>
    <p>{{ paragraphe }}</p>


    <div v-if="formInscription" class="company">
        <br>
        <label 
        v-if="formInscription" 
        class="label" for="companyName">Informations de l'entreprise :</label>
        <br>
      <input 
      v-model="raisonSociale" 
      type="text" 
      placeholder="Raison sociale (nom de l'entreprise)*" >

      <input 
      v-model="siret" 
      type="text" 
      placeholder="Numéro de SIRET (14 chiffres)*" >
        <div class="adress">
            <input 
            v-model="adresse" 
            type="text" 
            placeholder="Adresse complète de l'entreprise*" 
            class="inputadress">
            <div class="cp">
            <input 
            v-model="codePostal" 
            type="number" 
            placeholder="Code Postal*">
            <input 
            v-model="ville" 
            type="text" 
            placeholder="Ville*" 
            class="city">
            </div>
        </div>
    </div>

<br>
    <label v-if="formInscription" class="label">Vos informations personnelles :</label>
      <br>

        <input 
        v-model="email" 
        type="email" 
        placeholder="Email*">
        <input 
        v-model="password.password" 
        type="password" 
        placeholder="Mot de passe*">
        <input 
        v-if="formInscription"
        v-model="password.confirmPassword" type="password" 
        placeholder="Confirmer le mot de passe*">


      <button v-if="!formInscription"
       @click="loadUser()">Se connecter</button>

      
      <button v-if="formInscription" @click="checkForm()">S'inscrire</button>


    <div v-if="!formInscription">
      <p class="nouv">Pas encore de compte chez nous ?</p>
      <button class="btnCreer">
        <router-link to="/signup" class="btnInscription">S'inscrire</router-link>
        </button>
    </div>
    
    </form>
    </div>

</template>

<script>

export default {

  data() {
    return {
      error: [],
      raisonSociale: '',
      siret: '',
      adresse: '',
      cp: '',
      codePostal: '',
      ville: '',
      email: '',
      password: {
        password: '',
        confirmPassword: '',
      },
      // role: user,
    
    }
    },


    props: {
        title: {
            type: String,
            default: 'Ravis de vous revoir !'
        },

        paragraphe: {
            type: String,
            default: 'Identifiez-vous pour profiter de tous nos produits.'
        },


        formInscription: {
          type: Boolean,
          default: false,
        },

        // formInscription: Object,


    },
  



  methods: {
    checkForm() {

      // let usersInscrits = JSON.parse(localStorage.getItem('usersData')) || [];
      this.$emit('connexionUtilisateur', true);

      if(!this.formInscription){
      if(!this.email || !this.password.password){
        alert('Veuillez remplir tous les champs obligatoires.')
        return;
      }}


      if(this.formInscription) {
        if(!this.raisonSociale || !this.siret || !this.adresse || !this.codePostal || !this.ville){
          alert('Veuillez remplir toutes les informations de l\'entreprise.');
          return
        }
        if(this.password.password != this.password.confirmPassword) {
        alert('Les mots de passes ne correspondent pas.')
        return
        }
        if(!this.siret || this.siret.length !== 14 || !/^\d+$/.test(this.siret)) {
          alert('Le numéro SIRET doit comporter 14 chiffres.');
          return
        }
        if(!this.email || !this.password.password || !this.password.confirmPassword) {
          alert('Veuillez renseigner vos informations personnelles.');
          return;
        }
      }

      if(this.formInscription) {
                let nouveauClient = {
          raisonSociale: this.raisonSociale,
          siret: this.siret,
          adresse: this.adresse,
          codePostal: this.codePostal,
          ville: this.ville,
          email: this.email,
          password: this.password,
          inscrit: true,
          // role: user,
        };

        console.log('nouveau client:', nouveauClient);

        this.$store.dispatch('ajoutClient', nouveauClient);
        this.$store.dispatch('clientEnLigne', true);


      }



        // nouveauClient.push({
        //   raisonSociale: this.raisonSociale,
        //   siret: this.siret,
        //   adresse: this.adresse,
        //   codePostal: this.codePostal,
        //   ville: this.ville,
        //   email: this.email,
        //   password: this.password,
        //   inscrit: true,
        //   role: user,
        // });


        // this.$router.push('/');
        // localStorage.setItem('usersData', JSON.stringify(usersInscrits));

        
      

      

  },

  submitForm() {

    console.log('submitForm', {email:this.email, password:this.password});

    let formData = {
      email: this.email,
      password: this.password,

    };

    this.$emit('submitLogin', formData);

    // if(!this.formInscription) {
    //   if(!this.email || !this.password.password) {
    //     alert('Veuillez remplir tous les champs obligatoires.')
    //     return;
    //   }
    // } else {
    //   if(!this.raisonSociale || !this.siret || !this.adresse || !this.codePostal || !this.ville) {
    //     alert('Veuillez remplir tous les champs de l\'entreprise.');
    //     return;
    //   }
    //   if(!this.email || !this.password.password || !this.password.confirmPassword) {
    //     alert('Veuillez renseigner vos informations personnelles.');
    //     return;
    //   }
    // }

    // this.$router.push('/');

  },

  loadUser() {
    console.log('ok');

    // let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    let clients = this.$store.state.clients;

    console.log('Essaie: ', {email: this.email, password: this.password.password});


    // let utilisateurExist = usersData.find(user => user.email === this.email && user.password.password === this.password.password);
    let utilisateurExist = clients.find(user => user.email === this.email && user.password === this.password.password);

    if(utilisateurExist) {
      console.log('Utilisateur trouvé:', utilisateurExist);

      // localStorage.setItem('userData', JSON.stringify(utilisateurExist));
      localStorage.setItem('clients', JSON.stringify(utilisateurExist));

      this.$store.dispatch('clientEnLigne', true);

      this.$router.push('/');


    } else{
      alert('Veuillez vérifier vos informations de connexion ou inscrivez vous.');
    }

  }

  }

}

</script>

<style scoped>
.container{
  /* background-color: red; */
  width: 400px;
  height: 800px;
  margin: 200px auto;
}

.formulaire{
  /* position: relative; */
  background-color: #dec5b1;
  /* width: 600px; */
  height: auto;
  margin: 100px auto;
  padding: 20px;
  border-radius: 10px;
  color: #5e3c1a;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);

}


.title{
  margin-bottom: 20px;
}


.formulaire input{
  margin: 5px;
  width: 250px;
  height: 20px;
}

button {
  background-color: #b98d68;
  color: #5e3c1a;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 5px;
  margin-top: 30px;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #5e3c1a;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #5e3c1a;
  color: #cca88c;
}


.nouv{
  padding-top: 40px;
  font-size: 15px;
  margin-bottom: -15px;
}

.btnCreer{
  width: 80px;
  height: 30px;
  font-size: 12px;
  
}



label{
  float: left;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
}
.cp input{
  width: 90px;
}


.btnInscription{
  text-decoration: none;
  color: #5e3c1a;
}

.btnInscription:hover {
  color: #cca88c;
}

</style>
