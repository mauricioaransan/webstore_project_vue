<template>
<v-row align="center">
<div class="px-5 py-5" v-for="producto in listadoProductos" :key="producto.id">
      <CardView :producto='producto'/>
    </div>
</v-row>
  
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import CardView from "../components/CardView";

export default {
  components: {
    CardView,
  },
  setup() {
    const store = useStore();

    const listadoProductos = computed(() => {
      return store.state.productosFiltro;
    });

    onMounted(async() => {
      await store.dispatch("traerProductos");
      await store.dispatch("filtrarProductos","");

    });

    return { listadoProductos };
  },
};
</script>

<style>
</style>