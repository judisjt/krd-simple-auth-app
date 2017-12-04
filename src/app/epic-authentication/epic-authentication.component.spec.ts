import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicAuthenticationComponent } from './epic-authentication.component';

describe('EpicAuthenticationComponent', () => {
  let component: EpicAuthenticationComponent;
  let fixture: ComponentFixture<EpicAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
