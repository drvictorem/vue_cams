<template>

    <div id="mapContainer" ></div>

</template>

<script>

import { mapActions,mapGetters } from 'vuex'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let cluster = null

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

// const createMarkerCluster = () => {
//     return L.markerClusterGroup();
// }


export default {

  name: 'Map',
  props: ['dataSearch'],

  data () {
    return {
        centerCoordinates: [52.288242, 104.280688],
        map: null,
        OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        zoom: 13,
        show:false,
        marker:[],
        layer: null,
    };
  },

  mounted() {


      if (this.$route.params.dataSearch) {

          this.zoom = 10

          this.createMap(this.centerCoordinates,this.zoom)

          let dataFromSearch = JSON.parse(this.$route.params.dataSearch)

          this.fly(dataFromSearch)

          this.addClusterToMap(dataFromSearch)



      } else {

          this.createMap(this.centerCoordinates,this.zoom)


      }

  },

  methods: {

      createMap (center,zoom) {
          this.map = L.map('mapContainer').setView(center, zoom)
          this.tileLayer = L.tileLayer(this.OSMUrl,{attribution: 'cams_viewer'
    }).addTo(this.map);
},

    fly(data) {

      let length = Object.keys(data).length

      if (length < 50) {
        let coordinates = [data[0]['latitude'],data[0]['longitude']]
         return this.map.flyTo(coordinates, 12)

      }

      return this.map.flyTo(this.centerCoordinates,12)
    },

    showButtonMarker(text) {

        this.show = true;
        this.$emit('clickOnMarker', {
            show:this.show,

        })
    },


    createMarker(latlng,text) {
        try {
            return L.marker(latlng)
            .bindPopup("<h2>"+text+"<h2>")
            .on('click', event => {
                this.map.flyTo(latlng,17)
                this.$emit('clickOnMarker', {
                show: true,
                text:text
            })
        })

        }
        catch (e) {
            console.log(e)
    }},

    createMarkerCluster() {

        return L.markerClusterGroup()

    },

    removeMarker(data) {
      if (data) {

            this.map.removeLayer(data)

        }
    },

    addClusterToMap (obj) {
        let length = Object.keys(obj).length
        cluster = this.createMarkerCluster();
        for(let i=0; i < length; i++) {
            if(obj[i]['latitude'] != ''){
                let alt = obj[i]['latitude']
                let lon = obj[i]['longitude']
                this.layer = this.createMarker([alt,lon],obj[i]['full_address'])
                this.marker.push([alt,lon])
                cluster.addLayer(this.layer)
            }
        }

        this.map.addLayer(cluster)

    },

    showMarker(data) {

        if (data) {

            this.removeMarker(cluster)

            console.log(data)
            this.fly(data)
            this.addClusterToMap(data)
        } else {
            console.log('error')
        }
    },

  }

};
</script>

<style scoped lang="scss">

#mapContainer {
  cursor: default;
  position: absolute;
  width: 100%;
  height: 90%;
  margin: 0px;
  text-align: center;

}

</style>
