<template>

  <div>
    <UserForm @submit.prevent="connexionUtilisateur"/>
  </div>
  
  
  
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  
  export default {
    components: {
      UserForm,
    },

    methods: {
      connexionUtilisateur(utilisateur){
        // récup utilisateur existants depuis localStorage
        let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

        // vérif si utilisateur existe
        let utilisateurExist = usersData.find(user => user.email === utilisateur.email && user.password.password === utilisateur.password.password)

        if(utilisateurExist) {
          localStorage.setItem('userData', JSON.stringify(utilisateurExist));
          console.log('Utilisateur connecté !');
        } else {
          alert('Veuillez vérifier vos informations de connexion ou inscrivez vous.');
        }

        // localStorage.setItem('userData', JSON.stringify(utilisateur));
        // console.log('Utilisateur connecté !');
      }
    }
  
  }
  </script>
  
  <style scoped>
  .formulaire{
    width: 600px;

  }
  
  
  </style>
