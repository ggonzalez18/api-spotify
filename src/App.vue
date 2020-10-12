<template>
  <v-app>
    <nav-comp></nav-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavComp from './components/NavComp';
import {mapActions, mapState} from 'vuex'

export default {
  name: 'App',

  components: {
    NavComp,
  },

  data: () => ({
    //
  }),
  created() {
    this.setToken()
  },
  methods: {
    ...mapActions(['setToken'])
  },
  computed: {
    ...mapState(['token'])
  }
};
</script>
