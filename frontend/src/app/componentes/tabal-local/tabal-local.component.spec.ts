import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabalLocalComponent } from './tabal-local.component';

describe('TabalLocalComponent', () => {
  let component: TabalLocalComponent;
  let fixture: ComponentFixture<TabalLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabalLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabalLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
