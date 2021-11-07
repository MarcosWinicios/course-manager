import { CourseModule } from './coursers/course.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: "", redirectTo: "courses", pathMatch: "full" //Raiz do projeto
      },
      {
        path: "**", component: Error404Component //Rota para endereço não encontrado
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
