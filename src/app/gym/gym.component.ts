import { Component, OnInit } from '@angular/core';
import {GymsService} from '../../services/gym.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  active_step = 1;
  last_step = 4;
  gym: any = {
    commercial_name: 'Olympia Gym',
    owner_name: 'Eduardo Ibarra',
    owner_phone: '8341687731',
    monthly_cost: 890,
    attention_hours: '9am - 10pm',
    gym_phone: '8341687731',
    gym_email: 'eduardo@eduardoibarra.com',
    gym_website: 'https://gym.com',
    open_monday: true,
    open_tuesday: true,
    open_thursday: true,
    open_wednesday: true,
    open_friday: true,
    open_saturday: true,
    open_sunday: true,
    address_street: 'Av Hidalgo',
    address_neighborhood: 'Tamatan',
    address_number: '123-A',
    address_zipcode: '87060',
    address_city: 'Victoria',
    address_state: 'Tamaulipas',
    service_weights: true,
    service_crossfit: true,
    service_box: true,
    service_aerobics: true,
    service_martial_arts: true,
    service_other: true,
    images: [],
    invoice_name: 'Eduardo Ibarra',
    invoice_email: 'eduardo@eduardo.com',
    invoice_phone: '8341687731',
    invoice_rfc: 'CUIH900419RC5',
    logo: null,
    brand_register: null,
    bank_name: 'Eduardo',
    bank_last_name: 'Ibarra',
    bank_account_number: '12387685477',
    bank_clabe: '82736479623487352476852384762',
    bank_bank: 'BBVA Bancomer',
    bank_country: 'México',
    accept_terms: true,
    video_url: 'http://youtube.com/aonte83d'
  };
  constructor(private gymsService: GymsService) { }

  ngOnInit() {
  }
  nextStep() {
    if (this.active_step < this.last_step) {
      this.active_step++;
    }
  }
  previousStep() {
    if (this.active_step > 1) {
      this.active_step--;
    }
  }
  saveGym() {
    if (!this.gym.id) {
      this.gym.id = Date.now();
    }
    this.gymsService.createGym(this.gym).then((result) => {
      console.log(result);
    });
  }
  changeListener($event, source): void {
    this.readThis($event.target, source);
  }
  readThis(inputValue: any, source): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      if (source === 'images') {
        this.gym.images.push(myReader.result);
      }
      if (source === 'logo') {
        this.gym.logo = myReader.result;
      }
      if (source === 'marca') {
        this.gym.brand_register = myReader.result;
      }
      console.log(myReader.result);
    };
    myReader.readAsDataURL(file);
  }

}
