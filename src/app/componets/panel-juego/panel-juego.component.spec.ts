import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelJuegoComponent } from './panel-juego.component';

describe('PanelJuegoComponent', () => {
  let component: PanelJuegoComponent;
  let fixture: ComponentFixture<PanelJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
