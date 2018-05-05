webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all/all.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 200px;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }\r\n\r\n"

/***/ }),

/***/ "./src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n        </div>\n      \n      </form>\n\n\n  <div class=\"row\" style=\"text-align:center\"><br>\n    <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-book\"></i><b>All Books</b><i class=\"fa fa-book\"></i></div>\n    <br><br><br>\n  </div>\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBooks.length>0\">\n    <div *ngFor=\"let book of allBooks | filterBy: filterName\" class=\"col-md-4\">\n        <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 300px\"><br>\n          <div class=\"card-body\">\n             Book Name: \n            <h3 class=\"card-title\">{{book.name || defaultValue}}</h3>\n      \n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> by {{book.authors || defaultValue}} </li>\n            </ul>\n           </div>     \n           \n            <button routerLink=\"/books/{{book.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n            <br><br>\n          </div>\n          <br><br>\n\n          \n    </div>\n\n  </div>\n  <br><br>\n  <hr>\n  <br><br>\n\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-home\"></i><b>All Houses</b><i class=\"fa fa-home\"></i></div>\n    <br><br><br>\n  </div>\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allHouses.length>0\" >\n    <div *ngFor=\"let house of allHouses | filterBy: filterName\" class=\"col-md-4\">\n      \n     \n        <div class=\"card h-100\" style=\"border :rgb(7, 92, 7) 2px solid\">\n          <div class=\"card-body\"><br>\n              House Name : \n            <h3 class=\"card-title\">{{house.name || defaultValue}}</h3>\n            <br>\n            <button routerLink=\"/houses/{{house.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n          </div>\n        </div>   <br><br>       \n\n    </div>\n  </div>\n\n  <br><br>\n  <hr>\n  <br><br>\n\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-user\"></i><b>All Characters</b><i class=\"fa fa-user\"></i></div>\n    <br><br>\n  </div>\n\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allCharacters.length>0\">\n    <div *ngFor=\"let character of allCharacters | filterBy: filterName\" class=\"col-md-4\">\n\n      <div class=\"card text-center\" style=\"border:rgb(18, 15, 156) 2px solid; height :200px\"><br>\n\n        <div class=\"card-body\">\n          Character Name :\n          <h3 class=\"card-title\"> {{character.name || defaultValue}}</h3>\n        </div>     \n         \n         <button routerLink=\"/characters/{{character.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n         <br><br>\n      </div>\n        <br><br>\n\n\n\n  </div>\n  \n  <go-top-button   [animate]=\"true\"\n  [speed]=\"300\"\n  [acceleration]=\"2\"\n  [scrollDistance]=\"300\"\n  [styles]=\"{\n     'border-radius': '20px 20px 20px 20px',\n     'right': '5px',\n     'color': 'black',\n     'border': '5px solid',\n     'line-height': '20px'\n  }\">\n  <i class=\"fa fa-arrow-up\"></i>\n\n  </go-top-button>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllComponent = /** @class */ (function () {
    function AllComponent(httpGotService) {
        this.httpGotService = httpGotService;
        this.allHouses = [];
        this.allCharacters = [];
        this.defaultValue = "None";
        this.filterName = { name: '' };
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("books component OnInit called");
        this.allBooks = this.httpGotService.getAllBooks().subscribe(function (data) {
            _this.allBooks = data;
            console.log(_this.allBooks);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        var i;
        console.log("Houses component OnInit called");
        var _loop_1 = function () {
            var temp1 = this_1.httpGotService.getAllHouses(i).subscribe(function (data) {
                temp1 = data;
                _this.allHouses = _this.allHouses.concat(temp1);
                console.log(_this.allHouses);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (i = 0; i < 9; i++) {
            _loop_1();
        }
        var _loop_2 = function () {
            var temp2 = this_2.httpGotService.getAllCharacters(i).subscribe(function (data) {
                //console.log(data);
                temp2 = data;
                _this.allCharacters = _this.allCharacters.concat(temp2);
                console.log(_this.allCharacters);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        };
        var this_2 = this;
        for (i = 0; i < 44; i++) {
            _loop_2();
        }
    };
    AllComponent.prototype.ngOnDestroy = function () {
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            template: __webpack_require__("./src/app/all/all.component.html"),
            styles: [__webpack_require__("./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_got_service__["a" /* HttpGotService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n    background-color: rgb(224, 221, 221);\r\n}\r\n\r\n.header{\r\n\r\n    background-color: #023133;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 26px;\r\n\r\n}\r\n\r\n@media (max-width: 640px)\r\n{img {\r\n    width: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"text-align:center\">\n\n  <div class=\"container\">\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <a style=\"color:white;\" [routerLink]=\"['/all']\"><b><img src=\"../assets/logo.png\"></b></a>\n        \n      </div>\n    </div>\n<br>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n      \n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n\n                  <li><a [routerLink]=\"['/all']\">All</a></li>\n                  <li><a [routerLink]=\"['/books']\">Books</a></li>\n                  <li><a [routerLink]=\"['/houses']\">Houses</a></li>\n                  <li><a [routerLink]=\"['/characters']\">Characters</a></li>\n\n            </ul>\n            \n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n  </div>\n\n  <br><br>\n<router-outlet></router-outlet>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__houses_houses_component__ = __webpack_require__("./src/app/houses/houses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__books_books_component__ = __webpack_require__("./src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__characters_characters_component__ = __webpack_require__("./src/app/characters/characters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_view_book_view_component__ = __webpack_require__("./src/app/book-view/book-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__house_view_house_view_component__ = __webpack_require__("./src/app/house-view/house-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__character_view_character_view_component__ = __webpack_require__("./src/app/character-view/character-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_go_top_button__ = __webpack_require__("./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//To use ngModel importing the required files.






//import statement for service





//import statement for Go to Top button


//import statement to use font awesome library

//import files for filter pipe

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__houses_houses_component__["a" /* HousesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__characters_characters_component__["a" /* CharactersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__all_all_component__["a" /* AllComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_view_book_view_component__["a" /* BookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__house_view_house_view_component__["a" /* HouseViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__character_view_character_view_component__["a" /* CharacterViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_go_top_button__["a" /* GoTopButtonModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'all', pathMatch: 'full' },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_8__all_all_component__["a" /* AllComponent */] },
                    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_6__books_books_component__["a" /* BooksComponent */] },
                    { path: 'books/:bookNumber', component: __WEBPACK_IMPORTED_MODULE_11__book_view_book_view_component__["a" /* BookViewComponent */] },
                    { path: 'houses', component: __WEBPACK_IMPORTED_MODULE_5__houses_houses_component__["a" /* HousesComponent */] },
                    { path: 'houses/:houseNumber', component: __WEBPACK_IMPORTED_MODULE_12__house_view_house_view_component__["a" /* HouseViewComponent */] },
                    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_7__characters_characters_component__["a" /* CharactersComponent */] },
                    { path: 'characters/:characterNumber', component: __WEBPACK_IMPORTED_MODULE_13__character_view_character_view_component__["a" /* CharacterViewComponent */] },
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__http_got_service__["a" /* HttpGotService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/***/ (function(module, exports) {

module.exports = ".card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentBook.length>0\" >\n    <div class=\"col-md-12\" style=\"font-size:26px\">Books Details</div>\n    <br><br>\n  </div>\n \n    <!--  \n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">{{currentBook.name|uppercase}}</div>\n            <div class=\"panel-body\">\n              Published by : {{currentBook.publisher}}<br><hr><br>\n              Number of Pages :{{currentBook.numberOfPages}}<br><hr><br>\n              Country : {{currentBook.country}}<br><hr><br>\n              Media Type : {{currentBook.mediaType}}<br><hr><br>\n              Characters : \n              <br><br>\n              <div class=\"row\" style=\"overflow-y:scroll;height:150px\">\n               <div class=\"col-md-1\"  *ngFor=\"let character of currentBook.characters;\"  style=\"text-align:center; margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                <button routerLink=\"/characters/{{character.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> ID : {{character.split('/').pop()}}</button>\n               </div>\n              </div><br><hr><br>\n              POV Characters :\n              <br><br>\n              <div class=\"row\" style=\"overflow-y:scroll;height:150px\">\n               <div class=\"col-md-1\"  *ngFor=\"let character1 of currentBook.povCharacters;\"  style=\"text-align:center; margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                <button routerLink=\"/characters/{{character1.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> ID : {{character1.split('/').pop()}}</button>\n               </div>\n              </div>\n\n            </div><hr>\n            <div class=\"panel-footer\">\n              Released on {{currentBook.released|date}}<br><br>by {{currentBook.authors}} <br><br>\n            </div><br>\n            <div class=\"row\" style=\"text-align:center\">\n                <div class=\"col-md-12\">\n                  <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                </div>\n                <br><br>    \n            </div>\n        </div>\n      -->    \n \n        <div class=\"card h-100\" style=\"border :1px solid rgb(226, 68, 68)\">\n            <div class=\"card-body\" style=\"padding:50px\">\n              Book Name :<br>\n              <h2 class=\"card-title\">{{currentBook.name||defaultValue}}</h2><br>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> Published by : {{currentBook.publisher||defaultValue}}</li>\n                <li class=\"list-group-item\">Number of Pages :{{currentBook.numberOfPages||defaultValue}}</li>\n                <li class=\"list-group-item\">Media Type : {{currentBook.mediaType||defaultValue}}</li>\n              </ul>\n              <br>\n\n              Related Characters : \n              <br><br>\n              <div class=\"row\" style=\"overflow-y:scroll;height:150px; padding:20px; border: grey 2px solid\">\n               <div class=\"col-md-1\"  *ngFor=\"let character of currentBook.characters;\"  style=\"text-align:center; margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                <button routerLink=\"/characters/{{character.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> ID : {{character.split('/').pop()}}</button>\n               </div>\n              </div><br><hr><br>\n              Related POV Characters :\n              <br><br>\n              <div class=\"row\" style=\"overflow-y:scroll;height:150px;  padding:20px; border: grey 2px solid\">\n               <div class=\"col-md-1\"  *ngFor=\"let character1 of currentBook.povCharacters;\"  style=\"text-align:center; margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                <button routerLink=\"/characters/{{character1.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> ID : {{character1.split('/').pop()}}</button>\n               </div>\n              </div>\n\n                <br><br>\n\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div>\n      \n\n            </div>\n          </div>      \n\n          <go-top-button   [animate]=\"true\"\n          [speed]=\"50\"\n          [acceleration]=\"2\"\n          [scrollDistance]=\"300\"\n          [styles]=\"{\n             'border-radius': '20px 20px 20px 20px',\n             'right': '5px',\n             'color': 'black',\n             'border': '5px solid',\n             'line-height': '20px'\n          }\">\n          <i class=\"fa fa-arrow-up\"></i>\n\n          </go-top-button>\n\n</div>"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_route, _router, httpGotService, location) {
        this._route = _route;
        this._router = _router;
        this.httpGotService = httpGotService;
        this.location = location;
        //empty object
        this.currentBook = [];
        this.defaultValue = "None";
        console.log("Book-view constructor called");
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Book-view ngOnInit called");
        var bookNumber = this._route.snapshot.paramMap.get('bookNumber');
        console.log(bookNumber);
        this.httpGotService.getSingleBook(bookNumber).subscribe(function (data) {
            _this.currentBook = data;
            console.log(_this.currentBook);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BookViewComponent.prototype.ngOnDestroy = function () {
    };
    BookViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-view',
            template: __webpack_require__("./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__("./src/app/book-view/book-view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__http_got_service__["a" /* HttpGotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 300px;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n        </div>\n      \n      </form>\n\n\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-book\"></i><b>All Books</b><i class=\"fa fa-book\"></i></div>\n    <br><br>\n  </div>\n\n  \n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBooks.length>0\">\n    <div *ngFor=\"let book of allBooks | filterBy: filterName\" class=\"col-md-3\">\n      \n\n     <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid\"><br>\n      <div class=\"card-header\">\n          Name: {{book.name||defaultValue}}\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"></h5>\n  \n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\"> Published by : {{book.publisher||defaultValue}}</li>\n            <li class=\"list-group-item\">Number of Pages :{{book.numberOfPages||defaultValue}}</li>\n        </ul>\n       </div>     \n       \n        <button routerLink=\"/books/{{book.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n        <br><br>\n      </div>\n\n  \n      <br><br>\n\n    </div>\n  \n    <go-top-button   [animate]=\"true\"\n                 [speed]=\"50\"\n                 [acceleration]=\"2\"\n                 [scrollDistance]=\"300\"\n                 [styles]=\"{\n                    'border-radius': '20px 20px 20px 20px',\n                    'right': '5px',\n                    'color': 'black',\n                    'border': '5px solid',\n                    'line-height': '20px'\n                 }\">\n                 <i class=\"fa fa-arrow-up\"></i>\n\n    </go-top-button>\n\n  </div>\n\n  \n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent(httpGotService) {
        this.httpGotService = httpGotService;
        this.defaultValue = "None";
        this.filterName = { name: '' };
        console.log("Books component constructor called");
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("books component OnInit called");
        this.allBooks = this.httpGotService.getAllBooks().subscribe(function (data) {
            _this.allBooks = data;
            console.log(_this.allBooks);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BooksComponent.prototype.ngOnDestroy = function () {
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("./src/app/books/books.component.html"),
            styles: [__webpack_require__("./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_got_service__["a" /* HttpGotService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/character-view/character-view.component.css":
/***/ (function(module, exports) {

module.exports = ".card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/character-view/character-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\"  *ngIf=\"currentCharacter.length>0\">\n      <div class=\"col-md-12\" style=\"font-size:26px\">Details of Characters</div>\n      <br><br>\n    </div>\n <!--      \n        <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Name: {{currentCharacter.name|uppercase}}</div>\n              <div class=\"panel-body\">\n                culture : {{currentCharacter.culture}}<br><hr><br>\n                gender :{{currentCharacter.gender}}<br><hr><br>\n                Aiases : {{currentCharacter.aliases}}<br><hr><br>\n\n                Related Book : \n                <br><br>\n            \n                <div class=\"row\" style=\"text-align:center\">\n                 <div class=\"col-md-1\"  *ngFor=\"let book of currentCharacter.books;\"  style=\"margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                  <button routerLink=\"/books/{{book.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> Book ID : {{book.split('/').pop()}}</button>\n                 </div>\n                </div><br><hr><br>\n  \n\n              </div>\n                    <br>\n                    <div class=\"row\" style=\"text-align:center\">\n                        <div class=\"col-md-12\">\n                          <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                        </div>\n                        <br><br>    \n                    </div>\n                    <br>\n        </div>\n      -->      \n\n      <div class=\"card text-center\" style=\"border:rgb(49, 49, 175) 2px solid\"><br>\n          <div class=\"card-header\">\n              Character Name: <h3>{{currentCharacter.name||defaultValue}}</h3>\n          </div>\n          <div class=\"card-body\" style=\"padding:50px\">\n            <h5 class=\"card-title\"></h5>\n    \n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> culture : {{currentCharacter.culture||defaultValue}}</li>\n                <li class=\"list-group-item\">gender : {{currentCharacter.gender||defaultValue}}</li>\n                <li class=\"list-group-item\">Aiases : {{currentCharacter.aliases }}</li>\n            </ul>\n               \n            <div class=\"row text-center\" style=\"border:black 2px solid\">\n                Realated Books :<br><br> \n                <div class=\"col-md-1\"  *ngFor=\"let book of currentCharacter.books;\"  style=\"margin-bottom: 10px; margin-left:10px; margin-right:2px;\">\n                 <button routerLink=\"/books/{{book.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\"> Book ID : {{book.split('/').pop()}}</button>\n                </div>\n            </div><hr>\n    \n          </div>\n          <div class=\"card-footer\">\n              <br>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div>\n              <br>\n          </div>\n    \n        </div>\n        <br><br>\n\n        <go-top-button   [animate]=\"true\"\n        [speed]=\"50\"\n        [acceleration]=\"2\"\n        [scrollDistance]=\"300\"\n        [styles]=\"{\n           'border-radius': '20px 20px 20px 20px',\n           'right': '5px',\n           'color': 'black',\n           'border': '5px solid',\n           'line-height': '20px'\n        }\">\n        <i class=\"fa fa-arrow-up\"></i>\n\n        </go-top-button>\n\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/character-view/character-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterViewComponent = /** @class */ (function () {
    function CharacterViewComponent(_route, _router, httpGotService, location) {
        this._route = _route;
        this._router = _router;
        this.httpGotService = httpGotService;
        this.location = location;
        this.currentCharacter = [];
        this.defaultValue = "None";
        console.log("character-view constructor called");
    }
    CharacterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("character-view ngOnInit called");
        var characterNumber = this._route.snapshot.paramMap.get('characterNumber');
        this.httpGotService.getSingleCharacter(characterNumber).subscribe(function (data) {
            _this.currentCharacter = data;
            console.log(_this.currentCharacter);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    CharacterViewComponent.prototype.ngOnDestroy = function () {
    };
    CharacterViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CharacterViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-character-view',
            template: __webpack_require__("./src/app/character-view/character-view.component.html"),
            styles: [__webpack_require__("./src/app/character-view/character-view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__http_got_service__["a" /* HttpGotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CharacterViewComponent);
    return CharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 200px;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n        </div>\n      \n      </form>\n\n\n\n<div class=\"row\" style=\"text-align:center\">\n  <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-user\"></i><b>All Characters</b><i class=\"fa fa-user\"></i></div>\n  <br><br>\n</div>\n\n<div class=\"row\" style=\"text-align:center\" *ngIf=\"allCharacters.length>0\">\n  <div *ngFor=\"let character of allCharacters | filterBy: filterName\" class=\"col-md-4\">\n\n    <div class=\"card text-center\" style=\"border:rgb(18, 15, 156) 2px solid; height :200px\"><br>\n\n      <div class=\"card-body\">\n        Character Name :\n        <h3 class=\"card-title\"> {{character.name || defaultValue}}</h3>\n      </div>     \n       \n       <button routerLink=\"/characters/{{character.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n       <br><br>\n    </div>\n      <br><br>\n\n\n\n</div>\n\n<go-top-button   [animate]=\"true\"\n[speed]=\"50\"\n[acceleration]=\"2\"\n[scrollDistance]=\"300\"\n[styles]=\"{\n   'border-radius': '20px 20px 20px 20px',\n   'right': '5px',\n   'color': 'black',\n   'border': '5px solid',\n   'line-height': '20px'\n}\">\n<i class=\"fa fa-arrow-up\"></i>\n\n</go-top-button>\n\n</div>"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(httpGotService) {
        this.httpGotService = httpGotService;
        this.allCharacters = [];
        this.defaultValue = "None";
        this.filterName = { name: '' };
        console.log("Characters component constructor called");
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i;
        var _loop_1 = function () {
            var temp = this_1.httpGotService.getAllCharacters(i).subscribe(function (data) {
                //console.log(data);
                temp = data;
                _this.allCharacters = _this.allCharacters.concat(temp);
                console.log(_this.allCharacters);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (i = 0; i < 44; i++) {
            _loop_1();
        }
    };
    CharactersComponent.prototype.ngOnDestroy = function () {
    };
    CharactersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-characters',
            template: __webpack_require__("./src/app/characters/characters.component.html"),
            styles: [__webpack_require__("./src/app/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_got_service__["a" /* HttpGotService */]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/***/ (function(module, exports) {

module.exports = ".card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentHouse.length>0\">\n      <div class=\"col-md-12\" style=\"font-size:26px\">House Details</div>\n      <br><br><br>\n    </div>\n   \n          <div class=\"card h-100\" style=\"border :rgb(7, 92, 7) 2px solid\">\n            <div class=\"card-body\">\n                <br>House Name : \n              <h3 class=\"card-title\">{{currentHouse.name||defaultValue}}</h3>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> Region : {{currentHouse.region||defaultValue}}</li>\n                <li class=\"list-group-item\">Coat of Arms :{{currentHouse.coatOfArms||defaultValue}}</li>\n                <li class=\"list-group-item\">Overload House : {{currentHouse.overload||defaultValue}}</li>\n              </ul>\n              <br>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div>\n      \n\n            </div>\n          </div>      \n  \n<br>  \n\n<go-top-button   [animate]=\"true\"\n[speed]=\"50\"\n[acceleration]=\"2\"\n[scrollDistance]=\"300\"\n[styles]=\"{\n   'border-radius': '20px 20px 20px 20px',\n   'right': '5px',\n   'color': 'black',\n   'border': '5px solid',\n   'line-height': '20px'\n}\">\n<i class=\"fa fa-arrow-up\"></i>\n\n</go-top-button>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_route, _router, httpGotService, location) {
        this._route = _route;
        this._router = _router;
        this.httpGotService = httpGotService;
        this.location = location;
        this.currentHouse = [];
        this.defaultValue = "None";
        console.log("House-view constructor called");
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("house-View ngOnInit called");
        var houseNumber = this._route.snapshot.paramMap.get('houseNumber');
        console.log(houseNumber);
        this.httpGotService.getSingleHouse(houseNumber).subscribe(function (data) {
            _this.currentHouse = data;
            console.log(_this.currentHouse);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HouseViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    HouseViewComponent.prototype.ngOnDestroy = function () {
    };
    HouseViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house-view',
            template: __webpack_require__("./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__("./src/app/house-view/house-view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__http_got_service__["a" /* HttpGotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/houses/houses.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 300px;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/houses/houses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n        </div>\n      \n      </form>\n\n\n\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:26px\"><i class=\"fa fa-home\"></i><b>All Houses</b><i class=\"fa fa-home\"></i></div>\n    <br><br><br>\n  </div>\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allHouses.length>0\">\n    <div *ngFor=\"let house of allHouses | filterBy: filterName\" class=\"col-md-3\">\n      \n      <div class=\"card text-center\" style=\"border:rgb(7, 92, 7) 2px solid\"><br>\n\n        <div class=\"card-body\">\n          House Name :\n          <h3 class=\"card-title\"> {{house.name||defaultValue}}</h3>\n    \n          <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">Region : {{house.region||defaultValue}}</li>\n\n          </ul>\n         </div>     \n         \n         <button routerLink=\"/houses/{{house.url.split('/').pop()}}\" type=\"button\" class=\"btn btn-primary\">Click here for Information</button>\n         <br><br>\n        </div>\n        <br><br>\n\n    </div>\n  </div>\n  <br><br>\n\n  <go-top-button   [animate]=\"true\"\n  [speed]=\"50\"\n  [acceleration]=\"2\"\n  [scrollDistance]=\"300\"\n  [styles]=\"{\n     'border-radius': '20px 20px 20px 20px',\n     'right': '5px',\n     'color': 'black',\n     'border': '5px solid',\n     'line-height': '20px'\n  }\">\n  <i class=\"fa fa-arrow-up\"></i>\n\n  </go-top-button>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/houses/houses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_got_service__ = __webpack_require__("./src/app/http-got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousesComponent = /** @class */ (function () {
    function HousesComponent(httpGotService) {
        this.httpGotService = httpGotService;
        this.allHouses = [];
        this.defaultValue = "None";
        this.filterName = { name: '' };
        console.log("http got houses service constructor called");
    }
    HousesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i;
        console.log("Houses component OnInit called");
        var _loop_1 = function () {
            var temp = this_1.httpGotService.getAllHouses(i).subscribe(function (data) {
                temp = data;
                _this.allHouses = _this.allHouses.concat(temp);
                console.log(_this.allHouses);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (i = 0; i < 9; i++) {
            _loop_1();
        }
    };
    HousesComponent.prototype.ngOnDestroy = function () {
    };
    HousesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-houses',
            template: __webpack_require__("./src/app/houses/houses.component.html"),
            styles: [__webpack_require__("./src/app/houses/houses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_got_service__["a" /* HttpGotService */]])
    ], HousesComponent);
    return HousesComponent;
}());



/***/ }),

/***/ "./src/app/http-got.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpGotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing HttpClient to make requests




var HttpGotService = /** @class */ (function () {
    function HttpGotService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
        console.log("Http Service constructor called");
    }
    HttpGotService.prototype.getAllBooks = function () {
        var myResponse = this._http.get(this.baseUrl + "/books?page=1&pageSize=20");
        //  console.log(myResponse);
        return myResponse;
    };
    HttpGotService.prototype.getAllCharacters = function (i) {
        var myResponse = this._http.get(this.baseUrl + "/characters?page=" + i + "&pageSize=50");
        //   console.log(myResponse);
        return myResponse;
    };
    HttpGotService.prototype.getAllHouses = function (i) {
        var myResponse = this._http.get(this.baseUrl + "/houses?page=" + i + "&pageSize=50");
        // console.log(myResponse);
        return myResponse;
    };
    HttpGotService.prototype.getSingleBook = function (currentBookNumber) {
        var myResponse = this._http.get(this.baseUrl + "/books/" + currentBookNumber);
        return myResponse;
    };
    HttpGotService.prototype.getSingleHouse = function (currentHouseNumber) {
        var myResponse = this._http.get(this.baseUrl + "/houses/" + currentHouseNumber);
        return myResponse;
    };
    HttpGotService.prototype.getSingleCharacter = function (currentCharacterNumber) {
        var myResponse = this._http.get(this.baseUrl + "/characters/" + currentCharacterNumber);
        return myResponse;
    };
    HttpGotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpGotService);
    return HttpGotService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map