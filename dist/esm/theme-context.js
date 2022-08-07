import * as React from 'react';
import { renderTheme } from './theme-render';
var ctx = React.createContext({});
export var ThemeManagerProvider = function (props) {
    var _a = React.useState(props.defaultTheme), theme = _a[0], setTheme = _a[1];
    React.useEffect(function () {
        renderTheme(theme);
    }, [theme]);
    return React.createElement(ctx.Provider, { value: {
            theme: theme,
            setTheme: setTheme,
        } }, props.children);
};
export default ctx;
//# sourceMappingURL=theme-context.js.map