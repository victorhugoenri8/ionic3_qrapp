import { Component } from '@angular/core';

import { ScanData } from '../../models/scan-data.model';
import { HistorialProvider } from "../../providers/historial/historial";

@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {
	historial:ScanData[]=[];

  constructor(private _historial: HistorialProvider) {
  }

  ionViewDidLoad() {
    this.historial=this._historial.cargarHistorial();
  }

  abrirScan(index:number){
  	this._historial.abrirScan(index);

  }

}
