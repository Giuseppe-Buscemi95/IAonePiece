import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
  <div class="StyleModal">
  <h1 mat-dialog-title>Inserimento Immaggine Fallito</h1>
<div mat-dialog-content>
  Errore :
  <br>
  <p>{{data.error}}</p>
</div>
  </div>

  `,
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}