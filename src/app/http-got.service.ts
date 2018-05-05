import { Injectable } from '@angular/core';

//importing HttpClient to make requests
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


//importing observable

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import 'rxjs/add/observable/from'; 

@Injectable()
export class HttpGotService {

  public allBooks;
  public baseUrl='https://anapioficeandfire.com/api';



  constructor(private _http:HttpClient) { 
    console.log("Http Service constructor called");
  }

  public getAllBooks():any{

    let myResponse = this._http.get(this.baseUrl+"/books?page=1&pageSize=20"); 
  //  console.log(myResponse);
    return myResponse;
  }

  public getAllCharacters(i):any{

        let myResponse = this._http.get(this.baseUrl+"/characters?page="+i+"&pageSize=50"); 
     //   console.log(myResponse);
        return  myResponse;
      
  }


  public getAllHouses(i):any{

    let myResponse = this._http.get(this.baseUrl+"/houses?page="+i+"&pageSize=50"); 
   // console.log(myResponse);
    return  myResponse;
  
  }

  public getSingleBook(currentBookNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/books/"+currentBookNumber);
    return myResponse;
  }

  public getSingleHouse(currentHouseNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/houses/"+currentHouseNumber);
    return myResponse;
  }

  public getSingleCharacter(currentCharacterNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/characters/"+currentCharacterNumber);
    return myResponse;
  }

}
