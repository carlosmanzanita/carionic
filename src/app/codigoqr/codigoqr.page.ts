import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codigoqr } from './codigoqr';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  public iniciosesion:Codigoqr = {
    url:""
  }

  constructor(
    public router:Router
  ) {   }

  ngOnInit() {
  }

  async startScan (){
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
  
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      this.iniciosesion.url = result.content
      this.router.navigate(["inicio-sesion"])
    }
  };

    stopScan () {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

}
