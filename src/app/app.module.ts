import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Angular Routes
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';

//Each route will be an object
//Each route will have a path
const routes: Routes = [
  //http://localhost:4200/quotes
  { path: 'quotes', component: QuoteListComponent},
  //http://localhost:4200/home
  { path: 'home', component: MyHomeComponent},
  //http://localhost:4200/about
  { path: 'about', component: MyAboutComponent},
  //http://localhost:4200/...
  //Generic path is used to catch errors
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteItemComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Add RouterModule for managing Routes
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
