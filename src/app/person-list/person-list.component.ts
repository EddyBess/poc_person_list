import { Component } from '@angular/core';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  
  cardIds : Array<number>;
  clicked : Array<boolean>;
  
  constructor(
  private matIconRegistery : MatIconRegistry,
  private domSanitizer: DomSanitizer

  ){
    // Initializing ids and clicked status
    this.cardIds = Array.from(Array(6).keys());
    this.clicked = Array(6).fill(false);

    // Adding custom Icons
    this.matIconRegistery.addSvgIcon(
      'teaching',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/teach.svg")
    );
    this.matIconRegistery.addSvgIcon(
      'school',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/school.svg")
    );
    this.matIconRegistery.addSvgIcon(
      'html',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/html.svg")
    );
    this.matIconRegistery.addSvgIcon(
      'json',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/json.svg")
    );
    this.matIconRegistery.addSvgIcon(
      'odt',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/odt.svg")
    );
    this.matIconRegistery.addSvgIcon(
      'bibtex',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/bibtex.svg")
    );
  }

  clickEvent(cardId:number){
    this.clicked[cardId]=!this.clicked[cardId];
  }
 
}
