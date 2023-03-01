import { Component, OnInit } from '@angular/core';
import { LogginService } from './logginService.service';
import { PersonService } from './person.service';
import { Person } from './persons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'person-list-express-1.1';

  persons:Person [] = [];
  
  constructor(private logginService:LogginService,
              private personService:PersonService){};
              
              
              ngOnInit(): void {
               this.persons = this.personService.persons;
              };
              

}
