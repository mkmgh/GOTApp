import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpGotService } from '../http-got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  public allCharacters:any[]=[];
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};


  constructor( public httpGotService: HttpGotService) {
    console.log("Characters component constructor called");
   }

  ngOnInit() {
    let i;
    for(i=0;i<44;i++){
      let temp= this.httpGotService.getAllCharacters(i).subscribe(
        data=>{
          //console.log(data);
          temp=data;
          this.allCharacters=this.allCharacters.concat(temp);
          console.log(this.allCharacters);
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
