
import { Injectable } from '@angular/core';

import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

	private _historial:ScanData[]=[];

  constructor(private iab: InAppBrowser) { }

  agregarHistorial( texto:string){

  			let data= new ScanData(texto);
  			this._historial.unshift(data);
  			console.log(this._historial);
  			this.abrirScan(0);

  }

  abrirScan(index:number){
  	let scanData:ScanData=this._historial[index];
  	console.log(scanData);
  	switch (scanData.tipo) {
  		case "http":
  			 this.iab.create(scanData.info, "_system");
  			break;
  		
  		default:
  			console.error("tipo no soportado");
  	}
  	

  }

  cargarHistorial(){
  	return this._historial;
  }

}
