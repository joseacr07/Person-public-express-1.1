import { Component, Input } from '@angular/core';
import { LogginService } from '../logginService.service';
import { Person } from '../persons.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {


  @Input() person:Person;
  @Input() i:number;

}
