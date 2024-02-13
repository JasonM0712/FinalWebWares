<template>
    <div>
        <button v-bind:class="btnClass" @click="general">{{ label }}</button>
    </div>
</template>

<script>
export default {
    props:{ 
        label : String,
        bg: String,
    },

    methods:{
        general(){ 
            this.$emit('generalEvent')
        },
     },

    computed:{
      btnClass(){
        return{
          "add" : this.bg === "green",
          "supp" :  this.bg === "red",
        }

      }
     }

     

}


</script>

<style scoped>

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

</style>