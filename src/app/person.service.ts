import { Person } from "./persons.model"

export class PersonService{
    persons:Person[] = [
    new Person ('Nubis','Campos'),
    new Person ('Brenda', 'Rodriguez'),
    new Person ('Mariana', 'Corrales')
    ];

    addPerson(person:Person){
        this.persons.push(person)
        }

};