import { Component } from '@angular/core';
import { LogginService } from './logginService.service';
import { Person } from './persons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'person-list-express-1.1';

  persons:Person [] = [
    new Person ('Nubis','Campos'),
    new Person ('Brenda', 'Rodriguez')
  ];
  
  constructor(private logginService:LogginService){}
  
  

  addPerson(person:Person){
  this.logginService.sendConsoleMessage(`Enviamos otra vez? A : ${person.name} ${person.surname}`)
  this.persons.push(person)
  }

}
