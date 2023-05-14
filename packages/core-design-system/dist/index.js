import * as React from 'react';

var Button = function Button() {
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return alert("boop");
    }
  }, "Boop");
};

var Header = function Header(_a) {
  var text = _a.text;
  return /*#__PURE__*/React.createElement("h1", null, text);
};

export { Button, Header };
//# sourceMappingURL=index.js.map
