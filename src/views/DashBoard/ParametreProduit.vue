<template>
  <div>
    <h2 class="gestProd">
        Gestion des produits
    </h2> 
        <table class="tableau">
            <thead id="tab">
                <tr>
                    <th>Nom produit</th> 
                    <th>Prix produit</th>
                    <th>Quantité produit</th>
                    <th>Moq</th>
                    <th>Cat produit</th>
                    <th>Description</th>
                    <th>Image</th>
                    <Gbtn :id="gbtn" label="Ajout produit" @click="openModalajout" type="button"/>
                            
                        
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod,index) in produits" :key="index" >
                    <td>{{ prod.titre }}</td>
                    <td>{{ prod.prix }}</td>
                    <td>{{ prod.stock }}</td>
                    <td>{{ prod.moq }}</td>
                    <td>{{ prod.categorieId }}</td>
                    <td>{{ prod.description }}</td>
                    <td>{{ prod.image }}</td>
                    <td>
                        <Gbtn  label="Modifier" id="btn btn-primary actions" @click="openModal(index)"/>
                        <Gbtn label="Supprimer" @click="removeProduits(index)"  id="btn btn-danger actions">
                            <i class="fas fa-trash"></i> Supprimer
                        </Gbtn>
                        
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- MODAL  -->

        <div id="editModal" class="modal" v-if="modal" v-cloak>
            <div class="modal-content">
                <span class="close" @click="closeModal" >X</span>
                <h2>Modifier le produit :</h2>

                <form>
                    <label for="editNom">Nom produit:  </label><br>
                    <input type="text" id="editTitre" v-model="newValue.titre" ><br>

                    <label for="editPrix">Prix produit:</label><br>
                    <input type="number" id="editPrix" v-model="newValue.prix"><br>

                    <label for="editStock">Stock :</label><br>
                    <input type="number" id="editStock" v-model="newValue.stock"><br>

                    <label for="editMoq">Moq :</label><br>
                    <input type="number" id="editMoq" v-model="newValue.moq"><br>


                    <label for="fileImage">Image :</label><br>
                    <input class="inputImg" type="file" id="editImage" @change="fileChange" ><br>
                    
                    <label for="editMoq">Description :</label><br>
                    <input type="text" id="editMoq" v-model="newValue.description"><br>


                    <label for="editCategory">Catégorie produit:</label><br>
                    <select class="categ" id="editCategorie" v-model="newValue.categorieId">
                        <option value="1">Catégorie 1</option>
                        <option value="2">Catégorie 2</option>
                        <option value="2">Catégorie 3</option>
                        <option value="4">Catégorie 4</option>
                        <option value="5">Catégorie 5</option>
                    </select><br>

                    <br><br>
                    <Gbtn label="Enregistrer" value="Enregistrer" class="btn btn-success" @click="editProds"/>
                </form>
            </div>
        </div> 
        
        <!--  MODAL  -->
        <!-- MODAL AJOUT  -->

        <div id="editModalAjout" class="modal" v-if="modalAjout" v-cloak>
            <div class="modal-content">
                <span class="close" @click="closeModalajout" >X</span>
                <h2>Modifier le produit :</h2>

                <form>
                    <label for="editNom">Nom produit:</label><br>
                    <input type="text" id="editTitre" v-model="newValue.titre" ><br>

                    <label for="editPrix">Prix produit:</label><br>
                    <input type="number" id="editPrix" v-model="newValue.prix"><br>

                    <label for="editStock">Stock :</label><br>
                    <input type="number" id="editStock" v-model="newValue.stock"><br>

                    <label for="editMoq">Moq :</label><br>
                    <input type="number" id="editMoq" v-model="newValue.moq"><br>

                    <label for="editDescr">Description :</label><br>
                    <input type="text" id="editDescription" v-model="newValue.description"><br>


                    <label for="fileImage">Image :</label><br>
                    <input class="inputImg" type="file" id="editImage" @change="fileChange" ><br>



                    <label for="editCategories">Catégorie produit:</label><br>
                    <select class="categ" id="editCategorie" v-model="newValue.categorieId">
                        <option value="1">Catégorie 1</option>
                        <option value="2">Catégorie 2</option>
                        <option value="3">Catégorie 3</option>
                        <option value="4">Catégorie 4</option>
                        <option value="5">Catégorie 5</option>
                    </select><br>

                    <br><br>
                    <Gbtn label="Enregistrer" value="Enregistrer" id="btn btn-success" @click="caisse"/>
                </form>
            </div>
        </div> 
        
        <!--  MODAL AJOUT -->

         
  </div>
</template>
<script>

import Gbtn from '@/components/ButtonGen.vue'

export default {

  data()
    {
        return{
            
            
            newValue:{
                image: null, 
            },
            editIndex: -1,
            modal : false,
            modalAjout : false,
        }
    },  

    components:{
        Gbtn
    },

    computed: {
        produits() {
            return this.$store.getters.getproduits;
            },

        },

    methods:{

    


        caisse(){
            if(
                this.newValue.titre && this.newValue.prix && this.newValue.stock && this.newValue.categorieId && this.newValue.moq && this.newValue.image && this.newValue.description){ 
                this.produits.push(this.newValue)
                this.newValue = {} 
                this.saveToLocalStorage()            
                this.closeModalajout()
            }
        else {
            alert("Veuillez remplir tous les champs")
            }
    },
        removeProduits(index){
            if (confirm("Voulez-vous supprimer ce produit ?")){
                this.produits.splice(index,1)
                this.saveToLocalStorage()
            }
    },

        openModal(index){
            this.modal = true;
            this.editIndex = index;
            this.newValue = {...this.produits[index]};
            
    },
        openModalajout(index){
            this.modalAjout = true;
            this.editIndex = index;
            this.newValue = {...this.produits[index]};
            this.saveToLocalStorage
    },
        closeModalajout(){
            this.modalAjout = false;
            this.editIndex = -1;
            this.newValue={};
            this.saveToLocalStorage()
    },
        closeModal(){
            this.modal = false;
            this.editIndex = -1;
            this.newValue={};
            this.saveToLocalStorage()
            
    },
        
        editProds(){
            if(
              this.newValue.titre && this.newValue.prix && this.newValue.stock && this.newValue.categorieId && this.newValue.moq && this.newValue.image && this.newValue.description){ 
                    this.produits[this.editIndex] = this.newValue
                    this.newValue={}
                    this.saveToLocalStorage()          
                    this.closeModal() 
            }
            else{
                alert("Veillez remplir tous les champs")
            }
    },
        saveToLocalStorage(){
            localStorage.setItem("produits", JSON.stringify(this.produits))
    },

        fileChange(event) {
            const file = event.target.files[0];           
            this.newValue.image = file;
    },
},


    watch:{
        produits:{
            deep:true,
            handler(){
                
            }
        }
},
        created(){
        let storedProduits = localStorage.getItem("produits")
            if (storedProduits) {
                try{
                    this.produits = JSON.parse(storedProduits)
                }
                catch(e){
                    console.log(e)
                }   
                       
        }
        
}   

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.categ{
    margin-top: 5px;
    margin-bottom: 5px;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #8a6026;
    font-size: 20px;

}

input{
  
    margin-top: 5px;
    margin-bottom: 5px;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #8a6026;
    font-size: 20px;
    color: #000000;

}

.tableau{
  height: auto;
    margin-bottom: 200px;
    margin-left: 40px;
    margin-right: 40px;
}




.add-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    

}


.modalH2{
    color: #000000;
    font-size: 15px;
    margin-top: 0px;
}
label  {
    margin-top: 5px;
    color: #000000;
}

  td{
    
    padding: 10px;
    text-align: center;
    border: 1px solid #8a6026;
    border-radius: 5px;
    background-color: #f3f2f23d; 
    color:#000000
  }

.produitName{
    margin-top: 20px;
    width: 250px;
}


#tab{
    display: table-header-group;
    background-color: #d4ae794c;
    color: #020202;
    margin-top: 20px;
    margin-bottom: 200px;

}



th {
  
  padding: 10px;
  text-align: center;
  border: 1px solid #8a6026;
  border-radius: 10px;
}

h2 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 10px;
  color:#332410 
}

body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

main {
    text-align: center;
    padding: 45px;
}


main table {
    margin: auto;
    font-size: 14px;
}

main td, main th {
    padding: 8px;
    border-collapse: collapse;
}

main th {
    border-bottom: 1px solid lightgrey;
}

main p {
    margin-top: 0px;
}

main form input,
main form select {
    height: 24px;
    width: 240px;
    box-sizing: border-box;
}

main form label {
    font-size: 12px;
}

section.add-more {
    background-color: rgb(241, 241, 241);
    padding: 40px;
    margin-top: 40px;
}


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
    display: flex;
    flex-direction: column; 
    justify-content: center;
    background-color: #cca88cef;
    padding: 20px;
    padding-left: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.734);
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
    font-size: 30px;
}


#btn {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 0px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    border: none;
    margin-top:0px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}





#gbtn{
  margin-top: 0px;
    margin-left: 11px;
    margin-top: 0px;
}



.btn-danger {
    
    color: #fff;
    margin-left: 0px;
    padding: 0;
}



.btn-success {
    
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
}



[v-cloak]{
    display: none;
}



</style>