import { useContext } from "react";
import ctx, { ThemeManagerProps } from './theme-context'
import { ThemeConfig } from "./theme-render";

export const useTheme = <T extends ThemeConfig>(): ThemeManagerProps<T> => useContext(ctx)
