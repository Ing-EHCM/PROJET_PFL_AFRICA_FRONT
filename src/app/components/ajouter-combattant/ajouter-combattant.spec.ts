import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCombattant } from './ajouter-combattant';

describe('AjouterCombattant', () => {
  let component: AjouterCombattant;
  let fixture: ComponentFixture<AjouterCombattant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCombattant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCombattant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
