<template>
  <v-app class="100Vh">
    <weather/>
  </v-app>
</template>

<script>
import Weather from './components/Weather'

export default {
  name: 'App',
  components: {
    Weather
  }
}
</script>
