<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mt-3">
        <v-row justify="space-between" align="center">
          <v-col cols="3">
            <v-breadcrumbs :items="items" class="ma-0">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-pagination v-model="page" class="mt-5" :length="10">
            </v-pagination>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="2">
      <v-card class="my-4 ml-0 pa-2 pl-4">
        <div class="text-caption">Tecnología</div>
        <div class="text-title font-weight-bold text-uppercase">
          {{ productos[0].tipo }}
        </div>
        <div class="text-caption">({{ productos.length }} Resultados)</div>
      </v-card>
      <v-card class="my-4 ml-0 pa-2 pl-4">
        <div class="text-title font-weight-bold text-uppercase">filtro</div>
      </v-card>

      <!-- inicio filtros -->
      <v-card class="my-4 ml-0 pa-2 pl-4" height="500">
        <v-btn variant="text" block class="text-button my-3">
          <v-row justify="space-between">
            marca <span><v-icon>mdi-chevron-right</v-icon></span>
          </v-row>
        </v-btn>
        <v-btn variant="text" block class="text-button my-3">
          <v-row justify="space-between">
            contenido <span><v-icon>mdi-chevron-right</v-icon></span>
          </v-row>
        </v-btn>
        <v-btn variant="text" block class="text-button my-3">
          <v-row justify="space-between">
            formato <span><v-icon>mdi-chevron-right</v-icon></span>
          </v-row>
        </v-btn>
        <v-btn variant="text" block class="text-button my-3">
          <v-row justify="space-between">
            precio <span><v-icon>mdi-chevron-right</v-icon></span>
          </v-row>
        </v-btn>
      </v-card>
      <!-- fin filtros -->
    </v-col>
    <v-col cols="10">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 mt-4 ml-0">
            <v-row align="center">
              <v-col cols="2">
                <v-row align="center">
                  <v-col cols="3">
                    <v-icon>mdi-swap-vertical</v-icon>
                  </v-col>
                  <v-col cols="9">
                    <div class="text-subtitle-2">Ordenar por</div>
                    <v-text-field
                      append-icon="mdi-chevron-right"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="10">
                <v-row align="center" justify="space-around">
                  <v-btn rounded="pill" color="success"> Todas </v-btn>
                  <v-btn rounded="pill" color="success"> Laptops </v-btn>
                  <v-btn rounded="pill" color="success"> Tablets </v-btn>
                  <v-btn rounded="pill" color="success">
                    Desktops y All-in-one
                  </v-btn>
                  <v-btn rounded="pill" color="success"> AMD </v-btn>
                  <v-btn rounded="pill" color="success">
                    Impresoras y Multifuncionales
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 mt-4 ml-0">
            <v-row>
              <div
                v-for="prodList in productos"
                :key="prodList.id"
                class="px-5 py-5"
              >
                <CardView :producto="prodList" />
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex";
import CardView from "../components/CardView.vue";
export default {
  components: {
    CardView,
  },
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  setup() {
    const store = useStore();

    const productos = computed(() => {
      return store.state.productosFiltro;
    });


    return { productos };
  },
};
</script>

<style></style>
