import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatricePage } from './calculatrice.page';

describe('CalculatricePage', () => {
  let component: CalculatricePage;
  let fixture: ComponentFixture<CalculatricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
