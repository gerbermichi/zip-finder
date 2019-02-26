import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatIconModule, MatInputModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ZipTableComponent} from './zip-table/zip-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ZipTableComponent
      ],
      imports: [
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        ScrollingModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title 'ZIP Finder 1.0'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ZIP Finder 1.0');
  });

  it('should render title in toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar mat-toolbar-row span').textContent).toContain('ZIP Finder 1.0');
  });
});
