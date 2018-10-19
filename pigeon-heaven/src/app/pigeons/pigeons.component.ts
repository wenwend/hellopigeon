import { Component, OnInit } from '@angular/core';

import { Pigeon } from '../pigeon';
import {PigeonServiceService} from '../pigeon-service.service'

@Component({
  selector: 'app-pigeons',
  templateUrl: './pigeons.component.html',
  styleUrls: ['./pigeons.component.css']
})
export class PigeonsComponent implements OnInit {

	pigeons: Pigeon[];

  constructor(private PigeonService:PigeonServiceService) { }

  ngOnInit() {
  	console.log('hello');
  	this.getPigeons();
  }
  getPigeons() : void {
  	this.PigeonService.getPigeons()
  	.subscribe(pigeons =>this.pigeons = pigeons);
  	console.log(this.pigeons);
  }
}
