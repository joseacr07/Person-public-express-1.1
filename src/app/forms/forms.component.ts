import { Component, Output , EventEmitter } from '@angular/core';
import { LogginService } from '../logginService.service';
import { Person } from '../persons.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() createdPerson = new EventEmitter<Person>()

  inputName:string = '';
  inputSurname:string = '';

  constructor(private logginService:LogginService){}

  addPerson(){
    let person1 = new Person(this.inputName, this.inputSurname);
    this.logginService.sendConsoleMessage(`Enviamos a: ${person1.name} ${person1.surname}`)
    this.createdPerson.emit(person1)
  }

}
