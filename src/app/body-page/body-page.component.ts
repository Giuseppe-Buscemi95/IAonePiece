import { Component, OnInit ,Input, OnChanges, SimpleChanges } from '@angular/core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent {

  fontIcon = faFileCirclePlus;

  
  source: any[] = [];


constructor(){

 
}

  onDrag(event : Event){
   

    const dragEvent = event as DragEvent;
    console.log(dragEvent.dataTransfer?.files)
    
  
  }
  image():any{

  }
}
