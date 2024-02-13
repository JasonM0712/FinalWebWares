<template>

  <div class="background">
    
    <section class="gestCategory">
      <h2> Gestion des categories</h2>
      <button type="button" class="buttonAddCateg" @click="openModalAddCategorie">Ajouter</button>
      <!-- modal ajout -->
      <section>
        <div id="addModalCategory" class="modalAddCategory" v-if="modalAddCategory" v-cloak>
          <div class="Addmodal-contentCategory">
            <span class="closeCategory" v-on::click="closeModalAddCategorie">&times;</span>
            <h2>Ajouter une categorie</h2>
            <form>
              <div>
                <label for="name">Nom de la categorie</label>
                <input type="text" id="name" v-model="this.newCategoryName">
              </div>
              <button class="btnModalModifCategory" @click.prevent="addCategorie">Ajouter</button>
            </form>
          </div>
        </div>
      </section>

      <div class="cardAddCategory">
        <h3> Liste des categories</h3>
        <div class="TableauCard">
          <div class="cardModifcategory" v-for="(categories, index) in categories" :key="categories.id">
            <p>{{ categories.name }}</p>
            <button class="removeCategory" type="button"  @click="deleteCategorie(index)">Supprimer</button>
            <button class="modifCategory" type="button"  @click="openModalCategory(index)">Modifier</button>
          </div>
        </div>
      </div> 
    </section>
    <!-- Modal modification -->
    <section>
      <div id="editModalCategory" class="modalCategory" v-if="modal" v-cloak>
        <div class="modal-contentCategory">
          <span class="closeCategory" v-on::click="closeModalCategory">&times;</span>
          <h2>Modifier la categorie</h2>
          <form @submit.prevent="modifCategorie">
            <div>
              <label for="name">Nom de la categorie</label>
              <input type="text" id="name" v-model="categories[index].name">
            </div>
            <button type="submit" class="btnModalModifCategory" @click="modifCategorie">Modifier</button>

          </form>
        </div>

      </div>

    </section>
  </div>

</template>

<script>


export default {

data(){
return{
  modalAddCategory: false,
  modal: false,
  index: 1,
  editCategory: -1,
  newCategoryName: '',
}
},

components: {

},

methods: {
addCategorie(){
  this.$store.commit('addCategorie', this.newCategoryName);  
  this.newCategoryName = '';
  this.modalAddCategory = false;
  this.$store.commit('saveCategoriesToLocalStorage');
},


openModalAddCategorie(){
  this.modalAddCategory = true;
},

closeModalAddCategorie(){
  this.$store.commit('closeModalAddCategorie');
  this.modalAddCategory = false;
  this.newCategoryName = '';
},

deleteCategorie(index){
  this.$store.commit('deleteCategorie', index);
},
openModal(index){
  this.$store.commit('openModalCategory', index) ;
},
modifCategorie(index){
  this.$store.commit('ModifCate', index);
  this.modal = false;

},
closeModalCategory(){
  this.$store.commit('closeModalCategory');
  this.modal = false;
},
openModalCategory(index){
  this.modal = true;
  this.index = index;
}, 
},

computed: {
categories() {
  return this.$store.state.categories; 
}



  },
  mutations: {
    addCategorie(state, newCategoryName){
      state.categories.push({name: newCategoryName});
      this.$store.commit('saveToLocalStorage');
    },
    deleteCategorie(state, index){
      state.categories.splice(index, 1);
      this.$store.commit('saveCategoriesToLocalStorage');
    },
    openModalCategory(state, index){
      state.index = index;
      state.modal = true;
    },
    ModifCate(state, index){
      state.categories[state.index].name = state.categories[index].name;
      this.$store.commit('saveCategoriesToLocalStorage');
    },
    closeModalCategory(state){
      state.modal = false;
    },
    closeModalAddCategorie(state){
      state.modalAddCategory = false;
    },

    saveCategoriesToLocalStorage(){
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },

    
  }
}




  



</script>

<style scoped>
h2 {

margin-top: 50px;
}
.buttonAddCateg {
background-color: #5e3c1a;
color: white;
border: solid 1px white;
border-radius: 10px;
font-size: 18px;
padding: 10px;
margin-left: 20px;
margin-top: 20px;
}

.buttonAddCateg:hover {
background-color: #b98d68;
color: #5e3c1a;
}
.background {
background-color: #cca88c81;
padding: 20px;
margin-top: 50px;
margin-left: 20px;
margin-right: 20px;
border-radius: 10px;
color: #5e3c1a;
}
.cardModifcategory{
display: block;
margin: 0 auto;
padding: 10px;
padding-top: 0px ;
border: solid 1px #5e3c1a;
border-radius: 10px;
background-color: #b98d68;
color: #5e3c1a;
justify-content: center;
align-items: center;
max-width: 100% ;
height: 200px;
width: 350px;
margin-top: 20px; ;
text-align: center;
margin-left : 20px ;
}

.TableauCard {
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
justify-content: center;
padding:50px ;
}

.cardAddCategory {
display: block;
margin: 0 auto ;
padding: 20px;
border: solid 1px white;
border-radius: 10px;
background-color: #5e3c1a;
color: white;
justify-content: center;
align-items: center;
width: 1200px;
}
.modalAddCategory {
display:  flex; 
position: fixed; 
z-index: 1; 
left: 0;
top: 0;
width: 100%; 
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4); 
padding-top: 60px;
}

.Addmodal-contentCategory {
background-color: #5e3c1a;
margin: 5% auto; 
padding: 20px;
border: 1px solid #888;
width: 80%; 
color: white;
border-radius: 10px;
}

.modalCategory {
display: flex; 
position: fixed; 
z-index: 1; 
left: 0;
top: 0;
width: 100%; 
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4); 
padding-top: 60px;
}

.modal-contentCategory {
background-color: #5e3c1a;
margin: 5% auto; 
padding: 20px;
border: 1px solid #888;
width: 80%; 
color: white;
border-radius: 10px;
}

.closeCategory {
cursor: pointer;
}


.closeCategory {
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
}

.gestCategory {
margin-top: 20px;
}

.gestCategory button {
flex-direction: row;
/* border: solid 1px white ; */
border-radius: 10px;
font-size: 18px;
padding: 10px;
margin-left: 20px;
color: white;
}

/* .modifCategory{
background-color: blue;
}

.removeCategory{
background-color: red;
}  */

.btnModalModifCategory{
cursor: pointer;
background-color: #5e3c1a;
color: white;
border: solid 1px white;
border-radius: 10px;
font-size: 18px;
padding: 10px;
margin-left: 20px;
margin-top: 20px;
}

.btnModalModifCategory:hover{
background-color: #b98d68;
color: #5e3c1a;
}

input[type=text] {
width: 50%;
padding: 12px 20px;
margin: 8px 0; 
margin-left: 20px;
display: inline-block;
border-radius: 4px;
box-sizing: border-box;

  margin-top: 50px;
}

button {
    background-color: #b98d68;
    color: #5e3c1a;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 5px;
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

</style>