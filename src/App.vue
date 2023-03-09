<template>
  <v-app>
    
    <v-app-bar height="205" class="pa-0" >
     <Buscador/> 
    </v-app-bar>

    <v-main>      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Buscador from "./components/Buscador.vue";

export default {
  name: 'App',
  components: {
    Buscador,
  },
  data: () => ({
    //
  }),
}
</script>

<style>
header{
  height: 210px !important;
}
.v-toolbar__content{
  padding-top: 0 !important;
}
</style>