/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/DesignOption.jsx":
/*!*****************************************!*\
  !*** ./src/components/DesignOption.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DesignOption; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_useImage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/useImage.jsx */ "./src/helper/useImage.jsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function DesignOption({
  props,
  value,
  DesignKey,
  options,
  help
}) {
  const {
    setAttributes
  } = props;
  const checkBoxEffect = event => {
    const button = event.target.parentNode;
    const dataValue = button.getAttribute('data-value');
    // Remove the "selected" class from all other buttons
    const buttons = document.querySelectorAll('.design-option-btn');
    buttons.forEach(btn => {
      btn = btn.parentNode;
      if (btn !== button) {
        btn.classList.remove('selected');
      }
    });

    // Toggle the "selected" class for the clicked button
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
      setAttributes({
        [DesignKey]: dataValue
      });
    } else {
      setAttributes({
        [DesignKey]: ''
      });
    }
  };
  const getContrastingTextColor = bgColor => {
    // Convert the background color to RGB values
    let rgb = [];
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(bgColor)) {
      // Valid hex color value, convert to RGB
      rgb = bgColor.match(/\w{2}/g).map(hex => parseInt(hex, 16));
    } else if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(bgColor)) {
      // Valid RGB color value
      rgb = bgColor.match(/\d+/g).map(Number);
    }
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000; // Calculate brightness
    // Set the text color based on brightness threshold (you can adjust the threshold as needed)
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };
  const Buttons = options.map((element, index) => {
    let selected = 'design-option-item';
    if (value === element.value) {
      selected = 'design-option-item selected';
    }
    let myStyle = {};
    if (element.display.startsWith('#')) {
      myStyle = {
        backgroundColor: element.display,
        color: getContrastingTextColor(element.display),
        fontSize: '20px'
      };
    } else {
      const {
        image
      } = (0,_helper_useImage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])(element.display);
      if (image) {
        myStyle = {
          backgroundImage: 'url(' + image + ')'
        };
      }
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: element.label,
      position: 'bottom'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: selected,
      "data-value": element.value
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      style: myStyle,
      onClick: event => {
        checkBoxEffect(event);
      },
      className: "design-option-btn"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      value: element.label
    })))));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "design-option"
  }, Buttons), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help));
}

/***/ }),

/***/ "./src/components/Media.jsx":
/*!**********************************!*\
  !*** ./src/components/Media.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Media; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function Media({
  props,
  help
}) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    bgImage
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        bgImage: {
          title: media.title,
          filename: media.filename,
          url: media.url,
          isOverlay: false
        }
      });
    },
    allowedTypes: ['image'],
    multiple: false,
    render: ({
      open
    }) => bgImage.url === '' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "is-primary"
    }, "Upload Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "components-base-control__help"
    }, help)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bgImage-ctn"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "image-btn",
      onClick: open
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: bgImage.url,
      alt: ""
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dc-media-buttons"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "is-secondary"
    }, "Replace Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => {
        setAttributes({
          bgImage: {
            title: '',
            filename: '',
            url: '',
            isOverlay: false
          }
        });
      },
      className: "is-link is-destructive"
    }, "Remove overlay image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Overlay Class",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check if you want to apply overlay class'),
      checked: bgImage.isOverlay,
      onChange: () => {
        const value = !bgImage.isOverlay;
        setAttributes({
          bgImage: {
            title: bgImage.title,
            filename: bgImage.filename,
            url: bgImage.url,
            isOverlay: value
          }
        });
      }
    }))
  });
}

/***/ }),

/***/ "./src/components/Popup.jsx":
/*!**********************************!*\
  !*** ./src/components/Popup.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



function Popup({
  props,
  PopupKey,
  PopupValue,
  options,
  ButtonText,
  help
}) {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const {
    setAttributes
  } = props;
  const getContrastingTextColor = bgColor => {
    // Convert the background color to RGB values
    let rgb = [];
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(bgColor)) {
      // Valid hex color value, convert to RGB
      rgb = bgColor.match(/\w{2}/g).map(hex => parseInt(hex, 16));
    } else if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(bgColor)) {
      // Valid RGB color value
      rgb = bgColor.match(/\d+/g).map(Number);
    }
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000; // Calculate brightness
    // Set the text color based on brightness threshold (you can adjust the threshold as needed)
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };
  const checkBoxEffect = event => {
    const button = event.target.parentNode;
    let dataValue = button.getAttribute('data-value');
    if (typeof dataValue === 'undefined') {
      dataValue = '';
    }
    // Remove the "selected" class from all other buttons
    const buttons = document.querySelectorAll('.design-option-btn-popup');
    buttons.forEach(btn => {
      btn = btn.parentNode;
      if (btn !== button) {
        btn.classList.remove('selected');
      }
    });

    // Toggle the "selected" class for the clicked button
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
      setAttributes({
        [PopupKey]: dataValue
      });
    } else {
      setAttributes({
        [PopupKey]: ''
      });
    }
    closeModal();
  };
  let savedDisplay = '';
  let savedLabel = '';
  const Buttons = options.map((element, index) => {
    let selected = 'design-option-item';
    if (PopupValue === element.value) {
      selected = 'design-option-item selected';
      savedDisplay = element.display;
      savedLabel = element.label;
    }
    let myStyle = {};
    if (element.display.startsWith('#')) {
      myStyle = {
        backgroundColor: element.display,
        color: getContrastingTextColor(element.display),
        fontSize: '20px'
      };
    } else {
      myStyle = {
        backgroundImage: 'url(' + __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + element.display) + ')'
      };
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: element.label,
      position: 'bottom'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: selected,
      "data-value": element.value
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      style: myStyle,
      onClick: event => {
        checkBoxEffect(event);
      },
      className: "design-option-btn-popup"
    }, element.display.startsWith('#') ? element.label : ''))));
  });
  let mySavedStyle = {};
  if (savedDisplay) {
    if (savedDisplay.startsWith('#')) {
      mySavedStyle = {
        backgroundColor: savedDisplay,
        color: getContrastingTextColor(savedDisplay),
        fontSize: '20px'
      };
    } else {
      mySavedStyle = {
        backgroundImage: 'url(' + __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + savedDisplay) + ')'
      };
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, savedDisplay === '' || typeof savedDisplay === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: openModal,
    "data-color": "default"
  }, ButtonText) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: savedLabel,
    position: 'bottom'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "popup-output"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "popup-btn",
    onClick: openModal,
    style: mySavedStyle
  }, savedDisplay.startsWith('#') ? savedLabel : ''))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dc-popup-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openModal,
    className: "is-secondary"
  }, "Replace Option"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => {
      setAttributes({
        [PopupKey]: ''
      });
    },
    className: "is-link is-destructive"
  }, "Remove Option")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help)), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isFullScreen: true,
    title: "Shapes",
    onRequestClose: closeModal,
    className: "dc-popup dc-design-shapes"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "design-option"
  }, Buttons)));
}

/***/ }),

/***/ "./src/edit.jsx":
/*!**********************!*\
  !*** ./src/edit.jsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Media_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Media.jsx */ "./src/components/Media.jsx");
/* harmony import */ var _components_Popup_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Popup.jsx */ "./src/components/Popup.jsx");
/* harmony import */ var _components_DesignOption_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DesignOption.jsx */ "./src/components/DesignOption.jsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    bgDesignType,
    bgWidth,
    ctnShape,
    className
  } = attributes;
  const myCustomClassName = className ? className : undefined;
  const myCustomWidthClass = bgWidth ? 'content-width-border editor-' + bgWidth : undefined;
  const myCustomDesignClass = bgDesignType ? 'editor-' + bgDesignType : undefined;
  const myCustomShape = ctnShape ? 'editor-' + ctnShape : undefined;
  const classes = [myCustomWidthClass, myCustomDesignClass, myCustomClassName, myCustomShape];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes.join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Width'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please choose container width.'),
    selected: bgWidth,
    options: [{
      label: 'Width 1180px (Default)',
      value: 'ctn'
    }, {
      label: 'Width 980px',
      value: 'ctn-980'
    }, {
      label: 'Width 760px',
      value: 'ctn-760'
    }],
    onChange: value => setAttributes({
      bgWidth: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Design'),
    className: "dc-design-component",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DesignOption_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    props: props,
    value: bgDesignType,
    DesignKey: "bgDesignType",
    help: "Click to select value",
    options: [{
      label: 'Container Red',
      value: 'ctn-red',
      display: '#ff0000'
    }, {
      label: 'Container Black',
      value: 'ctn-black',
      display: 'ctn-black.png'
    }, {
      label: 'Container Sea Green',
      value: 'ctn-sea-green',
      display: 'ctn-sea-green.png'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Overlay'),
    className: "dc-media-component",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Media_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    props: props,
    help: "Please upload the overlay image."
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Options (Test)'),
    className: "dc-popup-component",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Popup_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    props: props,
    PopupKey: "ctnShape",
    PopupValue: ctnShape,
    ButtonText: "Click for Options",
    help: "Click to change or remove the value.",
    options: [{
      label: 'Container Light Gray',
      value: 'ctn-lgray',
      display: 'ctn-lgray.png'
    }, {
      label: 'Container White',
      value: 'ctn-white',
      display: 'ctn-white.png'
    }, {
      label: 'Container Green',
      value: 'ctn-green',
      display: '#bfff00'
    }, {
      label: 'Container Purple',
      value: 'ctn-purple',
      display: 'ctn-purple.png'
    }]
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: [bgDesignType, bgWidth].join(' ')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)));
}

/***/ }),

/***/ "./src/helper/useImage.jsx":
/*!*********************************!*\
  !*** ./src/helper/useImage.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UseImage = fileName => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchImage = async () => {
      try {
        const response = await __webpack_require__("./src/images sync recursive ^\\.\\/.*$")(`./${fileName}`); // change relative path to suit your needs
        console.log(response);
        setImage(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [fileName]);
  return {
    loading,
    error,
    image
  };
};
/* harmony default export */ __webpack_exports__["default"] = (UseImage);

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.jsx */ "./src/edit.jsx");
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.jsx */ "./src/save.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.jsx":
/*!**********************!*\
  !*** ./src/save.jsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    bgImage,
    bgDesignType,
    bgWidth,
    className,
    ctnShape
  } = attributes;
  const myCustomDesignClass = bgDesignType ? bgDesignType : undefined;
  const myCustomShape = ctnShape ? ctnShape : undefined;
  const myCustomWidthClass = bgWidth ? bgWidth : undefined;
  const myCustomClassName = className ? className : undefined;
  let myOverlayClass = '';
  let myStyle = {};
  if (bgImage.isOverlay) {
    myOverlayClass = 'has-overlay';
  }
  if (bgImage.url !== '') {
    myStyle = {
      backgroundImage: 'url(' + bgImage.url + ')'
    };
  }
  const classes = [myCustomDesignClass, myCustomWidthClass, myCustomClassName, myOverlayClass, myCustomShape];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: classes.join(' '),
    style: myStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/images/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ctn-black.png": "./src/images/ctn-black.png",
	"./ctn-green.png": "./src/images/ctn-green.png",
	"./ctn-lgray.png": "./src/images/ctn-lgray.png",
	"./ctn-purple.png": "./src/images/ctn-purple.png",
	"./ctn-red.png": "./src/images/ctn-red.png",
	"./ctn-sea-green.png": "./src/images/ctn-sea-green.png",
	"./ctn-white.png": "./src/images/ctn-white.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/images/ctn-black.png":
/*!**********************************!*\
  !*** ./src/images/ctn-black.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-black.d5c0d59d.png";

/***/ }),

/***/ "./src/images/ctn-green.png":
/*!**********************************!*\
  !*** ./src/images/ctn-green.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-green.726491b7.png";

/***/ }),

/***/ "./src/images/ctn-lgray.png":
/*!**********************************!*\
  !*** ./src/images/ctn-lgray.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-lgray.95d992b9.png";

/***/ }),

/***/ "./src/images/ctn-purple.png":
/*!***********************************!*\
  !*** ./src/images/ctn-purple.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-purple.f499bcf9.png";

/***/ }),

/***/ "./src/images/ctn-red.png":
/*!********************************!*\
  !*** ./src/images/ctn-red.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-red.0445af9f.png";

/***/ }),

/***/ "./src/images/ctn-sea-green.png":
/*!**************************************!*\
  !*** ./src/images/ctn-sea-green.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-sea-green.68c077f4.png";

/***/ }),

/***/ "./src/images/ctn-white.png":
/*!**********************************!*\
  !*** ./src/images/ctn-white.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/ctn-white.72e0592a.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"basethemepack/section-container","version":"1.0.0","title":"Section Container","category":"theme-blocks","icon":"align-center","description":"Block to Manager Available Sections","supports":{"html":false,"align":["wide","full"]},"attributes":{"bgDesignType":{"type":"string","default":""},"bgWidth":{"type":"string","default":"ctn"},"ctnShape":{"type":"string","default":""},"bgImage":{"type":"object","default":{"title":"","filename":"","url":"","isOverlay":false}}},"textdomain":"section-container","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbasethemepack"] = self["webpackChunkbasethemepack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map