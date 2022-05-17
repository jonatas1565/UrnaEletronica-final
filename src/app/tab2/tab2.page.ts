import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { this.crud.databaseConn(); 
  }

  ngOnInit() { }

  ionViewDidEnter() {  
    this.crud.getAllUsers()
  }
   
  createUser(){
    this.crud.addItem(this.nameVal, this.emailVal);
  }
   
  remove(user) {
    this.crud.deleteUser(user);
  }

}
