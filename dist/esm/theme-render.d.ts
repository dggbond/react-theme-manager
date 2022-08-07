export interface ThemeConfig<T = {}> {
    colors: T;
}
export declare const v: (colorName: string) => string;
export declare const renderTheme: (theme: ThemeConfig) => void;
export declare const insertTransitionStyle: () => void;
