import { Component } from '@angular/core';

type User = {name:string, visible:boolean}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  users:User[] = [{name:'Gugo', visible:true},
  {name:'Rafo', visible:true},
  {name:'Hakob', visible:true},
  {name:'Saqo', visible:true},
  ]

  add(UserName:any) {
    this.users.push({name:UserName.value, visible:true})

    UserName.value = ''
  }

  delete(num:number) {
    if(this.users.length > 1) {

      this.users.splice(num,1);
    } 
  }

  hide(param:User) {
    param.visible = param.visible === true ? false:true
  }


  persons: string[] = ['Gugo', 'Rafo', 'Gnel', 'Rob', 'Gayan', 'Razmik', 'Saqo', 'Samo', 'Saro']
  filteredPersons: string[] = this.persons;

  filter(input: any): void {
    this.filteredPersons = this.persons.filter(pers => pers.startsWith(input.value))
  }
  
}






