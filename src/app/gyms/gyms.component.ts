import { Component, OnInit } from '@angular/core';
import {GymsService} from '../../services/gym.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {
  gyms: any = [];
  constructor(private gymsService: GymsService) {
    this.gymsService.getGyms().valueChanges()
      .subscribe((result) => {
        this.gyms = result;
        console.log(result);
      });
  }

  ngOnInit() {
  }

}
