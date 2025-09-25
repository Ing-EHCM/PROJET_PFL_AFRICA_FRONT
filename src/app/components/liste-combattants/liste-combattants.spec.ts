import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCombattants } from './liste-combattants';

describe('ListeCombattants', () => {
  let component: ListeCombattants;
  let fixture: ComponentFixture<ListeCombattants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCombattants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCombattants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
