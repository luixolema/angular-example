import { Observable } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from 'src/app/services/crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private service: CrisisService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.crises$ = this.service.getCrises();
  }

  onSelect(crisis: Crisis): void {
    this.selectedId = crisis.id;
    this.messageService.add(`CrisesComponent: Selected crisis id=${crisis.id}`);
  }
}
