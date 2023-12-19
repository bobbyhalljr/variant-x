// variantx.d.ts

declare module 'variantx' {
    type VariantConfig = {
        base?: string;
        variants?: Record<string, Record<string, string>>;
        compoundVariants?: Array<{ [key: string]: string }>;
        defaultVariants?: Record<string, string>;
        mediaQueries?: Record<string, string>;
        globalStyles?: string;
        customUtilities?: Record<string, string>;
    };

    type VariantFunction = (options: Record<string, string>) => string;

    const vx: (config: VariantConfig) => VariantFunction;

    export { vx, VariantConfig, VariantFunction };
}
