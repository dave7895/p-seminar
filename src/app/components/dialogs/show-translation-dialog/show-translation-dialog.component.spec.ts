import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTranslationDialogComponent } from './show-translation-dialog.component';

describe('ShowTranslationDialogComponent', () => {
  let component: ShowTranslationDialogComponent;
  let fixture: ComponentFixture<ShowTranslationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTranslationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTranslationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
