import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnePieceAvatarService {

  constructor() { }

  getAvatarImage(pgName: string):string {
    switch(pgName){
      case 'Monkey D. Luffy':
        return "../../assets/images/luffy_avatar.jpeg";

      case 'Roronoa Zoro':
        return "../../assets/images/zoro_avatar.jpg";

      case 'Vinsmoke Sanji':
        return "../../assets/images/sanji_avatar.jpeg";

      case 'Tony Tony Chopper':
        return "../../assets/images/chopper_avatar.jpeg";

      case 'Nami':
        return "../../assets/images/nami_avatar.jpeg";

      case 'Usop':
        return "../../assets/images/usopp_avatar.jpeg";

      case 'Nico Robin':
        return "../../assets/images/nico_robin_avatar.jpeg";

      case 'Franky':
        return "../../assets/images/franky_avatar.jpeg";

      case 'Brook':
        return "../../assets/images/brook_avatar.jpeg";
          
      case 'Jinbe':
        return "../../assets/images/jinbe_avatar.jpeg";

      case 'Portgas D. Ace':
        return "../../assets/images/ace_avatar.jpeg";

      case 'Shanks':
        return "../../assets/images/shanks-avatar.jpeg";

      case 'Kuzan':
        return "../../assets/images/aokiji_avatar.jpeg";

      case 'Crocodile':
        return "../../assets/images/crocodile_avatar.jpeg";

      case 'Dracule Mihawk':
        return "../../assets/images/mihawk_avatar.jpeg";

      default: 
        return ""; 
    }
  }
}
