import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config.component';
import { ClarityModule } from '@clr/angular';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ClarityModule],
      declarations: [ConfigComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
