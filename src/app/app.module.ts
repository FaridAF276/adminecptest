import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserstatComponent } from './userstat/userstat.component';
import { TripstatComponent } from './tripstat/tripstat.component';
import { ParcelstatComponent } from './parcelstat/parcelstat.component';
import { LoginstatComponent } from './loginstat/loginstat.component';

@NgModule({
   declarations: [
      AppComponent,
      UserstatComponent,
      TripstatComponent,
      ParcelstatComponent,
      LoginstatComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
  
}
