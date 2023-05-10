import { TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
    })
      .compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
