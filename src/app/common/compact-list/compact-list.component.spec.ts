import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompactListComponent } from './compact-list.component';

describe('CompactListComponent', () => {
  let component: CompactListComponent;
  let fixture: ComponentFixture<CompactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
