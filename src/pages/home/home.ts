import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, 
  	public toastCtrl: ToastController,
  	private platform: Platform,
    private historial: HistorialProvider) {

  }



  scan(){
  console.log("....realizando scann..");
      if(!this.platform.is('cordova')){
      	console.log("....realizando scannrstrsts..");
             this.historial.agregarHistorial("http://boluda.com")
            return;
      }

  	this.barcodeScanner.scan()
  					.then(result => {
 						console.log("Result: " , result.text);
                		console.log("Format: " , result.format);
                        console.log("Cancelled: ",  result.cancelled);

                        if (result.cancelled == false && result.text != null) {
                          this.historial.agregarHistorial(result.text)
                        }


							})
  					.catch(err => {
    					console.log('Error', err);
    					this.presentToast(err);
					});
  }

  presentToast(mensaje:string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
