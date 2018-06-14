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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".contain{\r\n    margin: 15px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <router-outlet></router-outlet>\r\n\r\n\r\n"

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

// import { AppService } from './app.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // mostrarPageInicial: boolean = true;
    // constructor (private servico: AppService){
    // }
    AppComponent.prototype.OnInit = function () {
        // this.servico.mostrarPageApresentacao.subscribe(
        //   mostrar => this.mostrarPageInicial = mostrar
        // );
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_criar_secao_add_dicas_add_dicas_component__ = __webpack_require__("./src/app/page-criar-secao/add-dicas/add-dicas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_criar_secao_gerar_codigo_gerar_codigo_component__ = __webpack_require__("./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_criar_secao_botao_botao_component__ = __webpack_require__("./src/app/page-criar-secao/botao/botao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_inicial_header_header_component__ = __webpack_require__("./src/app/page-inicial/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_inicial_navbar_navbar_component__ = __webpack_require__("./src/app/page-inicial/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__secoes_secoes_component__ = __webpack_require__("./src/app/secoes/secoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__secoes_cartao_cartao_component__ = __webpack_require__("./src/app/secoes/cartao/cartao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_inicial_form_inicial_component__ = __webpack_require__("./src/app/form-inicial/form-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_apresentacao_page_apresentacao_component__ = __webpack_require__("./src/app/page-apresentacao/page-apresentacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_inicial_page_inicial_component__ = __webpack_require__("./src/app/page-inicial/page-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__form_inicial_entrar_entrar_component__ = __webpack_require__("./src/app/form-inicial/entrar/entrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__form_inicial_cadastrar_cadastrar_component__ = __webpack_require__("./src/app/form-inicial/cadastrar/cadastrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_inicial_botao_inicial_botao_inicial_component__ = __webpack_require__("./src/app/form-inicial/botao-inicial/botao-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_criar_secao_page_criar_secao_component__ = __webpack_require__("./src/app/page-criar-secao/page-criar-secao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__page_criar_secao_criar_secao_criar_secao_component__ = __webpack_require__("./src/app/page-criar-secao/criar-secao/criar-secao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_inicial_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_inicial_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__secoes_cartao_cartao_component__["a" /* CartaoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__page_criar_secao_criar_secao_criar_secao_component__["a" /* CriarSecaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__secoes_secoes_component__["a" /* SecoesComponent */],
                __WEBPACK_IMPORTED_MODULE_2__page_criar_secao_botao_botao_component__["a" /* BotaoComponent */],
                __WEBPACK_IMPORTED_MODULE_1__page_criar_secao_gerar_codigo_gerar_codigo_component__["a" /* GerarCodigoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_apresentacao_page_apresentacao_component__["a" /* PageApresentacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_inicial_page_inicial_component__["a" /* PageInicialComponent */],
                __WEBPACK_IMPORTED_MODULE_13__form_inicial_form_inicial_component__["a" /* FormInicialComponent */],
                __WEBPACK_IMPORTED_MODULE_19__form_inicial_botao_inicial_botao_inicial_component__["a" /* BotaoInicialComponent */],
                __WEBPACK_IMPORTED_MODULE_17__form_inicial_entrar_entrar_component__["a" /* EntrarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__form_inicial_cadastrar_cadastrar_component__["a" /* CadastrarComponent */],
                __WEBPACK_IMPORTED_MODULE_0__page_criar_secao_add_dicas_add_dicas_component__["a" /* AddDicasComponent */],
                __WEBPACK_IMPORTED_MODULE_20__page_criar_secao_page_criar_secao_component__["a" /* PageCriarSecaoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__page_criar_secao_add_dicas_add_dicas_component__["a" /* AddDicasComponent */], __WEBPACK_IMPORTED_MODULE_1__page_criar_secao_gerar_codigo_gerar_codigo_component__["a" /* GerarCodigoComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_criar_secao_criar_secao_criar_secao_component__ = __webpack_require__("./src/app/page-criar-secao/criar-secao/criar-secao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_criar_secao_gerar_codigo_gerar_codigo_component__ = __webpack_require__("./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_criar_secao_page_criar_secao_component__ = __webpack_require__("./src/app/page-criar-secao/page-criar-secao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_criar_secao_add_dicas_add_dicas_component__ = __webpack_require__("./src/app/page-criar-secao/add-dicas/add-dicas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_inicial_cadastrar_cadastrar_component__ = __webpack_require__("./src/app/form-inicial/cadastrar/cadastrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_inicial_entrar_entrar_component__ = __webpack_require__("./src/app/form-inicial/entrar/entrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_apresentacao_page_apresentacao_component__ = __webpack_require__("./src/app/page-apresentacao/page-apresentacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_inicial_page_inicial_component__ = __webpack_require__("./src/app/page-inicial/page-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__secoes_secoes_component__ = __webpack_require__("./src/app/secoes/secoes.component.ts");










var APP_ROUTES = [
    { path: '', redirectTo: '/pagina-apresentacao/entrar', pathMatch: 'full' },
    { path: 'pagina-apresentacao', component: __WEBPACK_IMPORTED_MODULE_7__page_apresentacao_page_apresentacao_component__["a" /* PageApresentacaoComponent */], children: [
            { path: 'entrar', component: __WEBPACK_IMPORTED_MODULE_6__form_inicial_entrar_entrar_component__["a" /* EntrarComponent */] },
            { path: 'cadastrar', component: __WEBPACK_IMPORTED_MODULE_5__form_inicial_cadastrar_cadastrar_component__["a" /* CadastrarComponent */] }
        ] },
    { path: 'pagina-inicial', component: __WEBPACK_IMPORTED_MODULE_8__page_inicial_page_inicial_component__["a" /* PageInicialComponent */], children: [
            { path: 'secoes', component: __WEBPACK_IMPORTED_MODULE_9__secoes_secoes_component__["a" /* SecoesComponent */] },
            { path: 'criarsecao', component: __WEBPACK_IMPORTED_MODULE_2__page_criar_secao_page_criar_secao_component__["a" /* PageCriarSecaoComponent */], children: [
                    { path: 'gerarcodigo', component: __WEBPACK_IMPORTED_MODULE_1__page_criar_secao_gerar_codigo_gerar_codigo_component__["a" /* GerarCodigoComponent */] },
                    { path: 'addDicas', component: __WEBPACK_IMPORTED_MODULE_3__page_criar_secao_add_dicas_add_dicas_component__["a" /* AddDicasComponent */] },
                    { path: 'addPergunta', component: __WEBPACK_IMPORTED_MODULE_0__page_criar_secao_criar_secao_criar_secao_component__["a" /* CriarSecaoComponent */] }
                ] }
        ] },
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        this.urls = "http://localhost:3000/api/sessao";
        this.urlp = "http://localhost:3000/api/professores";
    }
    AppService.prototype.getProf = function () {
        return localStorage.getItem("_id");
    };
    AppService.prototype.setProf = function (userId) {
        localStorage.setItem("_id", userId);
        console.log(userId);
    };
    AppService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    AppService.prototype.setToken = function (token) {
        localStorage.setItem("token", token);
    };
    AppService.prototype.hasToken = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    };
    AppService.prototype.cadastrar = function (nome, email, senha) {
        console.log('entrou cadastrar');
        return this.http.post(this.urlp, {
            nome: nome, email: email, senha: senha
        }).map(function (response) { return (response.json()); });
    };
    AppService.prototype.login = function (email, senha) {
        var _this = this;
        console.log("entrou login");
        return this.http.post(this.urlp + "/login", {
            email: email,
            senha: senha
        }).map(function (response) {
            var r = response.json();
            _this.setToken(r.token);
            _this.setProf(r.userId);
            _this.router.navigate(['pagina-inicial/secoes']);
            // this.username = r.nome;
            return r;
        });
    };
    // getNome(){
    //   return this.username;
    // }
    AppService.prototype.getUsuarios = function () {
        return this.http.get(this.urlp + "?token=" + this.getToken())
            .map(function (response) { return (response.json()); });
    };
    AppService.prototype.criarSecao = function (titulo, descricao, dicas, palpite, correta) {
        console.log(titulo, descricao, dicas, palpite, correta);
        return this.http.post(this.urls + "?token=" + this.getToken(), {
            titulo: titulo,
            descricao: descricao,
            dicas: dicas,
            palpite: palpite,
            correta: correta
        }).map(function (response) { return (response.json()); });
    };
    AppService.prototype.getSecoes = function () {
        console.log("chamou o get secoes");
        return this.http.get(this.urlp + "/" + this.getProf() + "/sessoes" + "?token=" + this.getToken())
            .map(function (response) {
            // (response.json())
            return console.log(response.json());
        });
        // .map((response:Response) => {
        //   let data = response.json();
        //   console.log("data service: "+data);
        //   return data;
        // });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/form-inicial/botao-inicial/botao-inicial.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-botao{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.botao{\r\n    background: -webkit-gradient(linear, left bottom, left top, from(rgb(68, 106, 173)), to(rgb(109, 189, 226)));\r\n    background: linear-gradient(bottom, rgb(68, 106, 173), rgb(109, 189, 226));\r\n    width: 140px;\r\n    height: 50px;\r\n    color: white;\r\n    font-size: 15pt;\r\n\r\n}"

/***/ }),

/***/ "./src/app/form-inicial/botao-inicial/botao-inicial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"div-botao\">\r\n    <button type=\"button\" class=\"btn botao\"><b><ng-content></ng-content></b></button>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/form-inicial/botao-inicial/botao-inicial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotaoInicialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotaoInicialComponent = /** @class */ (function () {
    function BotaoInicialComponent() {
    }
    BotaoInicialComponent.prototype.ngOnInit = function () {
    };
    BotaoInicialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-botao-inicial',
            template: __webpack_require__("./src/app/form-inicial/botao-inicial/botao-inicial.component.html"),
            styles: [__webpack_require__("./src/app/form-inicial/botao-inicial/botao-inicial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BotaoInicialComponent);
    return BotaoInicialComponent;
}());



/***/ }),

/***/ "./src/app/form-inicial/cadastrar/cadastrar.component.css":
/***/ (function(module, exports) {

module.exports = ".form-cadastrar{\r\n    padding: 50px 30px 40px 30px;\r\n}\r\n\r\n.form-control{\r\n    border: none;\r\n    background-color: #F3F3F3;\r\n    border-radius: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.input{\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n\r\n.form-group{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.div-termo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    bottom: 0;\r\n}\r\n\r\n.termo{\r\n    font-size: 8pt;\r\n    text-align: center;\r\n}\r\n\r\n.senha{\r\n    margin-right: 12px;   \r\n}\r\n\r\n.senha-e-conf{\r\n    width: 160px;\r\n    display: inline-block;\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form){\r\n    border: 1px solid red;\r\n}\r\n\r\n.comp{\r\n    display: none;\r\n}\r\n\r\n.naocomp{\r\n    display: block;\r\n}\r\n\r\n.campo-vazio{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/form-inicial/cadastrar/cadastrar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div >\r\n        <form class=\"form-cadastrar\" #cadastro=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputNome\"><b>Nome</b></label>\r\n              <input type=\"text\" class=\"form-control input\" id=\"exampleInputNome\" aria-describedby=\"emailHelp\" placeholder=\"Exemplo nome\"  [(ngModel)]=\"nome\" name=\"nome\" required #userNome=\"ngModel\">\r\n              <div *ngIf=\"!userNome.valid && userNome.touched\" class=\"campo-vazio\"> O nome é obrigatório! </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail\"><b>Email:</b></label>\r\n              <input type=\"email\" class=\"form-control input\" id=\"exampleInputEmail\" placeholder=\"exemplo@email.com\" [(ngModel)]=\"email\" name=\"email\" required email #userEmail=\"ngModel\">\r\n              <div *ngIf=\"!userEmail.valid && userEmail.touched\" class=\"campo-vazio\"> O Email é obrigatório! </div>\r\n            </div>\r\n            <div class=\"\">\r\n              <div class=\"senha-e-conf senha\">\r\n                <label for=\"exampleInputPassword1\"><b>Senha:</b></label>\r\n                <input type=\"password\" class=\"form-control input\" id=\"exampleInputPassword1\" placeholder=\"**********\"  [(ngModel)]=\"senha\" name=\"senha\" required #userSenha=\"ngModel\" validateEqual=\"confirmSenha\" reverse=\"true\">\r\n                <div *ngIf=\"!userSenha.valid && userSenha.touched\" class=\"campo-vazio\"> A senha é obrigatória! </div>\r\n              </div>\r\n              <div class=\"senha-e-conf\">\r\n                <label for=\"exampleInputPassword2\"><b>Confirmar senha:</b></label>\r\n                <input type=\"password\" class=\"form-control input\" id=\"exampleInputPassword2\" placeholder=\"**********\" [(ngModel)]=\"cnfsenha\" name=\"cnfsenha\" required #confirmSenha=\"ngModel\" validateEqual=\"userSenha\">\r\n                <div [ngClass]=\"{'naocomp': compatibilidade}\" class=\"campo-vazio comp\"> Senhas não compatativeis! </div>\r\n              </div>\r\n            </div>\r\n          </form>      \r\n    </div>\r\n    <app-botao-inicial (click)=\"addUser($event) \">Cadastrar</app-botao-inicial>\r\n    <div class=\"div-termo\">\r\n        <p class=\"termo\">Ao clicar em cadastrar você está concordando com <br> \r\n          os <a href=\"\">termos de uso</a> e com a <a href=\"\">política de privacidade </a></p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/form-inicial/cadastrar/cadastrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastrarComponent = /** @class */ (function () {
    function CadastrarComponent(servico) {
        this.servico = servico;
        this.compatibilidade = false;
    }
    CadastrarComponent.prototype.ngOnInit = function () {
        this.servico.getUsuarios();
    };
    CadastrarComponent.prototype.addUser = function (e) {
        if (this.senha != this.cnfsenha) {
            this.compatibilidade = true;
        }
        else {
            event.preventDefault();
            console.log('ta chamando');
            this.servico.cadastrar(this.nome, this.email, this.senha)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) { return console.log(error); });
        }
    };
    CadastrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-cadastrar',
            template: __webpack_require__("./src/app/form-inicial/cadastrar/cadastrar.component.html"),
            styles: [__webpack_require__("./src/app/form-inicial/cadastrar/cadastrar.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */]])
    ], CadastrarComponent);
    return CadastrarComponent;
}());



/***/ }),

/***/ "./src/app/form-inicial/entrar/entrar.component.css":
/***/ (function(module, exports) {

module.exports = ".form-entrar{\r\n    padding: 80px 30px 50px 30px;\r\n}\r\n\r\n.form-control{\r\n    border: none;\r\n    background-color: #F3F3F3;\r\n    border-radius: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.input{\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n\r\n.form-group{\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.div-esqueceu-senha{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    bottom: 0;\r\n}\r\n\r\n.esqueceu-senha{\r\n    font-size: 10pt;\r\n}"

/***/ }),

/***/ "./src/app/form-inicial/entrar/entrar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"form-entrar\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\"><b>Email:</b></label>\r\n              <input type=\"email\" class=\"form-control input\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"exemplo@email.com\" [(ngModel)] =\"emailLogin\" name=\"emailLogin\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\"><b>Senha:</b></label>\r\n              <input type=\"password\" class=\"form-control input\" id=\"exampleInputPassword1\" placeholder=\"**********\" [(ngModel)] =\"senhaLogin\" name=\"senhaLogin\">\r\n            </div>\r\n          </form>      \r\n    </div>\r\n    <app-botao-inicial (click) =\"entrar($event)\">Entrar</app-botao-inicial>\r\n    <div class=\"div-esqueceu-senha\">\r\n        <a class=\"esqueceu-senha\"href=\"\">Esqueceu a senha?</a>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/form-inicial/entrar/entrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntrarComponent = /** @class */ (function () {
    function EntrarComponent(servico, router) {
        this.servico = servico;
        this.router = router;
    }
    EntrarComponent.prototype.ngOnInit = function () {
        this.servico.getUsuarios();
    };
    EntrarComponent.prototype.entrar = function (e) {
        event.preventDefault();
        console.log("Entrou no TS");
        this.servico.login(this.emailLogin, this.senhaLogin)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    EntrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entrar',
            template: __webpack_require__("./src/app/form-inicial/entrar/entrar.component.html"),
            styles: [__webpack_require__("./src/app/form-inicial/entrar/entrar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EntrarComponent);
    return EntrarComponent;
}());



/***/ }),

/***/ "./src/app/form-inicial/form-inicial.component.css":
/***/ (function(module, exports) {

module.exports = ".page-form{\r\n    background-color: #F3F3F3;\r\n    width: 400px;\r\n    height: 570px;\r\n    display: inline-block;\r\n    float: right;\r\n    margin: 40px 65px 0 0;\r\n    \r\n}\r\n\r\n.itens{\r\n    margin-top: 50px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.item{\r\n    font-size: 15pt;\r\n    padding: 0px 40px 0 40px;\r\n    \r\n}\r\n\r\n.ativo{\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/form-inicial/form-inicial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=page-form>\r\n\r\n  <div class=\"itens\">\r\n      <a class=\"item\" routerLink=\"entrar\" (click)= \"ativarEntrar()\" ><b [ngClass]=\"{ativo: entrarAtivo}\"  >Entrar</b></a>\r\n      <a class=\"item \" routerLink=\"cadastrar\" (click)= \"ativarCadastrar()\"><b  [ngClass]=\"{ativo: cadastrarAtivo}\"> Cadastrar</b> </a>\r\n  </div>\r\n\r\n <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-inicial/form-inicial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInicialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormInicialComponent = /** @class */ (function () {
    function FormInicialComponent() {
        this.entrarAtivo = true;
        this.cadastrarAtivo = false;
    }
    FormInicialComponent.prototype.ativarEntrar = function () {
        this.entrarAtivo = true;
        this.cadastrarAtivo = false;
    };
    FormInicialComponent.prototype.ativarCadastrar = function () {
        this.cadastrarAtivo = true;
        this.entrarAtivo = false;
    };
    FormInicialComponent.prototype.ngOnInit = function () {
    };
    FormInicialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-inicial',
            template: __webpack_require__("./src/app/form-inicial/form-inicial.component.html"),
            styles: [__webpack_require__("./src/app/form-inicial/form-inicial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormInicialComponent);
    return FormInicialComponent;
}());



/***/ }),

/***/ "./src/app/page-apresentacao/page-apresentacao.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.page-inicial{\r\n    background: linear-gradient(40deg, #446CAA,#00A2C3);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.logo{\r\n    padding: 40px 0 30px 70px;\r\n    width: 160px;\r\n}\r\n\r\n.conteudo{\r\n    margin-left: 70px;\r\n    /* background-color: red; */\r\n    width: 530px;\r\n    height: 450px;\r\n    color: white;\r\n    line-height: 1.3;\r\n}\r\n\r\n.titulo{\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.video{\r\n   margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/page-apresentacao/page-apresentacao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inicial\">\r\n\r\n    <app-form-inicial></app-form-inicial>\r\n    \r\n    <img class =\"logo\"src=\"../../assets/images/arcos-branco.png\" alt=\"\">\r\n  \r\n    <div class=\"conteudo\">\r\n      <h4 class=\"titulo\">Uma forma lúdica e divertida de aprender história</h4>\r\n  \r\n      <p>O Arcos é um jogo que utiliza a realidade aumentada para ensinar a história \r\n          local de forma lúdica e divertida. O jogo funciona como um complemento à \r\n          aula do professor, que pode criar diversas seções, com o intuito de reforçar \r\n          o conteúdo ensinado. Cada seção é referente a um assunto, e durante o jogo é \r\n          exibido aos alunos dicas sobre o mesmo. No final, os alunos devem responder \r\n          sobre qual assunto eles estavam jogando. Ao lado você pode se cadastrar para \r\n          começar a criar seções e utilizar o Arcos nas suas aulas!\r\n        </p>\r\n  \r\n        <video class=\"video\" width=\"500\" height=\"300\" controls>\r\n            <source src=\"../../assets/videos/videoplayback.mp4\" type=\"video/mp4\">\r\n        </video>\r\n  \r\n    </div>\r\n  \r\n   \r\n  </div>"

/***/ }),

/***/ "./src/app/page-apresentacao/page-apresentacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageApresentacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageApresentacaoComponent = /** @class */ (function () {
    function PageApresentacaoComponent() {
    }
    PageApresentacaoComponent.prototype.ngOnInit = function () {
    };
    PageApresentacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-apresentacao',
            template: __webpack_require__("./src/app/page-apresentacao/page-apresentacao.component.html"),
            styles: [__webpack_require__("./src/app/page-apresentacao/page-apresentacao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageApresentacaoComponent);
    return PageApresentacaoComponent;
}());



/***/ }),

/***/ "./src/app/page-criar-secao/add-dicas/add-dicas.component.css":
/***/ (function(module, exports) {

module.exports = ".add-dicas{\r\n    color: white;\r\n    padding: 30px 0 0 40px;\r\n    /* background-color: red; */\r\n    height: 100%;\r\n}\r\n\r\n.dica{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* background-color: red; */\r\n}\r\n\r\n.num-dica{\r\n    border: 1px solid #436CAA;\r\n    width: 60px;\r\n    height: 45px;\r\n    margin-right: 3px;\r\n    background-color: #f3f3f3;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #436CAA;\r\n}\r\n\r\n.form-control{\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 0px;\r\n    padding-left: 0px;\r\n    color: white;\r\n    /* background-color: rebeccapurple; */\r\n}\r\n\r\n.input{\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n\r\n.row-dica{\r\n    margin-top: 18px;\r\n}\r\n\r\n.dica1{\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n/* .instrucoes{\r\n    margin: 0, 0, 0, 50px;\r\n} */\r\n\r\n.tabueiro-dica{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.tabu{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    overflow: hidden;\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n\r\n}\r\n\r\n.coluna-lateral{\r\n    height: 240px;\r\n    width: 10%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    /* background-color: green; */\r\n}\r\n\r\n.coluna-central{\r\n    height: 182px;\r\n    width: 175px;\r\n}\r\n\r\n.coluna-central__superior-inferior{\r\n    height: 20%;\r\n    width: 140px;\r\n    margin-left: 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    /* background-color: purple; */\r\n}\r\n\r\n.coluna-central__central{\r\n    height: 90%;\r\n    width: 90%;\r\n    margin-left: 15px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* background-color: maroon; */\r\n}\r\n\r\n.casa{\r\n    width: 40px;\r\n    height: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    color: black;\r\n    border: solid 2px #f3f3f3;\r\n    font-weight: bold;\r\n    /* padding: 10px; */\r\n}\r\n\r\n.cadeado{\r\n    background-color: #f3f3f3;\r\n}\r\n\r\n.cadeado > img{\r\n    width: 25px;\r\n}\r\n\r\n.inicio{\r\n    border-radius: 50%;\r\n    background-color: green;\r\n    border: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.texto-dinamico{\r\n    text-align: center;\r\n}\r\n\r\n.instrucao{\r\n    padding-left: 50px;\r\n    \r\n}\r\n\r\n.tabu > div, .num-dica{\r\n    cursor: pointer;\r\n}\r\n\r\n.botoes{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* margin-top: 10px; */\r\n    height: 60px;\r\n    width: 1070px;\r\n    /* background: red; */\r\n}"

/***/ }),

/***/ "./src/app/page-criar-secao/add-dicas/add-dicas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-dicas\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"titulo\">\r\n          <h5><b>2º Adicione dicas as suas respectivas casas:</b></h5>\r\n        </div>\r\n      <div class=\"row row-dica dica1\">\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>01</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa1\" name=\"casa1\" required #scasa1=\"ngModel\">\r\n        </div>\r\n        <div class=\"col-sm dica\">\r\n           <div class=\"num-dica\">\r\n             <h4>08</h4>\r\n           </div>\r\n           <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa8\" name=\"casa8\" required #scasa8=\"ngModel\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-dica\">\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>02</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa2\" name=\"casa2\" required #scasa2=\"ngModel\">\r\n        </div>\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>10</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa10\" name=\"casa10\" required #scasa10=\"ngModel\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-dica\">\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>04</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa4\" name=\"casa4\" required #scasa4=\"ngModel\">\r\n        </div>\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>11</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa11\" name=\"casa11\" required #scasa11=\"ngModel\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-dica\">\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>05</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa5\" name=\"casa5\" required #scasa5=\"ngModel\">\r\n        </div>\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>13</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa13\" name=\"casa13\" required #scasa13=\"ngModel\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-dica\">\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>07</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa7\" name=\"casa7\" required #scasa7=\"ngModel\">\r\n        </div>\r\n        <div class=\"col-sm dica\">\r\n            <div class=\"num-dica\">\r\n              <h4>14</h4>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"casa14\" name=\"casa14\" required #scasa14=\"ngModel\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n      <p class=\"instrucao\">Adicione as dicas que serão mostradas no decorrer do jogo. As dicas deverão indicar ao aluno qual assunto está sendo abordado nesta seção.\r\n        </p>\r\n      <div class=\"tabueiro-dica\">\r\n        <div class=\"tabu\">\r\n            <div class=\"coluna-lateral\" >\r\n                <div class=\"casa cadeado\" (click)=\"clicou('Esta casa é fixa e não pode receber uma dica')\"><img src=\"../../../assets/images/lock.png\"></div>\r\n                <div class=\"casa\" (click)=\"clicou('Seja direto(a)')\">13</div>\r\n                <div class=\"casa casa-lateral\" (click)=\"clicou('Cuidado para não entregar o jogo')\">14</div>\r\n                <div class=\"casa casa-lateral cadeado\"(click)=\"clicou('Esta casa é fixa e não pode receber uma dica')\"><img src=\"../../../assets/images/lock.png\"></div>\r\n                <div class=\"casa casa-lateral inicio\"></div>\r\n              </div>\r\n              <div class=\"coluna-central\">\r\n                <div class=\"coluna-central__superior-inferior\" id=\"superior\">\r\n                  <div class=\"casa\" (click)=\"clicou('Utilize as casas finais para as dicas mais fáceis')\">11</div>\r\n                  <div class=\"casa\" (click)=\"clicou('Dê dicas que incentivem a discussão')\">10</div>\r\n                  <div class=\"casa cadeado\" (click)=\"clicou('Esta casa é fixa e não pode receber uma dica')\"><img src=\"../../../assets/images/lock.png\"></div>\r\n                </div>\r\n                <div class=\"coluna-central__central\">\r\n                  <p class=\"texto-dinamico\"><b>{{texto}}</b></p>\r\n                </div>\r\n                <div class=\"coluna-central__superior-inferior\">\r\n                  <div class=\"casa\" (click)=\"clicou('Ordene das dicas mais difíceis até as mais fáceis')\">01</div>\r\n                  <div class=\"casa\" (click)=\"clicou('Utilize as primeiras casas para as dicas mais difíceis')\">02</div>\r\n                  <div class=\"casa cadeado\" (click)=\"clicou('Esta casa é fixa e não pode receber uma dica')\"><img src=\"../../../assets/images/lock.png\"></div>\r\n                </div>\r\n        \r\n              </div>\r\n              <div class=\"coluna-lateral\">\r\n                  <div class=\"casa casa-lateral\" (click)=\"clicou('Dê dicas curtas')\">08</div>\r\n                  <div class=\"casa casa-lateral\" (click)=\"clicou('Cuidado para não tornar o jogo difícil demais')\" >07</div>\r\n                  <div class=\"casa casa-lateral cadeado\" (click)=\"clicou('Esta casa é fixa e não pode receber uma dica')\"><img src=\"../../../assets/images/lock.png\"></div>\r\n                  <div class=\"casa casa-lateral\" (click)=\"clicou('Não utilize fatos que seus alunos não tenham sido apresentados')\">05</div>\r\n                  <div class=\"casa\"(click)=\"clicou('Confunda seus alunos, faça-os ter que juntar as peças')\">04</div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"botoes\">\r\n    <div class=\"voltar\">\r\n      <app-botao  [routerLink] = \"['/pagina-inicial','criarsecao','addPergunta']\"> Voltar </app-botao>\r\n    </div>\r\n    <div >\r\n      <app-botao class=\"avancar\" (click)=\"criarSecao3($event)\"> Avançar </app-botao>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/add-dicas/add-dicas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDicasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddDicasComponent = /** @class */ (function () {
    function AddDicasComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dicas = [];
        this.palpite = [];
        this.texto = "Utilize o conteúdo da aula como base nas dicas que cadastrar";
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.titulo = params['titulo'];
            _this.descricao = params['descricao'];
            _this.palpite = params['palpite'];
            _this.opcao = params['opcao'];
        });
    }
    AddDicasComponent.prototype.ngOnInit = function () {
    };
    AddDicasComponent.prototype.clicou = function (texto) {
        this.texto = texto;
        console.log(texto);
    };
    AddDicasComponent.prototype.criarSecao3 = function (e) {
        event.preventDefault();
        this.dicas.push(this.casa1);
        this.dicas.push(this.casa2);
        this.dicas.push(this.casa4);
        this.dicas.push(this.casa5);
        this.dicas.push(this.casa7);
        this.dicas.push(this.casa8);
        this.dicas.push(this.casa10);
        this.dicas.push(this.casa11);
        this.dicas.push(this.casa13);
        this.dicas.push(this.casa14);
        this.router.navigate(['/pagina-inicial', 'criarsecao', 'gerarcodigo'], { queryParams: { titulo: this.titulo, descricao: this.descricao, palpite: this.palpite, opcao: this.opcao, dicas: this.dicas } });
    };
    AddDicasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-dicas',
            template: __webpack_require__("./src/app/page-criar-secao/add-dicas/add-dicas.component.html"),
            styles: [__webpack_require__("./src/app/page-criar-secao/add-dicas/add-dicas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddDicasComponent);
    return AddDicasComponent;
}());



/***/ }),

/***/ "./src/app/page-criar-secao/botao/botao.component.css":
/***/ (function(module, exports) {

module.exports = ".botao{\r\n    cursor: pointer;\r\n}\r\n.text{\r\n    font-size: 17pt;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n/* .line{\r\n    height: 2px;\r\n    width: 90px;\r\n    background-color: rgb(155, 215, 243);\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n} */\r\n.ativo{\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n.card{\r\n    height: 100px;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/page-criar-secao/botao/botao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"botao\">\r\n        <a class=\"text ativo\"><b><ng-content></ng-content></b></a>\r\n        <div class=\"line\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/botao/botao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotaoComponent = /** @class */ (function () {
    function BotaoComponent() {
        this.avancar = "Avançar";
    }
    BotaoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BotaoComponent.prototype, "avancar", void 0);
    BotaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-botao',
            template: __webpack_require__("./src/app/page-criar-secao/botao/botao.component.html"),
            styles: [__webpack_require__("./src/app/page-criar-secao/botao/botao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BotaoComponent);
    return BotaoComponent;
}());



/***/ }),

/***/ "./src/app/page-criar-secao/criar-secao/criar-secao.component.css":
/***/ (function(module, exports) {

module.exports = ".add-pergunta{\r\n    padding: 20px 0 0 40px;\r\n   /* background-color: red; */\r\n   height: 100%;\r\n}\r\n\r\n.alternativa{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 7px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.num-alternativa{\r\n    border: 1px solid #436CAA;\r\n    /* width: 70px; */\r\n    margin-right: 3px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.form-control{\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 0px;\r\n    padding-left: 0px;\r\n    /* height: 1px; */\r\n    color: white;\r\n    height: 25px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: white;\r\n }\r\n\r\n.input{\r\n    border-bottom: 2px solid #47C7DD;\r\n}\r\n\r\n.form{\r\n    width: 30vw;\r\n    margin: 0px 0 0 10px;\r\n    /* float: left; */\r\n}\r\n\r\n.instrucoes{\r\n    width: 35vw;\r\n    margin: 10px 70px 0 0 ;\r\n    float: right;\r\n    position: relative;\r\n}\r\n\r\n.respostas{\r\n    width: 25vw;\r\n    margin-top: 20px;\r\n   \r\n}\r\n\r\n.subtitle{\r\n    font-size: 9pt;\r\n    color: rgb(224, 224, 21);\r\n}\r\n\r\n.col{\r\n    height: auto;\r\n}\r\n\r\n/* .alternativa{\r\n    display: flex;\r\n} */\r\n\r\n/* .margintitle{\r\n    margin-bottom: 29px;\r\n} */\r\n\r\n/* .text{\r\n    font-size: 11pt;\r\n} */\r\n\r\nimg{\r\n    width: 200px;\r\n}\r\n\r\n.botoes{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 60px;\r\n    width: 1070px;\r\n    margin-top: 5px;\r\n    margin-left: 15px;\r\n    float: right;\r\n    /* background-color: red; */\r\n}"

/***/ }),

/***/ "./src/app/page-criar-secao/criar-secao/criar-secao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-white add-pergunta\">\r\n    <div class= \"row\">\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"form\">\r\n                <form #secao1=\"ngForm\">\r\n                    <h5><b>Nome da seção:</b></h5>\r\n                    <input type=\"text\" placeholder=\"exemplo: Rachel de Queiroz\" class=\"input form-control\" [(ngModel)]=\"titulo\" name=\"titulo\" required #stitulo=\"ngModel\"><br/>\r\n                    <h5><b>Descrição da seção:</b></h5>\r\n                    <input type=\"text\" placeholder=\"exemplo: Esta seção retrada a vida e memoria da escritora Rachel de Queiroz\" class=\"input form-control\" [(ngModel)]=\"descricao\" name=\"descricao\" required #sdescricao=\"ngModel\">\r\n                    <div class=\"respostas\">\r\n                        <h5><b>Respostas:</b></h5>\r\n                        <p class=\"subtitle\">* selecione para indicar a resposta correta</p>\r\n                        <div class=\"alternativa\">\r\n                            <div class=\"num-alternativa\">\r\n                                <input class=\"radios\" type=\"radio\" name=\"check1\" class=\"check\" [(ngModel)]=\"opcao\" value=\"0\">\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"alternativa1\" name=\"alternativa1\" required #salternativa1=\"ngModel\">\r\n                        </div>\r\n                        <div class=\"alternativa\">\r\n                            <div class=\"num-alternativa\">\r\n                                <input class=\"radios\" type=\"radio\" name=\"check2\" class=\"check\" [(ngModel)]=\"opcao\" value=\"1\">\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"alternativa2\" name=\"alternativa2\" required #salternativa2=\"ngModel\">\r\n                        </div>\r\n                        <div class=\"alternativa\">\r\n                            <div class=\"num-alternativa\">\r\n                                <input class=\"radios\" type=\"radio\" name=\"check3\" class=\"check\" [(ngModel)]=\"opcao\" value=\"2\">\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"alternativa3\" name=\"alternativa3\" required #salternativa3=\"ngModel\">\r\n                        </div>\r\n                        <div class=\"alternativa\">\r\n                            <div class=\"num-alternativa\">\r\n                                <input class=\"radios\" type=\"radio\" name=\"check4\" class=\"check\" [(ngModel)]=\"opcao\" value=\"3\">\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"alternativa4\" name=\"alternativa4\" required #salternativa4=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n            <div class=\"instrucoes\">\r\n                <h5 class=\"\"><b>1° O nome da seção e as alternativas</b></h5>\r\n                <p class=\"text\">No campo ao lado digite o nome e a descrição da sua seção, de preferência\r\n                    essas informações tem deve ter como base o conteúdo abordado na seção.\r\n                    Logo abaixo, você deverá digitar quatro alternativas de respostas, \r\n                    contendo três falsas e uma verdadeira, e selecione a resposta correta, para indicá-la.\r\n                    No final do jogo, os alunos deverão responder sobre qual o assunto da seção, e essas \r\n                    alternativas serão exibidas para que eles possam indicar a correta.\r\n                </p>\r\n                <img src=\"../../../assets/images/Group 35.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"botoes\">\r\n            <app-botao class=\"avancar\" (click)=\"criarSecao1($event)\" [routerLink] = \"['/pagina-inicial','criarsecao','addDicas']\"> Avançar </app-botao>\r\n        </div>  \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/criar-secao/criar-secao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarSecaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_dicas_add_dicas_component__ = __webpack_require__("./src/app/page-criar-secao/add-dicas/add-dicas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
var CriarSecaoComponent = /** @class */ (function () {
    function CriarSecaoComponent(addDicas, router) {
        this.addDicas = addDicas;
        this.router = router;
        this.palpite = [];
    }
    CriarSecaoComponent.prototype.criarSecao1 = function (e) {
        event.preventDefault();
        this.palpite.push(this.alternativa1);
        this.palpite.push(this.alternativa2);
        this.palpite.push(this.alternativa3);
        this.palpite.push(this.alternativa4);
        this.router.navigate(['/pagina-inicial', 'criarsecao', 'addDicas'], { queryParams: { titulo: this.titulo, descricao: this.descricao, palpite: this.palpite, opcao: this.opcao } });
    };
    CriarSecaoComponent.prototype.ngOnInit = function () {
    };
    CriarSecaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-criar-secao',
            template: __webpack_require__("./src/app/page-criar-secao/criar-secao/criar-secao.component.html"),
            styles: [__webpack_require__("./src/app/page-criar-secao/criar-secao/criar-secao.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_dicas_add_dicas_component__["a" /* AddDicasComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CriarSecaoComponent);
    return CriarSecaoComponent;
}());



/***/ }),

/***/ "./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.css":
/***/ (function(module, exports) {

module.exports = "/* .bg{\r\n    background: linear-gradient(rgb(109, 189, 226), rgb(68, 106, 173));\r\n    height: 70vh;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    margin: 0 82px 0 82px;\r\n} */\r\n\r\n/* .instrucoes{\r\n    width: 30vw;\r\n    height: 60vh;\r\n    margin: 40px 40px 40px 60px;\r\n    float: left;\r\n    position: relative;\r\n} */\r\n\r\n/* .text{\r\n    font-size: 11pt;\r\n} */\r\n\r\n/* .marginl{\r\n    margin-bottom: 29px;\r\n} */\r\n\r\n/* .margins{\r\n    margin-bottom: 15px;\r\n} */\r\n\r\n/* .codigo-gerado{\r\n    width: 30vw;\r\n    height: 60vh;\r\n    margin: 25px;\r\n    float: right;\r\n    position: relative;\r\n} */\r\n\r\n.coluna1{\r\n    /* background-color: red; */\r\n    padding: 40px 0 0 60px;\r\n}\r\n\r\n.coluna2{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.codigo-container{\r\n    width: 20vw;\r\n    height: 12vh;\r\n    background-color: white;\r\n    border: 2px solid #47C7DD;\r\n    border-radius: 15px;\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.codigo{\r\n    font-size: 20pt;\r\n    /* text-align: center; */\r\n    color: black;\r\n    margin: 3vh;\r\n}\r\n\r\n/* .gerar{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.voltar{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n} */\r\n\r\n.botoes{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 30px;\r\n    margin-left: 40px;\r\n    height: 60px;\r\n    width: 1070px;\r\n    /* background-color: red; */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" text-white\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 coluna1\">\r\n      <h5 class=\"margins\"><b> 3° Confirme as dias que cadastrou e gere o código </b></h5>\r\n      <p class=\"text marginl\">Confira as dicas cadastradas, verifique se elas estão corretas ou se \r\n        há algo que precise de correção. Se as dicas estiverem certas, sem necessidade de mais correções, \r\n        gere o código apertando no botão “Gerar”, no canto direito da tela. A partir do código gerado, que \r\n        será exibido na caixa em branco ao lado, será possível acessar no jogo a seção que você acabou de criar.        \r\n      </p>  \r\n      <h5 class=\"margins\"><b> 4° Pegue o código e distribua para os alunos </b></h5>\r\n      <p class=\"text\">Guarde este código para utilizar a seção criada. Ao abrir o aplicativo do Arcos, \r\n        o jogo pedirá um código, digite o código gerado para jogar com esta seção!\r\n      </p>  \r\n\r\n    </div>\r\n    <div class=\"col-sm-6 coluna2\">\r\n      <div class=\"codigo-container\">\r\n        <p class=\"codigo\"> VTX0987 </p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"botoes\">\r\n    <div class=\"voltar\">\r\n        <app-botao > Voltar </app-botao>\r\n    </div>\r\n    <div class=\"gerar\">\r\n        <app-botao (click)=\"criarSecao6()\"> Gerar </app-botao>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerarCodigoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GerarCodigoComponent = /** @class */ (function () {
    function GerarCodigoComponent(activatedRoute, router, servico) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.servico = servico;
        this.palpite = [];
        this.dicas = [];
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.titulo = params['titulo'];
            _this.descricao = params['descricao'];
            _this.palpite = params['palpite'];
            _this.opcao = params['opcao'];
            _this.dicas = params['dicas'];
        });
    }
    GerarCodigoComponent.prototype.ngOnInit = function () {
    };
    GerarCodigoComponent.prototype.criarSecao6 = function () {
        console.log("chegou na putaria do gerar");
        this.servico.criarSecao(this.titulo, this.descricao, this.dicas, this.palpite, this.opcao)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    GerarCodigoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-gerar-codigo',
            template: __webpack_require__("./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.html"),
            styles: [__webpack_require__("./src/app/page-criar-secao/gerar-codigo/gerar-codigo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], GerarCodigoComponent);
    return GerarCodigoComponent;
}());



/***/ }),

/***/ "./src/app/page-criar-secao/page-criar-secao.component.css":
/***/ (function(module, exports) {

module.exports = ".page-criar-secao{\r\n    background: linear-gradient(45deg,#446CAA,#00A2C3);\r\n    height: 70vh;\r\n    width: 1150px;\r\n    border-radius: 20px;\r\n    margin: 0 0 0 100px;\r\n    margin-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/page-criar-secao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-criar-secao\">\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-criar-secao/page-criar-secao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCriarSecaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageCriarSecaoComponent = /** @class */ (function () {
    function PageCriarSecaoComponent() {
    }
    PageCriarSecaoComponent.prototype.ngOnInit = function () {
    };
    PageCriarSecaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-criar-secao',
            template: __webpack_require__("./src/app/page-criar-secao/page-criar-secao.component.html"),
            styles: [__webpack_require__("./src/app/page-criar-secao/page-criar-secao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageCriarSecaoComponent);
    return PageCriarSecaoComponent;
}());



/***/ }),

/***/ "./src/app/page-inicial/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".sair{\r\n    float: right;\r\n    color: rgb(170, 170, 170);\r\n    margin: 0 15px 0 0;\r\n    text-decoration: underline;\r\n}\r\n\r\n.user-name{\r\n    color: rgb(109, 189, 226);\r\n    font-family: 'Yantramanav';\r\n    margin: 10px 15px 0 0;\r\n}\r\n\r\n.logo{\r\n    width: 90px;\r\n    margin:10px 0 0 30px;\r\n}\r\n\r\n.header{\r\n    /* background-color: red; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/page-inicial/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar header\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img class=\"logo\" src=\"../../../assets/images/arcos-azul.png\">\r\n  </a>\r\n  <div class=\"user\">\r\n    <p class=\"user-name\"><b> {{ usuario }} </b></p>\r\n    <a href=\"\" class=\"sair\"> sair</a>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/page-inicial/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(servico) {
        this.servico = servico;
        // this.usuario = this.servico.getNome();
    }
    // userNome(){
    //   this.servico.getUsuarios();
    // }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/page-inicial/header/header.component.html"),
            styles: [__webpack_require__("./src/app/page-inicial/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page-inicial/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-item{\r\n    margin-left: 70px;\r\n    font-size: 17pt;\r\n}\r\n\r\n.nav-link{\r\n    color: rgb(71, 71, 71);\r\n}\r\n\r\n.nav-link:hover{\r\n    color: black;\r\n}\r\n\r\n.ativo{\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid #47C7DD;\r\n}"

/***/ }),

/***/ "./src/app/page-inicial/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\r\n  <div>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)= \"ativarSecao()\" routerLink=\"secoes\"><b [ngClass]=\"{ativo: secaoAtivo}\"> Seções </b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" (click)= \"ativarCriar()\" routerLink=\"criarsecao/addPergunta\"><b [ngClass]=\"{ativo: criarAtivo}\"> Criar Seções </b></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/page-inicial/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(servico) {
        this.servico = servico;
        this.secaoAtivo = true;
        this.criarAtivo = false;
    }
    NavbarComponent.prototype.ativarSecao = function () {
        this.secaoAtivo = true;
        this.criarAtivo = false;
        this.servico.getSecoes();
    };
    NavbarComponent.prototype.ativarCriar = function () {
        this.criarAtivo = true;
        this.secaoAtivo = false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/page-inicial/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/page-inicial/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page-inicial/page-inicial.component.css":
/***/ (function(module, exports) {

module.exports = ".page-inicial{\r\n    background-color: #F3F3F3;\r\n    height: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/page-inicial/page-inicial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inicial\">\r\n    <app-header></app-header>\r\n    <app-navbar></app-navbar>\r\n    <div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/page-inicial/page-inicial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageInicialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageInicialComponent = /** @class */ (function () {
    function PageInicialComponent() {
    }
    PageInicialComponent.prototype.ngOnInit = function () {
    };
    PageInicialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-inicial',
            template: __webpack_require__("./src/app/page-inicial/page-inicial.component.html"),
            styles: [__webpack_require__("./src/app/page-inicial/page-inicial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageInicialComponent);
    return PageInicialComponent;
}());



/***/ }),

/***/ "./src/app/secoes/cartao/cartao.component.css":
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background: -webkit-gradient(linear,left bottom, left top,from(#446CAA),to(#00A2C3));\r\n    background: linear-gradient(bottom,#446CAA,#00A2C3);\r\n}\r\n\r\n.card{\r\n    border: none;\r\n    border-radius: 9px;\r\n    width: 390px;\r\n    height: 220px;\r\n    margin: 0 10px 10px 0;\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n/* h5{\r\n    margin-bottom: 2px;\r\n} */\r\n\r\n.line{\r\n    height: 2px;\r\n    width: 16rem;\r\n    background-color: rgb(155, 215, 243);\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n/* .card-text{\r\n    font-size: 11pt\r\n} */"

/***/ }),

/***/ "./src/app/secoes/cartao/cartao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"card bg text-white\">\r\n        <div class=\"card-body\">\r\n          <h5><b> {{ cartoes[index].titulo }} </b></h5>\r\n          <p> {{ cartoes[index].data }} </p>\r\n          <div class=\"line\"></div>\r\n          <p class=\"card-text\"> {{ cartoes[index].descricao }} </p>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/secoes/cartao/cartao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartaoComponent = /** @class */ (function () {
    function CartaoComponent() {
    }
    CartaoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CartaoComponent.prototype, "cartoes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CartaoComponent.prototype, "index", void 0);
    CartaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cartao',
            template: __webpack_require__("./src/app/secoes/cartao/cartao.component.html"),
            styles: [__webpack_require__("./src/app/secoes/cartao/cartao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartaoComponent);
    return CartaoComponent;
}());



/***/ }),

/***/ "./src/app/secoes/secoes.component.css":
/***/ (function(module, exports) {

module.exports = ".secoes{\r\n    margin: 30px 40px 0 100px;\r\n    width: 1190px;\r\n    /* background-color: red; */\r\n}"

/***/ }),

/***/ "./src/app/secoes/secoes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"secoes\">\r\n    <div class=\"row\">\r\n        <app-cartao [cartoes]=\"cartao\" \r\n                    [index]=\"index\" \r\n                    *ngFor=\"let index = index; let cartao of secoes\">\r\n        </app-cartao>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/secoes/secoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecoesComponent = /** @class */ (function () {
    function SecoesComponent(service) {
        this.service = service;
        this.secoes = [];
    }
    SecoesComponent.prototype.ngOnInit = function () {
        //   this.data = this.service.getSecoes()
        var _this = this;
        //   this.secoes.push(new Cartao(this.data.titulo, this.data.data, this.data.decricao, this.data.palpite, this.data.correta, this.data.dicas, this.data.codigo))
        //   console.log(this.secoes);
        //   console.log("data: " +this.data)
        // }
        this.service.getSecoes()
            .subscribe(function (data) {
            console.log(data);
            _this.secoes = data;
            console.log(_this.secoes);
        }, function (error) {
            console.log(error);
        });
    };
    SecoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-secoes',
            template: __webpack_require__("./src/app/secoes/secoes.component.html"),
            styles: [__webpack_require__("./src/app/secoes/secoes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */]])
    ], SecoesComponent);
    return SecoesComponent;
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