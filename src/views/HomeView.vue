<template>
  <!-- <Filtrador/> Hasta arreglarlo, pa' -->
  <!-- <AccesosRapidos /> -->
  <!-- <ListCard /> -->
  <!-- hide-delimiter-background  -->
  <v-carousel
    :show-arrows="true"
    class="carousel_principal mt-1"
    cycle
    interval="4000"
    hide-delimiters
  >
    <v-carousel-item v-for="(item, i) in fotos" :key="i" cover :src="item.src">
    </v-carousel-item>
  </v-carousel>
  <v-row justify="center">
    <v-col align="center">
      <v-sheet width="1160" class="cuerpo pt-6">
        <!-- Inicio primeras imágenes -->
        <v-row>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img
                src="../assets/home/SUPERDEAL_CUADRADO_PRECIAZOS-ABRIL-PIQUEO.jpeg"
              >
              </v-img>
            </a>
          </v-col>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img src="../assets/home/image__70_.png"> </v-img>
            </a>
          </v-col>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img
                src="../assets/home/SUPERDEAL_CUADRADO_PRECIAZOS-ABRIL-PARAISO.jpeg"
              >
              </v-img>
            </a>
          </v-col>
        </v-row>
        <!-- Fin primeras imágenes -->

        <!-- Inicio Card Imágenes -->
        <v-row class="row_card_5 mt-5">
          <v-col cols="12">
            <v-sheet height="60" color="green">
              <v-row justify="space-between" align="center">
                <v-col cols="5" align="left" class="pl-10 pt-1">
                  <p class="text-uppercase oferton ma-0">Solo x h<span><v-icon>mdi-alarm</v-icon></span>y</p>
                </v-col>
                <v-col cols="2">
                  <v-row>
                      <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">
                        {{horas}}
                      </v-card>
                   
                    <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">
                        {{min}}
                      </v-card>
                    <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">
                        {{value}}
                      </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
            <v-row class="ma-0 mt-4 px-0" justify="space-between">
              <v-card
                width="230"
                elevation="0"
                v-for="(item, i) in card"
                :key="i"
              >
                <a href="#">
                  <v-img :src="item.src"> </v-img>
                </a>
              </v-card>
            </v-row>
          </v-col>
        </v-row>

        <!-- Slide Group -->
          <v-row class="ma-0 mt-5">
             <ListCard />
          </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import CardView from "../components/CardView.vue";
import ListCard from "../components/ListCard.vue";
import AccesosRapidos from "../components/AccesosRapidos.vue";
import Buscador from "../components/Buscador.vue";
import Filtrador from "../components/Filtrador.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    CardView,
    AccesosRapidos,
    Buscador,
    Filtrador,
    ListCard
  },
  data() {
    return {
      interval: {},
      value: 60,
      min:59,
      horas:23,
      fotos: [
        {
          src: require("/src/assets/carusel/Big_Banner_Desktop_Preciazos-05.jpg"),
        },
        { src: require("../assets/carusel/Big-Banner-camas-06.04.jpg") },
        {
          src: require("../assets/carusel/Big-Banner-Desktop-Preciazos-DORM.jpg"),
        },
        { src: require("../assets/carusel/Big-Banner-Licores-06.04.jpg") },
        { src: require("../assets/carusel/Big-Banner-Limpieza-04.04.jpg") },
        {
          src: require("../assets/carusel/Semana-Santa-Big-banner-parrilla-06.04.jpg"),
        },
      ],
      card: [
        {
          src: require("../assets/home/9f70d363-1504-4896-8d25-52ecfa4f102c.png"),
        },
        { src: require("../assets/home/SXH-LENOVO.jpeg") },
        { src: require("../assets/home/SXH-SAMSUNG-TV.jpeg") },
        { src: require("../assets/home/sxh3.png") },
        { src: require("../assets/home/WC_SXH_PRECIAZOS-ABRIL-08-IMACO.jpeg") },
      ],
    };
  },
  beforeUnmount () {
      clearInterval(this.interval)
    },
  mounted () {
      this.interval = setInterval(() => {
        if (this.value === 0) {
          return (this.value = 60,this.min -=1)
        }
        if (this.min === 0) {
          return (this.min = 59,this.horas -=1)
        }
        if (this.horas === 0) {
          return (this.horas = 23)
        }
        this.value -= 1
      }, 1000)
    },
  setup() {
    const store = useStore();
    const listadoProductos = computed(() => {
      return store.state.productos;
    });
    onMounted(async () => {
      await store.dispatch("traerProductos");
      await store.dispatch("filtrarProductos", "");
    });
    return { listadoProductos };
  },
};
</script>

<style>
.cuerpo img {
  border-radius: 10px;
}

.row_card_5 .v-sheet {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.oferton{
  font-size: 35px;
  font-weight: bolder;
  color: white;
}
</style>
