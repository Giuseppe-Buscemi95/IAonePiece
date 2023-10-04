import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    const targetElement = e.target as HTMLElement;
    targetElement.classList.add('dragover');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();

    const targetElement = evt.target as HTMLElement;
    targetElement.classList.remove('dragover');
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
