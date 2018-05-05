import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpGotService } from '../http-got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit, OnDestroy{
  public allHouses:any[]=[];
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};


  constructor(public httpGotService:HttpGotService) { 
    console.log("http got houses service constructor called");
  }

  ngOnInit() {
    let i;
    console.log("Houses component OnInit called");
    for(i=0;i<9;i++){
    let temp= this.httpGotService.getAllHouses(i).subscribe(
      data=>{
        temp=data;
        this.allHouses=this.allHouses.concat(temp);
        console.log(this.allHouses);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
   }
  }

  ngOnDestroy(){

  }

}
