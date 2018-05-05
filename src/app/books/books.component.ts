import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpGotService } from '../http-got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  public allBooks;
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};

  constructor(public httpGotService:HttpGotService) { 
    console.log("Books component constructor called");
  }

  ngOnInit() {
    console.log("books component OnInit called");
    this.allBooks= this.httpGotService.getAllBooks().subscribe(
      data=>{
        this.allBooks=data;
        console.log(this.allBooks);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngOnDestroy(){

  }

}
