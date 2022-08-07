import * as React from 'react';
import { ThemeConfig } from './theme-render';
export interface ThemeManagerProps<T extends ThemeConfig> {
    theme: T;
    setTheme: React.Dispatch<React.SetStateAction<T>>;
}
declare const ctx: React.Context<ThemeManagerProps<any>>;
interface ThemeManagerProviderProps {
    defaultTheme: ThemeConfig;
    children: React.ReactNode | React.ReactNode[];
}
export declare const ThemeManagerProvider: React.FC<ThemeManagerProviderProps>;
export default ctx;
