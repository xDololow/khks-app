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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    /*
    video: any = {
      url: 'https://www.youtube.com/embed/Ry5s8EuTYHA',
      title: 'Приглашаем в Хакасию! (КЭФ-2018)'
    };
  
    trustedVideoUrl: SafeResourceUrl;
    loading: Loading;
    */
    function HomePage(navCtrl, loadingCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>О НАШЕМ РЕГИОНЕ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <!--Ry5s8EuTYHA-->\n  <!--ion-card>\n      <iframe #iframeVideo width="100%" height="315" [src]="trustedVideoUrl ? trustedVideoUrl : null" (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null" frameborder="0" allowfullscreen></iframe>\n  </ion-card-->\n  <ion-card>\n    <ion-card-header>\n      О регионе\n    </ion-card-header>\n    <img src="img/khakasiya.jpg"/>\n    <ion-card-content>\n      Хакасия расположена в Южной Сибири, в пределах левобережной части среднего течения реки Енисей, на территориях Саяно-Алтайского нагорья и Хакасско-Минусинской котловины.<br>\n      Природно-ландшафтные зоны: от полупустынь до высокогорья альпийских лугов и тундр. <br>\n    </ion-card-content>\n    <ion-card-content>\n      Протяженность территории с севера на юг – 460 км, с запада на восток (в наиболее широкой части) – 200 км. На севере, востоке и юго-востоке Хакасия граничит с Красноярским краем, на юге – с Республикой Тыва, на юго-западе – с Республикой Алтай, на западе – с Кемеровской областью.<br>\n      Площадь Республики Хакасия 61 900 км2.<br>\n    </ion-card-content>\n    <ion-card-content>\n      Территория Хакасии разделена на 8 районов. Города республиканского подчинения – Абакан, Абаза, Саяногорск, Сорск, Черногорск. Всего на территории республики 271 населенный пункт.<br>\n      Численность населения Хакасии составляет 537 тыс. человек, из них 69,4% городское, 30,6% сельское.<br>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      История возникновения\n    </ion-card-header>\n    <img src="img/khakas2.jpg"/>\n    <ion-card-content>\n      Как предполагают ученые, предки человека поселились на территории Саяно-Алтайского нагорья свыше 300 тысяч лет назад, однако самые древние свидетельства освоения человеком пространств Хакасии соотносится с периодом, отстоящим от наших дней на 80-100 тысяч лет.<br>\n      С древнейших времен Хакасия имела караванные пути, связывающие ее с Монголией, Китаем, Тибетом и Индией. В эпоху Кыргызского каганата (VI-XIII вв.) существовала ветвь Великого шелкового пути, которая соединяла Хакасию с Тувой. Этот путь упоминался еще в древнетюркских рунических памятниках VII–VIII вв.<br>\n    </ion-card-content>\n    <ion-card-content>\n      В марте 1707 года царь Петр I подписал Указ о сооружении острога в Хакасии, который был построен за 15 дней, с 4 по 18 августа 1707 года. Это событие и знаменует начало процесса вхождения Хакасии в состав России.<br>\n      Датой же официального включения территории Хакасии в состав Российской империей можно считать 20 августа 1727 года, когда между Россией и Китаем был заключён Буринский (или Кяхтинский) пограничный трактат.<br>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button secondary menuToggle>Открыть меню</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__energ_industrial_energ_industrial__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metal_industrial_metal_industrial__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coal_industrial_coal_industrial__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_industrial_food_industrial__ = __webpack_require__(198);
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
    function IndustrialPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    IndustrialPage.prototype.openEnergModal = function () {
        var energModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__energ_industrial_energ_industrial__["a" /* EnergIndustrialPage */]);
        energModal.present();
    };
    IndustrialPage.prototype.openMetalModal = function () {
        var metalModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__metal_industrial_metal_industrial__["a" /* MetalIndustrialPage */]);
        metalModal.present();
    };
    IndustrialPage.prototype.closeCoalModal = function () {
        var coalModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__coal_industrial_coal_industrial__["a" /* CoalIndustrialPage */]);
        coalModal.present();
    };
    IndustrialPage.prototype.closeFoodModal = function () {
        var foodModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__food_industrial_food_industrial__["a" /* FoodIndustrialPage */]);
        foodModal.present();
    };
    IndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndustrialPage');
    };
    IndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\industrial\industrial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ПРОМЫШЛЕННЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round (click)="openEnergModal()">ЭНЕРГЕТИКА</button>\n  <br>\n  <button ion-button block round (click)="openMetalModal()">МЕТАЛЛУРГИЯ</button>\n  <br>\n  <button ion-button block round (click)="closeCoalModal()">УГОЛЬНАЯ ПРОМЫШЛЕННОСТЬ</button>\n  <br>\n  <button ion-button block round (click)="closeFoodModal()">ПИЩЕВАЯ И ПЕРЕРАБАТЫВАЮЩАЯ ПРОМЫШЛЕННОСТЬ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\industrial\industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], IndustrialPage);
    return IndustrialPage;
}());

//# sourceMappingURL=industrial.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergIndustrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnergIndustrialPage = /** @class */ (function () {
    function EnergIndustrialPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    EnergIndustrialPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EnergIndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnergIndustrialPage');
    };
    EnergIndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-energ-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\energ-industrial\energ-industrial.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ЭНЕРГЕТИКА</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/ener.jpg"/>\n    <ion-card-content>\n      Энергосистема Республики Хакасия включает в себя генерирующие энергообъекты и сетевое оборудование различных субъектов электроэнергетики, служащие для осуществления электроснабжения потребителей Республики Хакасия. Энергоснабжение региона является централизованным и охватывает практически всю территорию.\n      В энергосистему Республики Хакасия входят: <br>\n      <b>Саяно-Шушенская ГЭС</b> является самым мощным источником электроэнергии в ЕЭС России, покрывающая сезонные и суточные колебания потребления электрической энергии (мощности).\n      Установленная мощность Саяно-Шушенской ГЭС —   6 400 МВт, среднемноголетняя выработка 23,5 млрд кВт/ч. Длина плотины по гребню – 1 070 м. Выход на полную производственную мощность позволил выработать около 13% электроэнергии, производимой гидроэлектростанциями России.\n      <br>\n      <b>Майнский гидроузел</b> расположен ниже по течению Енисея в 21,5 км от Саяно-Шушенской ГЭС. Установленная мощность Майнской ГЭС - 321 МВт, годовая выработка электроэнергии - 1,7 млрд кВт/ч.\n      <br>\n      <b>Абаканский топливно-энергетический узел: Абаканская ТЭЦ – 406 МВт, ТЭЦ Абаза-Энерго – 19 МВт, Сорская ТЭЦ – 6 МВт.</b> Абаканская ТЭЦ является угольной тепловой электроцентралью, расположенной в Республике Хакасия в городе Абакан. Станция обеспечивает теплом более 90% потребителей жилищно-коммунального сектора Абакана, а также крупные промышленные предприятия.\n      <br>\n      <b>Абаканская солнечная электростанция.</b> В городе Абакане (площадка ООО «Русский кремний») компания «ЕвроСибЭнерго» ввела в промышленную эксплуатацию солнечную электростанцию установленной мощностью 5,2 МВт.\n      <br>\n      <b>В 2017 году производство электроэнергии в Республике Хакасия за вычетом внутреннего потребления (потребление электроэнергии в энергосистеме Республики Хакасия за 2017 год – 16 658,6 млн кВт/ч.) составило 9 184,4 млн кВт/ч (или 155%), что дает потенциальную возможность реализации энергозатратных проектов в промышленности на территории Енисейского макрорегиона.</b>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\energ-industrial\energ-industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], EnergIndustrialPage);
    return EnergIndustrialPage;
}());

//# sourceMappingURL=energ-industrial.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetalIndustrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetalIndustrialPage = /** @class */ (function () {
    function MetalIndustrialPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MetalIndustrialPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MetalIndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MetalIndustrialPage');
    };
    MetalIndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-metal-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\metal-industrial\metal-industrial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>МЕТАЛЛУРГИЯ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/met.jpg"/>\n    <ion-card-content>\n      Отрасль металлургии представлена такими крупнейшими предприятиями, как <b>АО «РУСАЛ Саяногорский алюминиевый завод»</b> – крупнейший в России производитель алюминиевых сплавов. Центр тестирования и внедрения инновационных технологий РУСАЛа лидер по выпуску сплавов среди российских алюминиевых заводов.\n      <br>\n      <b>ООО «Хакасский алюминиевый завод»</b> - самый современный и технологически совершенный алюминиевый завод в России.\n      <br>\n      Производство алюминия на территории Республики Хакасия достигает более 800 тыс. тонн в год, что составляет около 23% всего объема алюминия, произведенного в России.\n      <br>\n      На территории двух регионов – Красноярского края и Республики Хакасия – производится более половины всего российского алюминия.\n      <b>АО «РУСАЛ САЯНАЛ» </b>- крупнейший российский завод по производству фольги и упаковочных материалов на ее основе.\n      <br>\n      В структуре экспорта региона «алюминий и изделия из него» занимают более 77%.\n      <br>\n      На базе крупных в масштабах России месторождений молибденовых руд действует  <b>ООО «Сорский ферромолибденовый завод»</b>, работающий в тесной связке с <b>ООО «Сорский ГОК»</b>. На долю ООО «СФЗ» приходится около 70% российского ферромолибдена.\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\metal-industrial\metal-industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MetalIndustrialPage);
    return MetalIndustrialPage;
}());

//# sourceMappingURL=metal-industrial.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoalIndustrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoalIndustrialPage = /** @class */ (function () {
    function CoalIndustrialPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CoalIndustrialPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CoalIndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoalIndustrialPage');
    };
    CoalIndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coal-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\coal-industrial\coal-industrial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>УГОЛЬНАЯ ПРОМЫШЛЕННОСТЬ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/coal.jpg"/>\n    <ion-card-content>\n      В Хакасии располагаются четыре крупных месторождения каменного угля: Черногорское, Изыхское, Бейское и Аскизское. Основные запасы угля сосредоточены на территории Бейского месторождения, которое относится к одним из перспективных в России по запасам высококачественных энергетических углей – около 4 млрд тонн.\n      <b>Балансовые запасы каменных углей, учитываемые Государственным балансом запасов полезных ископаемых России, на территории Хакасии составляют 8,7 млрд тонн.</b> По условиям отработки они входят в состав 20% запасов угля России, имеющих благоприятные условия.\n      <br>\n      Доля отрасли в общем объеме промышленного производства Республики Хакасия составляет более 25%.<br>\n      Благодаря высокому качеству хакасских каменных углей значительная часть добытой продукции идет на экспорт.<br>\n      Республика Хакасия входит в пятерку регионов-лидеров по добыче каменного угля (21 млн тонн по итогам 2016 года).\n      <img src="img/coal_din.png"/>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      На территории региона действуют такие крупные угледобывающие компании/холдинги, как АО «СУЭК», ООО «Востсибуголь», АО «Русский уголь», ООО «Разрез Аршановский», ООО «Коулстар», ООО «УК «Разрез Майрыхский».\n      В структуре добычи каменного угля трех регионов Енисейского макрорегиона доля Республики Хакасия составляет 30,9%\n      <img src="img/coal_diag.png"/>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\coal-industrial\coal-industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], CoalIndustrialPage);
    return CoalIndustrialPage;
}());

//# sourceMappingURL=coal-industrial.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodIndustrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodIndustrialPage = /** @class */ (function () {
    function FoodIndustrialPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FoodIndustrialPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FoodIndustrialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodIndustrialPage');
    };
    FoodIndustrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-industrial',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\food-industrial\food-industrial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ПИЩЕВАЯ И ПЕРЕРАБАТЫВАЮЩАЯ ПРОМЫШЛЕННОСТЬ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/food.jpg"/>\n    <ion-card-header text-wrap>\n      В Республике Хакасия пищевая и перерабатывающая промышленность представлена следующими отраслями:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>Молокоперерабатывающая</li>\n        <li>Мясоперерабатывающая</li>\n        <li>Рыбоперерабатывающая</li>\n        <li>Мукомольно-крупяная</li>\n        <li>Хлебопекарная</li>\n        <li>Овощеконсервная</li>\n        <li>Кондитерская</li>\n        <li>Пивоваренная</li>\n        <li>Производство минеральных вод и безалкогольных напитков</li>\n      </ul>\n      Количество всех действующих предприятий пищевой и перерабатывающей промышленности в Республике Хакасия составляет:\n      <br>\n        - по производству пищевых продуктов – 169, численность работающих – 1 363 чел.;\n        - по производству напитков – 28, численность работающих – 812 чел.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      По итогам 2017 года произведено продукции:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>Мука и крупы - 13,2 тыс.т.</li>\n        <li>Хлеб и хлебобулочные - 12,1 тыс.т.</li>\n        <li>Цельномолочная продукция - 33,7 тыс.т.</li>\n        <li>Сыры и масло - 3,3 тыс.т.</li>\n        <li>Мясные изделия - 5,6 тыс.т.</li>\n        <li>Плодоовощные консервы - 1 тыс.т.</li>\n        <li>Кондитерские изделия - 13,5 тыс.т.</li>\n        <li>Рыба продукты рыбные - 1,7 тыс.т.</li>\n        <li>Пиво - 7,5 млн декалитров</li>\n        <li>Вода минеральная и питьевая - 100,45 млн литров.</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      Кроме того, важно отметить, что ряд предприятий имеют экспортный потенциал, продукция которых узнаваема на внешних рынках России.\n      <br>\n      <b>кондитерские изделия:</b>\n      <br>\n      действующие направления – США, Китай, Казахстан, Монголия.\n      прорабатываются – Киргизия, Белоруссия, Таджикистан, Финляндия, Германия;\n      <br>\n      <b>молоко питьевое ультрапастеризованное, молоко сухое цельное, сыры:</b>\n      <br>\n      прорабатываются поставки молочной продукции в Монголию, Китай.\n    </ion-card-content>\n    <img src="img/process_diag.png"/>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\food-industrial\food-industrial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], FoodIndustrialPage);
    return FoodIndustrialPage;
}());

//# sourceMappingURL=food-industrial.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__land_resources_land_resources__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forest_resources_forest_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mineral_resources_mineral_resources__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__water_resources_water_resources__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResourcePage = /** @class */ (function () {
    function ResourcePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ResourcePage.prototype.openLandModal = function () {
        var landModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__land_resources_land_resources__["a" /* LandResourcesPage */]);
        landModal.present();
    };
    ResourcePage.prototype.openForestModal = function () {
        var forestModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__forest_resources_forest_resources__["a" /* ForestResourcesPage */]);
        forestModal.present();
    };
    ResourcePage.prototype.openMineralModal = function () {
        var mineModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__mineral_resources_mineral_resources__["a" /* MineralResourcesPage */]);
        mineModal.present();
    };
    ResourcePage.prototype.openWaterModal = function () {
        var waterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__water_resources_water_resources__["a" /* WaterResourcesPage */]);
        waterModal.present();
    };
    ResourcePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcePage');
    };
    ResourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resource',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\resource\resource.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>РЕСУРСНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round (click)="openLandModal()">ЗЕМЕЛЬНЫЕ РЕСУРСЫ</button>\n  <br>\n  <button ion-button block round (click)="openForestModal()">ЛЕСНЫЕ РЕСУРСЫ</button>\n  <br>\n  <button ion-button block round (click)="openMineralModal()">ПОЛЕЗНЫЕ ИСКОПАЕМЫЕ</button>\n  <br>\n  <button ion-button block round (click)="openWaterModal()">ВОДНО-БИОЛОГИЧЕСКИЕ РЕСУРСЫ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\resource\resource.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ResourcePage);
    return ResourcePage;
}());

//# sourceMappingURL=resource.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandResourcesPage = /** @class */ (function () {
    function LandResourcesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    LandResourcesPage.prototype.closeLandModal = function () {
        this.viewCtrl.dismiss();
    };
    LandResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandResourcesPage');
    };
    LandResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-land-resources',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\land-resources\land-resources.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ЗЕМЕЛЬНЫЕ РЕСУРСЫ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/land.jpg"/>\n    <ion-card-content>\n      В Хакасии представлены почти все типы ландшафтов, встречающиеся на территории России: полупустыни, степи, лесостепи, тайга, высокогорные альпийские луга, высокогорные тундры и ледники.\n      Преобладающий рельеф местности – степи, горы и тайга. Саянские горы, высота которых порой превышает 2 000 м, занимают две трети территории республики.\n      <br>\n      <b>Площадь земельного фонда Республики Хакасия составляет 6 156,9 тыс. га.</b>\n      <br>\n      Несмотря на выраженный индустриальный характер республики и высокую степень хозяйственной освоенности, здесь сохранились непосредственно незатронутые антропогенной деятельностью уголки природной среды, образцы первозданной флоры и фауны. Ключевая роль в этом принадлежит особо охраняемым природным территориям.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n    Особо охраняемые природные территории занимают 903,0 тыс. га, что составляет 14,5% от общей площади Республики Хакасия, из них:\n      <ol>\n        <li>Государственный природный заповедник «Хакасский».</li>\n        <li>Заказники - государственный природный заказник федерального значения «Позарым», государственные природные зоологические заказники республиканского значения - «Июсский», «Боградский», «Кискачинский», «Олений перевал», «Урочище Трехозерки».</li>\n        <li>Памятники природы (сосновые боры) - «Абазинский бор», «Смирновский бор», «Очурский бор», «Бондаревский бор», «Уйтаг». </li>\n        <li>Природный парк «Хакасия».</li>\n      </ol>\n    </ion-card-content>\n    <ion-card-content>\n      <img src="img/land_res_dia.png"/>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeLandModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\land-resources\land-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], LandResourcesPage);
    return LandResourcesPage;
}());

//# sourceMappingURL=land-resources.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForestResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForestResourcesPage = /** @class */ (function () {
    function ForestResourcesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ForestResourcesPage.prototype.closeForestModal = function () {
        this.viewCtrl.dismiss();
    };
    ForestResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForestResourcesPage');
    };
    ForestResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forest-resources',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\forest-resources\forest-resources.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ЛЕСНЫЕ РЕСУРСЫ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/forest.jpg"/>\n    <ion-card-content>\n      <b>Общая площадь лесов Республики Хакасия составляет 4 022,9 тыс. га или 65,3 % общей площади региона.</b>\n      <br>\n      Покрытые лесной растительностью земли представлены ценными хвойными, твердолиственными и мягколиственными насаждениями.\n      <br>\n      Хвойное хозяйство лесного фонда представлено породами: кедр – 850,4 тыс. га (29,8% от покрытых лесной растительностью земель), пихта – 520,9 тыс. га (18,3%), лиственница – 399,5 тыс. га (14,0%), сосна – 220,7 тыс. га (7,7%),\n      ель – 39,3 тыс. га (1,4%).\n      <br>\n      Преобладающая древесная порода в мягколиственном хозяйстве: береза-733,1 тыс. га (25,7 % от покрытых лесной растительностью земель), незначительные площади занимает осина - 77,1 тыс. га (2,7%), ива древовидная -2,2 тыс. га (0,08%), тополь - 1,2 тыс. га (0,04 %), ольха черная – 1,9 тыс. га (0,07%).\n      <br>\n      Твердолиственное хозяйство представляет всего одна древесная порода – вяз мелколистный 0,1 тыс. га (0,004 % от покрытых лесной растительностью земель).\n      Основным видом использования лесов в Республике Хакасия является заготовка древесины.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <b>Общий запас деловой древесины – 441,9 млн м3.</b>\n      <img src="img/forest_res_dia.png"/>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeForestModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\forest-resources\forest-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ForestResourcesPage);
    return ForestResourcesPage;
}());

//# sourceMappingURL=forest-resources.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineralResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MineralResourcesPage = /** @class */ (function () {
    function MineralResourcesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MineralResourcesPage.prototype.closeMineralModal = function () {
        this.viewCtrl.dismiss();
    };
    MineralResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MineralResourcesPage');
    };
    MineralResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mineral-resources',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\mineral-resources\mineral-resources.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ПОЛЕЗНЫЕ ИСКОПАЕМЫЕ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/mineral.jpg"/>\n    <ion-card-content>\n      Хакасия – один из уникальных в природно-ресурсном отношении регионов Российской Федерации.\n      Горнодобывающая промышленность является одной из базовых отраслей экономики региона. В Республике Хакасия выявлен и оценен значительный по разнообразию и объему минерально-сырьевой комплекс, состоящий более чем из 20 видов, общим числом свыше 300 месторождений и перспективных проявлений полезных ископаемых. Разведаны и разрабатываются месторождения угля, железа, молибдена, золота, барита, бентонита, ювелирно-поделочных и облицовочных камней, различных видов строительных материалов, минеральных и пресных подземных вод.\n      Разведаны, но не разрабатываются по различным причинам, месторождения меди, полиметаллов (свинца, цинка), фосфоритов, асбеста, гипса. Значимое место в общих запасах Российской Федерации принадлежит запасам угля, железных руд, молибдена, барита, бентонитов, облицовочных камней, заключенных в недрах Хакасии.\n      <br>\n      <b>В разведанных месторождениях Хакасии сосредоточено (от запасов Российской Федерации): угля – 3,5%, молибдена – 23,6%, железных руд – 1%, золота – 1%, барита – 27%, бентонитовых глин – 6,5%, облицовочных камней – 13%.</b>\n      <br>\n      Запасы железных руд на территории региона сосредоточены в 8 месторождениях магнетитовых руд (Абаканское, Тейское, Абагасское, Ельгентагское, Изыхгольское, Анзасское, Волковское, Самсон) и составляют 592 млн тонн руды по категориям А+В+С1 и 354 млн тонн руды по категории С2. Содержание железа в рудах колеблется от 28% до 44,8%.\n      Запасы молибдена сосредоточены в трех месторождениях: Сорском, Агаскырском, Ипчульском. Месторождения являются крупными по запасам. В рудах Сорского и Агаскырского месторождений в качестве попутных компонентов присутствуют медь, рений и серебро. Медь извлекается в медный концентрат.\n      В промышленном освоении находится Сорское месторождение, из руд которого получают молибденовый и медный концентраты. ООО «Сорский ГОК» добывает около 60% российского молибдена.\n      Запасы природных облицовочных камней сосредоточены в Кибик-Кордонском, Изасском месторождениях мраморов, Каратагском месторождении габбро и Высокогорном месторождении гранитов.\n    </ion-card-content>\n  </ion-card>\n  <img src="img/minbot.png"/>\n  <br>\n  <button ion-button block round outline (click)="closeMineralModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\mineral-resources\mineral-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MineralResourcesPage);
    return MineralResourcesPage;
}());

//# sourceMappingURL=mineral-resources.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaterResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaterResourcesPage = /** @class */ (function () {
    function WaterResourcesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    WaterResourcesPage.prototype.closeWaterModal = function () {
        this.viewCtrl.dismiss();
    };
    WaterResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaterResourcesPage');
    };
    WaterResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-water-resources',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\water-resources\water-resources.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ВОДНО-БИОЛОГИЧЕСКИЕ РЕСУРСЫ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/water.jpg"/>\n    <ion-card-content>\n      Хакасия отличается от других регионов России особым климатом, совершенно своеобразным рельефом, уникальным растительным и животным миром, что придает ей неповторимый колорит.\n      <br>\n      В республике имеются практически все виды водных объектов: горные реки, озера, реки предгорий, водные объекты с равнинным типом режима. <b>Это 6 556 крупных и малых рек, около 130 прудов, более 500 озер, из них около 100 с разной степенью минерализации воды.</b>\n      Некоторые из них являются целебными, имеется радоновый источник. На территории выявлено 24 водоема с минерализацией более 10 г/дм3, которые могут быть использованы для ванн и купаний в лечебных целях. Наиболее минерализованными (до 92 - 149 г/дм3) являются озера: Тус, Алтайское-1, Камышовое. Открыты минеральные источники, которые используются для розлива и лечения.\n      Созданы грязелечебницы.\n      <br>\n      <b>Самые крупные реки Хакасии – Енисей, Абакан, Чулым и Томь. Общая протяженность рек – 8 тыс. км.</b>\n      <br>\n      Республика Хакасия обладает значительной площадью разнообразных водоемов, что определяет высокий потенциал развития рыбохозяйственной отрасли в республике. Природные условия Хакасии позволяют выращивать в водоемах республики форель, горбушу, кету, осетра, стерлядь, сиговых рыб (сиг, пелядь, омуль, ряпушка, чир, нельма), белого амура, толстолобика, карпа, линя, щуку.\n      Вследствие разнообразия рельефа, геологических, климатических и почвенных условий в Хакасии сформировался сложный и пестрый растительный покров. Распределение растительности подчиняется вертикальной поясности. Флористический список насчитывает более 1 500 видов высших сосудистых растений. <b>Около 300 видов растений являются лекарственным и техническим сырьем, около 500 видов используется в народной медицине.</b>\n      <br>\n      Животный мир Хакасии многочисленный и разнообразный, это объясняется многообразием природных условий и положением территории в переходной зоне, где встречаются западные, восточные виды, а также проникают среднеазиатские, тибетские и арктические представители фауны.\n    </ion-card-content>\n  </ion-card>\n  <img src="img/fish.png"/>\n  <button ion-button block round outline (click)="closeWaterModal()">Назад</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\water-resources\water-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], WaterResourcesPage);
    return WaterResourcesPage;
}());

//# sourceMappingURL=water-resources.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgriculturalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-agricultural',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\agricultural\agricultural.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CЕЛЬСКО-ХОЗЯЙСТВЕННЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/agric.jpg"/>\n    <ion-card-content>\n      Наличие земли – как главного средства производства продукции сельского хозяйства способствует развитию Республики Хакасия.\n      <br>\n      <b>Площадь земель сельскохозяйственного назначения  1 311, 7 тыс. га, из них площадь сельскохозяйственных угодий - 1 156, 8 тыс. га, в том числе пашни   492 ,0 тыс. га.</b>\n      <br>\n      Доля обрабатываемой пашни на протяжении последних лет сохраняется на уровне 57% или 296 тыс. га. Размер посевных площадей, занятых зерновыми, зернобобовыми кормовыми сельскохозяйственными культурами (кроме ЛПХ) в 2017 г. составил 226,4 тыс. га.\n      В Республике Хакасия осуществляют деятельность 56 сельскохозяй- ственных организаций, более 1 000 КФХ и 74 тысяч личных подсобных хозяйств.\n      Объем производства сельскохозяйственной продукции в хозяйствах всех категорий в 2017 г. в действующих ценах  составил 16 423,9 млн рублей, или 101,6% к 2016 г., в том числе растениеводство – 5 259,1 млн рублей, животноводство – 11 164,8 млн рублей.\n      Реализация комплекса мер, направленных на поддержку отрасли сельского хозяйства в Хакасии, привела к положительным результатам по производству востребованной сельхозпродукции. Так, производство мяса, молока, картофеля и других овощей на душу населения в среднем за три года (2014–2016) составляет 751 кг, это выше, чем в среднем по Сибирскому федеральному округу – 695 кг.\n      <br>\n      <b>При этом на вклад Республики Хакасия в совокупное среднедушевое производство указанной сельхозпродукции трeх регионов Енисейского макрорегиона приходится до 40%.</b>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <img src="img/agr_fut.png"/>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\agricultural\agricultural.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AgriculturalPage);
    return AgriculturalPage;
}());

//# sourceMappingURL=agricultural.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__railway_transport_railway_transport__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__motor_transport_motor_transport__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__air_transport_air_transport__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransportPage = /** @class */ (function () {
    function TransportPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    TransportPage.prototype.openRailwayModal = function () {
        var forestModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__railway_transport_railway_transport__["a" /* RailwayTransportPage */]);
        forestModal.present();
    };
    TransportPage.prototype.openMineralModal = function () {
        var mineModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__motor_transport_motor_transport__["a" /* MotorTransportPage */]);
        mineModal.present();
    };
    TransportPage.prototype.openWaterModal = function () {
        var waterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__air_transport_air_transport__["a" /* AirTransportPage */]);
        waterModal.present();
    };
    TransportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransportPage');
    };
    TransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transport',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\transport\transport.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ТРАНСПОРТНО-ИНФРАСТРУКТУРНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round (click)="openRailwayModal()">ЖЕЛЕЗНОДОРОЖНАЯ ИНФРАСТРУКТУРА</button>\n  <br>\n  <button ion-button block round (click)="openMineralModal()">АВТОТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</button>\n  <br>\n  <button ion-button block round (click)="openWaterModal()">АВИАТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\transport\transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TransportPage);
    return TransportPage;
}());

//# sourceMappingURL=transport.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RailwayTransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RailwayTransportPage = /** @class */ (function () {
    function RailwayTransportPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RailwayTransportPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RailwayTransportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RailwayTransportPage');
    };
    RailwayTransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-railway-transport',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\railway-transport\railway-transport.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ЖЕЛЕЗНОДОРОЖНАЯ ИНФРАСТРУКТУРА</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/rail.jpg"/>\n    <ion-card-content>\n      Ввиду значительной территориальной удаленности Республики Хакасия от центральных районов Российской Федерации на рынке транспортных услуг одна из ведущих ролей отводится железнодорожному транспорту как в сфере грузовых, так и в сфере пассажирских перевозок. В общем грузообороте предприятий транспорта доля железнодорожного транспорта достигает 99%, в общем пассажирообороте - 45%, в среднем по России эти показатели составляют соответственно около 40% и 30%.\n      <b>Железнодорожным сообщением охвачено 33 населенных пункта, эксплуатируются 43 железнодорожные станции, действуют пять железнодорожных вокзалов в городах Абакан, Абаза, сельских поселениях Шира, Аскиз, Бискамжа.</b>\n      <br>\n      За последние годы построен новый технологический парк на станции Абакан, в 2014 году модернизирована станция Бискамжа, завершено строительство нового разъезда Кирба на участке Абаканского региона Хоных - Ханкуль, где существует дефицит пропускной способности.\n      <br>\n      <b>Общая протяженность железнодорожных путей в Республике Хакасия составляет 666,6 км</b>, из них 288,4 км электрифицировано, оснащено устройствами диспетчерской централизации и автоблокировкой. Густота железных дорог на территории Республики Хакасия составляет 108 км на 1 000 кв. км территории.\n      <br>\n      Территория Республики Хакасия обслуживается Красноярской железной дорогой. Перевозки пассажиров и багажа железнодорожным транспортом в пригородном сообщении осуществляет пассажирская компания ОАО «Краспригород».\n      <br>\n      <b>В рамках реализации концепции развития транспортной инфраструктуры Южного хода Транссибирской магистрали в целях обеспечения роста промышленного производства регионов Енисейского макрорегиона совместно с недропользователями Хакасии, En + group и с ОАО «РЖД» сформирована программа по развитию магистрального и промышленного транспорта с объемом инвестиций в инфраструктуру в период 2018–2023 годов более 28 млрд рублей.</b>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\railway-transport\railway-transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], RailwayTransportPage);
    return RailwayTransportPage;
}());

//# sourceMappingURL=railway-transport.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorTransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorTransportPage = /** @class */ (function () {
    function MotorTransportPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MotorTransportPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MotorTransportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MotorTransportPage');
    };
    MotorTransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-motor-transport',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\motor-transport\motor-transport.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>АВТОТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/motor.jpg"/>\n    <ion-card-content>\n      Протяженность автомобильных дорог общего пользования, расположенных на территории Республики Хакасия,  составляет 7 468,57 км, в том числе:\n      <ul>\n        <li>федеральная автомобильная дорога Р-257«Енисей» от Красноярска через Абакан, Кызыл до государственной границы с Монголией - 171,5 км. Автодорога имеет большое народно - хозяйственное значение. Она связывает населенные пункты: г. Красноярск, г.Абакан, г.Минусинск, г. Туран, г. Кызыл;</li>\n        <li>региональные и межмуниципальные автомобильные дороги Республики Хакасия – 2 641,77 км, в том числе с асфальтобетонным покрытием – 1 571,33 км, с гравийным – 941,28 км, с грунтовым – 131 км;</li>\n        <li>региональная автомобильная дорога Абакан –  Ак-Довурак, участок км 182 - км 320 + 900, находящийся на балансе Управления автомобильных дорог «Тываавтодор», - 138,9 км;</li>\n        <li>автомобильные дороги общего пользования местного значения муниципальных районов, городских округов и поселений Республики Хакасия – 4 516,4, из них:</li>\n        <li>автомобильные дороги общего пользования местного значения городских округов Республики Хакасия – 918,1 км;</li>\n        <li>муниципальных районов и поселений Республики Хакасия –3 598,3 км.</li>\n        <li>Плотность автомобильных дорог на 1 тыс. кв. км территории Республики составляет 40.1 км, из них дорог с твердым покрытием – 37,82 км.</li>\n        <li>Наиболее важными из дорог территориального значения являются автодороги:</li>\n        <li>Ачинск – Ужур – Шира - Троицкое – III технической категории, покрытие - &nbsp;асфальтобетонное.</li>\n        <li>Абакан - Ак-Довурак-, III технической категории, покрытие - &nbsp;асфальтобетонное. Вышеуказанные дороги обеспечивают связь районных центров между собой и с городами.</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      Пассажирские перевозки автомобильным транспортом являются самым массовым и доступным видом транспорта. В Республике Хакасия организовано 58 межмуниципальных междугородных маршрутов, 24 пригородных и 36 межрегиональных автобусных маршрутов. Межсубъектные маршруты связывают Республику Хакасия с Красноярским краем, Новосибирской, Томской, Кемеровской областями и Республикой Тыва.\n      <br>\n      <b>В целях дальнейшего развития дорожной инфраструктуры в республике реализуется проект «Строительство транспортного коридора «Абакан –Бийск», позволяющий увеличить интенсивность дорожного движения до 4 000 автомобилей в сутки.</b>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\motor-transport\motor-transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MotorTransportPage);
    return MotorTransportPage;
}());

//# sourceMappingURL=motor-transport.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirTransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AirTransportPage = /** @class */ (function () {
    function AirTransportPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AirTransportPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AirTransportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AirTransportPage');
    };
    AirTransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-air-transport',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\air-transport\air-transport.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>АВИАТРАНСПОРТНАЯ ИНФРАСТРУКТУРА</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/air.jpg"/>\n    <ion-card-content>\n      Важнейшим элементом авиатранспортной инфраструктуры Республики Хакасия является круглосуточный гражданский международный аэропорт федерального значения в городе Абакане – Аэропорт Абакан, обслуживающий население Республики Хакасия, южных районов Красноярского края и Республики Тыва. Аэропорт является запасным аэропортом для г. Новосибирска и г. Красноярска. В зоне обслуживания аэропорта проживает около 1 млн человек.\n      <br>\n      <b>Аэропорт Абакан расположен в 4,5 км северо-западнее центра города Абакан. Аэродром предназначен для выполнения рейсовых, международных, тренировочных, контрольно-испытательных полетов, авиационных работ. Имеет взлетно-посадочную полосу с искусственным покрытием размером - 3250x45м.</b>\n      Эффективная работа аэропорта Абакан как главных транспортных ворот Хакасии и дальнейшее его совершен- ствование являются крайне важным для развития экономики региона, в том числе и для развития туристического потенциала Хакасии.\n      <br>\n      <b>Пропускная способность здания аэровокзала 400 чел./час – это приблизительно 3,5 млн человек в год.</b>\n      По итогам 2017 года международным аэропортом Абакан было обслужено 188 786 человек. Увеличился пассажиропоток внутренних (прирост 0,7%) и международных линий (прирост 37,9%).\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      Ключевыми предпосылками к развитию объектов авиатранспортной инфраструктуры в Республике Хакасия являются:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>Выгодное географическое положение аэропорта Абакан для осуществления грузовых авиаперевозок из Юго-Восточной Азии и Дальнего Востока в Россию и Европу.</li>\n        <li>Благоприятные климатические условия для работы гражданской авиации.</li>\n        <li>Аэропорт Абакан является основным аэропортом, обслуживающим население Республики Хакасия, южных районов Красноярского края и Республики Тыва.</li>\n        <li>Транспортные связи аэропорта с зоной обслуживания обеспечиваются железнодорожным и автомобильным транспортом.</li>\n        <li>Более 50 эксплуатантов и предприятий гражданской авиации имеют договорные отношения с ОАО «Аэропорт Абакан» на аэропортовое и наземное обслуживание воздушных судов.</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\air-transport\air-transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], AirTransportPage);
    return AirTransportPage;
}());

//# sourceMappingURL=air-transport.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_tourist_history_tourist__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recreate_tourist_recreate_tourist__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TouristPage = /** @class */ (function () {
    function TouristPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    TouristPage.prototype.openHistoryModal = function () {
        var landModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__history_tourist_history_tourist__["a" /* HistoryTouristPage */]);
        landModal.present();
    };
    TouristPage.prototype.openRecreateModal = function () {
        var landModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__recreate_tourist_recreate_tourist__["a" /* RecreateTouristPage */]);
        landModal.present();
    };
    TouristPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TouristPage');
    };
    TouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tourist',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\tourist\tourist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ЭТНОКУЛЬТУРНЫЙ И ТУРИСТИЧЕСКИЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <br>\n  <button ion-button block round (click)="openHistoryModal()">ИСТОРИКО-КУЛЬТУРНОЕ НАСЛЕДИЕ</button>\n  <br>\n  <button ion-button block round (click)="openRecreateModal()">ТУРИСТСКО-РЕКРЕАЦИОННЫЙ ПОТЕНЦИАЛ</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\tourist\tourist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TouristPage);
    return TouristPage;
}());

//# sourceMappingURL=tourist.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryTouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTouristPage = /** @class */ (function () {
    function HistoryTouristPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    HistoryTouristPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    HistoryTouristPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryTouristPage');
    };
    HistoryTouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history-tourist',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\history-tourist\history-tourist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ИСТОРИКО-КУЛЬТУРНОЕ НАСЛЕДИЕ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/history.jpg"/>\n    <ion-card-header>\n      Хакасия – Мекка археологии!\n    </ion-card-header>\n    <ion-card-content>\n      Хакасия многонациональная республика.  Коренной народ – хакасы. Хакасия – крупнейший в Сибири «фонд» археологических комплексов под открытым небом <b>(более тридцати тысяч визуально воспринимаемых объектов культурного наследия)</b>. Это наскальные рисунки, руины древних городов, оборонительные укрепления, горные плавильни и святилища, тысячи древних могильников и захоронений. Основную их часть составляют памятники археологии.\n      <br>\n      В Хакасии насчитывается <b>более 100 памятников природы.</b> В районах республики выделяются около 30 основных памятников природы: пещерные комплексы, пещеры, скалы, горы, боры, озера. Уникально высоки концентрация и многообразие памятников археологии.\n      <br>\n      Многие из них уникальны и не имеют аналогов в мире. Хакасия – один из немногочисленных регионов на Земле, территория которого практически полностью состоит из культурных ландшафтов. Сохранение культурно - исторического наследия, его рациональное использование имеют определяющее значение для устойчивого развития нашего региона.\n      <br>\n      На территории республики расположено <b>18 музеев, 3 театра, 3 выставочных комплекса</b> и другие учреждения культуры.\n      <br>\n      Республика имеет уникальный опыт реализации программы по музеефикации памятников археологии и создания целой сети музеев под открытым небом. Сегодня республика – признанный лидер по их количеству в Российской Федерации. Некоторые из них: заповедник «Хакасский», музей-заповедник «Казановка», Анхаковский муниципальный музей под открытым небом «Улуг Хуртуях тас», музей наскального искусства «Полтаковский стеларий», муниципальный музей под открытым небом «Малоарбатский писанец», музей под открытым небом «Усть-Сос», музей-заповедник «Сундуки», музей-заповедник «Сулеки», Ширинский археологический парк, музей под открытым небом «Бояры», муниципальный музей «Древние курганы Салбыкской степи».\n      </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      Свою национальную культуру жители Хакасии сохраняют бережно и трепетно. С лучшими проявлениями особенностей республики можно познакомиться на праздниках, которые приурочены к различным периодам деятельности человека на земле.\n      <br>\n      <b>Хакасский новый год (Чыл Пазы)</b>, отмечается в день весеннего равноденствия, 22 марта.<br>\n      <b>Тун Пайрам – праздник первого айрана</b> (кисломолочный напиток). Самый любимый республиканский праздник, собирающий до 50 тысяч человек. Время проведения праздника (конец июня — начало июля) ознаменуется переходом домашнего скота на летние пастбища, появлением новых молочных продуктов.<br>\n      <b>«Алтын Ас» (золотое зерно)</b> посвящен важнейшему национальному продукту - Талгану. Талган - традиционная еда коренных народов Сибири.<br>\n      Историко-культурный туризм играет важную роль в формировании и развитии туристических городов и поселений.<br>\n      Места сохранения памятников истории и культуры формируют туристические районы, узловыми, фокусными точками которых являются туристические города и поселения. Поэтому именно они служат конечными целевыми местами туристов как всей Республики Хакасия, так и соседних Сибирских регионов.\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\history-tourist\history-tourist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], HistoryTouristPage);
    return HistoryTouristPage;
}());

//# sourceMappingURL=history-tourist.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecreateTouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecreateTouristPage = /** @class */ (function () {
    function RecreateTouristPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RecreateTouristPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RecreateTouristPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecreateTouristPage');
    };
    RecreateTouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recreate-tourist',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\recreate-tourist\recreate-tourist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ТУРИСТСКО-РЕКРЕАЦИОННЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/history.jpg"/>\n    <ion-card-header>\n      Хакасия – Мекка археологии!\n    </ion-card-header>\n    <ion-card-content>\n      Республика Хакасия – потрясающий по красоте край гор, степей, рек, озер и долин. Хакасия имеет удивительную, уходящую в толщи веков историю и богата необычайно красивой природой и относительно мягким климатом.\n      <br>\n      «Сибирская Италия» или даже «Сибирская Швейцария» - такие эпитеты можно услышать в адрес региона Хакасии.\n      Общий объем туристского потока при действующей инфраструктуре  оценивается <b>до миллиона человек в год.</b>\n      <br>\n      Количество туристских предприятий, осуществляющих свою деятельность на территории республики с 2009 года увеличилось на 143,5% (2009 год – 23 единицы, 2017 год – 56 единиц).<br>\n      В республике действуют 4 гостиницы, прошедшие процедуру классификации («Чалпан», «Анзас», «Саяногорск» – 3 «звезды», «Бизнес-отель «Азия» – 4 «звезды», корпус ОАО «Курорт «Озеро Шира» – 2 «звезды»).<br>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      Наличие в Хакасии разнообразных туристско-рекреационных ресурсов позволяет развивать многие виды туризма:\n    </ion-card-header>\n    <ion-card-content>\n    <b>Экологический туризм.</b><br>\n    На юге республики (Таштыпский район, г. Абаза)  располагается несколько особо охраняемых природных территорий, созданы и развиваются экопоселения, демонстрирующие экологичный подход к жизни и хозяйствованию, ведется строительство визит-центра «Позарым».<br>\n    <b>Активно-спортивные формы отдыха</b>, в том числе, создание тренировочной базы для спортсменов-профессионалов. В Хакасии несколько туристско-рекреационных зон, где развивается активный туризм: Горнолыжный курорт «Гладенькая», «Ивановские озера», региональный центр спортивной подготовки по лыжным гонкам в п. Вершина Теи (круглогодичный многофункциональный спортивный комплекс), центр развития зимних видов спорта «Черемуховый Лог».\n    Значительным туристским потенциалом обладает туристско-рекреационная зона «Поднебесье» с центром в с. Балыкса. Уникальность «Поднебесья» заключается в сочетании ландшафтов и погодных условий, характерных для разных времен года.<br>\n    <b>Культурно-познавательный туризм.</b><br>\n    Богатая история, самобытная культура, национальные традиции, благоприятные природно-климатические условия, религиозные культы, археологические памятники представляют уникальную основу для развития культурно-познавательного туризма.<br>\n    <b>Гастрономический туризм.</b><br>\n    Одна из важных составляющих для развития туризма – развитие региональных гастрономических брендов. Планируется организация республиканского фестиваля «Гастрономический атлас Хакасии», проведение которого поспособствует развитию данного вида туризма в регионе, продвижению национальных гастрономических брендов, привлечению туристов и поддержке местных производителей пищевой продукции.<br>\n    <b>Детский туризм.</b><br>\n    Особенно популярны экскурсионно-познавательные маршруты и спелеопоходы для детей.\n    <b>Этнический туризм.</b><br>\n    Основан на возрастающем интересе к аутентичной жизни хакасского народа. Знакомство с народными обычаями и ремеслами, бытом и традициями, историей и творчеством коренного населения.\n    <b>Туры выходного дня.</b><br>\n    Великолепный вид отдыха, позволяющий в кратчайшие сроки и «без отрыва от производства» получить новые впечатления и обрести заряд бодрости.\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block round outline (click)="closeModal()">Назад</button>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\recreate-tourist\recreate-tourist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], RecreateTouristPage);
    return RecreateTouristPage;
}());

//# sourceMappingURL=recreate-tourist.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-educational',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\educational\educational.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>НАУЧНО-ОБРАЗОВАТЕЛЬНЫЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/edu.jpg"/>\n    <ion-card-content>\n      В Республике Хакасия имеется научная база, представленная организациями высшего образования и научно-исследовательскими учреждениями. К образовательным организациям высшего образования, активно участвующим в научной деятельности, относятся ФГБОУ ВПО «Хакасский государственный университет им. Н.Ф. Катанова» и Хакасский технический институт – филиал ФГАОУ ВПО «Сибирский федеральный университет».».\n      Научные результаты, полученные учеными Республики Хакасия, имеют выраженный прикладной характер и могут быть немедленно применены в отраслях производства.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      Ключевые проекты научных разработок Хакасского государственного университета им. Н.Ф. Катанова:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>\n          Технология пылеподавления в угольном производстве с применением специальных реагентов. Сфера применения: производственные процессы, сопровождающиеся поступлением в атмосферу угольной пыли (добыча, транспортировка, хранение, обогащение каменного угля) Назначение: пылеподавление от неорганизованных источников угольной пыли на угольных разрезах;\n        </li>\n        Абсорбенты для поглощения химических загрязнителей воды на основе химически модифицированных природных глин. Сфера применения: предприятия, деятельность которых связана с интенсивным природопользованием, население. Назначение: очистка воды от химических примесей.\n        <li>\n        Оценка воздействия проектируемых промышленных предприятий и объектов на биоразнообразие и разработка компенсационных мероприятий. Сфера применения: рациональное природопользование, проектирование промышленных предприятий и объектов топливной, энергетической и транспортной инфраструктуры. Назначение: подготовка материалов для раздела ОВОС на этапе разработки проектной документации предприятий (оценка фонового состояния почвы и биоты, прогнозирование воздействия на биоразнообразие, разработка программы экологического мониторинга, разработка компенсационных мероприятий и т.д.).\n        </li>\n        <li>\n        Интеллектуальные системы многоаспектного анализа больших данных на основе нейросетевых технологий. Сфера применения: энергетика, солнечные и гидроэлектростанции. Назначение: повышение эффективности работы технически сложного объекта (контроль и оптимизация режима работы, обеспечение наиболее эффективного режима).\n        </li>\n        <li>\n        Детектор загрязнения окружающего воздуха. Сфера применения (назначение): оперативное обнаружение и оповещение при превышении критических показателей загрязнения воздуха (пропан, бутан, угарный газ, пылевое загрязнение).\n        </li>\n        <li>\n        Инновационные способы лечения гнойно-воспалительных заболеваний у сельскохозяйственных животных и устройства для выполнения хирургических операций. Сфера применения: сельское хозяйство, ветеринарная хирургия.\n        </li>\n        <li>\n        Инновационные способы лимфатической терапии при воспалительных патологиях различных организменных систем у домашних и сельскохозяйственных животных. Сфера применения: сельское хозяйство, ветеринарная терапия.\n        </li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      Ключевые проекты научных разработок Хакасского технического института - филиала ФГАОУ ВПО «Сибирский федеральный университет»\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>\n          Совершенствование регламента работ по техническому обслуживанию и ремонту технологического транспорта при проведении открытых горных разработок. Сфера применения (назначение): Предложенные мероприятия могут использоваться при совершенствовании организации и технологии проведения технического обслуживания и профилактического ремонта большегрузных автомобилей.\n        </li>\n        <li>\n          Высокопрочные бетоны (В100) для монолитного домостроения с применением микрокремнезема и  экономией цемента до 50%. Сфера применения (назначение): Разработанный материал может применяться: для конструкции заводского изготовления или для монолитного многоэтажного домостроения.\n        </li>\n        <li>\n          Технология производства легких ограждающих конструкций с энергоэффективным  полистиролцементным материалом. Сфера применения (назначение): Разработанный материал может применяться: для промышленных, гражданских, жилых зданий в виде утеплителя и конструкционного материала.\n        </li>\n        <li>\n          Повышение энергоэффективности ограждающих конструкций с применением программных комплексов Elcut и Temper-3D. Сфера применения (назначение): Разработка энергоэффективных проектных решений ограждающих конструкций с высокой достоверностью в программном комплексе Elcut. Промышленные и гражданские здания и сооружения.\n        </li>\n        <li>\n          Прогноз поведения грунтов и подземных объектов при подъеме уровня грунтовых вод на этапах жизненного цикла здании и подземных сооружений.  Сфера применения (назначение): Инженерная гидрогеологические, строительство. Знания динамики колебания грунтовых вод необходимы для проектирования и строительства подземных объектов в Абакане. Освоение подземного пространства повысит стоимость объекта недвижимости.\n        </li>\n        <li>\n          Разработка теплозащитных мероприятий на этапах жизненного цикла зданий. Сфера применения (назначение): Научная разработка может быть использована в процессе выполнения проектной документации на объекты строительства с целью повышения уровня энергоэффективности зданий.\n        </li>\n        <li>\n          Дендроэкологические иссследования в криминалистике. Сфера применения (назначение):  Установка реального возраста исторических объектов (деревянных построек, памятников истории и архитектуры с использованием древесно-кольцевых хронологий.\n        </li>\n        <li>\n          Прогнозирование надежности электроснабжения в период геомагнитных бурь. Сфера применения (назначение):  Все энергетические предприятия. Разработка обучение и испытание нечеткого контроллера для прогнозирования аварийных ситуаций в электроэнергетической системе  на основании прогноза магнитных бурь.\n      </ul>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\educational\educational.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EducationalPage);
    return EducationalPage;
}());

//# sourceMappingURL=educational.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-human',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\human\human.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ЧЕЛОВЕЧЕСКИЙ ПОТЕНЦИАЛ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <img src="img/human.jpg"/>\n    <ion-card-content>\n      Население Республики Хакасия составляет 537 404 человека, из них численность трудовых ресурсов – 310 857 человек, в том числе численность занятых в экономике – 221 990 человек, численность обучающихся в трудоспособном возрасте с отрывом от производства – 19 691 человек.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header text-wrap>\n      <b>Структура занятого в экономике трудоспособного населения выглядит следующим образом:</b>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="img/hum_diag.png"/>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\human\human.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HumanPage);
    return HumanPage;
}());

//# sourceMappingURL=human.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\khks-app\khks-app\src\pages\contacts\contacts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> \n    <ion-title>НАШИ КОНТАКТЫ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: transparent; background-image: url(\'img/bg2.jpg\'); background-position: center; background-size: cover; background-repeat: no-repeat;">\n  <ion-card>\n    <ion-card-content style="text-align: center;">\n      Министерство экономического развития Республики Хакасия<br>\n      655017, Республика Хакасия, г. Абакан, пр-т Ленина, 43, строение 1<br>\n      приемная тел.: 8 (3902) 248-200; e-mail: <a href="mailto:mineconom@r-19.ru" target="_top">mineconom@r-19.ru</a><br>\n      <br>\n      <br>\n      <br>\n      Фонд Развития Республики Хакасия<br>\n      655017, г. Абакан, ул. Кирова, 81<br>\n      тел.: 8 (3902) 397-168; e-mail: <a href="mailto:fondrh@mail.ru" target="_top">fondrh@mail.ru</a><br>\n      <br>\n      <br>\n      <a href="https://vk.com/fondrazvitiuarh">МЫ В КОНТАКТЕ</a>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\khks-app\khks-app\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_human_human__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_land_resources_land_resources__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forest_resources_forest_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mineral_resources_mineral_resources__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_water_resources_water_resources__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_energ_industrial_energ_industrial__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_metal_industrial_metal_industrial__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_coal_industrial_coal_industrial__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_food_industrial_food_industrial__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_railway_transport_railway_transport__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_motor_transport_motor_transport__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_air_transport_air_transport__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_history_tourist_history_tourist__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_recreate_tourist_recreate_tourist__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contacts_contacts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(192);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_land_resources_land_resources__["a" /* LandResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forest_resources_forest_resources__["a" /* ForestResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mineral_resources_mineral_resources__["a" /* MineralResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_water_resources_water_resources__["a" /* WaterResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_energ_industrial_energ_industrial__["a" /* EnergIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_metal_industrial_metal_industrial__["a" /* MetalIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_coal_industrial_coal_industrial__["a" /* CoalIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_industrial_food_industrial__["a" /* FoodIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_railway_transport_railway_transport__["a" /* RailwayTransportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_motor_transport_motor_transport__["a" /* MotorTransportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_air_transport_air_transport__["a" /* AirTransportPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_history_tourist_history_tourist__["a" /* HistoryTouristPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_recreate_tourist_recreate_tourist__["a" /* RecreateTouristPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contacts_contacts__["a" /* ContactsPage */]
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
                __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_land_resources_land_resources__["a" /* LandResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forest_resources_forest_resources__["a" /* ForestResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mineral_resources_mineral_resources__["a" /* MineralResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_water_resources_water_resources__["a" /* WaterResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_energ_industrial_energ_industrial__["a" /* EnergIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_metal_industrial_metal_industrial__["a" /* MetalIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_coal_industrial_coal_industrial__["a" /* CoalIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_industrial_food_industrial__["a" /* FoodIndustrialPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_railway_transport_railway_transport__["a" /* RailwayTransportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_motor_transport_motor_transport__["a" /* MotorTransportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_air_transport_air_transport__["a" /* AirTransportPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_history_tourist_history_tourist__["a" /* HistoryTouristPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_recreate_tourist_recreate_tourist__["a" /* RecreateTouristPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contacts_contacts__["a" /* ContactsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_industrial_industrial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_resource_resource__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agricultural_agricultural__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transport_transport__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tourist_tourist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_educational_educational__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_human_human__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contacts_contacts__ = __webpack_require__(214);
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
            { title: 'ЧЕЛОВЕЧЕСКИЙ ПОТЕНЦИАЛ', component: __WEBPACK_IMPORTED_MODULE_11__pages_human_human__["a" /* HumanPage */] },
            { title: 'НАШИ КОНТАКТЫ', component: __WEBPACK_IMPORTED_MODULE_12__pages_contacts_contacts__["a" /* ContactsPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\khks-app\khks-app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" text-wrap>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\khks-app\khks-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map