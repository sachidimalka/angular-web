import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
