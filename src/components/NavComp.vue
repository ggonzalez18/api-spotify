<template>
<v-app-bar color="black" absolute dark>
    <v-toolbar-title color="success"><v-icon large>mdi-spotify</v-icon>Spotify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/"><v-icon class="mr-2">mdi-home-automation</v-icon>Home</v-btn>
    <v-btn text to="/playlist"><v-icon class="mr-2">mdi-view-headline</v-icon>Playlist</v-btn>
    <v-btn text to="/explorar"><v-icon class="mr-2">mdi-magnify</v-icon>Explora</v-btn>            
  </v-app-bar>
</template>

<script>
  export default {
  
  }
</script>
