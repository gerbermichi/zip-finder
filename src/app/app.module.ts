import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ZipTableComponent} from './zip-table/zip-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ZipTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

