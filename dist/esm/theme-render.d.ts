export interface ThemeConfig {
    colors: Record<string, string>;
    varColors?: Record<string, string>;
}
export declare const renderTheme: (theme: ThemeConfig) => void;
export declare const insertTransitionStyle: () => void;
