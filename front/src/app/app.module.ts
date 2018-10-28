import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatInputModule, MatCardModule,MatListModule, MatToolbarModule } from '@angular/material'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import { ApiService } from './api.service'
import { HomeComponent} from './home.component'
import { NavComponent} from './nav.components'

const routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, HomeComponent, QuestionsComponent, NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatListModule,
    HttpClientModule,
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
