import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonfpdisplayComponent } from './carbonfpdisplay.component';

describe('CarbonfpdisplayComponent', () => {
  let component: CarbonfpdisplayComponent;
  let fixture: ComponentFixture<CarbonfpdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonfpdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonfpdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
