function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-card/job-card.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-card/job-card.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsJobCardJobCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"job-card__container\">\n  <div class=\"left__box\">\n    <img [src]=\"data.logo\" [alt]=\"data.company\" />\n\n    <div class=\"data__box\">\n      <ul class=\"list-data__job\">\n        <li>{{ data.company }}</li>\n        <li [ngClass]=\"data.new ? '' : 'd-none'\">new!</li>\n        <li [ngClass]=\"data.featured ? '' : 'd-none'\">featured</li>\n      </ul>\n      <div class=\"name__job\">\n        <p>{{ data.position }}</p>\n      </div>\n      <ul class=\"details__job\">\n        <li>{{ data.postedAt }}</li>\n        <li class=\"dot\"></li>\n        <li>{{ data.contract }}</li>\n        <li class=\"dot\"></li>\n        <li>{{ data.location }}</li>  \n      </ul>\n    </div>\n  </div>\n\n  <ul class=\"skill-required__box\">\n    <li>{{ data.role }}</li>\n    <li>{{ data.level }}</li>\n    <li *ngFor=\"let language of data.languages\">{{ language }}</li>\n    <li *ngFor=\"let tool of data.tools\">{{ tool }}</li>\n  </ul>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs-list/jobs-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs-list/jobs-list.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsListJobsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main class=\"jobs-list__contaianer\">\n  <header class=\"box__image\"></header>\n  <section class=\"box__jobs\">\n    <app-job-card *ngFor=\"let data of dataCards\" [data]=\"data\"></app-job-card>\n  </section>\n</main>";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pages_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pages/jobs-list/jobs-list.component */"./src/app/pages/jobs-list/jobs-list.component.ts");
    var routes = [{
      path: "jobs-list",
      component: _pages_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_3__["JobsListComponent"]
    }, {
      path: "**",
      redirectTo: "jobs-list"
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _pages_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./pages/jobs-list/jobs-list.component */"./src/app/pages/jobs-list/jobs-list.component.ts");
    /* harmony import */
    var _components_job_card_job_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/job-card/job-card.component */"./src/app/components/job-card/job-card.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_5__["JobsListComponent"], _components_job_card_job_card_component__WEBPACK_IMPORTED_MODULE_6__["JobCardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/components/job-card/job-card.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/job-card/job-card.component.scss ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsJobCardJobCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".job-card__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--white);\n  padding: 30px 3em;\n  box-shadow: -5px 10px 20px var(--cyan-shadow);\n  border-radius: 8px;\n}\n.job-card__container .left__box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -moz-column-gap: 1.5em;\n       column-gap: 1.5em;\n}\n.job-card__container .left__box img {\n  min-width: 100px;\n  min-height: 100px;\n}\n.job-card__container .left__box .data__box {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n.job-card__container .left__box .data__box .list-data__job {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n}\n.job-card__container .left__box .data__box .list-data__job li {\n  font-weight: 700;\n}\n.job-card__container .left__box .data__box .list-data__job li:first-child {\n  color: var(--cyan);\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(2), .job-card__container .left__box .data__box .list-data__job li:nth-child(3) {\n  padding: 6px 10px 4px 10px;\n  font-size: 0.9em;\n  color: var(--white);\n  text-transform: uppercase;\n  border-radius: 15px;\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(2) {\n  background-color: var(--cyan);\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(3) {\n  background-color: var(--cyan-dark-bg);\n}\n.job-card__container .left__box .data__box .name__job p {\n  text-transform: capitalize;\n  font-size: 1.5em;\n}\n.job-card__container .left__box .data__box .details__job {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n  color: var(--cyan-dark);\n}\n.job-card__container .left__box .data__box .details__job .dot {\n  padding: 2px;\n  border-radius: 50%;\n  background-color: var(--cyan-dark);\n}\n.job-card__container .left__box .data__box .details__job li:nth-child(3) {\n  text-transform: capitalize;\n}\n.job-card__container .skill-required__box {\n  -moz-column-gap: 0.5em;\n       column-gap: 0.5em;\n}\n.job-card__container .skill-required__box li {\n  color: var(--cyan);\n  padding: 0.5em 1em;\n  border-radius: 5px;\n  background-color: var(--cyan-bg);\n}\n.d-none {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2ItY2FyZC9DOlxcQU5HVUxBUlxcam9icy1saXN0ZW5pbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGpvYi1jYXJkXFxqb2ItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qb2ItY2FyZC9qb2ItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FOO0FERU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QUNBUjtBREVRO0VBQ0UsZ0JBQUE7QUNBVjtBREVVO0VBQ0Usa0JBQUE7QUNBWjtBREdVO0VBRUUsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FES1U7RUFDRSw2QkFBQTtBQ0haO0FETVU7RUFDRSxxQ0FBQTtBQ0paO0FEVVE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FDUlY7QURZTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLHVCQUFBO0FDVlI7QURZUTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDVlY7QURhUTtFQUNFLDBCQUFBO0FDWFY7QURpQkU7RUFDRSxzQkFBQTtPQUFBLGlCQUFBO0FDZko7QURpQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ2ZOO0FEb0JBO0VBQ0UsYUFBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLWNhcmQvam9iLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iLWNhcmRfX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcGFkZGluZzogMzBweCAzZW07XHJcbiAgYm94LXNoYWRvdzogLTVweCAxMHB4IDIwcHggdmFyKC0tY3lhbi1zaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgLmxlZnRfX2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbHVtbi1nYXA6IDEuNWVtO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhX19ib3gge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIC5saXN0LWRhdGFfX2pvYiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDFlbTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpLFxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweCA0cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1kYXJrLWJnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lX19qb2Ige1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHNfX2pvYiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDFlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY3lhbi1kYXJrKTtcclxuXHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLWRhcmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNraWxsLXJlcXVpcmVkX19ib3gge1xyXG4gICAgY29sdW1uLWdhcDogMC41ZW07XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLWJnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iLCIuam9iLWNhcmRfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAzMHB4IDNlbTtcbiAgYm94LXNoYWRvdzogLTVweCAxMHB4IDIwcHggdmFyKC0tY3lhbi1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2x1bW4tZ2FwOiAxLjVlbTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggaW1nIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxZW07XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmxpc3QtZGF0YV9fam9iIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2IgbGk6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tY3lhbik7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmxpc3QtZGF0YV9fam9iIGxpOm50aC1jaGlsZCgyKSwgLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCAuZGF0YV9fYm94IC5saXN0LWRhdGFfX2pvYiBsaTpudGgtY2hpbGQoMykge1xuICBwYWRkaW5nOiA2cHggMTBweCA0cHggMTBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2IgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmxpc3QtZGF0YV9fam9iIGxpOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tZGFyay1iZyk7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLm5hbWVfX2pvYiBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmRldGFpbHNfX2pvYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFlbTtcbiAgY29sb3I6IHZhcigtLWN5YW4tZGFyayk7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmRldGFpbHNfX2pvYiAuZG90IHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tZGFyayk7XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmRldGFpbHNfX2pvYiBsaTpudGgtY2hpbGQoMykge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5za2lsbC1yZXF1aXJlZF9fYm94IHtcbiAgY29sdW1uLWdhcDogMC41ZW07XG59XG4uam9iLWNhcmRfX2NvbnRhaW5lciAuc2tpbGwtcmVxdWlyZWRfX2JveCBsaSB7XG4gIGNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tYmcpO1xufVxuXG4uZC1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/components/job-card/job-card.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/job-card/job-card.component.ts ***!
    \***********************************************************/
  /*! exports provided: JobCardComponent */
  /***/
  function srcAppComponentsJobCardJobCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "JobCardComponent", function () {
      return JobCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var JobCardComponent = /*#__PURE__*/function () {
      function JobCardComponent() {
        _classCallCheck(this, JobCardComponent);
      }
      _createClass(JobCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return JobCardComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JobCardComponent.prototype, "data", void 0);
    JobCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-job-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./job-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-card/job-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./job-card.component.scss */"./src/app/components/job-card/job-card.component.scss"))["default"]]
    })], JobCardComponent);

    /***/
  },

  /***/"./src/app/pages/jobs-list/jobs-list.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/jobs-list/jobs-list.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesJobsListJobsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".jobs-list__contaianer .box__image {\n  height: 150px;\n  background: url(/assets/images/bg-header-desktop.svg) no-repeat;\n  background-size: cover;\n  background-color: var(--cyan);\n}\n.jobs-list__contaianer .box__jobs {\n  padding: 4em 8em;\n  display: flex;\n  flex-direction: column;\n  row-gap: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy1saXN0L0M6XFxBTkdVTEFSXFxqb2JzLWxpc3RlbmluZy9zcmNcXGFwcFxccGFnZXNcXGpvYnMtbGlzdFxcam9icy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2JzLWxpc3Qvam9icy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLCtEQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMtbGlzdC9qb2JzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9icy1saXN0X19jb250YWlhbmVyIHtcclxuICAuYm94X19pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWhlYWRlci1kZXNrdG9wLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gIH1cclxuXHJcbiAgLmJveF9fam9icyB7XHJcbiAgICBwYWRkaW5nOiA0ZW0gOGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiAxZW07XHJcbiAgfVxyXG59XHJcbiIsIi5qb2JzLWxpc3RfX2NvbnRhaWFuZXIgLmJveF9faW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctaGVhZGVyLWRlc2t0b3Auc3ZnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xufVxuLmpvYnMtbGlzdF9fY29udGFpYW5lciAuYm94X19qb2JzIHtcbiAgcGFkZGluZzogNGVtIDhlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMWVtO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/jobs-list/jobs-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/jobs-list/jobs-list.component.ts ***!
    \********************************************************/
  /*! exports provided: JobsListComponent */
  /***/
  function srcAppPagesJobsListJobsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "JobsListComponent", function () {
      return JobsListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../data.json */"./src/data.json");
    var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t( /*! ../../../data.json */"./src/data.json", 1);
    var JobsListComponent = /*#__PURE__*/function () {
      function JobsListComponent() {
        _classCallCheck(this, JobsListComponent);
        this.dataCards = _data_json__WEBPACK_IMPORTED_MODULE_2__;
      }
      _createClass(JobsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return JobsListComponent;
    }();
    JobsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobs-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./jobs-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs-list/jobs-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./jobs-list.component.scss */"./src/app/pages/jobs-list/jobs-list.component.scss"))["default"]]
    })], JobsListComponent);

    /***/
  },

  /***/"./src/data.json":
  /*!***********************!*\
    !*** ./src/data.json ***!
    \***********************/
  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
  /***/
  function srcDataJson(module) {
    module.exports = JSON.parse("[{\"id\":1,\"company\":\"Photosnap\",\"logo\":\"/assets/images/photosnap.svg\",\"new\":true,\"featured\":true,\"position\":\"Senior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Senior\",\"postedAt\":\"1d ago\",\"contract\":\"Full Time\",\"location\":\"USA Only\",\"languages\":[\"HTML\",\"CSS\",\"JavaScript\"],\"tools\":[]},{\"id\":2,\"company\":\"Manage\",\"logo\":\"/assets/images/manage.svg\",\"new\":true,\"featured\":true,\"position\":\"Fullstack Developer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"1d ago\",\"contract\":\"Part Time\",\"location\":\"Remote\",\"languages\":[\"Python\"],\"tools\":[\"React\"]},{\"id\":3,\"company\":\"Account\",\"logo\":\"/assets/images/account.svg\",\"new\":true,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2d ago\",\"contract\":\"Part Time\",\"location\":\"USA Only\",\"languages\":[\"JavaScript\"],\"tools\":[\"React\",\"Sass\"]},{\"id\":4,\"company\":\"MyHome\",\"logo\":\"/assets/images/myhome.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"5d ago\",\"contract\":\"Contract\",\"location\":\"USA Only\",\"languages\":[\"CSS\",\"JavaScript\"],\"tools\":[]},{\"id\":5,\"company\":\"Loop Studios\",\"logo\":\"/assets/images/loop-studios.svg\",\"new\":false,\"featured\":false,\"position\":\"Software Engineer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"1w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\"],\"tools\":[\"Ruby\",\"Sass\"]},{\"id\":6,\"company\":\"FaceIt\",\"logo\":\"/assets/images/faceit.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Backend Developer\",\"role\":\"Backend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"UK Only\",\"languages\":[\"Ruby\"],\"tools\":[\"RoR\"]},{\"id\":7,\"company\":\"Shortly\",\"logo\":\"/assets/images/shortly.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"HTML\",\"JavaScript\"],\"tools\":[\"Sass\"]},{\"id\":8,\"company\":\"Insure\",\"logo\":\"/assets/images/insure.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"USA Only\",\"languages\":[\"JavaScript\"],\"tools\":[\"Vue\",\"Sass\"]},{\"id\":9,\"company\":\"Eyecam Co.\",\"logo\":\"/assets/images/eyecam-co.svg\",\"new\":false,\"featured\":false,\"position\":\"Full Stack Engineer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"3w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\",\"Python\"],\"tools\":[\"Django\"]},{\"id\":10,\"company\":\"The Air Filter Company\",\"logo\":\"/assets/images/the-air-filter-company.svg\",\"new\":false,\"featured\":false,\"position\":\"Front-end Dev\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"1mo ago\",\"contract\":\"Part Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\"],\"tools\":[\"React\",\"Sass\"]}]");

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
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

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\ANGULAR\jobs-listening\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map