<!--Esto no es lo que corresponde pero le dare otra utilidad -->
<template>
<v-row>
  
    <router-link to="/filtroview">
      <v-btn tile color="success" @click="filtrado('comida')" class="mr-3">
        Comida
      </v-btn>
    </router-link>
    <router-link to="/filtroview">
      <v-btn tile color="success" @click="filtrado('bebida')" class="mr-3">
        Bebida
      </v-btn>
    </router-link>

    <router-link to="/filtroview">
      <v-btn tile color="success" @click="filtrado('electro')" class="mr-3">
        Electro
      </v-btn>
    </router-link>

      <v-btn tile color="success" @click="filtrado('')" class="mr-3">
        Todos
      </v-btn>
    
 
</v-row>

</template>

<script>
import { useStore } from "vuex";

export default {
  setup(){
      const store = useStore()
      const filtrado = (productoFiltrado) => {
          store.dispatch("filtrarProductos",productoFiltrado)
      }
      return {filtrado}
  }

};
</script>

<style>
</style>