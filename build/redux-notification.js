(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-redux')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-redux'], factory) :
	(global.ReduxNotification = factory(global.React,global.ReactRedux));
}(this, (function (React,reactRedux) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Notifications_Notifications__2Iw8W {\n  position: fixed;\n  z-index: 900;\n  bottom: 0;\n  left: 0;\n  margin: 2em; }\n";
var classes = { "Notifications": "Notifications_Notifications__2Iw8W" };
styleInject(css);

var genID = function genID() {
    var firstPart = Math.random() * 46656 | 0;
    var secondPart = Math.random() * 46656 | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var NOTIFICATIONS = 'NOTIFICATIONS';

var addNotificationFromAction = function addNotificationFromAction(state, _ref) {
    var notification = _ref.notification;
    return [].concat(toConsumableArray(state), [_extends({
        id: genID(8)
    }, notification)]);
};

var createNotification = function createNotification(state, notification) {
    return [].concat(toConsumableArray(state), [_extends({
        id: genID(8)
    }, notification)]);
};


var reducerFns = Object.freeze({
	NOTIFICATIONS: NOTIFICATIONS,
	addNotificationFromAction: addNotificationFromAction,
	createNotification: createNotification
});

var getNotifications = function getNotifications(state) {
  return state[NOTIFICATIONS];
};

var selectors = Object.freeze({
	getNotifications: getNotifications
});

var css$1 = ".Notification_Notification__tXNXt {\n  width: 24em;\n  margin-top: 0.6em;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.5); }\n  .Notification_Notification__tXNXt .Notification_Content__2iLOb {\n    padding: 0.6em; }\n  .Notification_Notification__tXNXt .Notification_ProgressBar__-O1TP {\n    height: 0.3em; }\n  .Notification_Notification__tXNXt button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0;\n    margin: 0.3em;\n    font-weight: normal;\n    border-radius: 0;\n    background-color: transparent;\n    border-color: transparent;\n    box-shadow: none;\n    transition: opacity 600ms ease;\n    opacity: 0; }\n  .Notification_Notification__tXNXt:hover button {\n    opacity: 1; }\n  .Notification_Notification__tXNXt.Notification_Default__2Z5LL {\n    background-color: #ff6d00; }\n    .Notification_Notification__tXNXt.Notification_Default__2Z5LL .Notification_ProgressBar__-O1TP {\n      background-color: #cc5700; }\n  .Notification_Notification__tXNXt.Notification_Success__1p6-X {\n    background-color: #28a745; }\n    .Notification_Notification__tXNXt.Notification_Success__1p6-X .Notification_Content__2iLOb {\n      color: #fff; }\n    .Notification_Notification__tXNXt.Notification_Success__1p6-X .Notification_ProgressBar__-O1TP {\n      background-color: #34ce57; }\n    .Notification_Notification__tXNXt.Notification_Success__1p6-X button {\n      color: #34ce57; }\n      .Notification_Notification__tXNXt.Notification_Success__1p6-X button:hover {\n        color: #5dd879; }\n";
var classes$1 = { "Notification": "Notification_Notification__tXNXt", "Content": "Notification_Content__2iLOb", "ProgressBar": "Notification_ProgressBar__-O1TP", "Default": "Notification_Default__2Z5LL", "Success": "Notification_Success__1p6-X" };
styleInject(css$1);

var styles = {
    'default': classes$1.Default,
    'success': classes$1.Success
};

var Notification = function (_Component) {
    inherits(Notification, _Component);

    function Notification() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Notification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            progress: 100
        }, _this.handleCloseButton = function () {
            _this.setState({ progress: 0 });
        }, _this.handleRemoval = function () {
            setTimeout(function () {
                return _this.props.remove(_this.props.id);
            }, 800);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Notification, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var frameTime = 1 / 30;
            var reduction = this.state.progress / this.props.timeout;
            var frame = reduction * frameTime;
            this.interval = setInterval(function () {
                _this2.setState(function (_ref2) {
                    var progress = _ref2.progress;
                    return { progress: progress - frame };
                }, function () {
                    if (_this2.state.progress > 0) return;
                    clearInterval(_this2.interval);
                    _this2.handleRemoval();
                });
            }, frameTime * 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'div',
                {
                    className: [classes$1.Notification, styles[this.props.type] || styles.success, 'animated', this.state.progress > 0 ? 'bounceInLeft' : 'bounceOutLeft'].join(' ') },
                React__default.createElement(
                    'button',
                    { type: 'button', className: 'btn', onClick: this.handleCloseButton },
                    React__default.createElement('i', { className: 'fa fa-times fa-fw' })
                ),
                React__default.createElement(
                    'div',
                    { className: classes$1.Content },
                    this.props.text
                ),
                React__default.createElement('div', { style: { width: this.state.progress + '%' }, className: classes$1.ProgressBar })
            );
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }]);
    return Notification;
}(React.Component);

Notification.defaultProps = {
    timeout: 10
};

var ADD_NOTIFICATION = 'ADD_NOTIFICATION';
var REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

var actionTypes = Object.freeze({
	ADD_NOTIFICATION: ADD_NOTIFICATION,
	REMOVE_NOTIFICATION: REMOVE_NOTIFICATION
});

var addNotification = function addNotification(_ref) {
    var displayType = _ref.displayType,
        text = _ref.text,
        timeout = _ref.timeout;

    return {
        type: ADD_NOTIFICATION,
        text: text,
        displayType: displayType,
        timeout: timeout
    };
};

var removeNotification = function removeNotification(id) {
    return {
        type: REMOVE_NOTIFICATION,
        id: id
    };
};



var actions = Object.freeze({
	addNotification: addNotification,
	removeNotification: removeNotification
});

var Notifications = function (_Component) {
    inherits(Notifications, _Component);

    function Notifications() {
        classCallCheck(this, Notifications);
        return possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).apply(this, arguments));
    }

    createClass(Notifications, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                'div',
                { className: classes.Notifications },
                this.props.notifications.map(function (notification) {
                    return React__default.createElement(Notification, _extends({ key: notification.id }, notification, { remove: _this2.props.remove }));
                })
            );
        }
    }]);
    return Notifications;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        notifications: getNotifications(state)
    };
};

var Notifications$1 = reactRedux.connect(mapStateToProps, {
    remove: removeNotification
})(Notifications);

var initialState = [];

var reducer = function reducer(userReducer) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];

        switch (action.type) {
            case ADD_NOTIFICATION:
                return addNotification$1(state, action);
            case REMOVE_NOTIFICATION:
                return removeNotification$1(state, action);
            default:
                return userReducer ? userReducer(state, action) : state;
        }
    };
};

var addNotification$1 = function addNotification(state, _ref) {
    var text = _ref.text,
        displayType = _ref.displayType,
        timeout = _ref.timeout;
    return [].concat(toConsumableArray(state), [{
        id: genID(8),
        text: text,
        displayType: displayType,
        timeout: timeout
    }]);
};

var removeNotification$1 = function removeNotification(state, _ref2) {
    var id = _ref2.id;
    return state.filter(function (notif) {
        return notif.id !== id;
    });
};

var index = _extends({ Notifications: Notifications$1 }, actions, actionTypes, { notificationsReducer: reducer }, selectors, reducerFns);

return index;

})));
//# sourceMappingURL=redux-notification.js.map
