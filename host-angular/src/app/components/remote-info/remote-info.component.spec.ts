import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteInfoComponent } from './remote-info.component';

describe('RemoteInfoComponent', () => {
  let component: RemoteInfoComponent;
  let fixture: ComponentFixture<RemoteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
