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
    __webpack_exports__["default"] = "<div class=\"job-card__container\" [ngClass]=\"data.new && data.featured ? 'border-new': ''\">\n  <div class=\"left__box\">\n    <img [src]=\"data.logo\" [alt]=\"data.company\" />\n\n    <div class=\"data__box\">\n      <ul class=\"list-data__job\">\n        <li>{{ data.company }}</li>\n        <li [ngClass]=\"data.new ? '' : 'd-none'\">new!</li>\n        <li [ngClass]=\"data.featured ? '' : 'd-none'\">featured</li>\n      </ul>\n      <div class=\"name__job\">\n        <p>{{ data.position }}</p>\n      </div>\n      <ul class=\"details__job\">\n        <li>{{ data.postedAt }}</li>\n        <li class=\"dot\"></li>\n        <li>{{ data.contract }}</li>\n        <li class=\"dot\"></li>\n        <li>{{ data.location }}</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"line\"></div>\n\n  <ul class=\"skill-required__box\">\n    <li>{{ data.role }}</li>\n    <li>{{ data.level }}</li>\n    <li *ngFor=\"let language of data.languages\">{{ language }}</li>\n    <li *ngFor=\"let tool of data.tools\">{{ tool }}</li>\n  </ul>\n</div>";

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
    __webpack_exports__["default"] = ".job-card__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--white);\n  padding: 30px 3em;\n  box-shadow: -5px 10px 20px var(--cyan-shadow);\n  border-radius: 8px;\n}\n.job-card__container .line {\n  display: none;\n}\n.job-card__container .left__box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -moz-column-gap: 1.5em;\n       column-gap: 1.5em;\n}\n.job-card__container .left__box img {\n  min-width: 100px;\n  min-height: 100px;\n}\n.job-card__container .left__box .data__box {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n.job-card__container .left__box .data__box .list-data__job {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n}\n.job-card__container .left__box .data__box .list-data__job li {\n  font-weight: 700;\n}\n.job-card__container .left__box .data__box .list-data__job li:first-child {\n  color: var(--cyan);\n  font-size: 1.1em;\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(2), .job-card__container .left__box .data__box .list-data__job li:nth-child(3) {\n  padding: 6px 10px 4px 10px;\n  font-size: 0.9em;\n  color: var(--white);\n  text-transform: uppercase;\n  border-radius: 15px;\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(2) {\n  background-color: var(--cyan);\n}\n.job-card__container .left__box .data__box .list-data__job li:nth-child(3) {\n  background-color: var(--cyan-dark-bg);\n}\n.job-card__container .left__box .data__box .name__job p {\n  text-transform: capitalize;\n  font-size: 1.5em;\n}\n.job-card__container .left__box .data__box .details__job {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n  color: var(--cyan-dark);\n}\n.job-card__container .left__box .data__box .details__job .dot {\n  padding: 2px;\n  border-radius: 50%;\n  background-color: var(--cyan-dark);\n}\n.job-card__container .left__box .data__box .details__job li:nth-child(3) {\n  text-transform: capitalize;\n}\n.job-card__container .skill-required__box {\n  -moz-column-gap: 0.5em;\n       column-gap: 0.5em;\n}\n.job-card__container .skill-required__box li {\n  color: var(--cyan);\n  padding: 0.5em 1em;\n  font-weight: 700;\n  border-radius: 5px;\n  background-color: var(--cyan-bg);\n}\n.d-none {\n  display: none;\n}\n.border-new {\n  border-left: 5px solid var(--cyan);\n}\n@media screen and (max-width: 1200px) {\n  .job-card__container {\n    position: relative;\n    align-items: flex-start;\n    flex-direction: column;\n    row-gap: 1.5em;\n    padding: 4em 1.5em 1.5em 1.5em;\n  }\n  .job-card__container .line {\n    display: block !important;\n    width: 100%;\n    height: 1px;\n    background-color: var(--cyan-opacity);\n  }\n  .job-card__container .left__box img {\n    min-width: 60px;\n    min-height: 60px;\n    position: absolute;\n    top: 0;\n    transform: translateY(-50%);\n  }\n  .job-card__container .left__box .data__box .name__job p {\n    font-size: 1em;\n  }\n  .job-card__container .left__box .data__box .details__job {\n    font-size: 0.9em;\n  }\n  .job-card__container .left__box .data__box .details__job .dot {\n    padding: 2px;\n    border-radius: 50%;\n    background-color: var(--cyan-dark);\n  }\n  .job-card__container .left__box .data__box .details__job li:nth-child(3) {\n    text-transform: capitalize;\n  }\n  .job-card__container .skill-required__box {\n    gap: 1em;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2ItY2FyZC9DOlxcQU5HVUxBUlxcam9icy1saXN0ZW5pbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGpvYi1jYXJkXFxqb2ItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qb2ItY2FyZC9qb2ItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDRE47QURHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtBQ0RSO0FER1E7RUFDRSxnQkFBQTtBQ0RWO0FER1U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDRFo7QURJVTtFQUVFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNIWjtBRE1VO0VBQ0UsNkJBQUE7QUNKWjtBRE9VO0VBQ0UscUNBQUE7QUNMWjtBRFdRO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ1RWO0FEYU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSx1QkFBQTtBQ1hSO0FEYVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ1hWO0FEY1E7RUFDRSwwQkFBQTtBQ1pWO0FEa0JFO0VBQ0Usc0JBQUE7T0FBQSxpQkFBQTtBQ2hCSjtBRGtCSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNoQk47QURxQkE7RUFDRSxhQUFBO0FDbEJGO0FEcUJBO0VBQ0Usa0NBQUE7QUNsQkY7QURxQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtFQ2xCRjtFRG9CRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxxQ0FBQTtFQ2xCSjtFRHNCSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLDJCQUFBO0VDcEJOO0VEeUJRO0lBQ0UsY0FBQTtFQ3ZCVjtFRDJCTTtJQUNFLGdCQUFBO0VDekJSO0VEMkJRO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0NBQUE7RUN6QlY7RUQ0QlE7SUFDRSwwQkFBQTtFQzFCVjtFRGdDRTtJQUNFLFFBQUE7SUFDQSxlQUFBO0VDOUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pvYi1jYXJkL2pvYi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvYi1jYXJkX19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBhZGRpbmc6IDMwcHggM2VtO1xyXG4gIGJveC1zaGFkb3c6IC01cHggMTBweCAyMHB4IHZhcigtLWN5YW4tc2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIC5saW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubGVmdF9fYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sdW1uLWdhcDogMS41ZW07XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGFfX2JveCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgLmxpc3QtZGF0YV9fam9iIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMWVtO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDRweCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLWRhcmstYmcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWVfX2pvYiB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlsc19fam9iIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMWVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jeWFuLWRhcmspO1xyXG5cclxuICAgICAgICAuZG90IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tZGFyayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpbGwtcmVxdWlyZWRfX2JveCB7XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVlbTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jeWFuKTtcclxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tYmcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJvcmRlci1uZXcge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tY3lhbik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogNGVtIDEuNWVtIDEuNWVtIDEuNWVtO1xyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLW9wYWNpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0X19ib3gge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YV9fYm94IHtcclxuICAgICAgICAubmFtZV9fam9iIHtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWxzX19qb2Ige1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG5cclxuICAgICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1kYXJrKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtcmVxdWlyZWRfX2JveCB7XHJcbiAgICAgIGdhcDogMWVtO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5qb2ItY2FyZF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDMwcHggM2VtO1xuICBib3gtc2hhZG93OiAtNXB4IDEwcHggMjBweCB2YXIoLS1jeWFuLXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5saW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbHVtbi1nYXA6IDEuNWVtO1xufVxuLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCBpbWcge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCAuZGF0YV9fYm94IC5saXN0LWRhdGFfX2pvYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFlbTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2IgbGkge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCAuZGF0YV9fYm94IC5saXN0LWRhdGFfX2pvYiBsaTpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2IgbGk6bnRoLWNoaWxkKDIpLCAuam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmxpc3QtZGF0YV9fam9iIGxpOm50aC1jaGlsZCgzKSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4IDRweCAxMHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCAuZGF0YV9fYm94IC5saXN0LWRhdGFfX2pvYiBsaTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuKTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubGlzdC1kYXRhX19qb2IgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1kYXJrLWJnKTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubmFtZV9fam9iIHAge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAuZGV0YWlsc19fam9iIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMWVtO1xuICBjb2xvcjogdmFyKC0tY3lhbi1kYXJrKTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAuZGV0YWlsc19fam9iIC5kb3Qge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1kYXJrKTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAuZGV0YWlsc19fam9iIGxpOm50aC1jaGlsZCgzKSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmpvYi1jYXJkX19jb250YWluZXIgLnNraWxsLXJlcXVpcmVkX19ib3gge1xuICBjb2x1bW4tZ2FwOiAwLjVlbTtcbn1cbi5qb2ItY2FyZF9fY29udGFpbmVyIC5za2lsbC1yZXF1aXJlZF9fYm94IGxpIHtcbiAgY29sb3I6IHZhcigtLWN5YW4pO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1iZyk7XG59XG5cbi5kLW5vbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm9yZGVyLW5ldyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tY3lhbik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuam9iLWNhcmRfX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMS41ZW07XG4gICAgcGFkZGluZzogNGVtIDEuNWVtIDEuNWVtIDEuNWVtO1xuICB9XG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIC5saW5lIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tb3BhY2l0eSk7XG4gIH1cbiAgLmpvYi1jYXJkX19jb250YWluZXIgLmxlZnRfX2JveCBpbWcge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAubmFtZV9fam9iIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAuZGV0YWlsc19fam9iIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIC5sZWZ0X19ib3ggLmRhdGFfX2JveCAuZGV0YWlsc19fam9iIC5kb3Qge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi1kYXJrKTtcbiAgfVxuICAuam9iLWNhcmRfX2NvbnRhaW5lciAubGVmdF9fYm94IC5kYXRhX19ib3ggLmRldGFpbHNfX2pvYiBsaTpudGgtY2hpbGQoMykge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIC5qb2ItY2FyZF9fY29udGFpbmVyIC5za2lsbC1yZXF1aXJlZF9fYm94IHtcbiAgICBnYXA6IDFlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn0iXX0= */";

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
    __webpack_exports__["default"] = ".jobs-list__contaianer .box__image {\n  height: 150px;\n  background: url(/assets/images/bg-header-desktop.svg) no-repeat;\n  background-size: cover;\n  background-color: var(--cyan);\n}\n.jobs-list__contaianer .box__jobs {\n  padding: 4em 8em;\n  display: flex;\n  flex-direction: column;\n  row-gap: 1em;\n}\n@media screen and (max-width: 1200px) {\n  .box__jobs {\n    padding: 6em 2em !important;\n    row-gap: 4.5em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy1saXN0L0M6XFxBTkdVTEFSXFxqb2JzLWxpc3RlbmluZy9zcmNcXGFwcFxccGFnZXNcXGpvYnMtbGlzdFxcam9icy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2JzLWxpc3Qvam9icy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLCtEQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNESjtBREtBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHlCQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMtbGlzdC9qb2JzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9icy1saXN0X19jb250YWlhbmVyIHtcclxuICAuYm94X19pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWhlYWRlci1kZXNrdG9wLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gIH1cclxuXHJcbiAgLmJveF9fam9icyB7XHJcbiAgICBwYWRkaW5nOiA0ZW0gOGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuYm94X19qb2JzIHtcclxuICAgIHBhZGRpbmc6IDZlbSAyZW0gIWltcG9ydGFudDtcclxuICAgIHJvdy1nYXA6IDQuNWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiLmpvYnMtbGlzdF9fY29udGFpYW5lciAuYm94X19pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1oZWFkZXItZGVza3RvcC5zdmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XG59XG4uam9icy1saXN0X19jb250YWlhbmVyIC5ib3hfX2pvYnMge1xuICBwYWRkaW5nOiA0ZW0gOGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAxZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYm94X19qb2JzIHtcbiAgICBwYWRkaW5nOiA2ZW0gMmVtICFpbXBvcnRhbnQ7XG4gICAgcm93LWdhcDogNC41ZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

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