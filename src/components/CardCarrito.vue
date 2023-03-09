<template>
  <v-row align="center" class="pa-3 px-6 mt-2" justify="space-between">
    <!-- Inicio Producto Caracteristicas -->
    <v-sheet width="400">
      <v-row class="ma-0 mb-3">
        <router-link to="/detalle" @click="detalle(prodCarrito)">
          <v-sheet width="60" height="60">
            <v-img cover="" :src="prodCarrito.imagenes[0]" alt="img_prod">
            </v-img>
          </v-sheet>
        </router-link>
        <v-sheet height="63" class="sheet_carrito pl-3">
          <div class="text-titulo">{{ prodCarrito.title }}</div>
          <div class="text-marca">{{ prodCarrito.marca }}</div>
          <div class="text-precio">S/. {{ prodCarrito.precio }}UN</div>
        </v-sheet>
      </v-row>
    </v-sheet>
    <!-- Final Producto Caracteristicas -->

    <v-sheet width="350">
      <v-row class="ma-0" justify="space-between">
          <!-- Inicio botones sumar y restar-->
      <v-card width="160" height="35" elevation="1">
        <v-row class="ma-0" align="center">
          <v-col cols="4" class="pa-0 ma-0">
            <v-btn
              height="35"
              elevation="4"
              block=""
              color="success"
              @click="restar(prodCarrito.id)"
            >
              <v-icon v-if="prodCarrito.cantidad > 1" size="30"
                >mdi-chevron-left</v-icon
              >
              <v-icon v-else size="30">mdi-delete-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" class="pa-0 ma-0" align="center">
            <span>{{ prodCarrito.cantidad }} UN</span>
          </v-col>
          <v-col cols="4" class="pa-0 ma-0">
            <v-btn
              height="35"
              block=""
              elevation="4"
              color="success"
              @click="sumar(prodCarrito.id)"
            >
              <v-icon size="30">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <!-- Final botones sumar y restar-->

      <!-- Inicio Total por producto -->
      <v-sheet cols="2" align="end" class="pr-0">
        <v-row v-if="prodCarrito.cmr" class="ma-0 imagen_cmr" justify="end">
          <v-img
            class="cemeverde mr-5"
            width="50"
            src="../assets/cmr-debito.svg"
          >
          </v-img>
          <p class="text_price_desc mb-0">
            S/. {{ prodCarrito.cmr * prodCarrito.cantidad }}.00
          </p>
        </v-row>
        <p
          :class="prodCarrito.cmr ? 'text_price mb-0' : 'text_price_desc mb-0'"
        >
          S/. {{ prodCarrito.precio * prodCarrito.cantidad }}.00
        </p>
      </v-sheet>
      <!-- Final Total por producto -->
      </v-row>
      
    </v-sheet>
  </v-row>

  <!-- Inicio Botones inferiores -->
  <v-card
    class="pa-4 botones-picker"
    outlined
    style="background-color: #f4f4f5"
  >
    <v-row justify="center">
      <v-col cols="12">
        <v-spacer></v-spacer>
        <v-btn color="success" class="mx-10" variant="text">
          <v-icon start> mdi-reload </v-icon>
          <span>No Reemplazar</span>
          <v-icon end> mdi-chevron-right </v-icon>
        </v-btn>
        <v-btn color="success" class="ml-10" variant="text">
          <v-icon start> mdi-note-outline</v-icon>
          <span>Dejar nota al Picker</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
  <!-- Fin Botones inferiores -->
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["prodCarrito"],
  setup() {
    const store = useStore();
    const sumar = (id_prod) => {
      store.commit("aumentarCanti", id_prod);
    };
    const restar = (id_prod) => {
      store.commit("disminuirCanti", id_prod);
    };
    const detalle = (producto) => {
      store.commit("agregarDetalleProducto", producto.id);
      store.dispatch("agregarComplemento", producto.tipo);
    };

    return { sumar, restar, detalle };
  },
};
</script>

<style>
.sheet_carrito .text-titulo {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}
.sheet_carrito .text-marca {
  font-size: 14px;
  text-transform: uppercase;
  color: #6b6d7e;
}
.sheet_carrito .text-precio {
  font-size: 12.8px;
  color: #6b6d7e;
}

.text_price_desc {
  font-size: 14px;
  color: red;
}
.text_price {
  font-size: 14px;
  color: black !important;
}

.botones-picker .v-btn {
  font-weight: 700 !important;
  font-size: 14px;
}
</style>
