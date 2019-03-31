import { Component } from '@angular/core';
import { GuardadosPage, HomePage } from "../index.paginas";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage 
{
	tab1:any;
	tab2:any;

  constructor() 
  {
  	this.tab2 = GuardadosPage;
    this.tab1 = HomePage;
  }

  

}
