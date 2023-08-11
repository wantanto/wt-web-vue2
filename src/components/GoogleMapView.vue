<template>
    <v-container>
        <v-card elevation="1">
            <v-card-title class="title">Restaurant Name: {{ this.location.name }}</v-card-title>
            <v-card-text>
                <GmapMap :key="this.location.lat" :center="{lat: this.location.markers[0].lat, lng: this.location.markers[0].lng}" :zoom="15" map-type-id="terrain"
                    style="width: 500px; height: 300px">
                    <GmapMarker :key="index" v-for="(m, index) in this.location.markers" :position="m"  />
                </GmapMap>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    props: {
        location: {type: Object}
    },
    data() {
        return {
            center: { lat: 0, lng: 0 },
            markers: [],
        }
    },
}
</script>