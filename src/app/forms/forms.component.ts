import { Component } from '@angular/core';
import { LogginService } from '../logginService.service';
import { PersonService } from '../person.service';
import { Person } from '../persons.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  inputName:string = '';
  inputSurname:string = '';

  constructor(private logginService:LogginService,
              private personService:PersonService){}

  addPerson(){
    let person1 = new Person(this.inputName, this.inputSurname);
    this.logginService.sendConsoleMessage(`Enviamos a: ${person1.name} ${person1.surname}`)
    this.personService.addPerson(person1)
  }

}
