import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpGotService } from '../http-got.service';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy{

  public allHouses:any[]=[];
  public allCharacters:any[]=[];
  public allBooks;
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};
  constructor(public httpGotService: HttpGotService) { }

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
    );

    let i;
    console.log("Houses component OnInit called");
    for(i=0;i<9;i++){
    let temp1= this.httpGotService.getAllHouses(i).subscribe(
      data=>{
        temp1=data;
        this.allHouses=this.allHouses.concat(temp1);
        console.log(this.allHouses);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    }
    
    for(i=0;i<44;i++){
      let temp2= this.httpGotService.getAllCharacters(i).subscribe(
        data=>{
          //console.log(data);
          temp2=data;
          this.allCharacters=this.allCharacters.concat(temp2);
          console.log(this.allCharacters);
        },

        error =>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }
      );

    }

}

  ngOnDestroy(){

  }
}