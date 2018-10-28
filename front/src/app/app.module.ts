import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
<<<<<<< HEAD
import { MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule } from '@angular/material'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { HomeComponent} from './home.component'
import { NavComponent} from './nav.components'

const routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionComponent}
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, HomeComponent
=======
import { MatButtonModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material'
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import{QuestionsComponent} from './questions.component'


@NgModule({
  declarations: [
    AppComponent, QuestionsComponent,QuestionComponent, 
>>>>>>> 269dc8d4a97a3a67a737e05a6dcccbf486ef44ba
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(routes)
=======
    MatListModule,
    HttpClientModule
>>>>>>> 269dc8d4a97a3a67a737e05a6dcccbf486ef44ba
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
