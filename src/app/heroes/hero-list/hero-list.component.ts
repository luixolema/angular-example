import { Observable } from 'rxjs';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;

  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(private service: HeroService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.heroes$ = this.service.getHeroes();
    this.selectedId = +this.route.snapshot.paramMap.get('id');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
