import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'; 


//To use ngModel importing the required files.
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { AllComponent } from './all/all.component';

//import statement for service
import { HttpGotService } from './http-got.service';
import { HttpClientModule } from '@angular/common/http';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';

//import statement for Go to Top button
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import statement to use font awesome library
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//import files for filter pipe
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    BooksComponent,
    CharactersComponent,
    AllComponent,
    BookViewComponent,
    HouseViewComponent,
    CharacterViewComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoTopButtonModule,
    AngularFontAwesomeModule,
    FilterPipeModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'all', pathMatch:'full'},
      {path:'all',component:AllComponent},
      {path:'books', component:BooksComponent},
      {path:'books/:bookNumber', component:BookViewComponent},
      {path:'houses', component:HousesComponent},
      {path:'houses/:houseNumber', component:HouseViewComponent},
      {path:'characters', component:CharactersComponent},
      {path:'characters/:characterNumber' , component:CharacterViewComponent},
    ])
  ],
  providers: [
    HttpGotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
