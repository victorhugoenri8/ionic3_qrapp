import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';




import { MyApp } from './app.component';
import { GuardadosPage, HomePage, TabsPage, MapaPage } from "../pages/index.paginas";
import { HistorialProvider } from '../providers/historial/historial';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    GuardadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    GuardadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider,
    InAppBrowser
  ]
})
export class AppModule {}
