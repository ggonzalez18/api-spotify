<template>
  <div>
    <h1>playlist</h1>
    <v-row>
      <v-col cols="6">
        <!-- <v-list mandatory color="indigo" dark>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-view-grid</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="showAlbum">Album</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-view-grid</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Artistas</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
        <v-btn @click="showAlbums">Albums</v-btn>
        <p>{{albums.albums}}</p>
      </v-col>
<!-- segunda col -->
      <v-col cols="6">
      </v-col>
    </v-row>
  </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'

export default {
methods: {
  ...mapActions(['getAlbums']),
  showAlbums(){
    this.getAlbums('3Gq2Dme9nesdgoqNNlcN8O')
  }
},
computed: {
  ...mapState(['albums'])
}
}
</script>

<style>

</style>