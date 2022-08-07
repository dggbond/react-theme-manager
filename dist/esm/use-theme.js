import { useContext } from "react";
import ctx from './theme-context';
export var useTheme = function () { return useContext(ctx); };
