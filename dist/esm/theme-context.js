import * as React from 'react';
import { insertTransitionStyle, renderTheme } from './theme-render';
import { save, load } from './theme-storage';
var ctx = React.createContext({});
export var ThemeManagerProvider = function (props) {
    var _a;
    var _b = React.useState((_a = load()) !== null && _a !== void 0 ? _a : props.defaultTheme), theme = _b[0], setTheme = _b[1];
    React.useEffect(function () {
        save(theme);
        renderTheme(theme);
    }, [theme]);
    React.useEffect(function () {
        insertTransitionStyle();
    }, []);
    return React.createElement(ctx.Provider, { value: {
            theme: theme,
            setTheme: setTheme,
        } }, props.children);
};
export default ctx;
//# sourceMappingURL=theme-context.js.map