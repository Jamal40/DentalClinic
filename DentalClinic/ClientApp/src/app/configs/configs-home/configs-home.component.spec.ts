import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsHomeComponent } from './configs-home.component';

describe('ConfigsHomeComponent', () => {
  let component: ConfigsHomeComponent;
  let fixture: ComponentFixture<ConfigsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
