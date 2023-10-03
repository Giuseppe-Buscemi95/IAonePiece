import { Component, OnInit ,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent {

  
  
  source: any[] = [];


constructor(){

 
}

  onDrag(event : Event){
   
event.preventDefault()
    const dragEvent = event as DragEvent;
    console.log(dragEvent.dataTransfer?.files)
    
  
  }
  image():any{

  }
}
