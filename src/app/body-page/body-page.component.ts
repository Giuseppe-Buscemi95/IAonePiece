import { Component, ViewChild } from '@angular/core';
import { ListenerDirective } from '../ListenerDirective';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css'],
})
export class BodyPageComponent {
  @ViewChild(ListenerDirective) listenerDirective:
    | ListenerDirective
    | undefined;
  uploadedImage: string | ArrayBuffer | null = null;
  fontIcon = faFileCirclePlus;

  source: any[] = [];
  

  constructor() {}

  onDragDrop(event: FileList) {
    console.log(event[0].name);
    this.source.push(event[0].name); //pusho l'evento in un array any
    const reader = new FileReader(); //oggetto che legge il file
    reader.readAsDataURL(event[0]); //permette di leggere i dati url
    reader.addEventListener('loadend', () => {
      this.uploadedImage = reader.result; //
    });
  }

  onDragClick(event: Event) {
    const loader = document.getElementById('loader');

    setInterval(() => {
      loader?.removeAttribute('none');
    }, 6000);

    let inputElement = event.target as HTMLInputElement; //casting
    const filePath = inputElement.files; // Ottieni il file selezionato

    if (filePath && filePath.length > 0) {
      const file = filePath[0]; // Ottieni il primo file
      console.log('Nome del file:', file.name);

      const reader = new FileReader(); // Oggetto che legge il file
      reader.readAsDataURL(file); // Leggi il file come URL dati
      reader.addEventListener('loadend', () => {
        this.uploadedImage = reader.result; // Imposta l'immagine caricata
      });
    } else {
      // Nessun file selezionato, gestisci il caso appropriato qui
      console.log('Nessun file selezionato.');
    }
  }
}
