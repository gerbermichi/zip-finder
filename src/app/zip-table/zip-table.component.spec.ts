import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ZipTableComponent} from './zip-table.component';
import {MatInputModule, MatTableModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ZipTableComponent', () => {
  let component: ZipTableComponent;
  let fixture: ComponentFixture<ZipTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZipTableComponent],
      imports: [
        MatTableModule,
        MatInputModule,
        ScrollingModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 header columns', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('table thead .mat-header-cell').length).toBe(2);
  });

  it('should apply the filter', () => {
    component.applyFilter(' Wallisellen ');
    expect(component.dataSource.filter).toBe('wallisellen');

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('table tbody tr').length).toBe(1);
  });
});
