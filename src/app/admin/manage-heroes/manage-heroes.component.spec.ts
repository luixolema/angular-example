import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageHeroesComponent } from './manage-heroes.component';

describe('ManageHeroesComponent', () => {
  let component: ManageHeroesComponent;
  let fixture: ComponentFixture<ManageHeroesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
