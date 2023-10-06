import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnePieceAvatarService {

  constructor() { }

  getAvatarImage(pgName: string):string {
    switch(pgName){
      case 'Luffy':
        return "../../assets/images/luffy_avatar.jpeg";

      case 'Roronoa Zoro':
        return "../../assets/images/zoro_avatar.jpg";

      case 'Sanji':
        return "../../assets/images/sanji_avatar.jpeg";

      case 'Tony Chopper':
        return "../../assets/images/chopper_avatar.jpeg";

      case 'Nami':
        return "../../assets/images/nami_avatar.jpeg";

      case 'Usop':
        return "../../assets/images/usopp_avatar.jpeg";

      case 'Nico Robin':
        return "../../assets/images/nico_robin_avatar.jpeg";

      case 'Aokijii':
        return "../../assets/images/aokiji_avatar.jpeg";

      case 'Crocodile':
        return "../../assets/images/crocodile_avatar.jpeg";

      default: 
        return ""; 
    }
  }
}
