/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moduletest = __webpack_require__(/*! ./moduletest */ "./app/moduletest.js");

var _moduletest2 = _interopRequireDefault(_moduletest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var and let .........................................................................
// let allow you to define a variable in block scope
// var key word define variable in function scope 
// in every programm language used block scope for variable
{
    var nameandfamily = {
        name: "mahdi",
        family: "hosseini"
    };
    console.log(nameandfamily.name, " : var and let example");
    // for example
    var number = 10;

    {
        var _number = 15;
        console.log(_number, " : var and let example"); // return 15
    }
    console.log(number, " : var and let example"); // return 10 
    // var number = 10
    // {
    //     var number = 15
    //     console.log(number ," : var and let example"); // return 15
    // }
    // console.log(number," : var and let example"); // return 15 
}

// // const variable ...................................................................
{
    var array = ["mahdi", "mphammad", "mostafa"];
    array[0] = "ali";
    console.log(array[0], " : const variable example"); // its not have error becuse we dont change the array variable
    // array = []; // it give us an error becuse we changed the array variable
}

// // Template_Literals (${}) ..........................................................
// for use it we mus use (`) not use qoute '' and double qoute "" !
{
    var stringtemp = "seyyedmahdi";
    console.log("hi " + stringtemp + " :)", " : Template_Literals");
    // in previuse of javascript we use :
    console.log("hi " + stringtemp + " :)", " : Template_Literals");
}

// // Spread Operator and Rest Parameters ...............................................
{

    // we can use Spread Operator in function
    var Spread_operator = function Spread_operator() {
        var _console;

        for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
            a[_key] = arguments[_key];
        }

        (_console = console).log.apply(_console, a.concat([" : Spread Operator"]));
    };

    var array2 = [30, 40, 50];
    var array3 = [10, 20].concat(array2, [60]);
    console.log(array3, " : Spread Operator");
    Spread_operator(1, 5, 6, 8, 10);

    // // Destructuring Assignment on Arrays and Objects
    var array4 = [" seyyed ", " mahdi ", " hosseini "];
    var array4one = array4[0],
        array4two = array4[1];

    console.log(array4one + array4two, " : Destructuring Assignment");

    var obj = {
        name: " mahdi ",
        family: " hosseini "
    };
    var name = obj.name,
        family = obj.family; // must have name simple the key name of object 

    console.log(name + family, " : Destructuring Assignment");

    var obj1 = {
        name1: " mahdi ",
        family1: " hosseini "
    };
    var name1 = void 0,
        family1 = void 0;
    // if we define variable in previus line we must use () for do this 
    name1 = obj1.name1;
    family1 = obj1.family1;
    console.log(name1 + family1, " : Destructuring Assignment");
}
// arrow functions .........................................................................................
{
    var helloword = function helloword() {
        return "HELLO WORLD :| ";
    };
    console.log(helloword(), " : Arrow Function");
    // another example
    setTimeout(function () {
        console.log("HELLO WORLD :| ", " : Arrow Function");
    }, 3000);
}
// map property ............................................................................................
{
    var array5 = [1, 2, 3];
    console.log(array5.map(function (n) {
        return n + 5;
    }), " : Map and Filter");

    var array6 = [10, 20, 30, 40, 50, 60, 70];
    console.log(array6.filter(function (n) {
        return n > 40;
    }));
}
// String Helper Methods ...................................................................................
{
    var string1 = "hell" + "oOo".repeat(10) + " :))";
    console.log(string1, " : String Helper Methods");

    var boolean1 = "seyyedmahdi".startsWith("seyyed");
    console.log(boolean1, " : String Helper Methods"); // returned boolean : true
    console.log("seyyed mahdi".endsWith("mahdi"), " : String Helper Methods");
    console.log("seyyed mahdi".includes("ma"), " : String Helper Methods");
    // and more ....

    // Numbers Helper Methods
    var number1 = function number1(num) {
        console.log(Number.isFinite(num), " : Numbers Helper Methods");
    };
    var number2 = function number2(num) {
        console.log(Number.isSafeInteger(num), " : Numbers Helper Methods");
    };
    number1(123456789); //  return true
    number2(Math.pow(25, 50)); // return false
}
//  Module in javascript ..........................................................

console.log(_moduletest2.default.show(), " : Module in javascript");

// Class in javascript .............................................................
{
    var animal = function () {
        function animal(name, height) {
            _classCallCheck(this, animal);

            this.name = name;
            this.height = height;
        }

        _createClass(animal, [{
            key: "helo",
            value: function helo() {
                console.log("hello " + this.name + " . are your height is " + this.height + " ??", " : Class in javascript");
            }

            // we can use static method without creat object

        }], [{
            key: "message",
            value: function message(name) {
                return "hello " + name + " :)";
            }
        }]);

        return animal;
    }();

    var Lion = function (_animal) {
        _inherits(Lion, _animal);

        function Lion(name, height, color) {
            _classCallCheck(this, Lion);

            var _this = _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).call(this, name, height));

            _this.color = color;
            return _this;
        }

        return Lion;
    }(animal);

    var king = new animal("lion", "1.5");
    console.log(king, " : Class in javascript");
    king.helo();

    var lion = new Lion("mos", 1.8, "golden");
    console.log(lion, " : Class in javascript");

    console.log(animal.message("mahdi"), " : Class in javascript");
}
// prototype ....................................................................
{
    var course_name = function course_name(name, time, position) {
        var _this2 = this;

        this.name = name;
        this.time = time;
        this.position = position;

        this.showcourse = function () {
            return "name : " + _this2.name + " time : " + _this2.time + " pos : " + _this2.position;
        };
    };

    course_name.prototype.info = function () {
        return "add info function";
    };

    var course1 = new course_name("math", 21, "tehran");
    console.log(course1, " : prototype");
    console.log(course1.showcourse(), " : prototype");
    console.log(course1.info(), " : prototype");
}
// data strauctures in javascript ..........................................................
// set usually use for searching 
// the element in Set is unique 
{
    var set = new Set();
    set.add([1, 2, 3]);
    set.add("mahdi");
    set.add(21);
    set.add({
        university: "shahed",
        term: 6
    });

    console.log(set, " : data strauctures");
    console.log(set.has(21), " : data strauctures");
    console.log(set.has({
        university: "shahed"
    }), " : data strauctures");

    // we can use Set constructor
    var array7 = ["mahdi", {
        name: "mahdi"
    }, 46, 78, ["man", "men"]];
    var b = new Set(array7);
    console.log(b, " : data strauctures");

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = b.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            console.log(element, " : data strauctures");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var chars = "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf";
    console.log(new Set(chars.split("")));

    // Map()
    var map = new Map();
    var key = 'key1';
    map.set(key, 'this is value for key1');
    map.set({
        a: "key2"
    }, "this is value for key2");
    map.set(function () {
        return "key3";
    }, "this is value for key3");

    console.log(map, " : data strauctures");

    // also we can use array to creat a map object
    var array8 = [[1, 2], ["mahdi", "hosseini"], [{
        name: "a"
    }, function () {
        return "Ok";
    }]];
    var map2 = new Map(array8);
    console.log(map2, " : data strauctures");

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = map2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                _key2 = _step2$value[0],
                val = _step2$value[1];

            console.log("the key : " + _key2 + " , the val : " + val, " : data strauctures");
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
// closures in javascript ...........................................................
{
    var fun = function fun() {
        var variable = "ES6";
        var see = function see() {
            return variable;
        };
        return see;
    };

    var _a = fun();
    var aa = _a;
    console.log(aa(), " : closures");

    var fun2 = function fun2(x) {
        return function (y) {
            return x + y;
        };
    };
    var d = fun2("seyyed");
    console.log(d(" mahdi"), " : closures");
}
// private method
{
    var _a2 = function _a2() {
        var name = "mahdi";
        var family = " hosseini";
        var show = function show() {
            return name + family;
        };
        return {
            "f": name, // we can use f in call ofter
            family: family,
            show: show
        };
    };

    var _b = _a2();
    console.log(_b.f, " : private Methods");
    console.log(_b.show(), " : private Methods");
}

{
    // Generators in javascript ...............................................................
    // run to compile
    var generator = /*#__PURE__*/regeneratorRuntime.mark(function generator() {
        return regeneratorRuntime.wrap(function generator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'a';

                    case 2:
                        _context.next = 4;
                        return 'b';

                    case 4:
                        _context.next = 6;
                        return 'c';

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, generator, this);
    });
    var event1 = /*#__PURE__*/regeneratorRuntime.mark(function event1() {
        var count, temp;
        return regeneratorRuntime.wrap(function event1$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        count = 0;

                    case 1:
                        if (false) {}

                        count += 2;
                        _context3.next = 5;
                        return count;

                    case 5:
                        temp = _context3.sent;

                        if (temp === true) {
                            count = -2;
                        }
                        _context3.next = 1;
                        break;

                    case 9:
                    case "end":
                        return _context3.stop();
                }
            }
        }, event1, this);
    });
    var arrayIterators = /*#__PURE__*/regeneratorRuntime.mark(function arrayIterators() {
        var _args4 = arguments;
        return regeneratorRuntime.wrap(function arrayIterators$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.delegateYield(_args4, "t0", 1);

                    case 1:
                    case "end":
                        return _context4.stop();
                }
            }
        }, arrayIterators, this);
    });


    var sss = generator();
    console.log(sss.next().value, " : Generators");
    console.log(sss.next().value, " : Generators");
    console.log(sss.next().value, " : Generators");
    console.log(sss.next().value, " : Generators");

    var counterMaker = /*#__PURE__*/regeneratorRuntime.mark(function counterMaker() {
        var i;
        return regeneratorRuntime.wrap(function counterMaker$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        i = 0;

                    case 1:
                        if (!(i < 4)) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 4;
                        return i;

                    case 4:
                        i++;
                        _context2.next = 1;
                        break;

                    case 7:
                    case "end":
                        return _context2.stop();
                }
            }
        }, counterMaker, this);
    });

    var generator2 = counterMaker();
    console.log(generator2.next().value, " : Generators");
    console.log(generator2.next().value, " : Generators");
    console.log(generator2.next().value, " : Generators");
    console.log(generator2.next().value, " : Generators");
    console.log(generator2.next().value, " : Generators");

    var ev = event1();
    console.log(ev.next().value, " : Generators");
    console.log(ev.next().value, " : Generators");
    console.log(ev.next().value, " : Generators");
    console.log(ev.next().value, " : Generators");
    console.log(ev.next(true).value, " : Generators");
    console.log(ev.next().value, " : Generators");

    ;

    var _b2 = arrayIterators('a', 'b', 'c');
    console.log(_b2.next().value, " : Generators");
    console.log(_b2.next().value, " : Generators");
    console.log(_b2.next().value, " : Generators");
    console.log(_b2.next().value, " : Generators");
}

/***/ }),

/***/ "./app/moduletest.js":
/*!***************************!*\
  !*** ./app/moduletest.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var need = {
    name: "mahdi ",
    family: "hosseini",
    show: function show() {
        return this.name + this.family + ":))";
    }
};

exports.default = need;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app/index.js */"./app/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map