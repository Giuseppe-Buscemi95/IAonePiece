import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
  <div class="container StyleModal" >
    <div class="col-12 StyleContent">
    <h1 mat-dialog-title>Inserimento Immagine fallito </h1>
<div mat-dialog-content style="text-align: center;">
  Errore :
  <br>
  <p style="text-align: center;">{{data.error}}</p>
  
  <img src="https://media.tenor.com/b--c_KT_ZnYAAAAd/lofy.gif" alt=""  width="280" height="170">
</div>
    </div>
  
  </div>

  `,
   styleUrls: ['./body-page.component.css']
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}