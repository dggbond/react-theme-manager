var THEME_STYLE_ID = 'theme-style';
var TRANSITION_STYLE_ID = 'theme-transition-style';
// convert camel-style variable to css variable style
// eg: primaryColor --> --primary-color
var convertCamelToCssVar = function (camelName) {
    return '--' + camelName.replace(/([A-Z])/, function ($) { return '-' + $.toLowerCase(); });
};
export var renderTheme = function (theme) {
    var _a;
    /// check if there exist theme style or not
    /// if there is, delete first
    var existStyle = document.querySelector("style#".concat(THEME_STYLE_ID));
    if (existStyle) {
        existStyle.remove();
    }
    var style = document.createElement('style');
    style.id = THEME_STYLE_ID;
    document.head.appendChild(style);
    var cssColorRules = [];
    theme.varColors = {};
    Object.entries(theme.colors).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        var cssVarName = convertCamelToCssVar(k);
        theme.varColors[k] = "var(".concat(cssVarName, ")");
        cssColorRules.push("".concat(cssVarName, ":").concat(v, ";"));
    });
    (_a = style.sheet) === null || _a === void 0 ? void 0 : _a.insertRule(":root {\n    ".concat(cssColorRules.join('\n'), "\n  }"), 0);
};
export var insertTransitionStyle = function () {
    var _a;
    /// check if there exist theme style or not
    /// if there is, return
    var existStyle = document.querySelector("style#".concat(THEME_STYLE_ID));
    if (existStyle)
        return;
    var style = document.createElement('style');
    style.id = TRANSITION_STYLE_ID;
    document.head.appendChild(style);
    (_a = style.sheet) === null || _a === void 0 ? void 0 : _a.insertRule("* {\n    transition-property: color, background-color, border;\n    transition-duration: 0.15s;\n    transition-timing-function: ease-out;\n  }", 0);
};
//# sourceMappingURL=theme-render.js.map