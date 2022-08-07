import { ThemeManagerProps } from './theme-context';
import { ThemeConfig } from "./theme-render";
export declare const useTheme: <T extends ThemeConfig<{}>>() => ThemeManagerProps<T>;
