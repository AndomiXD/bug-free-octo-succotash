import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  age: number;
  gender: string;
  phone: number;
  email: string;
  membership: string;

  constructor(public alertController: AlertController) {}

  public form = [
    { val: 'Watercolor and gouache', isChecked: false},
    { val: 'Sketching and drawing', isChecked: false },
    { val: 'Mixed media', isChecked: false },
    { val: 'Art journaling', isChecked: false }
  ];

  public filteredForm = [];

  async formToString(){
    this.filteredForm = [];
    for (let interest of this.form){
      if(interest['isChecked'] == true){
      this.filteredForm.push(interest['val']);
      }
    }
  }


  
  async showAlert() {
    
    const alert = await this.alertController.create({
      header: 'The member of the following information has been registered:',
      message: 
      "Name: "+ this.name +
      "<br>Age: " + this.age +
      "<br>Gender: " + this.gender +
      "<br>Membership type: " + this.membership +
      "<br>Field of interests: " + this.filteredForm,
      buttons: ['OK']
    });

    await alert.present();
  }

}

