import { createStore } from 'vuex'


export default createStore({
  state: {
    //création d'un tableau de categorie produit
    categories: [
      { id: 1, name: 'Canapé' },
      { id: 2, name: 'Vase' },
      { id: 3, name: 'Tapis' },
      { id: 4, name: 'Console murale' },
      { id: 5, name: 'Lampe' },
      { id: 6, name: 'Applique murale' },
      { id: 7, name: 'Lustre' },
      { id: 8, name: 'Table' },
      { id: 9, name: 'Table de chevet' },
      { id: 10, name:'Chaises' },      
    ],

    //création d'un tableau de produits

   produits : [

      {
        id: 1,
        image: 'images/mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        stock: 10,
        categorieId: 5,
      },
  
      {
        id: 2,
        image: 'images/luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        stock: 100,
        categorieId: 2
      },
  
      {
        id: 3,

        image: 'images/tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 89.99,
        moq: 20,
        stock: 50,
        categorieId: 3
      },
  
      {
        id: 4,
        image: 'images/deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        stock: 30,
        moq: 20,
        categorieId: 4
      },
              
        {
          id: 5,
          image: 'images/mobilier-1.jpg',
          titre: 'Chaise en bois',
          description: 'Chaise en bois massif avec finition élégante.',
          prix: 99.99,
          moq: 5,
          stock: 30,         
          categorieId: 1
        },

        {
          id: 6,
          image: 'images/luminaire-2.jpg',
          titre: 'Lampe de table',
          description: 'Lampe de table avec un design moderne et éclairage ajustable.',
          prix: 79.99,
          moq: 10,
          stock: 100,
          categorieId: 2
        },
     
        {
          id: 7,
          image: 'images/tapis-3.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
        },
    
        {
          id: 8,
          image: 'img/deco-1.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
    
        {
          id: 9,
          image: 'images/mobilier-2.jpg',
          titre: 'Table à manger en bois',
          description: 'Table à manger en bois massif avec finition élégante.',
          prix: 299.99,
          moq: 5,
          stock: 10,
          categorieId: 1
        },
    
        {
          id: 10,
          image: 'images/luminaire-3.jpg',
          titre: 'Lampe moderne',
          description: 'Lampe avec un design moderne et éclairage ajustable.',
          prix: 129.99,
          moq: 10,
          stock: 100,
          categorieId: 2
        },
    
        {
          id: 11,
          image: 'images/tapis-1.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
          
        }, 
        {
          id: 12,
          image: 'images/deco-2.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
      
        {
          id: 13,

          image: 'images/mobilier-3.jpg',
          titre: 'Canapé en cuir',
          description: 'Chaise en bois massif avec finition élégante.',
          prix: 99.99,
          moq: 5,
          stock: 30,
          categorieId: 1
        },
      
        {
          id: 14,
          image: 'images/luminaire-4.jpg',
          titre: 'Lampe de table',
          description: 'Lampe de table avec un design moderne et éclairage ajustable.',
          prix: 79.99,
          moq: 10,
          stock: 100,
          categorieId: 2
        },
      
        {
          id: 15,
          image: 'images/tapis-4.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
        },
      
        {
          id: 16,
          image: 'images/deco-4.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
      
        {
          id: 17,

          image: 'images/mobilier-4.jpg',
          titre: 'Canapé tissus',
          description: 'Table à manger en bois massif avec finition élégante.',
          prix: 299.99,
          moq: 5,
          stock: 10,
          categorieId: 5
        },
      
        {
          id: 18,

          image: 'images/luminaire-5.jpg',
          titre: 'Lampe moderne',
          description: 'Lampe avec un design moderne et éclairage ajustable.',
          prix: 129,
          moq: 5,
          stock: 10,
          categorieId: 2
        },
        
          {
            id: 19,
            image: 'images/tapis-5.jpg',
            titre: 'Tapis en laine',
            description: 'Tapis doux en laine avec motif géométrique.',
            prix: 89.99,
            moq: 20,
            categorieId: 3,
            stock: 50,
            
          },
        
          {
            id: 20,
            image: 'images/deco-5.jpg',
            titre: 'Vase éthnique en argile',
            description: 'Vase éthnique en argile avec motifs gravés à la main.',
            prix: 49.99,
            moq: 20,
            categorieId: 4,
            stock: 30,
          }
      
          
    ],
    //créé un tableau de panier

    produitPanier: [],

    //créé un tableau de commandes
    commande: [],


    //créé un tableau de clients de 10 clients
    clients : [
      {
        id: 1,
        user: 2,
        nom: 'Dupont',
        prenom: 'Jean',       
        adresse: '1 rue de la Paix',
        codePostal: '75001',
        telephone: '0145879652',   
        ville: 'Paris',
        email: 'user1@webwares.com',
        password: 'user1',
        raisonSociale: 'Web Wares',
        siret: '15854569585852',  
        role: 'user',        
      },  
      {
        id: 2,
        user: 1,
        nom: 'Martin',
        prenom: 'Paul',       
        adresse: '2 rue de la Paix',
        codePostal: '75001',
        telephone: '0145879652',
        ville: 'Paris',
        email: 'user2@webwares.com',
        password: 'user2',
        raisonSociale: 'Web Wares',
        siret: '15854569585852',     
        role: 'user',        
      },
      {
        id: 3,
        user: 1,
        nom: 'Marte',
        prenom: 'Jean',       
        adresse: '2 rue du Github',
        codePostal: '75000',
        telephone: '0145879652',
        ville: 'La Merte',
        email: 'user3@webwares.com',
        password: 'user3',
        raisonSociale: 'Web Wares',
        siret: '15858569585852',     
        role: 'user',        
      },
      {
        id: 4,
        user: 1,
        nom: 'Chouffe',
        prenom: 'Franck',       
        adresse: '1664 rue de la Biére',
        codePostal: '75001',
        telephone: '0145879652',
        ville: 'Paris',
        email: 'user4@webwares.com',
        password: 'user4',
        raisonSociale: 'Web Wares',
        siret: '15558584135852',     
        role: 'user',        
      },
      {
        id: 5,
        user: 1,
        nom: 'ADMIN',
        prenom: 'ADMIN',       
        adresse: 'rue des ecoles',
        codePostal: '88130',
        telephone: '0145879785',
        ville: 'charmes',
        email: 'admin@admin.com',
        password: 'admin',
        raisonSociale: 'ADMIN',
        siret: '12345678912549',     
        role: 'admin',        
      },

      {
        id: 6,
        user: 1,
        nom: 'Morel',
        prenom: 'Jason',       
        adresse: '15 rue Warthunder',
        codePostal: '56895',
        telephone: '0145879652',
        ville: 'NoMANSLands',
        email: 'chars@decombat.com',
        password: 'user6',
        raisonSociale: 'Amiral',
        siret: '585959565658585',     
        role: 'user',        
      },
      

    ],

    numeroCommande: 1,

    online: false,
    onlineAdmin: false,


    //creer une nouvelle catégorie
    newValue: {},
    newValueCategory: {},



  },

  getters: {
    userCo: state => state.online,
    
    getProduitById: (state) => (id => {
      return state.produits.find(produit => produit.id === id);
    }),

    produits : state => state.produits,
    produitPanier : state => state.produitPanier,

    getproduits(state){
      let produits = localStorage.getItem('produits');
      state.produits = produits ? JSON.parse(produits) : [];
      return state.produits
    },
    getproduitPanier(state){
      let produits = localStorage.getItem('produitPanier');
      state.produits = produits ? JSON.parse(produits) : [];
      return state.produitPanier
    },

    getclients(state){
      let produits = localStorage.getItem('clients');
      state.produits = produits ? JSON.parse(produits) : [];
      return state.clients
    },    

    getcommande(state){
      let produits = localStorage.getItem('commande');
      state.produits = produits ? JSON.parse(produits) : [];
      return state.commande
    },
    getcategories: state => state.categories, 
  },


  mutations: {
    
// Mettre en ligne 

    mettreEnLigne(state, enLigne) {
      state.online = enLigne;
    },

    ajoutNouvClient(state, nouveauClient) {
      state.clients.push(nouveauClient);
    },

    activerModeAdmin(state, estAdmin) {
      state.onlineAdmin = estAdmin;
    },

    //incrementé numero de commande
    incrementCommande(state) {
      state.numeroCommande++;
    },
    // ajouter un produit au pannier
    addProduit(state, prod) {
    state.produitPanier.push(prod); 
  },

   removeProduit(state,produit){
      state.produitPanier = state.produitPanier.filter(prod=>
        produit.id !== prod.id

        )    

    },

    setProduitPanier(state, panier) {
      state.produitPanier = panier;
    }, 

    clearProduitPanier(state) {
      state.produitPanier = [];
    },

    transfertCommande(state) {
      state.commande = [...state.produitPanier];
      state.produitPanier = [];  
    },

 
      // Mutation pour ajouter un produit
           
      nouveauProduit(state, produits) {
        state.produits.push(produits);
        this.saveToLocalStorage()
      },
    
      // Mutation pour modifier un produit
      editProds(state, { index, updatedProduits }) {
        state.produits[index] = updatedProduits;
        this.saveToLocalStorage()
      },
    
      // Mutation pour supprimer un produit
      removeProduits(state, index) {
        state.produits.splice(index, 1);
        this.saveToLocalStorage()
      }, 
        // ajouter une catégorie
      addCategorie(state, newCategoryName,) {
        if(newCategoryName) {
          let maxId = 0;
          state.categories.forEach((category) => {
              if (category.categories > maxId) {
                  maxId = category.categories;
              
              }
          });
          state.categories.push({
              id: maxId + 1,
              name: newCategoryName
          });
        }
        else {
          alert('veuillez remplir tous les champs');
        }
      },
      openModalAddCategorie(state) {
        state.modalAddCategorie = true;
     
      },
  
      closeModalAddCategorie(state) {
        state.modalAddCategorie = false;
        state.editIndex = 0;
        state.newValueCategory = {};
      },
  
      // supprimer Catégorie
  
      deleteCategorie(states, categories) {
        if(confirm('Voulez-vous supprimer cette catégorie ?')){
          states.categories.splice(categories, 1);
  
        }
      },
  
      // modification Catégorie
  
      modifCategorie({commit},state) {
        if(this.newValueCategory.name) {
          state.categories.push(this.newValueCategory);
          this.newValueCategory = {};
          this.CloseModalCategory();
          commit('saveCategoriesToLocalStorage');
        }
        else {
          alert('veuillez remplir tous les champs');
        }
      }, 
  
      openModalCategory(state, categorie) {
        state.modal = true;
        state.editIndex = categorie;
        state.newValue = { ...state.categories[categorie] };
        
      },
      closeModalCategory(state) {
        state.modal = false;
        state.editIndex = 0;
        state.newValue = {};
      },
   
  
    // local storage catégorie
  
    saveCategoriesToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
  
    },
  
  
    // local storage produit
    saveProduitsToLocal() {
      localStorage.setItem('produits', JSON.stringify(this.produits));
  
      
  },
      

  },

  // local storage catégorie
    clientEnLigne(context, enLigne) {
      context.commit('mettreEnLigne', enLigne);
    },

    saveCategoriesToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.categories));

    },



    addCategory({ commit }, state) {
      if (state.newCategoryName.trim() !== '') {
        commit('addCategory', state.newCategoryName);
        commit('saveCategoriesToLocalStorage');
        state.newCategoryName = '';
        state.modalAddCategory = false;
      } else {
        alert('Veuillez entrer un nom de catégorie valide.');
      }
    },
    deleteCategory({ commit}, index) {
      if (confirm('Voulez-vous supprimer cette catégorie ?')) {
        commit('deleteCategory', index);
        commit('saveCategoriesToLocalStorage');
      }
    },



  // local storage produit
  saveProduitsToLocal() {
    localStorage.setItem('produits', JSON.stringify(this.produits));

    
},

nouveauProduit(state, produits) {
  state.produits.push(produits);
  this.saveToLocalStorage()
},

// Mutation pour modifier un produit
editProds(state, { index, updatedProduits }) {
  state.produits[index] = updatedProduits;
  this.saveToLocalStorage()
},

removeProduits(state, index) {
  state.produits.splice(index, 1);
  this.saveToLocalStorage()
}, 



  actions: {


      ajoutClient({ commit }, nouveauClient) {
        commit('ajoutNouvClient', nouveauClient);
      },

      modeAdmin({ commit }, estAdmin) {
        commit('activerModeAdmin', estAdmin);
      },

      clientEnLigne(context, enLigne) {
        context.commit('mettreEnLigne', enLigne);
      },

      addCategory({ commit }, state) {
        if (state.newCategoryName.trim() !== '') {
          commit('addCategory', state.newCategoryName);
          commit('saveCategoriesToLocalStorage');
          state.newCategoryName = '';
          state.modalAddCategory = false;
        } else {
          alert('Veuillez entrer un nom de catégorie valide.');
        }
      },
      deleteCategory({ commit}, index) {
        if (confirm('Voulez-vous supprimer cette catégorie ?')) {
          commit('deleteCategory', index);
          commit('saveCategoriesToLocalStorage');
        }
      },
    },
    
  modules: {
  }
})

