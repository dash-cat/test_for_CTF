<template>
  <v-card
    class="mx-auto"
    width="400"
  >
    <div >
      <div>
        <div class="text-h5">
          San Francisco
        </div>
        <div>Mon, 12:30 PM, Mostly sunny</div>
      </div>
    </div>

    <v-card-text>
      <div align="center">
        <div
          class="text-h2"
          cols="6"
        >
          23&deg;C
      </div>
        <div cols="6">
        <div></div>
        </div>
      </div>
    </v-card-text>




    <v-card-actions>
      <input v-model="userCity"/>
      <v-btn text>
         Добавить город
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>


import { VCard, VCardActions, VSlider } from 'vuetify/lib';
import { mapState } from 'vuex';

export default {

    computed: mapState([
  // map this.count to store.state.count
  'weather'
]),

    components: {
      VCard, VCardActions, VSlider
    },
    data () {
      return {
        userCity: '',
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        ],
      }
    },
    mounted (){
      console.log('Weather', this.weather)
    }
  }
</script>

<style scoped>
.mx-auto {
  margin: 30px;
  display: flex;
  width: 400px;
  padding: 23px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 19px;
}

</style>