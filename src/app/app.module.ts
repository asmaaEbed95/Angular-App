import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  //the declaration here is for the components that are in the app as if the name of any component not mentioned here it will not be recognized
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //to till the app which component should be recognized when the app start
  bootstrap: [AppComponent]
})
export class AppModule { }
