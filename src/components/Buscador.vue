<template>
  <v-container fluid class="pa-0">
    <!-- Inicio imagenes verdes (sin completar) -->
    <v-card height="60" color="success" class="termi d-none d-lg-flex mb-0">
      <v-row justify="center" align="center" class="">
        <h1 class="text-uppercase font-weight-bold">
          * Aplican términos y condiciones
        </h1>
        <v-col cols="2" class="pt-2" align="center">
          <v-card height="35" width="200">
            <h3>VER MÁS</h3>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- Fin imagenes verdes -->

    <!-- Inicio enlaces externos -->
    <v-card
      class="mb-7 card-enlaces d-none d-lg-flex"
      height="24"
      elevation="0"
    >
      <v-row justify="space-between" class="px-6 ma-0">
        <v-col cols="5" class="py-0">
          <v-row class="ma-0 enlaces">
            <a href="https://www.cmrpuntos.pe/" target="_blank">CMRPuntos</a>
            <a
              href="https://www.bancofalabella.pe/"
              target="_blank"
              class="mx-2"
              >Banco</a
            >
            <a
              href="https://www.viajesfalabella.com.pe/"
              target="_blank"
              class="mx-2"
              >Viajes</a
            >
            <a
              href="https://web.segurosfalabella.com/pe/"
              target="_blank"
              class="mx-2"
              >Seguros</a
            >
            <a
              href="https://www.sodimac.com.pe/sodimac-pe/"
              target="_blank"
              class="mx-2"
              >Sodimac</a
            >
            <a
              href="https://www.falabella.com.pe/falabella-pe"
              target="_blank"
              class="mx-2"
              >Falabella</a
            >
            <a href="https://www.linio.com.pe/" target="_blank" class="mx-2"
              >Linio</a
            >
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row class="pa-0" justify="end">
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-phone </v-icon>
              <span class="hidden-sm-and-down">513-3355</span>
            </v-btn>
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-map-marker </v-icon>
              <span class="hidden-sm-and-down">Tiendas Cercanas</span>
            </v-btn>
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-help-circle-outline </v-icon>
              <span class="hidden-sm-and-down">Centro de ayuda</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!-- Fin enlaces externos -->

    <!-- inicio row buscador -->
    <v-row class="d-none d-lg-flex">
      <v-col cols="12" class="pa-0 px-3">
        <v-row align="center" class="mb-5 px-7" justify="space-between">
          <!-- Inicio Logo tottus-->
          <router-link to="/" class="mr-1 ml-3">
            <v-img
              src="../assets/tottus.png"
              alt="Logo Tottus"
              aspect-ratio="1.7"
              contain
              height="52"
              width="170"
            >
            </v-img>
          </router-link>
          <!-- Fin Logo tottus-->

          <!-- Inicio Buscador -->
          <v-sheet width="650" class="buscador ml-6 py-1">
            <v-card width="600" variant="outlined" class="card_buscador">
              <v-row align="center" class="pr-3">
                <v-col cols="3" class="pr-0 py-5 col-card_buscador">
                  <v-select
                    density="compact"
                    v-model="select"
                    :items="items"
                    dense
                    variant="plain"
                  ></v-select>
                </v-col>
                <v-col class="config pl-6 col-2-card_buscador">
                  <v-row justify="center" align="center" class="pl-8">
                    <v-text-field
                      class="text-field"
                      placeholder="¿Qué estás buscando?"
                      persistent-placeholder
                      variant="plain"
                      @keyup="procesarInput"
                      v-model="texto"
                    ></v-text-field>
                    <v-btn color="white" size="small">
                      <v-icon size="25">mdi-magnify</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-sheet>
          <!-- fin Buscador -->

          <!-- Inicio Boton Lugar -->
          <v-col
            cols="4"
            class="pa-0 btn_regist d-none d-lg-none d-xl-flex"
            align="center"
          >
            <v-row justify="space-between" class="align-content-start">
              <v-btn
                variant="outlined"
                prepend-icon="mdi-store"
                class="pl-3"
                width="350"
                height="47"
                left
              >
                Tottus Atocongo
              </v-btn>
              <!-- Fin botón lugar -->

              <!-- Inicio boton Login -->

              <v-btn-toggle divided class="">
                <v-btn color="success">Iniciar Sesion</v-btn>
                <v-btn>Registrarse</v-btn>
              </v-btn-toggle>
            </v-row>
            <!-- Fin Boton Login -->
          </v-col>

          <!-- Inicio icon carrito -->

            <BtnCarrito :cantidad ="cantidad" :borde ="borde" :visible="'d-none d-lg-flex'"/>

          <!-- Fin icon Carrito -->
        </v-row>
      </v-col>
    </v-row>
    <!-- Fin row buscador -->

    <!-- Inicio filtros internos -->

    <!-- ************ UTITLIZAR EL DIALOG COMPONENT , quitar el justify************ -->
    <v-row justify="space-between" class="ma-0 d-none d-lg-flex">
      <v-btn
        class="pa-0"
        variant="text"
        v-for="(item, index) in items_botton"
        :key="index"
      >
        <div class="text-center pa-0">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn class="px-2" color="black" v-bind="props">
                {{ item }}
              </v-btn>
            </template>
            <v-card min-width="300">
              <v-list>
                <v-list-item
                  prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                  title="John Leider"
                  subtitle="Founder of Vuetify"
                >
                  <template v-slot:append>
                    <v-btn
                      variant="text"
                      class="text-red"
                      icon="mdi-heart"
                    ></v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-btn>
    </v-row>
    <!-- Fin filtros internos -->

    <v-sheet height="50" color="" class="d-md-flex d-lg-none">
      <v-row
        class="ma-0 "
        justify="space-between"
        align="center"
      >
        <v-icon> mdi-menu</v-icon>
        <router-link to="/" class="mr-1 ml-3">
          <v-img
            src="../assets/tottus.png"
            alt="Logo Tottus"
            aspect-ratio="1.7"
            contain
            height="52"
            width="170"
          >
          </v-img>
        </router-link>
        <v-sheet color="transparent">
          <v-row class="ma-0">
             <BtnCarrito :cantidad ="cantidad" :borde ="'0'" :visible="'icon_carrito d-md-flex d-lg-none'"/>

           <v-avatar size="40">
                  <v-icon color="green">mdi-account</v-icon>
                </v-avatar>
          </v-row>
        </v-sheet>
      </v-row>
    </v-sheet>

    <v-sheet height="50" class="d-md-flex d-lg-none buscar-reponsive">
      <v-text-field
      variant="plain"
      prepend-icon="mdi-magnify"
        counter="25"
        hint="This field uses counter prop"
      ></v-text-field>
    </v-sheet>

    <v-sheet height="50" class="d-md-flex d-lg-none">
      <v-btn
        variant="text"
        block
      >
       <v-row justify="space-between">
         <v-col cols="8">
            <v-row class="ma-0" justify="start">
              <v-icon class="mr-5">mdi-store</v-icon>
              Tottus Atocongo
            </v-row>
         </v-col>
         <v-col cols="1" align=end>
           <v-icon>mdi-chevron-right</v-icon>
         </v-col>
       </v-row>
      </v-btn>
    </v-sheet>

    <AccesosRapidos class="d-md-flex d-lg-none" />

  </v-container>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AccesosRapidos from "./AccesosRapidos.vue";
import BtnCarrito from "./botones/BtnCarrito.vue";

export default {
  components: {
    AccesosRapidos, BtnCarrito
  },

  setup() {
    const texto = ref("");
    const store = useStore();
    const borde = "1px solid green !important"
    const items = store.state.productos;
    const cantidad = computed(() => store.getters.totalCantidad);
    const procesarInput = () => {
      store.dispatch("filtrarPorInput", texto.value);
      //console.log(texto.value)
    };

    return { texto, procesarInput, items, cantidad ,borde };
  },



  data() {
    return {
      select: ["Todas las categorías"],
      items: [
        "Todas las categorías",
        "Supermercado",
        "Semana Santa",
        "Bebé y Niños",
        "Electrodomésticos",
        "Tecnología",
        "Dormitorio",
        "Hogar",
        "Deportes",
        "Ropa",
        "Preciazos",
      ],
      items_botton: [
        "Supermercado",
        "Semana Santa",
        "Bebé y Niños",
        "Electrodomésticos",
        "Tecnología",
        "Dormitorio",
        "Hogar",
        "Deportes",
        "Ropa",
        "Preciazos",
      ],
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
v-toolbar {
  padding: 0 !important;
}
.card-enlaces {
  background-color: #eeeeee;
  border-radius: 0;
}
.card-enlaces .btn-icon {
  height: 24px !important;
  font-size: 12px;
  border-radius: 0;
  text-transform: capitalize;
}
.card-enlaces .btn-icon:hover {
  opacity: 0.4;
  background-color: #eeeeee;
}

.enlaces a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
.enlaces a:hover {
  opacity: 0.4;
}
.buscador .v-field__field {
  padding: 0 !important;
  min-height: 20px !important;
  width: 200px !important;
}

.buscador .v-field__input {
  color: #0b0c4e !important;
  width: 300px !important;
  padding-inline-end: 0 !important;
  padding-top: 0 !important;
}
.buscador .v-input__details {
  padding: 0 !important;
  margin: 0 !important;
  grid-area: null !important; /* verificar esto*/
}
.buscador .v-input__append {
  align-content: center !important;
  padding-top: 0 !important;
  margin: 0px !important;
}
.buscador .v-input--horizontal {
  grid-template-areas: 0 !important;
  grid-template-columns: 0 !important;
  grid-template-rows: 0 !important;
}

.buscador .v-input--horizontal {
  grid-template-areas: none !important;
}
.config .v-input {
  display: block;
}
.config .v-input .v-input__details {
  min-height: 0px !important;
  height: 0px !important;
}
.config .v-btn {
  background-color: #4caf50;
  height: 45px !important;
  width: 30px !important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 !important;
  margin: 0 !important;
}

.btn_regist .v-btn-group .v-btn {
  background-color: #4caf50;
  color: white;
  padding-left: 8px;
  padding-right: 8px;
}
.boton .v-btn__overlay {
  text-align: left !important;
}

.v-sheet .v-card {
  color: #4caf50;
}

.v-sheet .v-card .v-field__append-inner .mdi-menu-down {
  color: #0b0c4e;
}

.termi .v-card {
  background-color: #1b5e20;
  color: white !important;
}



.card_buscador .v-messages {
  min-height: 0px;
}
.card_buscador .v-field__append-inner {
  margin: 0 !important;
  padding: 0 !important ;
  height: 24px !important;
}
.card_buscador .v-field {
  padding-right: 0 !important;
  border-right: 1px solid rgb(198, 199, 196);
}

.card_buscador .v-field__field {
  width: 150px !important;
}
.card_buscador .col-card_buscador {
  padding-top: 23px !important;
  padding-bottom: 22px !important;
}
.card_buscador .col-card_buscador .v-field__input input {
  size: 0 !important;
  height: 0 !important;
}
.card_buscador .col-card_buscador .v-select__selection-text {
  font-size: 14px;
  padding-left: 5px;
  height: 18px !important;
  text-align: center !important;
}

.card_buscador .col-2-card_buscador .v-field__input input {
  width: 300px !important;
}


.buscar-reponsive {
  border: 1px solid #4caf50;
  border-radius: 10px;
}
.buscar-reponsive .v-input__prepend{
  padding-top: 12px;
  padding-left: 5px;
}

.buscar-reponsive .v-messages{
  min-height: 0 !important;
}
.buscar-reponsive .v-field{
  height: 30px;
  width: 600px;
  padding-top: 10px;
}
.buscar-reponsive .v-input .v-input__details{
  min-height: 0 !important;
  margin: 0 !important;
  height: 0 !important;
  padding-top: 0;
}
.buscar-reponsive .v-field__field{
  width: 600px;
  min-height: 30px !important;
  padding-top: 0;
  padding-bottom: 0;
}
.buscar-reponsive .v-field__input{
  width: 600px !important;
  padding-top: 0;
  height: 30px;
}
</style>
