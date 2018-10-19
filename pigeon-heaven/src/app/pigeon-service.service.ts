import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Pigeon } from './pigeon';
import { MessageService } from './message.service';

@Injectable()
export class PigeonServiceService {
	private pigeonUrl='http://localhost:8080/api/pigeons';

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService) { }

  getPigeons() : Observable< Pigeon[] >{

  	return this.http.get< Pigeon[] >(this.pigeonUrl)
  		
  }

  getPigeon(id: number) : Observable< Pigeon[] >{
  	const url=`${this.pigeonUrl}/?id=${id}`
  	return this.http.get< Pigeon[] >(url)
  		
  }

   

}
