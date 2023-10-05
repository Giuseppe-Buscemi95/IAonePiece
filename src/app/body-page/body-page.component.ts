import { Component, ViewChild } from '@angular/core';
import { ListenerDirective } from '../ListenerDirective';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as base64js from 'base64-js';
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
  upl:Uint8Array[] = []
  source: any[] = [];
  

  constructor(private http: HttpClient) {}

  onDragDrop(event: FileList) {
    console.log(event[0].name);
    this.source.push(event[0].name); //pusho l'evento in un array any
    const reader = new FileReader(); //oggetto che legge il file
    reader.readAsDataURL(event[0]); //permette di leggere i dati url
    reader.addEventListener('loadend', () => {
      this.uploadedImage = reader.result; //
      this.CustomVisionAzure(this.uploadedImage) //POST CUSTOM VISION AZURE
    });
   
  }

  onDragClick(event: Event) {
    // const loader = document.getElementById('loader');

    // setInterval(() => {
    //   loader?.removeAttribute('none');
    // }, 6000);

    let inputElement = event.target as HTMLInputElement; //casting
    const filePath = inputElement.files; // Ottieni il file selezionato

    if (filePath && filePath.length > 0) {
      const file = filePath[0]; // Ottieni il primo file
      console.log('Nome del file:', file.name);

      const reader = new FileReader(); // Oggetto che legge il file
      reader.readAsDataURL(file); // Leggi il file come URL dati
      reader.addEventListener('loadend', () => {
        this.uploadedImage = reader.result; // Imposta l'immagine caricata
        this.CustomVisionAzure(this.uploadedImage) //POST CUSTOM VISION AZURE
      });

    } else {
      // Nessun file selezionato, gestisci il caso appropriato qui
      console.log('Nessun file selezionato.');
    }
  }

  getAvatarImage(pgName: string):string {
    switch(pgName){
      case 'Luffy':
        return "../../assets/images/luffy_avatar.jpeg";

      case 'Zoro':
        return "../../assets/images/zoro_avatar.jpg";

      case 'Sanji':
        return "../../assets/images/sanji_avatar.jpeg";

      case 'Tony Chopper':
        return "../../assets/images/chopper_avatar.jpeg";

      case 'Nami':
        return "../../assets/images/nami_avatar.jpeg";

      case 'Usopp':
        return "../../assets/images/usopp_avatar.jpeg";

      case 'Nico Robin':
        return "../../assets/images/nico_robin_avatar.jpeg";

      case 'Aokiji':
        return "../../assets/images/aokiji_avatar.jpeg";

      case 'Crocodile':
        return "../../assets/images/crocodile_avatar.jpeg";

      default: 
        return ""; 
    }
  }

  //Passo immagine da analizzare tramite POST all'endpoint di Custom Vision di Azure
  CustomVisionAzure(uploadimage: ArrayBuffer| string | null){
    let byteArrayImage ;
    let blobImage;

    console.log(uploadimage);
   if (uploadimage instanceof ArrayBuffer) {
     this.upl.push(new Uint8Array(uploadimage));
   } else if(uploadimage != null) {
    const base64WithoutPrefix = uploadimage.replace(/^data:image\/(jpeg|jpg);base64,/, ""); //rimozione del prefisso prima della conversione
  
     // Conversione da stringa64 ad array di byte, e successivo incapsulamento in blob, da passare a richiesta HTTP
     byteArrayImage = base64js.toByteArray(base64WithoutPrefix);
      blobImage = new Blob([byteArrayImage], { type: "base64" })
     console.log(blobImage);

   }

   //variabili d'ambiente con valori API di Custom Vision
    const predictionKeyValue = environment.Value;
    const predictionKeyName = environment.Key;
    
  //httpHeader contiene metadati e valori predictionAPI
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set(predictionKeyName, predictionKeyValue);
  
   
    this.http.post<any>("https://imagesonepiececlassifications-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/c775cf70-e0d8-42d4-9d8f-a1c2b54ec55f/classify/iterations/Iteration2/image", blobImage , 
    {headers}).subscribe((resp)=>
    console.log(resp)
    

    )
  }

}
