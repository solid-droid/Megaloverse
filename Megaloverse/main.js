(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Ta8":
/*!**************************************************!*\
  !*** ./src/app/screens/event/event.component.ts ***!
  \**************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EventComponent {
    constructor() { }
    ngOnInit() {
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], decls: 2, vars: 0, template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Files\Project\Dolby-hackathon\Megaloverse\src\main.ts */"zUnb");


/***/ }),

/***/ "4pTk":
/*!****************************************************!*\
  !*** ./src/app/screens/sticky/sticky.component.ts ***!
  \****************************************************/
/*! exports provided: StickyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyComponent", function() { return StickyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StickyComponent {
    constructor() { }
    ngOnInit() {
    }
}
StickyComponent.ɵfac = function StickyComponent_Factory(t) { return new (t || StickyComponent)(); };
StickyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickyComponent, selectors: [["app-sticky"]], decls: 2, vars: 0, template: function StickyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sticky works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc3RpY2t5L3N0aWNreS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticky',
                templateUrl: './sticky.component.html',
                styleUrls: ['./sticky.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "EQNs":
/*!**********************************************!*\
  !*** ./src/app/services/get-data.service.ts ***!
  \**********************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class GetDataService {
    constructor(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.userList = [];
        this.masterList = {};
        this.localUser = null;
        this.userLock = false;
        this.mic = false;
        this.cam = true;
        this.content = {
            images: [],
            iframes: [],
            label: [],
            space: [],
        };
        this.Observable_userList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.getuserList = this.Observable_userList.asObservable();
    }
    getMap(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const maps = yield (yield fetch('https://naughty-poitras-5d647a.netlify.app/.netlify/functions/api')).json();
            let _content = {
                images: [],
                iframes: [],
                label: [],
                space: [],
            };
            if (key == '/') {
                this.router.navigate([Object.keys(maps)[0]]);
            }
            else {
                _content = maps[key.split('/')[1]];
                if (!_content) {
                    alert('No map found');
                    this.router.navigate([Object.keys(maps)[0]]);
                }
            }
            _content.images.forEach(x => {
                x.url = this.getSafeUrl(x.url);
            });
            _content.iframes.forEach(x => {
                x.url = this.getSafeUrl(x.url);
            });
            _content.space.forEach(x => {
                x.code = this.getSafeUrl(x.code);
                x.demo = this.getSafeUrl(x.demo);
                x.team = this.getSafeUrl(x.team);
            });
            this.content = _content;
        });
    }
    getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    initDolbyIO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(r => setTimeout(r, 500));
            let name = prompt("Please enter your user-name or create a new one.");
            if (name) {
                this.localUser = name;
                const consumerKey = '4f872ZvovhxGINUicNcqNg==';
                const consumerSecret = 'K9QoiiENFkjVg8Pc6VmWAUuQjk8YyPnXxfRD9KL1lbw=';
                VoxeetSDK.initialize(consumerKey, consumerSecret);
                yield VoxeetSDK.session.open({ name });
                this.initCallbacks();
                this.joinGeneralRoom();
            }
        });
    }
    setLocalCords(x, y) {
        this.masterList[this.localUserObj.id].x = x;
        this.masterList[this.localUserObj.id].y = y;
    }
    initCallbacks() {
        VoxeetSDK.conference.on('streamAdded', (participant, stream) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (stream.getVideoTracks().length) {
                if (!this.localUserObj) {
                    this.localUserObj = { name: participant.info.name, stream, id: participant.id, talking: false };
                    this.masterList[participant.id] =
                        {
                            name: participant.info.name,
                            stream,
                            id: participant.id,
                            talking: false,
                            mic: false,
                            cam: true,
                            x: '500px',
                            y: '500px',
                            local: true
                        };
                }
                const videoNode = document.getElementById(`userBox_local`);
                attachStream(videoNode, stream);
                yield new Promise(r => setTimeout(r, 500));
                this.sendMessage(JSON.stringify({ type: 'join' }));
            }
        }));
        VoxeetSDK.conference.on('streamUpdated', (participant, stream) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.masterList[participant.id]) {
                this.masterList[participant.id].stream = stream;
                this.masterList[participant.id].cam = true;
            }
            else {
                this.masterList[participant.id] =
                    {
                        name: participant.info.name,
                        stream,
                        id: participant.id,
                        talking: false,
                        mic: false,
                        cam: true,
                        x: '500px',
                        y: '500px'
                    };
            }
            if (participant.id !== this.localUserObj.id) {
                this.userList = Object.values(this.masterList).filter((x) => x.id !== this.localUserObj.id);
                yield new Promise(r => setTimeout(r, 500));
                console.log('attaching');
                const videoNode = document.getElementById(`userBox_${participant.id}`);
                attachStream(videoNode, stream);
            }
        }));
        VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
            this.masterList[participant.id].cam = false;
            this.userList = Object.values(this.masterList).filter((x) => x.id !== this.localUserObj.id);
        });
        const messageCallBack = {
            move: (id, message) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                while (!this.masterList[id]) {
                    yield new Promise(r => setTimeout(r, 100));
                }
                this.masterList[id].x = message.x;
                this.masterList[id].y = message.y;
                this.userList = Object.values(this.masterList);
                this.updateAudioStreams();
            }),
            join: (id, message) => {
                this.sendMessage(JSON.stringify({
                    type: 'move',
                    x: this.masterList[this.localUserObj.id].x,
                    y: this.masterList[this.localUserObj.id].y,
                }));
            },
            camON: (id, message) => {
                this.masterList[id].cam = true;
                this.userList = Object.values(this.masterList).filter((x) => x.id !== this.localUserObj.id);
            }
        };
        VoxeetSDK.command.on('received', (participant, message) => {
            const id = participant.id;
            const _message = JSON.parse(message);
            messageCallBack[_message.type](id, _message);
        });
    }
    joinGeneralRoom(roomName = 'general1jjj') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            VoxeetSDK.conference.create({ alias: roomName, params: { dolbyVoice: true } })
                .then((conference) => VoxeetSDK.conference.join(conference, { constraints: { audio: false, video: true } }))
                .then(() => {
                this.checkTalking();
            })
                .catch((e) => console.log('Something wrong happened : ' + e));
        });
    }
    checkTalking() {
        setInterval(() => {
            let participants = VoxeetSDK.conference.participants;
            for (let participant of participants) {
                VoxeetSDK.conference.isSpeaking(VoxeetSDK.conference.participants.get(participant[0]), isSpeaking => {
                    const entry = this.userList.find(x => x.id === participant[0]);
                    if (entry) {
                        this.userList.find(x => x.id === participant[0]).talking = isSpeaking;
                        this.masterList[participant[0]].talking = isSpeaking;
                    }
                    else {
                        this.userList = this.userList.filter(x => x.id !== participant[0]);
                    }
                });
            }
        }, 500);
    }
    updateAudioStreams() {
        const localX = this.masterList[this.localUserObj.id].x;
        const localY = this.masterList[this.localUserObj.id].y;
        const getFloat = (x) => parseFloat(x.split('px')[0]);
        Object.values(this.masterList).forEach((value) => {
            if (value.id !== this.localUserObj.id) {
                if (Math.abs(getFloat(localX) - getFloat(value.x)) > 400 && Math.abs(getFloat(localY) - getFloat(value.y)) > 400) {
                    VoxeetSDK.conference.stopAudio(this.getParticipant(value.id));
                }
                else {
                    VoxeetSDK.conference.startAudio(this.getParticipant(value.id));
                }
            }
        });
    }
    getParticipant(id) {
        let participants = VoxeetSDK.conference.participants;
        for (let participant of participants) {
            if (participant[0] === id) {
                return participant[1];
            }
        }
    }
    turnOnMic() {
        VoxeetSDK.conference.startAudio(VoxeetSDK.session.participant);
    }
    turnOffMic() {
        VoxeetSDK.conference.stopAudio(VoxeetSDK.session.participant);
    }
    turnOnCam() {
        VoxeetSDK.conference.startVideo(VoxeetSDK.session.participant);
    }
    turnOffCam() {
        VoxeetSDK.conference.stopVideo(VoxeetSDK.session.participant);
    }
    sendMessage(message) {
        VoxeetSDK.command.send(message);
    }
}
GetDataService.ɵfac = function GetDataService_Factory(t) { return new (t || GetDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
GetDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetDataService, factory: GetDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Im9/":
/*!**********************************************!*\
  !*** ./src/app/screens/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/get-data.service */ "EQNs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MapComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.text);
} }
function MapComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function MapComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function MapComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.team, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function MapComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapComponent_div_4_div_3_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapComponent_div_4_div_4_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_div_4_div_5_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.showDemo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.showCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.showTeam);
} }
function MapComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r14.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
const _c0 = function (a0, a1) { return { top: a0, left: a1 }; };
const _c1 = function (a0) { return { opacity: a0 }; };
function MapComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "video", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, user_r15.y, user_r15.x));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "userBox_", user_r15.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, user_r15.cam ? 1 : 0))("muted", "muted");
} }
const _c2 = function (a0) { return { "background-color": a0 }; };
class MapComponent {
    constructor(getData, router) {
        this.getData = getData;
        this.router = router;
        this.panDetected = false;
    }
    ngOnInit() {
        this.getData.getMap(this.router.url);
        const container = document.querySelector('#mapContent');
        panzoom(container, {
            maxZoom: 1,
            minZoom: 0.1,
            zoomDoubleClickSpeed: 1,
            initialX: 0,
            initialY: 0,
            initialZoom: 0.5,
        }).on('panstart', e => {
            // this.panDetected = true;
        });
        $("#localUser").css({ left: `${500}px`, top: `${500}px` });
        $('.mapContainer').on('click touchend', (e) => {
            if (!this.panDetected && !this.getData.userLock) {
                const pointerX = e.type === 'click' ? e.clientX : e.originalEvent.changedTouches[0].clientX;
                const pointerY = e.type === 'click' ? e.clientY : e.originalEvent.changedTouches[0].clientY;
                const tranformData = $('#mapContent').css('transform').split(',');
                const x = parseFloat(tranformData[4]);
                const y = parseFloat(tranformData[5].split(')')[0]);
                const z = parseFloat(tranformData[0].split('(')[1]);
                const zInv = 1 / z;
                const cords = [-x * zInv, -y * zInv];
                const finalCords = [
                    cords[0] + (pointerX - 20) * zInv,
                    cords[1] + (pointerY - 20) * zInv
                ];
                $("#localUser").css({ left: `${finalCords[0]}px`, top: `${finalCords[1]}px` });
                this.getData.setLocalCords(finalCords[0] + 'px', finalCords[1] + 'px');
                this.getData.sendMessage(JSON.stringify({
                    type: 'move',
                    x: finalCords[0] + 'px',
                    y: finalCords[1] + 'px'
                }));
                this.getData.updateAudioStreams();
            }
            this.panDetected = false;
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 14, vars: 13, consts: [[1, "mapContainer"], ["id", "mapContent"], ["class", "imageWidget", 4, "ngFor", "ngForOf"], ["class", "labelWidget", 4, "ngFor", "ngForOf"], ["class", "spaceWidget", 4, "ngFor", "ngForOf"], ["class", "iframeWidget", 4, "ngFor", "ngForOf"], ["class", "userContainer", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "localUser", 1, "userContainer"], [1, "userBoxEffect", 3, "ngStyle"], [1, "fas", "fa-user-ninja", "NoPic"], [1, "UserName"], [1, "userBox"], ["width", "100%", "height", "100%", "id", "userBox_local", "autoplay", "", 3, "ngStyle", "muted"], [1, "imageWidget"], [3, "src", "alt"], [1, "labelWidget"], [1, "spaceWidget"], [4, "ngIf"], [3, "src"], [1, "iframeWidget"], [1, "userContainer", 3, "ngStyle"], [1, "userBoxEffect"], ["width", "100%", "height", "100%", "autoplay", "", 3, "id", "ngStyle", "muted"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapComponent_div_4_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapComponent_div_6_Template, 7, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "video", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.content.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.content.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.content.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.content.iframes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.userList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, !ctx.getData.userLock ? "#141130" : "#743030"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getData.localUser, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.getData.cam ? 1 : 0))("muted", "muted");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".mapContainer[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n#mapContent[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n}\n\n.userBoxEffect[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 500;\n  left: 500;\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  transition: 0.3s;\n  margin-left: -10px;\n  box-shadow: 0px 0px 9px 3px #dedede;\n  background-color: #141130;\n  margin-top: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.userBoxEffect[_ngcontent-%COMP%]   .NoPic[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 100px;\n}\n\n.userBoxEffect[_ngcontent-%COMP%]   .UserName[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -58px;\n  font-size: 40px;\n  text-shadow: -2px -2px 4px black, 2px 2px 4px black, 2px -2px 4px black, -2px 2px 4px black;\n}\n\n.userContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 500;\n  left: 500;\n  transition: 0.3s;\n}\n\n.userBox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.userBox[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.showIcon[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dontShow[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUVJLE9BQUE7RUFDQSxNQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQU47O0FBRUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkZBQUE7QUFBTjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNFLGlCQUFBO0FBQU47O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hcENvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI21hcENvbnRlbnQge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA4NCwgMTM4KTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJCb3hFZmZlY3R7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwMDtcclxuICAgIGxlZnQ6IDUwMDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggM3B4ICNkZWRlZGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMTMwO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLk5vUGlje1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5Vc2VyTmFtZXtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC01OHB4O1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMnB4IC0ycHggNHB4IGJsYWNrLCAycHggMnB4IDRweCBibGFjaywgMnB4IC0ycHggNHB4IGJsYWNrLCAtMnB4IDJweCA0cHggYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlckNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwO1xyXG4gICAgbGVmdDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcblxyXG4gIC51c2VyQm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlkZW97XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuLnNob3dJY29ue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZG9udFNob3d7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbiAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/get-data.service */ "EQNs");
/* harmony import */ var _screens_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/header/header.component */ "h8RR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(getData) {
        this.getData = getData;
        this.title = 'Megaloverse';
    }
    ngOnInit() {
        // this.getData.initDolbyIO();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "header"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_screens_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  background: #141130;\n  color: #e9e9e9;\n  position: fixed;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fill-available;\n  margin-left: 100px;\n  margin-right: 100px;\n  z-index: 5;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: initial;\n  width: -webkit-fill-available;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 4;\n  top: 50px;\n  width: -webkit-fill-available;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRFI7QUFPQTtFQUVRO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQUxWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLCAxNywgNDgpO1xyXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAgXHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICB0b3A6NTBweDtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _screens_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/header/header.component */ "h8RR");
/* harmony import */ var _screens_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/map/map.component */ "Im9/");
/* harmony import */ var _screens_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/game/game.component */ "sV+j");
/* harmony import */ var _screens_event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/event/event.component */ "/Ta8");
/* harmony import */ var _screens_sticky_sticky_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/sticky/sticky.component */ "4pTk");
/* harmony import */ var _screens_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/user/user.component */ "mUiC");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _screens_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _screens_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _screens_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
        _screens_event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"],
        _screens_sticky_sticky_component__WEBPACK_IMPORTED_MODULE_8__["StickyComponent"],
        _screens_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _screens_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _screens_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                    _screens_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                    _screens_event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"],
                    _screens_sticky_sticky_component__WEBPACK_IMPORTED_MODULE_8__["StickyComponent"],
                    _screens_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h8RR":
/*!****************************************************!*\
  !*** ./src/app/screens/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/get-data.service */ "EQNs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(getData) {
        this.getData = getData;
    }
    ngOnInit() {
        $(".expand").on('click', () => {
            if (this.IsFullScreenCurrently())
                this.GoOutFullscreen();
            else
                this.GoInFullscreen($("body").get(0));
        });
        $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', () => {
            if (this.IsFullScreenCurrently()) {
            }
            else {
            }
        });
    }
    updateCAM() {
        this.getData.cam = !this.getData.cam;
        if (this.getData.cam) {
            this.getData.turnOnCam();
        }
        else {
            this.getData.turnOffCam();
        }
    }
    updateMIC() {
        this.getData.mic = !this.getData.mic;
        if (this.getData.mic) {
            this.getData.turnOnMic();
        }
        else {
            this.getData.turnOffMic();
        }
    }
    updateUserLock() {
        this.getData.userLock = !this.getData.userLock;
    }
    GoInFullscreen(element) {
        if (element.requestFullscreen)
            element.requestFullscreen();
    }
    GoOutFullscreen() {
        if (document.exitFullscreen)
            document.exitFullscreen();
    }
    IsFullScreenCurrently() {
        const full_screen_element = document.fullscreenElement || null;
        if (full_screen_element === null)
            return false;
        else
            return true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 6, consts: [["id", "MainHeader", 1, "container"], [1, "title"], [1, "announcements"], [1, "announcement-icon"], [1, "fas", "fa-bullhorn"], [1, "text"], [1, "menu"], [1, "btn", 3, "click"], ["title", "Video ON", 4, "ngIf"], ["title", "Video OFF", 4, "ngIf"], ["title", "Mic ON", 4, "ngIf"], ["title", "Mic OFF", 4, "ngIf"], [1, "btn", "user", 3, "click"], ["title", "Locked", 4, "ngIf"], ["title", "Free", 4, "ngIf"], ["title", "Full Screen", 1, "btn", "expand"], [1, "fas", "fa-expand"], ["title", "Video ON"], [1, "fas", "fa-video"], ["title", "Video OFF"], [1, "fas", "fa-video-slash"], ["title", "Mic ON"], [1, "fas", "fa-microphone"], ["title", "Mic OFF"], [1, "fas", "fa-microphone-slash"], ["title", "Locked"], [1, "fas", "fa-street-view"], ["title", "Free"], [1, "fas", "fa-male"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MEGALOVERSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to the Metaverse of Hackathons and Expos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.updateCAM(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_12_listener() { return ctx.updateMIC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_15_listener() { return ctx.updateUserLock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_16_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData.cam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getData.cam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData.mic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getData.mic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData.userLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getData.userLock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px auto 180px;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-left: 30px;\n  padding-right: 20px;\n  background: rgba(138, 47, 212, 0.253);\n  border-radius: 0 0 20px 20px;\n  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.685);\n  -webkit-backdrop-filter: saturate(180%) blur(5px);\n          backdrop-filter: saturate(180%) blur(5px);\n}\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .announcements[_ngcontent-%COMP%]   .announcement-icon[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.container[_ngcontent-%COMP%]   .announcements[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 15px;\n}\n.container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  font-size: 23px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  justify-content: center;\n  border-radius: 50%;\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 5px rgba(224, 224, 224, 0.685);\n}\n@media screen and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .announcements[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUVJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQVk7RUFDSSxrREFBQTtBQUVoQjtBQUtBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBRk47QUFDRjtBQU1BO0VBQ0k7SUFDRyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFKTDs7RUFNRTtJQUNJLHdCQUFBO0VBSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCBhdXRvIDE4MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM4LCA0NywgMjEyLCAwLjI1Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4OyAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjg1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cig1cHgpO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuYW5ub3VuY2VtZW50c3tcclxuICAgICAgICAuYW5ub3VuY2VtZW50LWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZW51e1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjY4NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYW5ub3VuY2VtZW50c3tcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tZW51e1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "mUiC":
/*!************************************************!*\
  !*** ./src/app/screens/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-data.service */ "EQNs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "video", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("video ", user_r1.talking ? "bigger" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "videoFeed_", user_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("muted", "muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](user_r1.talking ? "bigName" : "smallName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
} }
function UserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_div_1_div_1_Template, 5, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r1.localUser);
} }
class UserComponent {
    constructor(getData) {
        this.getData = getData;
    }
    ngOnInit() {
        this.getData.getuserList.subscribe((info) => {
            if (info) {
                if (info.add && !info.data.localUser) {
                    // this.addUser(info.data);
                }
                else {
                    // this.deleteUser(info.data);
                }
            }
        });
    }
    addUser(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 100));
            const videoNode = document.getElementById(`videoFeed_${data.id}`);
            attachStream(videoNode, data.stream);
        });
    }
    deleteUser(data) {
        // this.userList = this.userList.filter(item => item.id !== data.id);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "videoContainer", 4, "ngFor", "ngForOf"], [1, "videoContainer"], [3, "class", 4, "ngIf"], [1, "videoFeed"], ["width", "100%", "height", "100%", "autoplay", "", 3, "id", "muted"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getData.userList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n  max-width: 97vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: center;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  min-width: 90px;\n  min-height: 60px;\n  width: 90px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  margin: 5px;\n  border: solid 1px white;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .videoFeed[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .bigger[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 80px;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .smallName[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .bigName[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .smallName[_ngcontent-%COMP%] {\n  bottom: 0px;\n}\n.container[_ngcontent-%COMP%]   .videoContainer[_ngcontent-%COMP%]   .bigName[_ngcontent-%COMP%] {\n  bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRE87RUFDSyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUdaO0FBQVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7QUFFWjtBQUFRO0VBQ0ksWUFBQTtBQUVaIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDk3dnc7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnZpZGVvQ29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAudmlkZW97XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggd2hpdGU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWRlb0ZlZWR7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iaWdnZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNtYWxsTmFtZSwgIC5iaWdOYW1le1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbWFsbE5hbWV7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmlnTmFtZXtcclxuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "sV+j":
/*!************************************************!*\
  !*** ./src/app/screens/game/game.component.ts ***!
  \************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 2, vars: 0, template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "game works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _screens_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/map/map.component */ "Im9/");





const routes = [
    { path: '', component: _screens_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { path: ':map', component: _screens_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map