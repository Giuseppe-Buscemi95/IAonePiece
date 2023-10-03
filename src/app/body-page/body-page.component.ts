import { Component, ViewChild  } from '@angular/core';
import { ListenerDirective } from '../ListenerDirective';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})


export class BodyPageComponent {
  @ViewChild(ListenerDirective) listenerDirective: ListenerDirective | undefined;
  uploadedImage: string | ArrayBuffer | null = null;

  
  source: any[] = [];


constructor(){

 
}

  onDragDrop(event : FileList){
   
    console.log(event[0].name)
    this.source.push(event[0].name) //pusho l'evento in un array any
    const reader = new FileReader(); //oggetto che legge il file 
    reader.readAsDataURL(event[0]); //permette di leggere i dati url
    reader.addEventListener('loadend', () => {
      this.uploadedImage = reader.result; //
    });

  }
  onDrag(event: Event){

  }

  
}
