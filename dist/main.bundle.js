webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-2\">\n            <app-menu></app-menu>\n        </div> \n        <div class=\"col-sm-10\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n<div id=\"preloader\" *ngIf=\"showLoader\">\n    <div id=\"loader\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.showLoader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.newTransaction.subscribe(function (state) {
            setTimeout(function () { return _this.showLoader = state; }, 200);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__["a" /* HttpService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_views_module__ = __webpack_require__("../../../../../src/app/views/views.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_guard_login_guard_guard__ = __webpack_require__("../../../../../src/app/login-guard/login-guard.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules



// Components


// Services

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__views_views_module__["a" /* ViewsModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__login_guard_login_guard_guard__["a" /* LoginGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_guard_login_guard_guard__ = __webpack_require__("../../../../../src/app/login-guard/login-guard.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components

// Guards

var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_guard_login_guard_guard__["a" /* LoginGuard */]] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_usuario_module__ = __webpack_require__("../../../../../src/app/core/usuario/usuario.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trail_trail_module__ = __webpack_require__("../../../../../src/app/core/trail/trail.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_routing_module__ = __webpack_require__("../../../../../src/app/core/core.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/core/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules




// Components

// Services
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__usuario_usuario_module__["a" /* UsuarioModule */],
                __WEBPACK_IMPORTED_MODULE_4__trail_trail_module__["a" /* TrailModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_routing_module__["a" /* CoreRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/core/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components

var CORE_ROUTES = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(CORE_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/dashboard/charts/tempoTotalEDistancia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoTotalEDistancia; });
var TempoTotalEDistancia = (function () {
    function TempoTotalEDistancia(value) {
        this.colors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.type = 'line';
        this.data = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.showLegends = false;
    }
    return TempoTotalEDistancia;
}());



/***/ }),

/***/ "../../../../../src/app/core/dashboard/charts/trailsTotal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailsTotal; });
var TrailsTotal = (function () {
    function TrailsTotal(value) {
        this.labels = ['Total'];
        this.colors = [{ backgroundColor: '#8FB98B' }];
        this.type = 'doughnut';
        this.data = [value]; // Assina valor
    }
    return TrailsTotal;
}());



/***/ }),

/***/ "../../../../../src/app/core/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-navigation-bar\"></div>\n<div class=\"application-body\">\n    <div class=\"application-body-content text-center\">\n        <div class=\"row header\">\n            <div class=\"col-sm-8\">\n                <div class=\"application-body-title text-left m-b-lg m-t-md\">\n                    <div class=\"application-body-title-image inline-block align-middle m-r-sm\">\n                        <img src=\"assets/public/img/png/forest/mountain.png\" width=\"95px\">\n                    </div>\n                    <div class=\"application-body-title-content inline-block align-middle\">\n                        <h4><b>Dashboard</b></h4>\n                        Informações completas referente a desempenho e relações estatísticas.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\" style=\"display:flex;justify-content:flex-end;align-items:center;padding-right:25px\">\n                <img src=\"assets/public/img/png/forest/map.png\" width=\"85px\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 padding-sm text-left\">\n                <div class=\"application-body-filters m-t-lg m-b-lg\">\n                    <input type=\"date\" placeholder=\"Inicio\" class=\"filter-input m-r-sm\">\n                    <input type=\"date\" placeholder=\"Fim\" class=\"filter-input m-r-sm\">\n                    <button class=\"btn btn-info btn-icon\">\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"col-sm-6 text-right padding-sm\">\n                <div class=\"application-body-actions m-t-lg m-b-lg\">\n                    <button type=\"submit\" class=\"refresh-information\">Atualizar <i class=\"fa fa-refresh\"></i></button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row m-b-lg\">\n            <div class=\"col-sm-12 padding-sm m-b-lg text-left\">\n                <div class=\"header\">\n                    <h4>\n                        <b>Informações Gerais</b>\n                        <i class=\"fa fa-map-signs right m-r-sm\" style=\"margin-top:4px\"></i>\n                    </h4>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <div class=\"dashboard-card dashboard-box\">\n                    <div class=\"card-header back background-red\">\n                        <i class=\"fa fa-users\"></i> <b>Usuários</b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"text-center m-t-sm m-b-md\">\n                            <img src=\"assets/public/img/png/forest/backpack.png\" width=\"85px\">\n                        </div>\n\n                        <span class=\"block\"><b>Atualmente:</b> 230 usuários</span>\n                        <span class=\"block\"><b>Última consulta:</b> 460 usuários</span>\n\n                        <hr>\n\n                        <span class=\"block\"><b class=\"green align-middle\"><i class=\"fa fa-sort-asc\"></i> 100%</b> desde a última consulta</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <div class=\"dashboard-card dashboard-box\">\n                    <div class=\"card-header back background-green\">\n                        <i class=\"fa fa-tree\"></i> <b>Trilhas</b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"text-center m-t-sm m-b-md\">\n                            <img src=\"assets/public/img/png/forest/picnic.png\" width=\"85px\">\n                        </div>\n\n                        <span class=\"block\"><b>Atualmente:</b> 230 usuários</span>\n                        <span class=\"block\"><b>Última consulta:</b> 460 usuários</span>\n\n                        <hr>\n\n                        <span class=\"block\"><b class=\"green align-middle\"><i class=\"fa fa-sort-asc\"></i> 100%</b> desde a última consulta</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <div class=\"dashboard-card dashboard-box\">\n                    <div class=\"card-header back background-orange\">\n                        <i class=\"fa fa-users\"></i> <b>Locais</b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"text-center m-t-sm m-b-md\">\n                            <img src=\"assets/public/img/png/forest/campfire.png\" width=\"85px\">\n                        </div>\n\n                        <span class=\"block\"><b>Atualmente:</b> 230 usuários</span>\n                        <span class=\"block\"><b>Última consulta:</b> 460 usuários</span>\n\n                        <hr>\n\n                        <span class=\"block\"><b class=\"green align-middle\"><i class=\"fa fa-sort-asc\"></i> 100%</b> desde a última consulta</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <div class=\"dashboard-card dashboard-box\">\n                    <div class=\"card-header back background-blue\">\n                        <i class=\"fa fa-users\"></i> <b>Tempo</b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"text-center m-t-sm m-b-md\">\n                            <img src=\"assets/public/img/png/forest/marshmallow.png\" width=\"85px\">\n                        </div>\n\n                        <span class=\"block\"><b>Atualmente:</b> 230 usuários</span>\n                        <span class=\"block\"><b>Última consulta:</b> 460 usuários</span>\n\n                        <hr>\n\n                        <span class=\"block\"><b class=\"green align-middle\"><i class=\"fa fa-sort-asc\"></i> 100%</b> desde a última consulta</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12 padding-sm m-t-md m-b-lg text-left\">\n                <div class=\"header\">\n                    <h4>\n                        <b>Informações da Aplicação</b>\n                        <i class=\"fa fa-pie-chart right m-r-sm\" style=\"margin-top:4px\"></i>\n                    </h4>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"dashboard-card card text-left\">\n                    <div class=\"dashboard-card-header m-b-md\">\n                        <h5>\n                            <b>Trilhas executadas</b>\n                            <i class=\"fa fa-bicycle right\"></i>\n                        </h5>\n                    </div>\n\n                    <div class=\"dashboard-card-body\">\n                        <canvas baseChart\n                                [data]=\"trailsTotal.data\"\n                                [labels]=\"trailsTotal.labels\"\n                                [colors]=\"trailsTotal.colors\"\n                                [chartType]=\"trailsTotal.type\"></canvas>\n\n                        <div class=\"dashboard-card-information m-t-md text-left\">\n                            <span class=\"block\"><b>Total atual: </b> 4 trilhas</span>\n                            <span class=\"block m-t-sm\"><b>Última consulta:</b> 6 trilhas</span>\n                        </div>\n                    </div>\n\n                    <div class=\"dashboard-card-footer m-t-md\">\n                        <b class=\"red\">Crescimento de 50%</b>\n\n                        <div class=\"dashboard-card-footer-actions right m-t-sm\">\n                            <i class=\"fa fa-bar-chart\"></i>\n                        </div>\n                    </div>\n                </div>\n                <!-- <div class=\"dashboard-card card text-left m-t-md\">\n                    <div class=\"dashboard-card-header m-b-md\">\n                        <h5>\n                            <b>Metas impostas</b>\n                            <i class=\"fa fa-tree right\"></i>\n                        </h5>\n                    </div>\n\n                    <div class=\"dashboard-card-body\">\n                        <canvas baseChart\n                                [data]=\"trailsTotal.data\"\n                                [labels]=\"trailsTotal.labels\"\n                                [colors]=\"trailsTotal.colors\"\n                                [chartType]=\"trailsTotal.type\"></canvas>\n\n                        <div class=\"dashboard-card-information m-t-md text-left\">\n                            <span class=\"block\"><b>Já executadas:</b> 3 trilhas</span>\n                            <span class=\"block m-t-sm\"><b>Faltam executar:</b> 20 trilhas</span>\n                        </div>\n                    </div>\n\n                    <div class=\"dashboard-card-footer m-t-md\">\n                        <b class=\"green\">Crescimento de 5%</b>\n\n                        <div class=\"dashboard-card-footer-actions right m-t-sm\">\n                            <a href=\"\" class=\"green\"><i class=\"fa fa-bar-chart\"></i></a>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n\n            <div class=\"col-sm-8\">\n                <div class=\"dashboard-card card text-left\">\n                    <div class=\"dashboard-card-header m-b-md\">\n                        <h5>\n                            <b>Tempo gasto/Distância</b>\n                            <i class=\"fa fa-dashboard right\"></i>\n                        </h5>\n                    </div>\n\n                    <div class=\"dashboard-card-body\">\n                        <div class=\"row m-b-md\">\n                            <canvas baseChart\n                                    [datasets]=\"ttEDistancia.data\"\n                                    [labels]=\"ttEDistancia.labels\"\n                                    [colors]=\"ttEDistancia.colors\"\n                                    [chartType]=\"ttEDistancia.type\"\n                                    [legend]=\"ttEDistancia.showLegend\"></canvas>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <table class=\"dashboard-table\">\n                                    <thead>\n                                    <tr>\n                                        <th>Ciclista/Pessoa</th>\n                                        <th>Total percorrido</th>\n                                        <th>Tempo Gasto</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td>\n                                            <i class=\"fa fa-star yellow\"></i> Gabriel\n                                        </td>\n                                        <td>42KM</td>\n                                        <td>01:25 hrs</td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <i class=\"fa fa-star silver\"></i> Murilo\n                                        </td>\n                                        <td>38KM</td>\n                                        <td>01:22 hrs</td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <i class=\"fa fa-star bronze\"></i> Adeilton\n                                        </td>\n                                        <td>36KM</td>\n                                        <td>01:17 hrs</td>\n                                    </tr>\n                                    <tr>\n                                        <td>+35 pessoas</td>\n                                        <td>67KM</td>\n                                        <td>26:37 hrs</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                        <div class=\"dashboard-card-information m-t-md text-left\">\n                            <span class=\"block\"><b>Média KM percorridos:</b> 40KM percorridos</span>\n                            <span class=\"block m-t-sm\"><b>Quantidade/Trilhas:</b> 126 trilhas executadas no total</span>\n                        </div>\n                    </div>\n\n                    <div class=\"dashboard-card-footer m-t-md\">\n                        <b class=\"green\">Informações referente à 13/11/2017 (Hoje)</b>\n\n                        <div class=\"dashboard-card-footer-actions right m-t-sm\">\n                            <a href=\"\" class=\"green\"><i class=\"fa fa-bar-chart\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_trailsTotal__ = __webpack_require__("../../../../../src/app/core/dashboard/charts/trailsTotal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_tempoTotalEDistancia__ = __webpack_require__("../../../../../src/app/core/dashboard/charts/tempoTotalEDistancia.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Entities


var DashboardComponent = (function () {
    function DashboardComponent() {
        this.trailsTotal = new __WEBPACK_IMPORTED_MODULE_1__charts_trailsTotal__["a" /* TrailsTotal */](50);
        this.ttEDistancia = new __WEBPACK_IMPORTED_MODULE_2__charts_tempoTotalEDistancia__["a" /* TempoTotalEDistancia */](50);
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.getListOfUsers = function () { };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/core/dashboard/dashboard.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/trail/lista-trail/lista-trail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"page-header\">\n        <h3>Lista de trilhas</h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"response.message\">\n          <div class=\"alert alert-warning\">\n            {{ response.message }}\n          </div>\n        </div>\n      </div>\n      <div class=\"table-info\" *ngIf=\"listaTrails.length\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <th class=\"text-center\">Nome</th>\n            <th class=\"text-center\">Distância</th>\n            <th class=\"text-center\">Tempo Total</th>\n            <th class=\"text-center\">Avaliação</th>\n            <th></th>\n          </thead>\n          <tbody>\n            <tr class=\"text-center\"\n                *ngFor=\"let trail of listaTrails\">\n              <td>{{ trail.trailname }}</td>\n              <td>{{ trail.traildist }} Km</td>\n              <td>{{ trail.trailtime }} anos</td>\n              <td>{{ trail.trailrat }}</td>\n              <td>\n                <button class=\"btn btn-icon btn-info btn-sm\">\n                  <i class=\"glyphicon glyphicon-user\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <p *ngIf=\"!listaTrails.length\">\n        Não existe nenhuma trilha cadastrada ainda\n      </p>\n    </div>\n  </div>\n</div> -->\n<div class=\"application-navigation-bar\"></div>\n\n<div class=\"application-body\">\n  <div class=\"application-body-content text-center\">\n    <div class=\"row header\">\n      <div class=\"col-sm-8\">\n        <div class=\"application-body-title text-left m-b-lg m-t-md\">\n          <div class=\"application-body-title-image inline-block align-middle m-r-sm\">\n            <img src=\"assets/public/img/png/forest/pines.png\" width=\"80px\">\n          </div>\n          <div class=\"application-body-title-content inline-block align-middle\">\n            <h4><b>Trilhas</b></h4>\n            Informações completas referente a usuários suas relações.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\" style=\"display:flex;justify-content:flex-end;align-items:center;padding-right:25px\">\n          <img src=\"assets/public/img/png/forest/bonfire.png\" width=\"75px\">\n      </div>\n    </div>\n\n    <div class=\"row m-b-md m-t-md\">\n      <div class=\"col-sm-12 text-left padding-sm\">\n        <h4 style=\"margin-bottom:3px;\"><b>Lista de Trilhas</b></h4>\n        Aqui você visualiza informações referente às trilhas, além de pontuações e relações estatísticas.\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-8 padding-sm text-left\">\n        <div class=\"application-body-filters\">\n          <input type=\"text\" placeholder=\"Usuário/Ciclista\" class=\"filter-input m-r-sm\">\n          <input type=\"date\" placeholder=\"Inicio\" class=\"filter-input m-r-sm\">\n          <input type=\"date\" placeholder=\"Fim\" class=\"filter-input m-r-sm\">\n          <button class=\"btn btn-info btn-icon\"\n                  (click)=\"getListOfTrails()\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <ul class=\"pagination right m-t-sm\">\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n        </ul>\n      </div>\n      <div class=\"col-sm-12 padding-sm\">\n        <table class=\"users-table m-t-sm\">\n          <thead style=\"background-color:#9D799D\">\n            <tr>\n              <th class=\"text-center\">Código</th>\n              <th class=\"text-center\">Nome</th>\n              <th class=\"text-center\">Distância</th>\n              <th class=\"text-center\">Tempo</th>\n              <th class=\"text-center\">Criado em</th>\n              <th class=\"text-center\">Avaliação</th>\n              <th class=\"text-center\">\n                Ações\n                <i class=\"fa fa-bookmark right\" style=\"font-size:19px\"></i>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let trail of listaTrails\">\n              <td># {{ trail.trailID }}</td>\n              <td>{{ trail.trailname }}</td>\n              <td>{{ trail.traildist }} Km</td>\n              <td>{{ trail.trailtime | date:'HH:mm:ss'}}</td>\n              <td>{{ trail.dtin ? (trail.dtin | date:'dd/MM/yyyy') : '-- --' }}</td>\n              <td>{{ trail.trailrat }}</td>\n              <td>\n                  <a [routerLink]=\"['/trails', trail.trailID, 'info']\">\n                      <i class=\"fa fa-info icon-body background-yellow white\"></i>\n                  </a>\n              </td>\n            </tr>\n            <tr *ngIf=\"!listaTrails.length\">\n              <td colspan=\"7\">Nenhuma trila cadastrada no sistema</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td class=\"qtd-pag text-left padding-sm\" style=\"padding-top:8px\">\n                <select class=\"form-control\">\n                  <option value=\"5\" selected>5</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                  <option value=\"200\">200</option>\n                </select>\n              </td>\n              <td class=\"padding-sm\" style=\"padding-top:22px\" colspan=\"6\">\n                <ul class=\"pagination right\">\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n                </ul>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/trail/lista-trail/lista-trail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaTrailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trail_service__ = __webpack_require__("../../../../../src/app/core/trail/trail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ListaTrailComponent = (function () {
    function ListaTrailComponent(trailService) {
        this.trailService = trailService;
        this.listaTrails = [];
        this.response = {};
    }
    ListaTrailComponent.prototype.ngOnInit = function () {
        this.getListOfTrails();
    };
    ListaTrailComponent.prototype.getListOfTrails = function () {
        var _this = this;
        this.resetResponse(); // Reset response of older request to API
        this.trailService.getListOfTrails().subscribe(function (trails) {
            if (trails.message)
                return _this.response.message = trails.message;
            if (trails.error)
                return _this.response.error = trails.error;
            _this.listaTrails = trails.rows;
            _this.response.success = trails;
        });
    };
    ListaTrailComponent.prototype.resetResponse = function () {
        this.response = { message: null, error: null, success: null };
    };
    ListaTrailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-trail',
            template: __webpack_require__("../../../../../src/app/core/trail/lista-trail/lista-trail.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trail_service__["a" /* TrailService */]])
    ], ListaTrailComponent);
    return ListaTrailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/trail/trail-info/trail-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 500px;\n    width: 99%;\n    margin-left:1%;\n    display:block;\n}\nsebm-google-map-directions {\n    height: 500px;\n    width: 95%;\n    margin-left: 5%;\n    display:block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/trail/trail-info/trail-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-navigation-bar\"></div>\n\n<div class=\"application-body\">\n  <div class=\"application-body-content\">\n    <div class=\"row header\">\n        <div class=\"col-sm-8\">\n            <div class=\"application-body-title text-left m-b-lg m-t-md\">\n                <div class=\"application-body-title-image inline-block align-middle m-r-sm\">\n                    <img src=\"assets/public/img/png/forest/tent-1.png\" width=\"80px\">\n                </div>\n                <div class=\"application-body-title-content inline-block align-middle\">\n                    <h4><b>Serra do Japi <span class=\"green\">(Ativa)</span></b></h4>\n                    Informações da trilha\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-4\" style=\"display:flex;justify-content:flex-end;align-items:center;padding-right:25px\">\n            <img src=\"assets/public/img/png/forest/backpack-1.png\" width=\"75px\">\n        </div>\n    </div>\n    <div class=\"row m-t-md\">\n      <div class=\"col-sm-6\">\n        <div class=\"dashboard-card text-left\">\n          <div class=\"dashboard-card-header\">\n            <h5 class=\"m-b-sm\">\n              <b>Informações Gerais</b>\n              <i class=\"fa fa-user-circle right green\"></i>\n            </h5>\n          </div>\n          <div class=\"dashboard-card-body m-t-md padding-sm text-left\">\n            <div class=\"block information-group\">\n              <span class=\"m-r-sm\"><b>Nome:</b></span>\n              <span>Trilha 01</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <span class=\"m-r-sm\"><b>Distância total:</b></span>\n              <span>2.5 Km</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <span class=\"m-r-sm\"><b>Tempo de trilha:</b></span>\n              <span>2h 30min</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <span class=\"m-r-sm\"><b>Criador: </b></span>\n              <span>Gabriel Giro Resende</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <span class=\"m-r-sm\"><b>Status:</b></span>\n              <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i>\n              <!-- <span class=\"label padding-sm label-danger text-center\">\n                  Inativo\n              </span> -->\n            </div>\n            <div class=\"block m-t-sm right information-group\">\n              <b>Criado em:</b>\n              <span>{{ '2017-11-25' | date:'dd/MM/yyyy' }}</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <b>Última atualização</b>\n              <span>{{ '2017-11-25' | date:'dd/MM/yyyy' }}</span>\n            </div>\n          </div>\n          <div class=\"dashboard-card-footer m-t-md text-right\">\n            <h4 class=\"left m-t-md\">\n              Total de repetições: <b class=\"blue\">1</b>\n            </h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"dashboard-card text-left\">\n          <div class=\"dashboard-card-header\">\n            <h5 class=\"m-b-sm\">\n              <b>Ranking Geral</b>\n              <i class=\"fa fa-list-ol right green\"></i>\n            </h5>\n          </div>\n          <div class=\"dashboard-card-body\">\n            <table class=\"dashboard-table m-t-sm\">\n              <thead>\n                <tr>\n                  <th>Usuário</th>\n                  <th>Tempo</th>\n                  <th>Repetições</th>\n                  <th>Avaliação Média</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td style=\"padding-top:22px\" colspan=\"4\">Nada para mostrar</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"dashboard-card-footer m-t-sm text-right\">\n            <!-- <button class=\"refresh-information m-t-sm\"><b>Dashboard <i class=\"fa fa-dashboard\"></i></b></button> -->\n            <h4 class=\"left m-t-md\">\n              -- --\n            </h4>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row m-t-md\">\n        <div class=\"col-sm-12\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n          </agm-map>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/trail/trail-info/trail-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trail_service__ = __webpack_require__("../../../../../src/app/core/trail/trail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var TrailInfoComponent = (function () {
    function TrailInfoComponent(state, trailService) {
        this.state = state;
        this.trailService = trailService;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.routes = [
            { pointID: 60, latitude: -23.182301, longitude: -46.882598 },
            { pointID: 61, latitude: -23.182301, longitude: -46.882598 },
            { pointID: 62, latitude: -23.182301, longitude: -46.882598 },
            { pointID: 63, latitude: -23.182301, longitude: -46.882598 },
            { pointID: 64, latitude: -23.182301, longitude: -46.882598 }
        ];
    }
    TrailInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state.params.subscribe(function (params) {
            if (params['trailID'])
                _this.getTrailById(params['trailID']);
        });
    };
    TrailInfoComponent.prototype.getTrailById = function (trailID) {
        this.trailService.getTrailById(trailID).subscribe(function (trail) {
            console.log(trail);
        });
    };
    TrailInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trail-info',
            template: __webpack_require__("../../../../../src/app/core/trail/trail-info/trail-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/trail/trail-info/trail-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__trail_service__["a" /* TrailService */]])
    ], TrailInfoComponent);
    return TrailInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/trail/trail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trail_routing_module__ = __webpack_require__("../../../../../src/app/core/trail/trail.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trail_service__ = __webpack_require__("../../../../../src/app/core/trail/trail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_trail_lista_trail_component__ = __webpack_require__("../../../../../src/app/core/trail/lista-trail/lista-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trail_info_trail_info_component__ = __webpack_require__("../../../../../src/app/core/trail/trail-info/trail-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Services

// Componentes


var TrailModule = (function () {
    function TrailModule() {
    }
    TrailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDeMrigVSl1q4DGS8R-nGQPnFZSNLuSdFM'
                }),
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__trail_routing_module__["a" /* TrailRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__lista_trail_lista_trail_component__["a" /* ListaTrailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__trail_info_trail_info_component__["a" /* TrailInfoComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__trail_service__["a" /* TrailService */]]
        })
    ], TrailModule);
    return TrailModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/trail/trail.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_trail_lista_trail_component__ = __webpack_require__("../../../../../src/app/core/trail/lista-trail/lista-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trail_info_trail_info_component__ = __webpack_require__("../../../../../src/app/core/trail/trail-info/trail-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Componentes


var TRAIL_ROUTES = [
    { path: 'trails', children: [
            { path: 'lista', component: __WEBPACK_IMPORTED_MODULE_2__lista_trail_lista_trail_component__["a" /* ListaTrailComponent */] },
            { path: ':trailID/info', component: __WEBPACK_IMPORTED_MODULE_3__trail_info_trail_info_component__["a" /* TrailInfoComponent */] },
            { path: '**', redirectTo: 'lista', pathMatch: 'full' }
        ] }
];
var TrailRoutingModule = (function () {
    function TrailRoutingModule() {
    }
    TrailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(TRAIL_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], TrailRoutingModule);
    return TrailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/trail/trail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrailService = (function () {
    function TrailService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Busca a lista de trilhas cadastradas no sistema
     *
     * @returns Lista de trilhas encontradas ou vazio
     */
    TrailService.prototype.getListOfTrails = function () {
        return this.httpService.get('/trails');
    };
    /**
     * Busca a trilha com base em seu ID
     *
     * @param trailID ID da trilha
     * @returns Trilha encontrada ou vazio
     */
    TrailService.prototype.getTrailById = function (trailID) {
        return this.httpService.get("/trail/" + trailID);
    };
    TrailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_http_service__["a" /* HttpService */]])
    ], TrailService);
    return TrailService;
}());



/***/ }),

/***/ "../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control.table-input {\n    display:inline;\n    width:55px;\n    text-align:center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-navigation-bar\"></div>\n<div class=\"application-body\">\n  <div class=\"application-body-content text-center\">\n    <div class=\"row header\">\n      <div class=\"col-sm-8\">\n        <div class=\"application-body-title text-left m-b-lg m-t-md\">\n          <div class=\"application-body-title-image inline-block align-middle m-r-sm\">\n            <img src=\"assets/public/img/png/009-ninja.png\" width=\"80px\">\n          </div>\n          <div class=\"application-body-title-content inline-block align-middle\">\n            <h4><b>Usuários/Ciclistas</b></h4>\n            Informações completas referente a usuários suas relações.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\" style=\"display:flex;justify-content:flex-end;align-items:center;padding-right:25px\">\n        <img src=\"assets/public/img/png/forest/backpack-1.png\" width=\"75px\">\n      </div>\n    </div>\n    <div class=\"row m-b-md m-t-md\">\n        <div class=\"col-sm-12 text-left padding-sm\">\n            <h4 style=\"margin-bottom:3px;\"><b>Lista de Usuários</b></h4>\n            Aqui você visualiza informações referente à perfil, pontuações e relações estatísticas dos usuários cadastrados no sistema.\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-8 padding-sm text-left\">\n          <div class=\"application-body-filters\">\n              <input type=\"text\" placeholder=\"Usuário/Ciclista\" class=\"filter-input m-r-sm\">\n              <input type=\"date\" placeholder=\"Inicio\" class=\"filter-input m-r-sm\">\n              <input type=\"date\" placeholder=\"Fim\" class=\"filter-input m-r-sm\">\n              <button class=\"btn btn-info btn-icon\"\n                      (click)=\"getListOfUsers()\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              </button>\n          </div>\n      </div>\n      <div class=\"col-sm-4\">\n          <ul class=\"pagination right m-t-sm\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n      </div>\n      <div class=\"col-sm-12 padding-sm\">\n        <div class=\"text-center alert alert-danger padding-sm\" *ngIf=\"response.status.message\">\n          {{ response.status.message }}\n        </div>\n        <div class=\"text-center alert alert-success padding-sm\" *ngIf=\"response.status.success\">\n          {{ response.status.success }}\n        </div>\n      </div>\n      <div class=\"col-sm-12 padding-sm\">\n        <table class=\"users-table m-t-sm\">\n          <thead style=\"background-color:#9D799D\">\n            <tr>\n              <th class=\"text-center\">Código</th>\n              <th class=\"text-center\">Nome</th>\n              <th class=\"text-center\">Usuário</th>\n              <th class=\"text-center\">Criado em</th>\n              <th class=\"text-center\">Última atualização</th>\n              <th class=\"text-center\">Status</th>\n              <th class=\"text-center\">\n                  Ações\n                  <i class=\"fa fa-bookmark right\" style=\"font-size:19px\"></i>\n              </th>\n            </tr>\n          </thead>\n          <tbody class=\"text-center\">\n              <tr *ngFor=\"let usuario of listaUsuarios\">\n                <td># {{ usuario.userID }}</td>\n                <td>{{ usuario.realname }}</td>\n                <td>{{ usuario.username }}</td>\n                <td>\n                  {{ usuario.dtin ? (usuario.dtin | date:'dd/MM/yyyy') : '-- --' }}\n                </td>\n                <td>\n                  {{ usuario.dtstamp ? (usuario.dtstamp | date:'dd/MM/yyyy') : '-- --' }}\n                </td>\n                <td [ngSwitch]=\"usuario.active\">\n                    <label class=\"label label-success\" *ngSwitchCase=\"true\">Ativo</label>\n                    <label class=\"label label-danger\" *ngSwitchDefault>Inativo</label>\n                </td>\n                <td [ngSwitch]=\"usuario.active\">\n                  <a [routerLink]=\"['/usuarios', usuario.userID, 'info']\">\n                      <i class=\"fa fa-info icon-body background-yellow white\"></i>\n                  </a>\n                  <a (click)=\"changeStatusUser(usuario, 0)\" *ngSwitchCase=\"true\">\n                      <i class=\"fa fa-thumbs-down icon-body background-red white\"></i>\n                  </a>\n                  <a (click)=\"changeStatusUser(usuario, 1)\" *ngSwitchDefault>\n                      <i class=\"fa fa-thumbs-up icon-body background-green white\"></i>\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"!listaUsuarios.length\">\n                <td colspan=\"7\">Nenhum usuário cadastrado no sistema</td>\n              </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td class=\"qtd-pag text-left padding-sm\" style=\"padding-top:8px\">\n                <select class=\"form-control\">\n                  <option value=\"5\" selected>5</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                  <option value=\"200\">200</option>\n                </select>\n              </td>\n              <td class=\"padding-sm\" style=\"padding-top:22px\" colspan=\"6\">\n                <ul class=\"pagination right\">\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n                </ul>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaUsuarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario_service__ = __webpack_require__("../../../../../src/app/core/usuario/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ListaUsuarioComponent = (function () {
    function ListaUsuarioComponent(usuarioService) {
        this.usuarioService = usuarioService;
        this.listaUsuarios = [];
    }
    ListaUsuarioComponent.prototype.ngOnInit = function () {
        this.resetResponse();
        this.getListOfUsers();
    };
    ListaUsuarioComponent.prototype.updateLista = function () {
        this.resetResponse('usuario');
        this.getListOfUsers();
    };
    ListaUsuarioComponent.prototype.getListOfUsers = function () {
        var _this = this;
        this.usuarioService.getListOfUsers().subscribe(function (usuarios) {
            if (usuarios.message)
                return _this.response.usuario.message = usuarios.message;
            _this.listaUsuarios = usuarios.rows;
            _this.response.usuario.success = usuarios;
        }, function (err) {
            console.log(err);
            _this.response.usuario.error = err.message;
        });
    };
    ListaUsuarioComponent.prototype.changeStatusUser = function (usuario, newStatus) {
        var _this = this;
        this.resetResponse('status');
        this.usuarioService.changeStatusUser(usuario.userID, newStatus).subscribe(function (response) {
            if (response.message)
                _this.response.status.message = response.message;
            _this.response.status.success =
                "O novo status de " + usuario.realname + " agora \u00E9 " + (newStatus ? 'Ativo' : 'Inativo');
            usuario.active = newStatus;
        }, function (err) {
            console.log(err);
            _this.response.status.error = err;
        });
    };
    ListaUsuarioComponent.prototype.resetResponse = function (name) {
        if (name)
            return this.response[name] = {};
        this.response = { usuario: {}, status: {} };
    };
    ListaUsuarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-usuario',
            template: __webpack_require__("../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usuario_service__["a" /* UsuarioService */]])
    ], ListaUsuarioComponent);
    return ListaUsuarioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/usuario/usuario-info/usuario-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-navigation-bar\"></div>\n<div class=\"application-body\" *ngIf=\"usuarioSelected\">\n  <div class=\"application-body-content text-center\">\n    <div class=\"row header\">\n      <div class=\"col-sm-8\">\n        <div class=\"application-body-title text-left m-b-lg m-t-md\">\n          <div class=\"application-body-title-image inline-block align-middle m-r-sm\">\n            <img src=\"assets/public/img/png/010-boy-19.png\" width=\"80px\">\n          </div>\n          <div class=\"application-body-title-content inline-block align-middle\">\n            <h4>\n              <b [ngSwitch]=\"usuarioSelected.active\">\n                {{ usuarioSelected.realname }} \n                <span class=\"green\" *ngSwitchCase=\"true\">(Ativo)</span>\n                <span class=\"red\" *ngSwitchDefault>(Inativo)</span>\n              </b>\n            </h4>\n            Informações completas referente ao usuário em questão.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\" style=\"display:flex;justify-content:flex-end;align-items:center;padding-right:25px\">\n        <img src=\"assets/public/img/png/forest/backpack-1.png\" width=\"75px\">\n      </div>\n    </div>\n\n    <div class=\"row m-t-md\">\n      <div class=\"col-sm-8\">\n        <div class=\"dashboard-card text-left\">\n          <div class=\"dashboard-card-header\">\n            <h5 class=\"m-b-sm\">\n              <b>Informações Gerais</b>\n              <i class=\"fa fa-user-circle right green\"></i>\n            </h5>\n          </div>\n          <div class=\"dashboard-card-body m-t-md padding-sm text-left\">\n            <div class=\"block information-group\">\n              <span class=\"m-r-sm\"><b>Nome:</b></span>\n              <span>{{ usuarioSelected.realname }}</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <span class=\"m-r-sm\"><b>Usuário:</b></span>\n              <span>{{ usuarioSelected.username }}</span>\n            </div>\n            <div class=\"block m-t-sm information-group\" [ngSwitch]=\"usuarioSelected.active\">\n              <span class=\"m-r-sm\"><b>Status:</b></span>\n              <span class=\"label padding-sm label-success text-center\" *ngSwitchCase=\"true\">\n                  Ativo\n              </span>\n              <span class=\"label padding-sm label-danger text-center\" *ngSwitchDefault>\n                  Inativo\n              </span>\n            </div>\n            <div class=\"block m-t-sm right information-group\">\n              <b>Criado em:</b>\n              <span>{{ usuarioSelected.dtin | date:'dd/MM/yyyy' }}</span>\n            </div>\n            <div class=\"block m-t-sm information-group\">\n              <b>Última atualização</b>\n              <span>{{ usuarioSelected.dtstamp | date:'dd/MM/yyyy' }}</span>\n            </div>\n          </div>\n          <div class=\"dashboard-card-footer m-t-md text-right\"\n               [ngSwitch]=\"usuarioSelected.active\">\n            <h4 class=\"left m-t-md\">\n              Seguidores: <b class=\"blue\">{{ usuarioSelected.following.length }}</b> / \n              Seguindo: <b class=\"blue\">0</b>\n            </h4>\n            <button class=\"inactivate-information m-t-sm\" \n                    style=\"width:150px\"\n                    (click)=\"changeStatusUser(0)\"\n                    *ngSwitchCase=\"true\">\n              <b>Inativar Conta <i class=\"fa fa-thumbs-down\"></i></b>\n            </button>\n            <button class=\"activate-information m-t-sm\" \n                    style=\"width:150px\"\n                    (click)=\"changeStatusUser(1)\"\n                    *ngSwitchDefault>\n              <b>Ativar Conta <i class=\"fa fa-thumbs-up\"></i></b>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"dashboard-card text-left\">\n          <div class=\"dashboard-card-header\">\n            <h5 class=\"m-b-sm\">\n              <b>Ranking Geral</b>\n              <i class=\"fa fa-list-ol right green\"></i>\n            </h5>\n          </div>\n          <div class=\"dashboard-card-body\">\n            <table class=\"dashboard-table m-t-sm\">\n              <thead>\n                <tr>\n                  <th>Posição</th>\n                  <th>Usuário</th>\n                  <th>Tempo</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td style=\"padding-top:22px\" colspan=\"3\">Nada para mostrar</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"dashboard-card-footer m-t-sm text-right\">\n            <!-- <button class=\"refresh-information m-t-sm\"><b>Dashboard <i class=\"fa fa-dashboard\"></i></b></button> -->\n            <h4 class=\"left m-t-md\">\n              -- --\n            </h4>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6 text-left\">\n        <div class=\"dashboard-card\">\n          <div class=\"dashboard-card-header\">\n              <h5 class=\"m-b-sm\">\n                  <b>Últimas trilhas criadas</b>\n                  <i class=\"fa fa-motorcycle right green\"></i>\n              </h5>\n          </div>\n          <div class=\"dashboard-card-body\">\n            <table class=\"dashboard-table m-t-md m-b-md\">\n              <thead>\n                <tr>\n                  <th>Trilha</th>\n                  <th>Distância</th>\n                  <th>Tempo</th>\n                  <th>Avaliação</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let trail of usuarioSelected.activity\">\n                  <td>{{ trail.trailname }}</td>\n                  <td>{{ trail.traildist }} Km</td>\n                  <td>{{ trail.trailtime | date:'HH:mm:ss' }} - {{ trail.trailtime }}</td>\n                  <td>{{ trail.trailrat }}</td>\n                </tr>\n                <tr *ngIf=\"!usuarioSelected.activity.length\">\n                  <td style=\"padding-top:22px\" colspan=\"4\">\n                    Este usuário não realizou nenhuma trilha ainda\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"dashboard-card-footer text-right\">\n            <h4 class=\"left m-t-md\">\n              Total: \n                <b class=\"blue\">{{ usuarioSelected.following.length }}</b>\n            </h4>\n            <!-- <button class=\"refresh-information m-t-sm\" style=\"width:200px\"><b>Relações Estatísticas <i class=\"fa fa-dashboard\"></i></b></button> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 text-left\">\n        <div class=\"dashboard-card\">\n          <div class=\"dashboard-card-header\">\n              <h5 class=\"m-b-sm\">\n                  <b>Últimas trilhas realizadas</b>\n                  <i class=\"fa fa-motorcycle right green\"></i>\n              </h5>\n          </div>\n          <div class=\"dashboard-card-body\">\n            <table class=\"dashboard-table m-t-md m-b-md\">\n              <thead>\n                <tr>\n                  <th>Trilha</th>\n                  <th>Distância</th>\n                  <th>Tempo</th>\n                  <th>Avaliação</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let trail of usuarioSelected.activity\">\n                  <td>{{ trail.trailname }}</td>\n                  <td>{{ trail.traildist }}</td>\n                  <td>{{ trail.trailtime }}</td>\n                  <td>{{ trail.trailrat }}</td>\n                </tr>\n                <tr *ngIf=\"!usuarioSelected.activity.length\">\n                  <td style=\"padding-top:22px\" colspan=\"4\">\n                    Este usuário não realizou nenhuma trilha ainda\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"dashboard-card-footer text-right\">\n            <h4 class=\"left m-t-md\">\n              Total: \n                <b class=\"blue\">{{ usuarioSelected.following.length }}</b>\n            </h4>\n            <!-- <button class=\"refresh-information m-t-sm\" style=\"width:200px\"><b>Relações Estatísticas <i class=\"fa fa-dashboard\"></i></b></button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/usuario/usuario-info/usuario-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_service__ = __webpack_require__("../../../../../src/app/core/usuario/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var UsuarioInfoComponent = (function () {
    function UsuarioInfoComponent(state, usuarioService) {
        this.state = state;
        this.usuarioService = usuarioService;
        this.response = {};
    }
    UsuarioInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetResponse();
        this.state.params.subscribe(function (params) {
            _this.getUserById(params.userID);
        });
    };
    UsuarioInfoComponent.prototype.getUserById = function (userID) {
        var _this = this;
        this.usuarioSelected = null;
        this.usuarioService.getUserById(userID).subscribe(function (usuario) {
            if (usuario.message)
                return _this.response.usuario.message = usuario.message;
            _this.usuarioSelected = usuario.rows[0];
        }, function (err) {
            console.log(err);
        });
    };
    UsuarioInfoComponent.prototype.changeStatusUser = function (newStatus) {
        var _this = this;
        this.resetResponse('status');
        this.usuarioService.changeStatusUser(this.usuarioSelected.userID, newStatus).subscribe(function (response) {
            if (response.message)
                _this.response.status.message = response.message;
            _this.usuarioSelected.active = newStatus;
        }, function (err) {
            console.log(err);
            _this.response.status.error = err;
        });
    };
    UsuarioInfoComponent.prototype.resetResponse = function (name) {
        if (name)
            return this.response[name] = {};
        this.response = { usuario: {}, status: {} };
    };
    UsuarioInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usuario-info',
            template: __webpack_require__("../../../../../src/app/core/usuario/usuario-info/usuario-info.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__usuario_service__["a" /* UsuarioService */]])
    ], UsuarioInfoComponent);
    return UsuarioInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/usuario/usuario.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_routing_module__ = __webpack_require__("../../../../../src/app/core/usuario/usuario.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_service__ = __webpack_require__("../../../../../src/app/core/usuario/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_usuario_lista_usuario_component__ = __webpack_require__("../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuario_info_usuario_info_component__ = __webpack_require__("../../../../../src/app/core/usuario/usuario-info/usuario-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Services

// Component


var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__usuario_routing_module__["a" /* UsuarioRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__lista_usuario_lista_usuario_component__["a" /* ListaUsuarioComponent */],
                __WEBPACK_IMPORTED_MODULE_6__usuario_info_usuario_info_component__["a" /* UsuarioInfoComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__usuario_service__["a" /* UsuarioService */]]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/usuario/usuario.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_usuario_lista_usuario_component__ = __webpack_require__("../../../../../src/app/core/usuario/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_info_usuario_info_component__ = __webpack_require__("../../../../../src/app/core/usuario/usuario-info/usuario-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Componentes


var USUARIO_ROUTES = [
    { path: 'usuarios', children: [
            { path: 'lista', component: __WEBPACK_IMPORTED_MODULE_2__lista_usuario_lista_usuario_component__["a" /* ListaUsuarioComponent */] },
            { path: ':userID/info', component: __WEBPACK_IMPORTED_MODULE_3__usuario_info_usuario_info_component__["a" /* UsuarioInfoComponent */] },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] }
];
var UsuarioRoutingModule = (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(USUARIO_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/usuario/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var UsuarioService = (function () {
    function UsuarioService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Get list of users
     * @async
     * @return {Observable<Subscribe>} The result of the request
     */
    UsuarioService.prototype.getListOfUsers = function () {
        return this.httpService.get('/users');
    };
    /**
     * Get one user by ID
     * @async
     * @param {number} userID User ID
     * @return {Observable<Subscribe>} The result of the request
     */
    UsuarioService.prototype.getUserById = function (userID) {
        return this.httpService.get("/user/" + userID);
    };
    /**
     * Change Status User
     * @async
     * @param {number} userID User ID
     * @param {boolean} newStatus New Status of the user
     * @return {Observable<Subscribe>} The result of the request
     */
    UsuarioService.prototype.changeStatusUser = function (userID, newStatus) {
        return newStatus == true ?
            this.httpService.put("/user/" + userID + "/ativar") :
            this.httpService.put("/user/" + userID + "/inativar");
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__["a" /* HttpService */]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "../../../../../src/app/login-guard/login-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginGuard = (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form align-in-center\">\n  <div class=\"login-information\">\n      <div class=\"logo\">\n          <h4 style=\"margin-top:10px\">\n              <b>\n                  <span class=\"white\">TRAIL</span>\n                  <span class=\"green\">\n                      MAKER\n                      <i class=\"fa fa-tree\"></i>\n                  </span>\n              </b>\n          </h4>\n      </div>\n      <div class=\"rounded-photo\">\n          <img src=\"assets/public/img/png/forest/backpack.png\" width=\"65%\">\n      </div>\n      <div class=\"block milk m-t-sm\">\n          <b>A aventura está lá fora.</b>\n      </div>\n  </div>\n\n  <div class=\"login-card\">\n      <div class=\"login-header\">\n          <h4>\n              Login/Cadastro\n              <i class=\"fa fa-user-secret right\"></i>\n          </h4>\n      </div>\n\n      <div class=\"login-body\">\n          <form #formulario=\"ngForm\" \n                (ngSubmit)=\"login(formulario)\">\n              <div class=\"form-group\"\n                   [class.has-error]=\"hasErrorAndTouched(email)\">\n                  <label for=\"\"><b>Conta de E-mail</b></label>\n                  <input type=\"email\" \n                         name=\"email\"\n                         #email=\"ngModel\"\n                         ngModel\n                         required\n                         class=\"form-control\">\n              </div>\n\n              <div class=\"form-group\"\n                   [class.has-error]=\"hasErrorAndTouched(passwd)\">\n                  <label for=\"\"><b>Senha</b></label>\n                  <input type=\"password\" \n                         name=\"passwd\"\n                         #passwd=\"ngModel\"\n                         ngModel\n                         required\n                         class=\"form-control\">\n              </div>\n\n              <div class=\"form-group\">\n                  <a href=\"\" class=\"forgot-password\">Esqueci minha senha</a>\n                  <button class=\"refresh-information right\">Login <i class=\"fa fa-key\"></i></button>\n              </div>\n          </form>\n      </div>\n\n      <div class=\"copyright\">\n          <b>© Copyright <span class=\"green\">Trail Makers</span> Reserved</b>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (formulario) {
        var _this = this;
        if (formulario.value.email !== 'root' && formulario.value.passwd !== 'root')
            return alert('Usuário ou senha inválidos');
        this.authService.login().subscribe(function (res) {
            if (res == true)
                _this.router.navigateByUrl('/dashboard');
        });
    };
    LoginComponent.prototype.hasErrorAndTouched = function (input) {
        return input.invalid && input.touched;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/directions-map-directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsMapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core_services_google_maps_api_wrapper__ = __webpack_require__("../../../../@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionsMapDirective = (function () {
    function DirectionsMapDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    DirectionsMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsService.route({
                origin: { lat: _this.origin.latitude, lng: _this.origin.longitude },
                destination: { lat: _this.destination.latitude, lng: _this.destination.longitude },
                waypoints: _this.waypoits,
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "origin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "destination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "waypoits", void 0);
    DirectionsMapDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: 'sebm-google-map-directions'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__agm_core_services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */]])
    ], DirectionsMapDirective);
    return DirectionsMapDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AuthService = (function () {
    function AuthService(storageService) {
        this.storageService = storageService;
        this.isLogged = {};
    }
    AuthService.prototype.login = function () {
        this.isLogged = { logged: true, token: 'TrailAPI_Token_20171110' };
        this.storageService.save('TRAIL_AUTH_TOKEN', this.isLogged);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscribe) {
            subscribe.next(true);
        });
    };
    AuthService.prototype.logout = function () {
        this.isLogged = {};
        this.storageService.remove('TRAIL_AUTH_TOKEN');
    };
    AuthService.prototype.isUserLogged = function () {
        if (this.isLogged.hasOwnProperty('logged'))
            return this.isLogged.logged;
        return this.storageService.get('TRAIL_AUTH_TOKEN').logged || false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // Handling errors
 // Handling errors
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.base_path = 'http://trailapi.azurewebsites.net';
        // private base_path: string = 'http://localhost:3000';
        // Ativa/Desativa o Loader da página na hora da requisição
        this.newTransaction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.handlingError = this.handlingError.bind(this);
    }
    HttpService.prototype.get = function (url, queryParams, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json; charset=UTF-8" }), params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        this.addQueryParams(params, queryParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: params
        });
        this.cancelOtherRequest();
        this.changeLoadRequest(true);
        this.subscription = this.http.get(this.base_path + url, options)
            .map(function (res) {
            _this.changeLoadRequest(false);
            return res.json();
        })
            .catch(this.handlingError);
        return this.subscription;
    };
    HttpService.prototype.post = function (url, body, queryParams, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json; charset=UTF-8" });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        this.addQueryParams(params, queryParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: body,
            search: params
        });
        this.cancelOtherRequest();
        this.changeLoadRequest(true);
        this.subscription = this.http.post(this.base_path + url, body, options)
            .map(function (res) {
            _this.changeLoadRequest(false);
            return res.json();
        })
            .catch(this.handlingError);
        return this.subscription;
    };
    HttpService.prototype.put = function (url, queryParams, body, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json; charset=UTF-8" });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        this.addQueryParams(params, queryParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: body,
            search: params
        });
        this.cancelOtherRequest();
        this.changeLoadRequest(true);
        this.subscription = this.http.put(this.base_path + url, body, options)
            .map(function (res) {
            _this.changeLoadRequest(false);
            return res.json();
        });
        return this.subscription;
    };
    HttpService.prototype.delete = function (url, queryParams, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json; charset=UTF-8" }), params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        this.addQueryParams(params, queryParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: params
        });
        this.cancelOtherRequest();
        this.changeLoadRequest(true);
        this.subscription = this.http.get(this.base_path + url, options)
            .map(function (res) {
            _this.changeLoadRequest(false);
            return res.json();
        })
            .catch(this.handlingError);
        return this.subscription;
    };
    /**
     * Cancela a requisição anterior e cria uma nova
     */
    HttpService.prototype.cancelOtherRequest = function () {
        if (this.subscription) {
            this.subscription = null;
        }
    };
    // Handling errors
    HttpService.prototype.handlingError = function (err) {
        this.changeLoadRequest(false);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err || 'backend server error');
    };
    /**
     * Ativa o loader que está no "AppComponent"
     *
     * @param state Novo estado da requisição (True se está ocorrendo e False se ja acabou)
     */
    HttpService.prototype.changeLoadRequest = function (state) {
        this.newTransaction.emit(state);
    };
    /**
     * Passa todos os parâmetros desejados (no formato JSON)
     * para o objeto URLSearchParams do Angular que está encarregado
     * de envia-los pela requisição
     *
     * @param params Parâmetros desejados (Object)
     * @param queryParams Objecto URLSerachParams que será enviado junto a requisição
     */
    HttpService.prototype.addQueryParams = function (params, queryParams) {
        for (var param in queryParams) {
            if (typeof queryParams[param] == 'object')
                params.append(param, JSON.stringify(queryParams[param]));
            else
                params.append(param, queryParams[param]);
        }
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.save = function (key, value) {
        if (typeof (Storage) !== undefined) {
            var newValue = void 0;
            try {
                newValue = JSON.stringify(value);
            }
            catch (err) {
                console.log(err);
            }
            return localStorage.setItem(key, newValue);
        }
    };
    StorageService.prototype.get = function (key) {
        if (typeof (Storage) !== undefined) {
            var value = localStorage.getItem(key);
            var newValue = void 0;
            try {
                newValue = JSON.stringify(key);
            }
            catch (err) {
                console.log(err);
            }
            return newValue;
        }
    };
    StorageService.prototype.remove = function (key) {
        try {
            localStorage.removeItem(key);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_directions_map_directive__ = __webpack_require__("../../../../../src/app/shared/directives/directions-map-directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Services



// Directives

var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__directives_directions_map_directive__["a" /* DirectionsMapDirective */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__directives_directions_map_directive__["a" /* DirectionsMapDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"dashboard\">Trail Makers</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/usuarios/lista\">Usuários</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/trails/lista\">Trilhas</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n<div class=\"application-menu\">\n    <div class=\"application-menu-header\">\n        <h4>\n            <b>\n                <span class=\"white\">TRAIL</span>\n                <span class=\"green\">MAKER</span>\n            </b>\n        </h4>\n    </div>\n\n    <div class=\"application-menu-user-photo text-center\">\n        <div class=\"rounded-photo\">\n            <img src=\"assets/public/img/png/023-costume.png\" width=\"65%\">\n        </div>\n        <div class=\"menu-user-name white medium-font m-t-sm\">\n            <b>Gabriel Giro Resende <i class=\"fa fa-angle-double-down green\"></i></b>\n        </div>\n    </div>\n\n    <div class=\"application-menu-actions\">\n        <a routerLinkActive=\"menu-action-active\" routerLink=\"/dashboard\" class=\"action\">\n            Dashboard <i class=\"fa fa-pie-chart green\"></i>\n        </a>\n        <a routerLinkActive=\"menu-action-active\" routerLink=\"/usuarios/lista\" class=\"action\">\n            Usuários <i class=\"fa fa-users green\"></i>\n        </a>\n\n        <a routerLinkActive=\"menu-action-active\" routerLink=\"/trails/lista\"class=\"action\">\n            Trilhas <i class=\"fa fa-tree green\"></i>\n        </a>\n\n        <a class=\"action\"\n           href=\"http://trailapi.azurewebsites.net/apidoc\">\n            Documentação <i class=\"fa fa-sign-out green\"></i>\n        </a>\n\n        <a class=\"action\">\n            Efetuar Logout <i class=\"fa fa-sign-out green\"></i>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/views/menu/menu.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/views.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/views/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Componentes

var ViewsModule = (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map