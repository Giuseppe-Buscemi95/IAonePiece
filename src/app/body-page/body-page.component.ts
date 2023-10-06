import { Component, ViewChild } from '@angular/core';
import { ListenerDirective } from '../ListenerDirective';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as base64js from 'base64-js';
import { ArrayType } from '@angular/compiler';
import { elementAt } from 'rxjs';
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
 TagName: string[] = [];
 Probability: any[] = [];


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

  CustomVisionAzure(uploadimage: ArrayBuffer| string | null){
    let prova ;
    let blobImage;
    console.log(uploadimage);
   if (uploadimage instanceof ArrayBuffer) {
     this.upl.push(new Uint8Array(uploadimage));
   } else if(uploadimage != null) {
    const base64WithoutPrefix = uploadimage.replace(/^data:image\/(jpeg|jpg);base64,/, ""); //rimozione del prefisso prima della conversione
    //const binaryString = atob(base64WithoutPrefix);
    ///
    /// -- fai il commento ALEX
     prova = base64js.toByteArray(base64WithoutPrefix);
      blobImage = new Blob([prova], { type: "base64" })
     console.log(blobImage);
    
    
   }
    const predictionKeyValue = environment.Value;
    const predictionKeyName = environment.Key;
    
  
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set(predictionKeyName, predictionKeyValue);
  
   

    this.http.post<any>("https://imagesonepiececlassifications-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/c775cf70-e0d8-42d4-9d8f-a1c2b54ec55f/classify/iterations/Iteration2/image", blobImage , 
    {headers}).subscribe((resp: any)=>{
      let response = resp.predictions;
      
      for (let i = 0; i < response.length; i++) { this.TagName.push(response[i].tagName); }
      for (let j = 0; j < response.length; j++){ this.Probability.push(response[j].probability);}
    this.Probability.forEach(x => {
      const ValoreABS = Number(x);
      
      console.log(ValoreABS.toFixed(2));
    })

    }
   
    

    )
  }

}
