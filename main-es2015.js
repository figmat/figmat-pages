(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'figmat-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _limits_limits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./limits/limits.component */ "./src/app/limits/limits.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
    { path: 'pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"] },
    { path: 'limits', component: _limits_limits_component__WEBPACK_IMPORTED_MODULE_9__["LimitsComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
        _limits_limits_component__WEBPACK_IMPORTED_MODULE_9__["LimitsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                    _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                    _limits_limits_component__WEBPACK_IMPORTED_MODULE_9__["LimitsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/limits/limits.component.ts":
/*!********************************************!*\
  !*** ./src/app/limits/limits.component.ts ***!
  \********************************************/
/*! exports provided: LimitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitsComponent", function() { return LimitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LimitsComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['code']) {
                this.http.post('/api/figma-limits', { code: params['code'] })
                    .subscribe((v) => {
                    this.symbolsLim = v.Symbols;
                    this.sentencesLim = v.Sentences;
                    this.figmatid = v.Figmatid;
                });
            }
        });
        let stripe = Stripe('pk_test_51GwZIhASKhSlqpJrkussYAZhiIgcprlaCm6prJHGJO9spkr4tkKFNZPRevwp2jHzeVBZ390rmfkwst6aZaUqKeJ500zF6BJfXb');
        // console.log(JSON.stringify(stripe));
        this.elements = stripe.elements({ locale: 'auto' });
        // console.log(JSON.stringify(elements));
        const card = this.elements.create('card', {});
        card.mount('#card-element');
        // registerElements([card], 'example1');
    }
    get limitsAvailable() {
        return !this.figmatid;
        // return false;
    }
    pay(a) {
        console.log(`+++`);
    }
    // @HostListener('card-element:change', ['$event'])
    fun() {
        console.log(`+++ fun`);
    }
}
LimitsComponent.ɵfac = function LimitsComponent_Factory(t) { return new (t || LimitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LimitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LimitsComponent, selectors: [["app-limits"]], decls: 37, vars: 5, consts: [["routerLink", "/", "routerLinkActive", "active"], [1, "container"], [1, "row", "justify-content-center", "m-2"], [1, "row", "m-2"], [1, "col", "text-right"], [1, "col"], [1, "row", "justify-content-center", "m-4", 3, "hidden"], ["name", "amount", "aria-label", "Payment amount", 3, "ngModel", "ngModelChange"], ["value", "p1"], ["value", "p3"], [1, "payment-form-container", 3, "hidden"], ["id", "payment-form"], ["id", "card-element"], ["id", "submit", "disabled", ""], ["id", "spinner", 1, "spinner", "hidden"], ["id", "button-text"], ["id", "card-errors", "role", "alert"], [1, "result-message", "hidden"], ["href", "", "target", "_blank"]], template: function LimitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "T4F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Limits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sentence limit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Symbols limit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LimitsComponent_Template_mat_button_toggle_group_ngModelChange_19_listener($event) { return ctx.paymentValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "$1 for 5000 symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-button-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "$3 for 25000 symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm payment - temporally disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Payment succeeded, see the result in your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Stripe dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Refresh the page to pay again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.limitsAvailable ? ctx.sentencesLim : "Loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.limitsAvailable ? ctx.symbolsLim : "Loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.limitsAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paymentValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.paymentValue);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".central-column[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.payment-form-container[_ngcontent-%COMP%] {\n  \n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  \n  \n}\n\n.payment-form-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 30vw;\n  min-width: 500px;\n  align-self: center;\n  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);\n  border-radius: 7px;\n  padding: 40px;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin-bottom: 6px;\n  padding: 12px;\n  border: 1px solid rgba(50, 50, 93, 0.1);\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  background: white;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .result-message[_ngcontent-%COMP%] {\n  line-height: 22px;\n  font-size: 16px;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .result-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #596fd6;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   #card-error[_ngcontent-%COMP%] {\n  color: #697386;\n  text-align: left;\n  font-size: 13px;\n  line-height: 17px;\n  margin-top: 12px;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   #card-element[_ngcontent-%COMP%] {\n  border-radius: 4px 4px 0 0;\n  padding: 12px;\n  border: 1px solid rgba(50, 50, 93, 0.1);\n  height: 44px;\n  width: 100%;\n  background: white;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   #payment-request-button[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #5469d4;\n  color: #ffffff;\n  font-family: Arial, sans-serif;\n  border-radius: 0 0 4px 4px;\n  border: 0;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: block;\n  transition: all 0.2s ease;\n  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);\n  width: 100%;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: contrast(115%);\n          filter: contrast(115%);\n}\n\n.payment-form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], .payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:before, .payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 22px;\n  text-indent: -99999px;\n  margin: 0px auto;\n  position: relative;\n  width: 20px;\n  height: 20px;\n  box-shadow: inset 0 0 0 2px;\n  transform: translateZ(0);\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:before, .payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:before {\n  width: 10.4px;\n  height: 20.4px;\n  background: #5469d4;\n  border-radius: 20.4px 0 0 20.4px;\n  top: -0.2px;\n  left: -0.2px;\n  transform-origin: 10.4px 10.2px;\n  -webkit-animation: loading 2s infinite ease 1.5s;\n  animation: loading 2s infinite ease 1.5s;\n}\n\n.payment-form-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]:after {\n  width: 10.4px;\n  height: 10.2px;\n  background: #5469d4;\n  border-radius: 0 10.2px 10.2px 0;\n  top: -0.1px;\n  left: 10.2px;\n  transform-origin: 0px 10.2px;\n  -webkit-animation: loading 2s infinite ease;\n  animation: loading 2s infinite ease;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGltaXRzL0M6XFxVc2Vyc1xcYW5kcmVcXGdvXFxzcmNcXGdpdGh1Yi5jb21cXGZlZWNoXFxmaWdtYXRcXGZpZ21hdC11aS9zcmNcXGFwcFxcbGltaXRzXFxsaW1pdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpbWl0cy9saW1pdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDQSxjQUFBO0VBSUUsMERBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQW9ERixzQkFBQTtFQXVCQSxxQ0FBQTtBQzNFQTs7QURSQTtFQUNFLHNCQUFBO0FDVUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlJQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTs7O0VBR0Usa0JBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUdBLHdCQUFBO0FDREY7O0FER0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLCtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3Q0FBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7QUNERjs7QURHQTtFQUNFO0lBRUUsdUJBQUE7RUNERjtFREdBO0lBRUUseUJBQUE7RUNERjtBQUNGOztBREdBO0VBQ0U7SUFFRSx1QkFBQTtFQ0RGO0VER0E7SUFFRSx5QkFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saW1pdHMvbGltaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWwtY29sdW1uIHtcclxuICB3aWR0aDogNTAwcHhcclxufVxyXG5cclxuLnBheW1lbnQtZm9ybS1jb250YWluZXIge1xyXG4vKiBWYXJpYWJsZXMgKi9cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC8vaGVpZ2h0OiAxMDB2aDtcclxuICAvL3dpZHRoOiAxMDB2dztcclxuZm9ybSB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMC41cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxyXG4gICAgMHB4IDJweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMHB4IDFweCAxLjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA5MywgMC4xKTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5yZXN1bHQtbWVzc2FnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5yZXN1bHQtbWVzc2FnZSBhIHtcclxuICBjb2xvcjogcmdiKDg5LCAxMTEsIDIxNCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY2FyZC1lcnJvciB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDExNSwgMTM0KTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbiNjYXJkLWVsZW1lbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwIDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA5MywgMC4xKTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuI3BheW1lbnQtcmVxdWVzdC1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLyogQnV0dG9ucyBhbmQgbGlua3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjNTQ2OWQ0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNS41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBmaWx0ZXI6IGNvbnRyYXN0KDExNSUpO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4vKiBzcGlubmVyL3Byb2Nlc3Npbmcgc3RhdGUsIGVycm9ycyAqL1xyXG4uc3Bpbm5lcixcclxuLnNwaW5uZXI6YmVmb3JlLFxyXG4uc3Bpbm5lcjphZnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zcGlubmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5OXB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlLFxyXG4uc3Bpbm5lcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlIHtcclxuICB3aWR0aDogMTAuNHB4O1xyXG4gIGhlaWdodDogMjAuNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM1NDY5ZDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAuNHB4IDAgMCAyMC40cHg7XHJcbiAgdG9wOiAtMC4ycHg7XHJcbiAgbGVmdDogLTAuMnB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAuNHB4IDEwLjJweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMC40cHggMTAuMnB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGluZmluaXRlIGVhc2UgMS41cztcclxuICBhbmltYXRpb246IGxvYWRpbmcgMnMgaW5maW5pdGUgZWFzZSAxLjVzO1xyXG59XHJcbi5zcGlubmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAuNHB4O1xyXG4gIGhlaWdodDogMTAuMnB4O1xyXG4gIGJhY2tncm91bmQ6ICM1NDY5ZDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAxMC4ycHggMTAuMnB4IDA7XHJcbiAgdG9wOiAtMC4xcHg7XHJcbiAgbGVmdDogMTAuMnB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMHB4IDEwLjJweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMTAuMnB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGluZmluaXRlIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGluZmluaXRlIGVhc2U7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG59XHJcbiIsIi5jZW50cmFsLWNvbHVtbiB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLnBheW1lbnQtZm9ybS1jb250YWluZXIge1xuICAvKiBWYXJpYWJsZXMgKi9cbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogQnV0dG9ucyBhbmQgbGlua3MgKi9cbiAgLyogc3Bpbm5lci9wcm9jZXNzaW5nIHN0YXRlLCBlcnJvcnMgKi9cbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIHdpZHRoOiAzMHZ3O1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDAuNXB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMHB4IDJweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMHB4IDFweCAxLjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA0MHB4O1xufVxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MCwgNTAsIDkzLCAwLjEpO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgLnJlc3VsdC1tZXNzYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIC5yZXN1bHQtbWVzc2FnZSBhIHtcbiAgY29sb3I6ICM1OTZmZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgI2NhcmQtZXJyb3Ige1xuICBjb2xvcjogIzY5NzM4NjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyICNjYXJkLWVsZW1lbnQge1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MCwgNTAsIDkzLCAwLjEpO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyICNwYXltZW50LXJlcXVlc3QtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM1NDY5ZDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDUuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogY29udHJhc3QoMTE1JSk7XG59XG4ucGF5bWVudC1mb3JtLWNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIC5zcGlubmVyLFxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgLnNwaW5uZXI6YmVmb3JlLFxuLnBheW1lbnQtZm9ybS1jb250YWluZXIgLnNwaW5uZXI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucGF5bWVudC1mb3JtLWNvbnRhaW5lciAuc3Bpbm5lciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG4ucGF5bWVudC1mb3JtLWNvbnRhaW5lciAuc3Bpbm5lcjpiZWZvcmUsXG4ucGF5bWVudC1mb3JtLWNvbnRhaW5lciAuc3Bpbm5lcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbn1cbi5wYXltZW50LWZvcm0tY29udGFpbmVyIC5zcGlubmVyOmJlZm9yZSB7XG4gIHdpZHRoOiAxMC40cHg7XG4gIGhlaWdodDogMjAuNHB4O1xuICBiYWNrZ3JvdW5kOiAjNTQ2OWQ0O1xuICBib3JkZXItcmFkaXVzOiAyMC40cHggMCAwIDIwLjRweDtcbiAgdG9wOiAtMC4ycHg7XG4gIGxlZnQ6IC0wLjJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMC40cHggMTAuMnB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMC40cHggMTAuMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAycyBpbmZpbml0ZSBlYXNlIDEuNXM7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAycyBpbmZpbml0ZSBlYXNlIDEuNXM7XG59XG4ucGF5bWVudC1mb3JtLWNvbnRhaW5lciAuc3Bpbm5lcjphZnRlciB7XG4gIHdpZHRoOiAxMC40cHg7XG4gIGhlaWdodDogMTAuMnB4O1xuICBiYWNrZ3JvdW5kOiAjNTQ2OWQ0O1xuICBib3JkZXItcmFkaXVzOiAwIDEwLjJweCAxMC4ycHggMDtcbiAgdG9wOiAtMC4xcHg7XG4gIGxlZnQ6IDEwLjJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwcHggMTAuMnB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMTAuMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAycyBpbmZpbml0ZSBlYXNlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMnMgaW5maW5pdGUgZWFzZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-limits',
                templateUrl: './limits.component.html',
                styleUrls: ['./limits.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class PaymentComponent {
    constructor(fb) {
        this.fb = fb;
        this.elementsOptions = {
        // locale: 'de'
        };
        // this.stripeTest = this.fb.group({
        //   name: ['', [Validators.required]]
        // });
        // this.stripeService.elements(this.elementsOptions)
        //   .subscribe(elements => {
        //     this.elements = elements;
        //     // Only mount the element the first time
        //     if (!this.card) {
        //       this.card = this.elements.create('card', {
        //         style: {
        //           base: {
        //             iconColor: '#666EE8',
        //             color: '#31325F',
        //             lineHeight: '40px',
        //             fontWeight: 300,
        //             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        //             fontSize: '18px',
        //             '::placeholder': {
        //               color: '#CFD7E0'
        //             }
        //           }
        //         }
        //       });
        //       this.card.mount('#card-element');
        //     }
        //   });
    }
    ngOnInit() {
        let stripe = Stripe('pk_test_51GwZIhASKhSlqpJrkussYAZhiIgcprlaCm6prJHGJO9spkr4tkKFNZPRevwp2jHzeVBZ390rmfkwst6aZaUqKeJ500zF6BJfXb');
        console.log(JSON.stringify(stripe));
        let elements = stripe.elements();
        console.log(JSON.stringify(elements));
    }
    buy() {
        // const stripeServiceInstance = this.stripeService;
        fetch("/api/secret", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
            .then(function (result) {
            if (!result.ok) {
                throw {};
            }
            // console.log(JSON.stringify(result.json()));
            return result.json();
        }).then(function (data) {
            console.log(JSON.stringify(data));
            // const stripe = Stripe("");
            // const elements = stripe.elements();
            // stripeServiceInstance.confirmPaymentIntent(
            //   data.clientSecret,
            //   // {
            //   //   payment_method: {
            //   //     card: '',
            //   //     billing_details: {
            //   //       name: 'Jenny Rosen'
            //   //     }
            //   //   }
            //
            // );
        }).catch(function () {
            console.log(`catch`);
        });
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 0, vars: 0, template: function PaymentComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
    on5kClick() {
        console.log("5k click");
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 52, vars: 0, consts: [[1, "pricing-page", "vh-100"], [1, "container"], [1, "row", "pt-4"], ["mat-button", "", "routerLink", "/", "routerLinkActive", "active"], [1, "t"], [1, "four"], [1, "f"], [1, "payments-section"], [1, "w-100", "text-center"], [1, "card-section", "row", "justify-content-center"], [1, "col-md"], [1, "card", "p-2"], [1, "card-title", "mx-auto"], [1, "card-point", "mx-auto"], [1, "card-sub", "mx-auto", "p-2"], [1, "mx-auto", "mt-auto"], ["href", "https://www.figma.com/oauth?\nclient_id=juHRWNQfv5Pa1u2K6rRKVn&\nredirect_uri=https://figmat.com/limits&\nscope=file_read&\nstate=1&\nresponse_type=code", "role", "button", 1, "btn", "btn-outline-primary"], [1, "card-sub"], ["href", "https://www.figma.com/oauth?\nclient_id=juHRWNQfv5Pa1u2K6rRKVn&\nredirect_uri=https://figmat.com/limits&\nscope=file_read&\nstate=3&\nresponse_type=code", "role", "button", 1, "btn", "btn-outline-primary"], [1, "container", "fixed-bottom"], [1, "row"], ["mat-button", "", "href", "mailto:contacts@figmat.com", 1, "ml-auto"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Starter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Free ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " join and get 10000 symbols to use for three months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Curious designer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " $1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " pay as you go for 5000 symbols to use for one month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Multilingual designer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " $3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " pay as you go for 25000 symbols to use for three months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".pricing-page[_ngcontent-%COMP%] {\n  background-color: #403F3F;\n  color: #fcfcfc;\n  padding-bottom: 0;\n}\n\n.payments-section[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  color: #403F3F;\n  padding: 30px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 206px;\n  height: 300px;\n  margin: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #363738;\n}\n\n.card-point[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #363738;\n}\n\n.card-sub[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6A6A6A;\n  text-align: center;\n}\n\n.t[_ngcontent-%COMP%] {\n  color: #F18C15;\n  font-size: 18px;\n}\n\n.four[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.f[_ngcontent-%COMP%] {\n  color: #19A6E2;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9DOlxcVXNlcnNcXGFuZHJlXFxnb1xcc3JjXFxnaXRodWIuY29tXFxmZWVjaFxcZmlnbWF0XFxmaWdtYXQtdWkvc3JjXFxhcHBcXHByaWNpbmdcXHByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUE7O0FER0E7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FBOztBRElBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RBOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2luZy1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDNGM0Y7XHJcbiAgICBjb2xvcjogI2ZjZmNmYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuLnBheW1lbnRzLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgY29sb3I6ICM0MDNGM0Y7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAyMDZweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmNvbG9yOiAjMzYzNzM4O1xyXG59XHJcblxyXG4uY2FyZC1wb2ludCB7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxuY29sb3I6ICMzNjM3Mzg7XHJcblxyXG59XHJcblxyXG4uY2FyZC1zdWIge1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmNvbG9yOiAjNkE2QTZBO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50IHtcclxuICBjb2xvcjogI0YxOEMxNTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcbi5mb3VyIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLmYge1xyXG4gIGNvbG9yOiAjMTlBNkUyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iLCIucHJpY2luZy1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0YzRjtcbiAgY29sb3I6ICNmY2ZjZmM7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucGF5bWVudHMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGNvbG9yOiAjNDAzRjNGO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAyMDZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzNjM3Mzg7XG59XG5cbi5jYXJkLXBvaW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MzczODtcbn1cblxuLmNhcmQtc3ViIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzZBNkE2QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udCB7XG4gIGNvbG9yOiAjRjE4QzE1O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb3VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZiB7XG4gIGNvbG9yOiAjMTlBNkUyO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 29, vars: 0, consts: [[1, "welcome-page", "vh-100"], [1, "container"], [1, "row", "pt-4"], ["mat-button", "", "routerLink", "/", "routerLinkActive", "active"], [1, "t"], [1, "four"], [1, "f"], [1, "ml-auto"], ["mat-button", "", "routerLink", "/pricing", "routerLinkActive", "active"], [1, "row", "justify-content-center"], [1, "row", "justify-content-center", "m-2"], ["mat-button", "", "color", "accent", "href", "https://www.figma.com/community", 1, "install-button"], [1, "row", "how-to-section"], [1, "how-to-box", "w-100"], [1, "container", "fixed-bottom"], [1, "row"], ["mat-button", "", "href", "mailto:contacts@figmat.com", 1, "ml-auto"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Translator for Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add seamless translation experience to your design tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Install the plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " How it works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".welcome-page[_ngcontent-%COMP%] {\n  background-color: #403F3F;\n  color: #fcfcfc;\n}\n\n.t[_ngcontent-%COMP%] {\n  color: #F18C15;\n  font-size: 18px;\n}\n\n.four[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.f[_ngcontent-%COMP%] {\n  color: #19A6E2;\n  font-size: 18px;\n}\n\n.install-button[_ngcontent-%COMP%] {\n  background-color: #189CFB;\n  color: #fcfcfc;\n  height: 40px;\n  line-height: 40px;\n  width: 200px;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.how-to-section[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  color: #403F3F;\n  padding: 30px;\n}\n\n.how-to-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXGFuZHJlXFxnb1xcc3JjXFxnaXRodWIuY29tXFxmZWVjaFxcZmlnbWF0XFxmaWdtYXQtdWkvc3JjXFxhcHBcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDRSxpQkFBQTtFQUVBLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDNGM0Y7XHJcbiAgICBjb2xvcjogI2ZjZmNmYztcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50IHtcclxuICBjb2xvcjogI0YxOEMxNTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcbi5mb3VyIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLmYge1xyXG4gIGNvbG9yOiAjMTlBNkUyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmluc3RhbGwtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5Q0ZCO1xyXG4gIGNvbG9yOiAjZmNmY2ZjO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5ob3ctdG8tc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgY29sb3I6ICM0MDNGM0Y7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaG93LXRvLWJveCB7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgLy9taW4td2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiLndlbGNvbWUtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNGM0Y7XG4gIGNvbG9yOiAjZmNmY2ZjO1xufVxuXG4udCB7XG4gIGNvbG9yOiAjRjE4QzE1O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb3VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZiB7XG4gIGNvbG9yOiAjMTlBNkUyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnN0YWxsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlDRkI7XG4gIGNvbG9yOiAjZmNmY2ZjO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhvdy10by1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICM0MDNGM0Y7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5ob3ctdG8tYm94IHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\go\src\github.com\feech\figmat\figmat-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map