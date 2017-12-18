import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/Rx';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthserviceService } from './services/authservice.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AuthComponent]
})
export class AppModule { }
