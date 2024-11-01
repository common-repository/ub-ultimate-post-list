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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__(1);
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;




registerBlockType('select-post-list/post-list-block', {
    title: __('Ultimate Post List'),
    icon: 'list-view',
    category: 'common',
    attributes: {
        postDisplay: {
            type: "string",
            default: 'all'
        },
        posts: {
            type: "array",
            default: []
        },
        checkList: {
            type: "array",
            default: []
        },
        postType: {
            type: "string",
            default: ''
        },
        postLayout: {
            type: "string",
            default: 'list'
        },
        orderBy: {
            type: "string",
            default: 'date'
        },
        order: {
            type: "string",
            default: 'desc'
        },
        postId: {
            type: "array",
            default: []
        },
        postPerPage: {
            type: 'string',
            default: 12
        },
        displayPostThumbnail: {
            type: "boolean",
            default: true
        },
        displayPostExcerpt: {
            type: "boolean",
            default: true
        },
        displayPostDate: {
            type: "boolean",
            default: true
        },
        displayPagination: {
            type: "boolean",
            default: true
        },
        displayPostAuthor: {
            type: "boolean",
            default: true
        },
        displayReadMore: {
            type: "boolean",
            default: false
        }
    },

    edit: __WEBPACK_IMPORTED_MODULE_0__edit__["a" /* default */],

    save: function save(props) {
        var _props$attributes = props.attributes,
            postDisplay = _props$attributes.postDisplay,
            postType = _props$attributes.postType,
            postId = _props$attributes.postId,
            posts = _props$attributes.posts,
            displayReadMore = _props$attributes.displayReadMore,
            postPerPage = _props$attributes.postPerPage,
            setAttributes = props.setAttributes;

        return null;
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    ServerSideRender = _wp$components.ServerSideRender,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody;

var postList = function (_Component) {
    _inherits(postList, _Component);

    function postList(props) {
        var _ref;

        _classCallCheck(this, postList);

        var _this = _possibleConstructorReturn(this, (_ref = postList.__proto__ || Object.getPrototypeOf(postList)).call.apply(_ref, [this].concat(_toConsumableArray(props))));

        _this.state = {
            checkboxPost: false,
            postType: '',
            options: [],
            checkList: []
        };
        _this.onPostSelect = _this.onPostSelect.bind(_this);
        _this.onTypeSelect = _this.onTypeSelect.bind(_this);
        return _this;
    }

    _createClass(postList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var optionsArr = [{ label: __('Select'), value: '' }];
            wp.apiFetch({ path: "/post_type/v1/post_data/" }).then(function (posts) {
                posts.map(function (post, key) {
                    return optionsArr.push({
                        label: __(post.name),
                        value: __(post.value)
                    });
                });
                _this2.setState({ options: optionsArr });
            });
        }
    }, {
        key: 'onTypeSelect',
        value: function onTypeSelect(postType) {
            var _this3 = this;

            var _props = this.props,
                _props$attributes = _props.attributes,
                postId = _props$attributes.postId,
                allPages = _props$attributes.allPages,
                setAttributes = _props.setAttributes;


            if (postType) {
                var postArr = [];
                wp.apiFetch({ path: "/post_type/v1/post_list/?post_type=" + postType }).then(function (posts) {
                    var post = posts.map(function (post, key) {
                        postArr.push({
                            label: __(post.name),
                            value: __(post.value)
                        });
                    });
                    _this3.setState({ checkboxPost: true });
                    setAttributes({ checkList: postArr, postType: postType });
                });
            }
            this.setState({ postType: '' });
            setAttributes({ postType: '' });
        }
    }, {
        key: 'onPostSelect',
        value: function onPostSelect(e, value) {
            var _props2 = this.props,
                postId = _props2.attributes.postId,
                setAttributes = _props2.setAttributes;

            var arr2 = [].concat(_toConsumableArray(postId));
            if (e === true) {
                arr2.push(value);
            } else {
                var index = arr2.indexOf(value);
                arr2.splice(index, 1);
            }
            setAttributes({ postId: arr2 });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props3 = this.props,
                _props3$attributes = _props3.attributes,
                postType = _props3$attributes.postType,
                postDisplay = _props3$attributes.postDisplay,
                options = _props3$attributes.options,
                postId = _props3$attributes.postId,
                checkList = _props3$attributes.checkList,
                postPerPage = _props3$attributes.postPerPage,
                postLayout = _props3$attributes.postLayout,
                orderBy = _props3$attributes.orderBy,
                order = _props3$attributes.order,
                displayPostThumbnail = _props3$attributes.displayPostThumbnail,
                displayPostExcerpt = _props3$attributes.displayPostExcerpt,
                displayPagination = _props3$attributes.displayPagination,
                displayPostDate = _props3$attributes.displayPostDate,
                displayPostAuthor = _props3$attributes.displayPostAuthor,
                displayReadMore = _props3$attributes.displayReadMore,
                setAttributes = _props3.setAttributes;

            return [wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __('Post Type Settings ') },
                        wp.element.createElement(SelectControl, {
                            label: 'Select Post type',
                            value: postType,
                            onChange: this.onTypeSelect,
                            options: this.state.options
                        }),
                        postType && wp.element.createElement(RadioControl, {
                            label: 'Display Posts',
                            selected: postDisplay,
                            options: [{ label: 'All', value: 'all' }, { label: 'Selected', value: 'selected' }],
                            onChange: function onChange(value) {
                                return setAttributes({ postDisplay: value });
                            }
                        }),
                        postDisplay == 'selected' && postType && checkList && checkList.map(function (item, key) {
                            return wp.element.createElement(CheckboxControl, {
                                label: item.label,
                                value: item.value,
                                checked: -1 < postId.indexOf(item.value),
                                onChange: function onChange(e) {
                                    return _this4.onPostSelect(e, item.value);
                                }
                            });
                        })
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __('Attribute Settings '), initialOpen: false },
                        postType && wp.element.createElement(RadioControl, {
                            label: 'Select Layout',
                            selected: postLayout,
                            options: [{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }],
                            onChange: function onChange(value) {
                                return setAttributes({ postLayout: value });
                            }
                        }),
                        postType && wp.element.createElement(RadioControl, {
                            label: 'Order By',
                            selected: orderBy,
                            options: [{ label: 'Date', value: 'date' }, { label: 'Title', value: 'title' }],
                            onChange: function onChange(value) {
                                return setAttributes({ orderBy: value });
                            }
                        }),
                        postType && wp.element.createElement(RadioControl, {
                            label: 'Order',
                            selected: order,
                            options: [{ label: 'Asc', value: 'asc' }, { label: 'Desc', value: 'desc' }],
                            onChange: function onChange(value) {
                                return setAttributes({ order: value });
                            }
                        }),
                        postType && wp.element.createElement(TextControl, {
                            label: 'Posts Per Page',
                            type: 'number',
                            value: postPerPage,
                            min: '1',
                            max: '100',
                            step: '1',
                            onChange: function onChange(value) {
                                return setAttributes({ postPerPage: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Post Thumbnail',
                            checked: displayPostThumbnail,
                            onChange: function onChange(value) {
                                return setAttributes({ displayPostThumbnail: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Post Excerpt',
                            checked: displayPostExcerpt,
                            onChange: function onChange(value) {
                                return setAttributes({ displayPostExcerpt: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Read More Button',
                            checked: displayReadMore,
                            onChange: function onChange(value) {
                                return setAttributes({ displayReadMore: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Pagination',
                            checked: displayPagination,
                            onChange: function onChange(value) {
                                return setAttributes({ displayPagination: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Publish Date',
                            checked: displayPostDate,
                            onChange: function onChange(value) {
                                return setAttributes({ displayPostDate: value });
                            }
                        }),
                        postType && wp.element.createElement(ToggleControl, {
                            label: 'Display Post Author',
                            checked: displayPostAuthor,
                            onChange: function onChange(value) {
                                return setAttributes({ displayPostAuthor: value });
                            }
                        })
                    )
                )
            ), wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(ServerSideRender, {
                    block: 'select-post-list/post-list-block',
                    attributes: { 'postId': postId, 'postDisplay': postDisplay, 'postType': postType, 'postLayout': postLayout, 'orderBy': orderBy, 'order': order, 'postPerPage': postPerPage, 'displayPostThumbnail': displayPostThumbnail, 'displayPagination': displayPagination, 'displayPostExcerpt': displayPostExcerpt, 'displayPostDate': displayPostDate, 'displayPostAuthor': displayPostAuthor, 'displayReadMore': displayReadMore } })
            )];
        }
    }]);

    return postList;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (postList);

/***/ })
/******/ ]);