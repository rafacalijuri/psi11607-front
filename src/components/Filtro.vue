<template>

    <v-app-bar dark color="#336699" class="pt-2">
        
      <v-container fluid >
        
        <v-layout row>
          <v-flex sm3 class="mt-2 text-center" >
            <v-toolbar-title class="text-h5">PROPOSTAS</v-toolbar-title>
          </v-flex>

          <v-flex sm9 >
            <v-autocomplete @change="this.carregaDadosCard"  v-model="select" :items="selectUnidades" class="pt-2" style="color:white"></v-autocomplete>
          </v-flex>

        </v-layout>
      
      </v-container>

    </v-app-bar>

</template>

<script>

  export default {

    props: ['selectUnidades','carregaDadosCard'],

    data: () => ({
        select: {value: "5669", text: "5669 - GEGOV/BR"},
    }),

  }
    
</script>