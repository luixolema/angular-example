import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(element => element.id == id);
    this.messageService.add(`HeroService: fetched a hero whit id ${id}`);

    return of(hero);
  }

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
