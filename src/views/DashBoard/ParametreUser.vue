<template>
  <div class="container">
    <h1>Liste des utilisateurs</h1>

    <!-- tableau des utilisateurs -->
    <div>
      <p>* Nom, prénom et mot de passe à modifier sur l'espace profil utilisateur</p>
      <table class="table">

        <thead>
          <tr class="infos">
            <th>Raison Sociale (entreprise)</th>
            <th>Nom*</th>
            <th>Prénom*</th>
            <th>SIRET</th>
            <th>Adresse</th>
            <th>Code Postal</th>
            <th>Ville</th>
            <th>Email</th>
            <th>Mot de passe</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody class="listeUtilisateurs">

          <tr v-for="(user, index) in clients" :key="index" class="infosUsers">
            <td>{{ user.raisonSociale }}</td>
            <td>{{ user.nom }}</td>
            <td>{{ user.prenom }}</td>
            <td>{{ user.siret }}</td>
            <td>{{ user.adresse }}</td>
            <td>{{ user.codePostal }}</td>
            <td>{{ user.ville }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>
              <label>
                <input type="radio" value="user" v-model="user.role">
                User
              </label>
              <label>
                <input type="radio" value="admin" v-model="user.role">
                Admin
              </label>
            </td>
            <td><ButtonUser :label="'Modifier'" v-on:click="modifUtilisateur(index)"/>
            <br>
            <ButtonUser :label="'Supprimer'" v-on:click="suppUser(index)"/>
            </td>

            
          </tr>

        </tbody>

      </table>


      <!-- MODAL Modifier  -->
      <div id="editModal" class="modal" v-if="modalModif" v-cloak>
            <div class="modal-content">
                <span class="close" @click="fermerModal">X</span>
                <h2>Modifier l'utilisateur :</h2>

                <form>
                    <label for="editNom">Nom :</label><br>
                    <input type="text" id="editNom" v-model="modifUser.nom"><br>

                    <label for="editPrenom">Prénom :</label><br>
                    <input type="text" id="editPrenom" v-model="modifUser.prenom"><br>

                    <label for="editSiret">Siret :</label><br>
                    <input type="number" id="editSiret" v-model="modifUser.siret"><br>

                    <label for="editAdresse">Adresse :</label><br>
                    <input type="text" id="editAdresse" v-model="modifUser.adresse"><br>

                    <label for="editVille">Ville :</label><br>
                    <input type="text" id="editVille" v-model="modifUser.ville"><br>

                    <br><br>
                    <input type="button" value="Enregistrer" class="btn btn-success" v-on:click="enregistrerModif" @click="fermerModal">
                </form>
            </div>
        </div>

        <!-- MODAL Supprimer -->
        <div id="suppressionUser" class="modal" v-if="modalSupp" v-cloak>
          <div class="modal-content">
            <span class="close" @click="fermerModal">X</span>
            <h2>Confirmation de suppression :</h2>
            <p>Etes-vous sûr de vouloir supprimer cet utilisateur ?</p>

            <div>
              <button class="btn btn-success" @click="supprimerUser">Oui</button>
              <button class="btn btn-danger" @click="fermerModal">Non</button>
            </div>

          </div>
        </div>
        

    </div>
    
  </div>

    
</template>

<script>
import ButtonUser from '@/components/ButtonUser.vue';
import { mapState } from 'vuex';

export default {

  components:{
    ButtonUser,
    ...mapState(['clients']),
  },


    data() {
        return {
            // usersData: [],
            clients: [...this.$store.state.clients],
            modalModif: false,
            modalSupp: false,

            modifUser: {
              nom: '',
              prenom: '',
              siret: '',
              adresse: '',
              ville: '',
            },

            userSupp : false,
        }
    },

    mounted() {
      // this.loadUsersData();
      
    },

    methods: {

      modifUtilisateur(index){
        
          // this.clients.push(this.modifUser)
          this.modifUser = {...this.clients[index]};
          this.modalModif = true;
        
      },

      enregistrerModif() {
        // vérif tous les champs
        if(this.modifUser.nom && this.modifUser.prenom && this.modifUser.siret && this.modifUser.adresse && this.modifUser.ville) {
          // récup index de utilisateur modifié
          const index = this.clients.findIndex(user => user === this.modifUser);

          // vérif si index = trouvé
          if(index !== -1) {
            // this.clients[index] = { ...this.modifUser };
            this.$set(this.clients, index, { ...this.modifUser });
            this.modalModif = false;
          }
          // vider modifUser pour prochain client
          this.modifUser = {};

      } else {
          alert('Veuillez remplir tous les champs.')
        }
      },

      suppUser(index) {
        this.userSupp = this.clients[index];
        this.modalSupp = true;
      },

      suppressionUser() {
        // vérif si user = défini + trouve son index
        if(this.userSupp) {
          const index = this.clients.findIndex(user => user === this.userSupp);

          if(index !== -1){
            // supp user du tableau clients
            this.clients.splice(index, 1);
            this.modalSupp = false;
            this.userSupp = null;
          }
        }
      },

      fermerModal() {
        // console.log('fermerModal ok');
        this.modalModif = false;
        this.modalSupp = false;
      },

      // let infosClients = localStorage.getItem('clients');

      // let clients = infosClients ? JSON.parse(infosClients) : [];

      // if(clients.length > 0) {
      //   this.infosClients = clients;
      // } else {
      //   alert('Utilisateur non trouvé.')
      // }

      // if(infosClients) {
      //   this.clients = JSON.parse(infosClients);
      // } else {
      //   alert('Utilisateur introuvable.')
      // }

      




    },

    // ESSAIE
    //   loadUsersData() {
    //     // récupération des données de l'utilisateur depuis le localStorage
    //     let infosUserData = localStorage.getItem('usersData');

    //     // condition ternaire pour vérifier si les données existent dans le localStorage
    //     // si existent, parse les données en tant que objet JSON, sinon initialise à un tableau vide
    //     let usersData = infosUserData ? JSON.parse(infosUserData) : [];

    //     // vérifie si le tableau d'utilisateurs a des éléments
    //     if(usersData.length > 0 ){
    //       // SI oui, met à jour l'état usersData avec les données
    //       this.usersData = usersData;
    //     } else {
    //       // si est vide, affiche alors une alerte pour dire que utilisateur non trouvé
    //       alert('Aucun utilisateur trouvé.')
    //     }

    //     if(infosUserData) {
    //       this.usersData = JSON.parse(infosUserData);
    //     } else {
    //       alert('Utilisateur introuvable.')
    //     }
    //   }

    // },




};
</script>

<style scoped>

h1{
  margin: 40px;
  color: white;
}

.container{
  margin-top: 20px;
  font-size: 14px;
  background-color: #dec5b1;
  color: #472e16;
  width: auto;
  height: auto;
}

table{
  margin: 15px auto;
  background-color:#5e3c1a;
  
}

.infos th {
  padding: 10px;
  background-color:#b98d68;
  color: #5e3c1a;
  text-align: center;
}

td {
  padding: 10px;
  background-color: #dec5b1;
}

p {
  text-align: left;
  margin: 10px;
  padding-left: 150px;
  color: #472e16;
  font-size: 15px;
  font-weight: bold;
}

/* modal */

.modal {
    display: flex; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    color: black;
    max-width: 400px;
    width: 100%;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    z-index: 2; 
}

[v-cloak] {
    display: none;
}

</style>
