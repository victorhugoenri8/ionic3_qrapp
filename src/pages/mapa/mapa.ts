import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';


import * as Leaflet from 'leaflet';


declare const L: any; 

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

map: any;
data: any;
estado: any;


h:number= -0.1836298;
d:number= -78.4821206;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit():void{
    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('map').setView([this.h, this.d], 18);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);


var marker = L.marker([this.h, this.d]).addTo(this.map);

    // var drawnItems = new L.FeatureGroup().addTo(this.map);
   




    // var map = this.map;

    //  //web location
    //  map.locate({ setView: true});

    //  //when we have a location draw a marker and accuracy circle
    //  function onLocationFound(e) {
    //    var radius = e.accuracy / 2;
 
    //    Leaflet.marker(e.latlng).addTo(map)
    //        .bindPopup("Estás dentro de los " + radius + "metros desde este punto").openPopup();
 
    //    Leaflet.circle(e.latlng, radius).addTo(map);
    //  }
    //  map.on('locationfound', onLocationFound);

    // //alert on location error
    // function onLocationError(e) {
    //   alert(e.message);
    // }

    // this.map.on('locationerror', onLocationError);
  }

 

}
