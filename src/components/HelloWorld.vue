<template>
  <v-container>
    <v-sheet class="pa-12" color="grey lighten-5">
      <v-row>
        <v-col >
          <v-text-field label="Keyword" outlined v-model="keyword" ref="textsearch" data-test="textsearch"></v-text-field>
        </v-col>
        <v-col >
          <v-btn color="primary" elevation="2" x-large @click="getLocation(keyword)" ref="btnsearch" data-test="btnsearch"> <v-icon>mdi-magnify</v-icon> Search
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-2"  ref="resulttable" data-test="resulttable">
            <template v-slot:item.view="{ item }">
              <v-btn color="primary" small @click="viewLocation(item), index++" text>View</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="600px">
        <GoogleMap @onClose="dialog = false" :key="index" :location="location"></GoogleMap>
      </v-dialog>
    </v-sheet>

  </v-container>
</template>

<script>
import { getRestaurant } from "../api/index"
import GoogleMap from '../components/GoogleMapView.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      keyword: "Bang Sue",
      headers: [
        { text: 'Restaurant Name', value: 'name' },
        { text: 'Address', value: 'address' },
        { text: 'Rating', value: 'rating' },
        { text: 'Location', value: 'view' },
      ],
      items: [],
      dialog: false,
      index: 0,
      location: null
    }
  },
  methods: {
    getLocation(keyword) {
      getRestaurant({ keyword: keyword },
        (res) => {
          if (res.data) {
            this.items = res.data;
          }
        },
        (err) => {
          console.log(err)
          this.items = [];
        }
      )
    },
    viewLocation(item) {
      this.dialog = true;
      this.location = { 
        name: item.name,
        markers: [{ lat: item.lat, lng: item.lng }] 
      }
    }
  },
  mounted() {
    this.getLocation(this.keyword)
  },
  components: {
    GoogleMap
  }
}
</script>
