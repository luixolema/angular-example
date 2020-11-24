import { CRISIS } from './../crisis/mock-crisis';
import { Crisis } from './../crisis/crisis';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  getCrisis(id: number): Observable<Crisis> {
    const crisis = CRISIS.find(element => element.id == id);
    this.messageService.add(`HeroService: fetched a hero whit id ${id}`);

    return of(crisis);
  }

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(CRISIS);
  }
}
