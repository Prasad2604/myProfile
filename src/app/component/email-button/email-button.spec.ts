import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailButton } from './email-button';

describe('EmailButton', () => {
  let component: EmailButton;
  let fixture: ComponentFixture<EmailButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
