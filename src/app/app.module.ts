import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './coursers/course-list.component';
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './coursers/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "courses", component: CourseListComponent //Rota de algum componente específico
      },
      {
        path: "courses/info/:id", component: CourseInfoComponent
      },
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
