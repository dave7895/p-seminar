import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintWordsPageComponent } from './print-words-page.component';

describe('PrintWordsPageComponent', () => {
  let component: PrintWordsPageComponent;
  let fixture: ComponentFixture<PrintWordsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintWordsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintWordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
