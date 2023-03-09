<template>
  <!-- hacer el boton dinàmico en caso tenga el producto seleccionado en el carrito (de momento lo hago con la cantidad pero no funciona bien)-->
  <v-row justify="center">
    <v-sheet width="1400" class="pt-6">
      <v-row justify="center" class="ma-0">
        <!-- Imagenes del producto -->
        <v-col justify="center" lg=7 md=12 align="center">
          <v-card elevation="14" class="" height="634" width="800">
            <router-link to="/">
              <p class="pt-2 pb-6 pl-11 ma-0">Inicio</p>
            </router-link>



            <!-- Colocar zoom imagen vuetify al carrusel -->

             <v-carousel hide-delimiter-background>
              
              <v-carousel-item
                v-for="(producto, index) in productDetail.imagenes"
                :key="index"
                :src="producto"
                reverse-transition="fade-transition"
                transition="fade-transition"
                class="pt-4"
              ></v-carousel-item>
            </v-carousel> 
          </v-card>
        </v-col>

        <!-- Descripción del producto -->
        <v-col lg="5" md="12" align="center" >
          <v-card elevation="14" class="card_detalle_prod" height="634" width="550">
            <!-- Redes Sociales -->
            <v-row class="ma-0 row_icons" justify="end">
              <v-icon class="mx-1">mdi-facebook</v-icon>
              <v-icon class="mx-1">mdi-twitter</v-icon>
              <v-icon class="mx-1">mdi-email</v-icon>
            </v-row>

            <!-- Inicio Caract Producto -->
            <v-col align="left">
              <p class="titulo_prod font-weight-bold text-uppercase mb-0">
              {{ productDetail.title }}
            </p>
            <p class="subtitulo_prod">
              {{ productDetail.marca }} - {{ productDetail.tipo }}
            </p>
            <v-sheet height="90" >
              <p v-if="productDetail.cmr" class="precio_cmr_prod  ma-0 ml-5">S/. {{ productDetail.cmr }} UN</p>
              <p :class="productDetail.cmr?'precio_prod ma-0 ml-5' :'precio_cmr_prod ma-0 ml-5'">S/. {{ productDetail.precio }} UN</p>
              <p v-if="productDetail.descuento" class="precio_desc_prod ml-5">S/. {{ productDetail.descuento }} UN</p>
            </v-sheet>
            </v-col>
            <!-- Fin Caract Producto -->

            <v-divider class="mb-1"></v-divider>

            <!-- Inicio Botontes-->
            <v-row class="ma-0">
              <v-col cols="8" class="pl-5">
                <v-btn
                  v-if="!productDetail.cantidad"
                  height="70"
                  class="boton_add_carrito"
                  color="success"
                  @click="agregar(productDetail)"
                  block
                >
                  Agregar al carrito
                </v-btn>
                <v-row v-else class="ma-0" align="center">
                  <v-col cols="4" class="pa-0 ma-0">
                    <v-btn
                      height="70"
                      elevation="4"
                      block=""
                      color="success"
                      @click="restar(productDetail.id)"
                    >
                      <v-icon v-if="productDetail.cantidad > 1" size="60"
                        >mdi-chevron-left</v-icon
                      >
                      <v-icon v-else size="50">mdi-delete-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="4" class="pa-0 ma-0" align="center">
                    <span>{{ productDetail.cantidad }} UN</span>
                  </v-col>
                  <v-col cols="4" class="pa-0 ma-0">
                    <v-btn
                      height="70"
                      block=""
                      elevation="4"
                      color="success"
                      @click="sumar(productDetail.id)"
                    >
                      <v-icon size="60">mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2">
                <v-btn
                  color="success"
                  variant="text"
                  height="70"
                  class="boton_carrito_details"
                >
                  <v-icon>mdi-heart-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn
                  color="success"
                  variant="text"
                  height="70"
                  class="boton_carrito_details"
                >
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <!-- Fin Botontes-->

            <v-divider></v-divider>

            <!-- Extras -->

            <v-sheet>
              <p class="titulo_entrega ml-5">tipo de entrega</p>
              <!-- 1er Row -->
              <v-row class="ma-0" >
                <v-col cols="6" align="left">
                  <v-card
                    elevation="0"
                    outlined
                    shaped
                    height="80"
                    class="card_izquierda"
                  >
                    <v-card-text class="card_texto">
                      <v-row align="center">
                        <v-col cols="2" class="pa-0" align="center">                          
                          <v-icon v-if="productDetail.despacho" large> mdi-truck-delivery-outline </v-icon>
                          <v-icon v-else large color="grey"> mdi-car-off </v-icon>
                        </v-col>
                        <v-col cols="10">
                          <p class="ma-0 despacho">Despacho a Domicilio</p>
                          <p v-if="productDetail.despacho" class='ma-0 disponible'>Disponible</p>
                          <p v-else class='ma-0 no_disponible'>No Disponible</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6"  align="left" >
                  <v-card elevation="0" shaped height="80" class="card_derecha">
                    <v-card-text class="card_texto">
                      <v-row align="center">
                        <v-col cols="2" class="pa-0" align="center">
                          <v-img src="../assets/ceemeverde.png"></v-img>
                        </v-col>
                        <v-col cols="10" class="pt-0 pr-0">
                          <p class="ma-0">
                            Tus compras con CMR o Banco Falabella acumulan
                            puntos
                          </p>
                          <p class="ma-0 promocion">Ver promociones</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <!-- 2do row -->
              <v-row class="ma-0" justify="center">
                <v-col cols="6"  align="left">
                  <v-card
                    elevation="0"
                    outlined
                    shaped
                    height="80"
                    class="card_izquierda"
                  >
                    <v-card-text class="card_texto">
                      <v-row align="center">
                        <v-col cols="2" class="pa-0" align="center">
                          <v-icon v-if="productDetail.tienda" large> mdi-domain </v-icon>
                          <v-icon v-else large color="grey"> mdi-domain-off </v-icon>
                        </v-col>
                        <v-col cols="10">
                          <p class="ma-0 despacho">Retiro en tienda</p>
                          <p v-if="productDetail.tienda" class='ma-0 disponible'>Disponible</p>
                          <p v-else class='ma-0 no_disponible'>No Disponible</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6"  align="left">
                  <v-card elevation="0" shaped height="80" class="card_derecha">
                    <v-card-text class="card_texto">
                      <v-row align="center">
                        <v-col cols="2" class="pa-0" align="center">
                          <v-img src="../assets/ceemeverde.png"></v-img>
                        </v-col>
                        <v-col cols="10" class="pt-0 pr-0" >
                          <p class="ma-0">¿Aun no tienes tu CMR Visa?</p>
                          <p class="ma-0 subtitulo">
                            ¡Pídela ahora y obtén S/80 de descuento!
                          </p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-row>

  <!-- Inicio Complementos -->
  <v-row class="pt-8 ma-0" justify="center">
    <v-sheet width="1366" class="pt-6">
      <v-card elevation="1" class="pa-5 complementos">
        <p class="titulo_comp font-weight-bold">Complementa tu Compra</p>
        <v-row justify="space-between">
          <v-sheet
            v-for="prodComplemento in prodComple"
            :key="prodComplemento.id"
          >
            <Complementos :prod_Complem="prodComplemento" />
          </v-sheet>
        </v-row>
      </v-card>
    </v-sheet>
  </v-row>
  <!-- Inicio Complementos -->

  <!-- Inicio Descripción detalle_producto -->
  <v-row class="pt-8 ma-0" justify="center">
    <v-sheet width="1366" class="pt-6">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <p class="titulo_comp font-weight-bold">Descripción</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{ productDetail.title }} {{ productDetail.tipo }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-row>
  <!-- Fin Descripción detalle_producto -->

  <!-- Inicio Especificaciones detalle_producto -->
  <v-row class="pt-8 ma-0" justify="center">
    <v-sheet width="1366" class="pt-6">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <p class="titulo_comp font-weight-bold">Especificaciones</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="ma-0">
              <v-col :cols="existe ? '6' : '12'">
                <v-table theme="dark">
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in 19" :key="i">
                      <td>{{ item }}</td>
                      <td>{{ item }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col v-if="existe" :cols="existe ? '6' : ''">
                <v-img cover src="../assets/receta_de_cocina.jpeg"></v-img>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-row>

  <!-- Fin Especificaciones detalle_producto -->
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import Complementos from "../components/Complementos.vue";

//import ZoomOnHover from "vue-zoom-on-hover";
//Vue.use(ZoomOnHover);
export default {
  components: {
    Complementos,
  },
  data() {
    return {
      existe: true,
    };
  },
  setup() {
    const store = useStore();

    const productDetail = computed(() => {
      return store.state.productoDetalle;
    });
    const prodComple = computed(() => {
      return store.state.productoComplemento;
    });

    const agregar = (producto) => {
      store.dispatch("agregarCarrito", producto);
    };
    const sumar = (id_prod) => {
      store.commit("aumentarCanti", id_prod);
    };
    const restar = (id_prod) => {
      store.commit("disminuirCanti", id_prod);
    };

    return { productDetail, agregar, prodComple,restar,sumar };
  },
};
</script>

<style>
.card_detalle_prod {
  color: black !important;
}
.card_detalle_prod .titulo_prod {
  font-size: 34px !important;
  margin-left: 20px;
}
.card_detalle_prod .subtitulo_prod {
  color: #6b6d7e;
  font-size: 18px !important;
  margin-left: 20px;
}
  .card_detalle_prod .precio_prod {
    color: black !important;
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
  }
.card_detalle_prod .precio_cmr_prod {
  color: red !important;
  line-height: 34px;
  font-size: 28px;
  font-weight: 600;
}
.card_detalle_prod .precio_desc_prod {
  color: #6b6d7e !important;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  text-decoration: line-through #6b6d7e ;
}


.card_detalle_prod .boton_add_carrito {
  border-radius: 10px;
  font-size: 19px;
  font-weight: 600;
}
.card_detalle_prod .boton_carrito_details {
  border-radius: 10px;
  font-size: 35px;
  background-color: #f9f9f9;
  font-weight: 600;
}

.card_detalle_prod .titulo_entrega {
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
}

.card_detalle_prod .card_derecha {
  border: 1px solid green;
}

.card_detalle_prod .card_izquierda {
  background-color: #f9f9f9;
}

.card_detalle_prod .card_derecha .card_texto {
  font-size: 14px !important;
  font-weight: 600;
  line-height: 16px;
}
.card_detalle_prod .card_izquierda .card_texto {
  font-size: 14px !important;
  font-weight: 600;
  color: black;
}
.card_detalle_prod .card_derecha .card_texto .promocion {
  color: green !important;
  text-decoration: underline green;
}
.card_detalle_prod .card_derecha .card_texto .subtitulo {
  font-size: 11px;
}
.card_detalle_prod .card_izquierda .disponible {
  color: green !important;
  font-size: 12px;
}
.card_detalle_prod .card_izquierda .no_disponible {
  color: grey !important;
  font-size: 12px;
}

.card_detalle_prod .row_icons .v-icon:hover {
  color: green;
}
.card_detalle_prod .row_icons .v-icon {
  color: #6b6d7e;
}



.titulo_comp {
  font-size: 24px;
  color: #000;
}
</style>
