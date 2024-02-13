<template>
    <div>
      <button :class="btnClass" :style="btnStyle">{{ label }}</button>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          label: String,
          
      },
  
      computed: {
        btnClass() {
          return {
            'btnModif': this.label === 'Modifier',
            'btnSupp': this.label === 'Supprimer',
          };
        },
  
        btnStyle() {
          return {};
        }
      }
  
  }
  </script>
  
  <style scoped>
  
  button{
          background-color: #b98d68;
          color: #5e3c1a;
          border: none;
          border-radius: 5px;
          margin-top: 5px;
          width: 100px;
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
  