webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            url: 'https://www.youtube.com/embed/Ry5s8EuTYHA',
            title: 'Приглашаем в Хакасию! (КЭФ-2018)'
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
        this.loading = this.loadingCtrl.create({
            content: 'Пожалуйста, подожите...'
        });
        this.loading.present();
    };
    HomePage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>О НАШЕМ РЕГИОНЕ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--Ry5s8EuTYHA-->\n  <ion-card>\n    <ion-card-content class="card-background-page">\n      <iframe #iframeVideo width="100%" height="315" [src]="trustedVideoUrl ? trustedVideoUrl : null" (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null" frameborder="0" allowfullscreen></iframe>\n    </ion-card-content>\n    <ion-card-header>\n      О регионе\n    </ion-card-header>\n    <img src="img/khakasiya.jpg"/>\n    <ion-card-content>\n      Хакасия расположена в Южной Сибири, в пределах левобережной части среднего течения реки Енисей, на территориях Саяно-Алтайского нагорья и Хакасско-Минусинской котловины.<br>\n      Природно-ландшафтные зоны: от полупустынь до высокогорья альпийских лугов и тундр. <br>\n    </ion-card-content>\n    <ion-card-content>\n      Протяженность территории с севера на юг – 460 км, с запада на восток (в наиболее широкой части) – 200 км. На севере, востоке и юго-востоке Хакасия граничит с Красноярским краем, на юге – с Республикой Тыва, на юго-западе – с Республикой Алтай, на западе – с Кемеровской областью.<br>\n      Площадь Республики Хакасия 61 900 км2.<br>\n    </ion-card-content>\n    <ion-card-content>\n      Территория Хакасии разделена на 8 районов. Города республиканского подчинения – Абакан, Абаза, Саяногорск, Сорск, Черногорск. Всего на территории республики 271 населенный пункт.<br>\n      Численность населения Хакасии составляет 537 тыс. человек, из них 69,4% городское, 30,6% сельское.<br>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      История возникновения\n    </ion-card-header>\n    <img src="img/khakas2.jpg"/>\n    <ion-card-content>\n      Как предполагают ученые, предки человека поселились на территории Саяно-Алтайского нагорья свыше 300 тысяч лет назад, однако самые древние свидетельства освоения человеком пространств Хакасии соотносится с периодом, отстоящим от наших дней на 80-100 тысяч лет.<br>\n      С древнейших времен Хакасия имела караванные пути, связывающие ее с Монголией, Китаем, Тибетом и Индией. В эпоху Кыргызского каганата (VI-XIII вв.) существовала ветвь Великого шелкового пути, которая соединяла Хакасию с Тувой. Этот путь упоминался еще в древнетюркских рунических памятниках VII–VIII вв.<br>\n    </ion-card-content>\n    <ion-card-content>\n      В марте 1707 года царь Петр I подписал Указ о сооружении острога в Хакасии, который был построен за 15 дней, с 4 по 18 августа 1707 года. Это событие и знаменует начало процесса вхождения Хакасии в состав России.<br>\n      Датой же официального включения территории Хакасии в состав Российской империей можно считать 20 августа 1727 года, когда между Россией и Китаем был заключён Буринский (или Кяхтинский) пограничный трактат.<br>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button secondary menuToggle>Открыть меню</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndustrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndustrialPage = /** @class */ (function () {
    function IndustrialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndustrialPage');
    };
    IndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\industrial\industrial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ПРОМЫШЛЕННЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round>ЭНЕРГЕТИКА</button>\n  <br>\n  <button ion-button block round>МЕТАЛЛУРГИЯ</button>\n  <br>\n  <button ion-button block round>УГОЛЬНАЯ ПРОМЫШЛЕННОСТЬ</button>\n  <br>\n  <button ion-button block round>ПИЩЕВАЯ И ПЕРЕРАБАТЫВАЮЩАЯ ПРОМЫШЛЕННОСТЬ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\industrial\industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IndustrialPage);
    return IndustrialPage;
}());

//# sourceMappingURL=industrial.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResourcePage = /** @class */ (function () {
    function ResourcePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResourcePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcePage');
    };
    ResourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resource',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\resource\resource.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>РЕСУРСНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round>ЗЕМЕЛЬНЫЕ РЕСУРСЫ</button>\n  <br>\n  <button ion-button block round>ЛЕСНЫЕ РЕСУРСЫ</button>\n  <br>\n  <button ion-button block round>ПОЛЕЗНЫЕ ИСКОПАЕМЫЕ</button>\n  <br>\n  <button ion-button block round>ВОДНО-БИОЛОГИЧЕСКИЕ РЕСУРСЫ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\resource\resource.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResourcePage);
    return ResourcePage;
}());

//# sourceMappingURL=resource.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgriculturalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgriculturalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgriculturalPage = /** @class */ (function () {
    function AgriculturalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgriculturalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgriculturalPage');
    };
    AgriculturalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agricultural',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\agricultural\agricultural.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CЕЛЬСКО-ХОЗЯЙСТВЕННЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\agricultural\agricultural.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AgriculturalPage);
    return AgriculturalPage;
}());

//# sourceMappingURL=agricultural.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportPage = /** @class */ (function () {
    function TransportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransportPage');
    };
    TransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transport',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\transport\transport.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ТРАНСПОРТНО-ИНФРАСТРУКТУРНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round>ЖЕЛЕЗНОДОРОЖНАЯ ИНФРАСТРУКТУРА</button>\n  <br>\n  <button ion-button block round>АВТОТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</button>\n  <br>\n  <button ion-button block round>АВИАТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\transport\transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransportPage);
    return TransportPage;
}());

//# sourceMappingURL=transport.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TouristPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TouristPage = /** @class */ (function () {
    function TouristPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TouristPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TouristPage');
    };
    TouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tourist',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\tourist\tourist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ЭТНОКУЛЬТУРНЫЙ И ТУРИСТИЧЕСКИЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round>ИСТОРИКО-КУЛЬТУРНОЕ НАСЛЕДИЕ РЕСПУБЛИКИ ХАКАСИЯ</button>\n  <br>\n  <button ion-button block round>ТУРИСТСКО-РЕКРЕАЦИОННЫЙ ПОТЕНЦИАЛ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\tourist\tourist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TouristPage);
    return TouristPage;
}());

//# sourceMappingURL=tourist.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EducationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationalPage = /** @class */ (function () {
    function EducationalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EducationalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationalPage');
    };
    EducationalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-educational',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\educational\educational.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>НАУЧНО-ОБРАЗОВАТЕЛЬНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/edu.jpg"/>\n    <ion-card-content>\n      В Республике Хакасия имеется научная база, представленная организациями высшего образования и научно-исследовательскими учреждениями. К образовательным организациям высшего образования, активно участвующим в научной деятельности, относятся ФГБОУ ВПО «Хакасский государственный университет им. Н.Ф. Катанова» и Хакасский технический институт – филиал ФГАОУ ВПО «Сибирский федеральный университет».».\n      Научные результаты, полученные учеными Республики Хакасия, имеют выраженный прикладной характер и могут быть немедленно применены в отраслях производства.\n    </ion-card-content>\n    <ion-card-header text-wrap>\n      <b>Ключевые проекты научных разработок Хакасского государственного университета им. Н.Ф. Катанова:</b>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>\n          Технология пылеподавления в угольном производстве с применением специальных реагентов. Сфера применения: производственные процессы, сопровождающиеся поступлением в атмосферу угольной пыли (добыча, транспортировка, хранение, обогащение каменного угля) Назначение: пылеподавление от неорганизованных источников угольной пыли на угольных разрезах;\n        </li>\n        Абсорбенты для поглощения химических загрязнителей воды на основе химически модифицированных природных глин. Сфера применения: предприятия, деятельность которых связана с интенсивным природопользованием, население. Назначение: очистка воды от химических примесей.\n        <li>\n        Оценка воздействия проектируемых промышленных предприятий и объектов на биоразнообразие и разработка компенсационных мероприятий. Сфера применения: рациональное природопользование, проектирование промышленных предприятий и объектов топливной, энергетической и транспортной инфраструктуры. Назначение: подготовка материалов для раздела ОВОС на этапе разработки проектной документации предприятий (оценка фонового состояния почвы и биоты, прогнозирование воздействия на биоразнообразие, разработка программы экологического мониторинга, разработка компенсационных мероприятий и т.д.).\n        </li>\n        <li>\n        Интеллектуальные системы многоаспектного анализа больших данных на основе нейросетевых технологий. Сфера применения: энергетика, солнечные и гидроэлектростанции. Назначение: повышение эффективности работы технически сложного объекта (контроль и оптимизация режима работы, обеспечение наиболее эффективного режима).\n        </li>\n        <li>\n        Детектор загрязнения окружающего воздуха. Сфера применения (назначение): оперативное обнаружение и оповещение при превышении критических показателей загрязнения воздуха (пропан, бутан, угарный газ, пылевое загрязнение).\n        </li>\n        <li>\n        Инновационные способы лечения гнойно-воспалительных заболеваний у сельскохозяйственных животных и устройства для выполнения хирургических операций. Сфера применения: сельское хозяйство, ветеринарная хирургия.\n        </li>\n        <li>\n        Инновационные способы лимфатической терапии при воспалительных патологиях различных организменных систем у домашних и сельскохозяйственных животных. Сфера применения: сельское хозяйство, ветеринарная терапия.\n        </li>\n      </ul>\n    </ion-card-content>\n    <ion-card-header text-wrap>\n      <b>Ключевые проекты научных разработок Хакасского технического института - филиала ФГАОУ ВПО «Сибирский федеральный университет»</b>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>\n          Совершенствование регламента работ по техническому обслуживанию и ремонту технологического транспорта при проведении открытых горных разработок. Сфера применения (назначение): Предложенные мероприятия могут использоваться при совершенствовании организации и технологии проведения технического обслуживания и профилактического ремонта большегрузных автомобилей.\n        </li>\n        <li>\n          Высокопрочные бетоны (В100) для монолитного домостроения с применением микрокремнезема и  экономией цемента до 50%. Сфера применения (назначение): Разработанный материал может применяться: для конструкции заводского изготовления или для монолитного многоэтажного домостроения.\n        </li>\n        <li>\n          Технология производства легких ограждающих конструкций с энергоэффективным  полистиролцементным материалом. Сфера применения (назначение): Разработанный материал может применяться: для промышленных, гражданских, жилых зданий в виде утеплителя и конструкционного материала.\n        </li>\n        <li>\n          Повышение энергоэффективности ограждающих конструкций с применением программных комплексов Elcut и Temper-3D. Сфера применения (назначение): Разработка энергоэффективных проектных решений ограждающих конструкций с высокой достоверностью в программном комплексе Elcut. Промышленные и гражданские здания и сооружения.\n        </li>\n        <li>\n          Прогноз поведения грунтов и подземных объектов при подъеме уровня грунтовых вод на этапах жизненного цикла здании и подземных сооружений.  Сфера применения (назначение): Инженерная гидрогеологические, строительство. Знания динамики колебания грунтовых вод необходимы для проектирования и строительства подземных объектов в Абакане. Освоение подземного пространства повысит стоимость объекта недвижимости.\n        </li>\n        <li>\n          Разработка теплозащитных мероприятий на этапах жизненного цикла зданий. Сфера применения (назначение): Научная разработка может быть использована в процессе выполнения проектной документации на объекты строительства с целью повышения уровня энергоэффективности зданий.\n        </li>\n        <li>\n          Дендроэкологические иссследования в криминалистике. Сфера применения (назначение):  Установка реального возраста исторических объектов (деревянных построек, памятников истории и архитектуры с использованием древесно-кольцевых хронологий.\n        </li>\n        <li>\n          Прогнозирование надежности электроснабжения в период геомагнитных бурь. Сфера применения (назначение):  Все энергетические предприятия. Разработка обучение и испытание нечеткого контроллера для прогнозирования аварийных ситуаций в электроэнергетической системе  на основании прогноза магнитных бурь.\n      </ul>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\educational\educational.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EducationalPage);
    return EducationalPage;
}());

//# sourceMappingURL=educational.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HumanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HumanPage = /** @class */ (function () {
    function HumanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HumanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HumanPage');
    };
    HumanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-human',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\human\human.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ЧЕЛОВЕЧЕСКИЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/human.jpg"/>\n    <ion-card-content>\n      Население Республики Хакасия составляет 537 404 человека, из них численность трудовых ресурсов – 310 857 человек, в том числе численность занятых в экономике – 221 990 человек, численность обучающихся в трудоспособном возрасте с отрывом от производства – 19 691 человек.\n      <br>\n      <b>Структура занятого в экономике трудоспособного населения выглядит следующим образом:</b>\n    </ion-card-content>\n    <img src="img/hum_diag.png"/>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\human\human.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HumanPage);
    return HumanPage;
}());

//# sourceMappingURL=human.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_human_human__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(192);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__["a" /* ResourcePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__["a" /* IndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__["a" /* AgriculturalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__["a" /* TransportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__["a" /* TouristPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__["a" /* EducationalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__["a" /* ResourcePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__["a" /* IndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__["a" /* AgriculturalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__["a" /* TransportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__["a" /* TouristPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__["a" /* EducationalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_human_human__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'О НАШЕМ РЕГИОНЕ', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'РЕСУРСНЫЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__["a" /* ResourcePage */] },
            { title: 'ПРОМЫШЛЕННЫЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__["a" /* IndustrialPage */] },
            { title: 'CЕЛЬСКО-ХОЗЯЙСТВЕННЫЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__["a" /* AgriculturalPage */] },
            { title: 'ТРАНСПОРТНО-ИНФРАСТРУКТУРНЫЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__["a" /* TransportPage */] },
            { title: 'ЭТНОКУЛЬТУРНЫЙ И ТУРИСТИЧЕСКИЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__["a" /* TouristPage */] },
            { title: 'НАУЧНО-ОБРАЗОВАТЕЛЬНЫЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__["a" /* EducationalPage */] },
            { title: 'ЧЕЛОВЕЧЕСКИЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\khks-app\khks-app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" text-wrap>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\khks-app\khks-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map