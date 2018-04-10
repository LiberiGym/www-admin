import { Component, OnInit } from '@angular/core';
import {GymsService} from '../../services/gym.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  active_step = 1;
  last_step = 4;
  gym: any = {
    commercial_name: null,
    owner_name: null,
    owner_phone: null,
    monthly_cost: null,
    attention_hours: null,
    gym_phone: null,
    gym_email: null,
    gym_website: null,
    open_monday: null,
    open_tuesday: null,
    open_thursday: null,
    open_wednesday: null,
    open_friday: null,
    open_saturday: null,
    open_sunday: null,
    address_street: null,
    address_neighborhood: null,
    address_number: null,
    address_zipcode: null,
    address_city: null,
    address_state: null,
    service_weights: null,
    service_crossfit: null,
    service_box: null,
    service_aerobics: null,
    service_martial_arts: null,
    service_other: null,
    images: [],
    invoice_name: null,
    invoice_email: null,
    invoice_phone: null,
    invoice_rfc: null,
    logo: null,
    brand_register: null,
    bank_name: null,
    bank_last_name: null,
    bank_account_number: null,
    bank_clabe: null,
    bank_bank: null,
    bank_country: null,
    accept_terms: null,
    video_url: null
  };
  /*gym: any = {
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
  };*/
  id: any = null;
  constructor(private gymsService: GymsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.gymsService.getGym(this.id).valueChanges()
        .subscribe((result) => {
          this.gym = result;
        });
    }
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
    if (
      !this.gym.commercial_name ||
      !this.gym.owner_name ||
      !this.gym.owner_phone ||
      !this.gym.monthly_cost ||
      !this.gym.attention_hours ||
      !this.gym.gym_phone ||
      !this.gym.address_street ||
      !this.gym.address_neighborhood ||
      !this.gym.address_number ||
      !this.gym.address_zipcode ||
      !this.gym.address_city ||
      !this.gym.address_state ||
      !this.gym.invoice_name ||
      !this.gym.invoice_email ||
      !this.gym.invoice_rfc ||
      !this.gym.bank_name ||
      !this.gym.bank_last_name ||
      !this.gym.bank_account_number ||
      !this.gym.bank_clabe ||
      !this.gym.bank_bank ||
      !this.gym.bank_country ||
      !this.gym.accept_terms
    ) {
      alert('Todos los campos marcados con asterisco (*) son requeridos');
      return;
    }
    if (!this.gym.id) {
      this.gym.id = Date.now();
    }
    this.gymsService.createGym(this.gym).then((result) => {
      this.active_step = this.last_step;
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
