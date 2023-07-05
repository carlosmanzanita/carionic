import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  constructor(
    public router:Router
  ) {   }

  ngOnInit() {
    this.startScan()
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
      localStorage.setItem('url', result.content);
      
      const viene_de = this.router.url.split('?')[0].split('/').pop()
      this.router.navigate([viene_de])
    }
  };

    stopScan () {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

}
