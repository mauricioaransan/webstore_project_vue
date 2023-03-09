<template>
  <v-sheet v-for="prodCarro in carrito" :key="prodCarro.id" class="px-7">
    <CardCarrito :prodCarrito="prodCarro" />
  </v-sheet>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CardCarrito from "./CardCarrito.vue";

export default {
  setup() {
    const store = useStore();
    const carrito = computed(() => store.state.productoCarrito);

    return { carrito };
  },
  components: {
    CardCarrito,
  },
};
</script>

<style></style>
