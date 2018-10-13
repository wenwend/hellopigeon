import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Pigeon } from './pigeon';

@Injectable()
export class PigeonServiceService {

  constructor(private http: HttpClient) { }

  getAllPigeons() : Observable< Pigeon[] >{

  	return this.http.get< Pigeon[] >( 'http://localhost:8080/api/pigeons');
  }




}
