import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
