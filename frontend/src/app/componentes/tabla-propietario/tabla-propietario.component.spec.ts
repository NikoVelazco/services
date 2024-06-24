import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPropietarioComponent } from './tabla-propietario.component';

describe('TablaPropietarioComponent', () => {
  let component: TablaPropietarioComponent;
  let fixture: ComponentFixture<TablaPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPropietarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
