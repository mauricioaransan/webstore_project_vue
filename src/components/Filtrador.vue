<template>
  <v-container>
    <v-row justify="space-between">
      <v-btn variant="text" @click="activo = !activo">
        Supermercado
      </v-btn>
      <v-btn variant="text" @click="activo = !activo">
        Semana
      </v-btn>
      <v-btn variant="text" @click="activo = !activo">
        Bebé
      </v-btn>
      <v-btn variant="text" @click="activo = !activo">
        Electrodomésticos
      </v-btn>
      <v-btn variant="text" @click="activo = !activo">
        Tecnología
      </v-btn>
      <v-overlay v-model="activo" contained class="align-top justify-center">
        <v-row>
            <!-- Aprender más sobre los Grids con vuetify -->
            <v-col cols="12">
                <v-card height="450" width="1500">
                    <v-row class="flex-child">
                        
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
      </v-overlay>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    activo: false,
  }),
};
</script>

<style></style>
