import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop' , ['$event']) public ondrop(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
    let files = event.dataTransfer?.files;
    console.log(files);
    if (files?.length.toString() != null) {
      this.onFileDropped.emit(files)
    }
  }

}
