import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBlock } from './follow-block';

describe('FollowBlock', () => {
  let component: FollowBlock;
  let fixture: ComponentFixture<FollowBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
