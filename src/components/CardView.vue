<template>
  <v-card width="190" height="387" elevation="0" class="pa-2 card_principal_producto">

    <!-- Inicio Imagen -->
    <router-link to="/detalle" @click="detalle(producto)">
    <v-sheet width="170" height="145" class="ma-0 pt-1 pb-3 ">
      <v-img
        width="150"
        :src="producto.imagenes[0]"
        alt="Imagen"
        cover=""
      ></v-img>
    </v-sheet>
    </router-link>
    <!--Fin imagen-->
    
    <!-- Inicio Cuerpo -->
    <v-sheet width="170" height="140">
      <v-sheet height="60">
        <p class="ma-0 card_titulo">{{ producto.title }}</p>
      <p class="ma-0 card_subtitulo">{{ producto.marca }} - {{ producto.tipo }}</p>
      </v-sheet>
      <v-sheet height="60" >
        <p v-if="producto.cmr" class="ma-0 card_precio_cmr">
        s/. {{ producto.cmr }} UN 
      </p>
      <p :class="producto.cmr ? 'card_precio_principal ma-0': 'card_precio_cmr ma-0'">s/. {{ producto.precio }} UN</p>  
      <p v-if="producto.descuento" class="card_precio_descuento ma-0">s/. {{ producto.descuento }} UN</p> 
      </v-sheet>
    </v-sheet>
      <v-row class="ma-0">
        <v-sheet height="26">
        
        <v-icon v-if="producto.tienda" class="delivery"> mdi-domain </v-icon>
        <v-icon v-else class="delivery_off"> mdi-domain-off </v-icon>
        
        <v-icon v-if="producto.despacho" class="delivery"> mdi-truck-delivery-outline </v-icon>
        <v-icon v-else class="delivery_off"> mdi-car-off </v-icon>
        </v-sheet>
      </v-row>
        <v-sheet height="30">
          <v-btn
          block
          class="mt-3 mb-2"
          color="success"
          @click="agregar(producto)"
          >
          Agregar carrito
          </v-btn>
        </v-sheet>
        <!-- Agregar el xsmall btn-->
        
    <!-- Fin Cuerpo-->

  </v-card>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["producto"],
  setup() {
    const store = useStore();
    const agregar = (producto) => {
      store.dispatch("agregarCarrito", producto);
    };
    const detalle = (product_buscado) => {
      store.commit("agregarDetalleProducto", product_buscado.id);
      store.dispatch('agregarComplemento', product_buscado.tipo)
    };

    return { agregar, detalle };
  },
};
</script>

<style>
.v-img:hover {
  cursor: pointer;
}
.card_principal_producto:hover{
  border: 1px solid #c4c3c3;
  box-shadow: 1px 1px 5px#c4c3c3 !important;
}
.card_principal_producto{
  border: 1px solid transparent;
}
.card_principal_producto .card_titulo{
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  text-align: initial;
  text-transform: uppercase;
}
.card_principal_producto .card_subtitulo{
  font-size: 10px;
  font-weight: 500;
  color:#6b6d7e;
  text-align: initial;
  text-transform: uppercase;
}

.card_principal_producto .card_precio_cmr{
  color: red;
  font-size: 16px;
  font-weight: 400;
  text-align: initial;
  height: 16px;
}
.card_principal_producto .card_precio_principal{
  color: black;
  font-size: 16px;
  font-weight: 400;
  text-align: initial;
  height: 16px;
}
.card_principal_producto .card_precio_descuento{
  color: #6b6d7e;
  font-size: 10px;
  font-weight: 400;
  text-align: initial;
  height: 10px;
  text-decoration: line-through #6b6d7e;
}
.card_principal_producto .delivery{
  font-size: 25px;
  margin-right: 20px;
  color: #4caf50 !important;
}
.card_principal_producto .delivery_off{
  font-size: 25px;
  margin-right: 20px;
  color: grey !important;
}
</style>
