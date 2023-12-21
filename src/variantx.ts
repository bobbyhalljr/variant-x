// variantx.ts

/**
 * Generates Tailwind CSS class names based on the provided configuration,
 * allowing for flexible and reusable styling with support for variants,
 * compound variants, default variants, media queries, global styles,
 * and custom utilities. Adds a prefix to avoid conflicts with existing
 * Tailwind CSS classes.
 *
 * @param config - The configuration for generating classes.
 * @param prefix - The prefix to be added to all generated classes.
 *                 Defaults to 'tmui' (e.g., 'tmui-base', 'tmui-variant').
 * @returns The generated Tailwind CSS class names.
 */

export type VariantConfig = {
  base?: string;
  variants?: Record<string, Record<string, string>>;
  compoundVariants?: Array<{ [key: string]: string }>;
  defaultVariants?: Record<string, string>;
  mediaQueries?: Record<string, string>;
  globalStyles?: string;
  customUtilities?: Record<string, string>;
};

const vx = (config: VariantConfig, prefix: string = 'tmui') => {
  const {
    base = '',
    variants = {},
    compoundVariants = [],
    defaultVariants = {},
    mediaQueries = {},
    globalStyles = '',
    customUtilities = {},
  } = config;

  return (options: Record<string, string>) => {
    const { ...providedVariants } = options;

    let result = `${prefix}-${base}`; // Prefix the base class

    Object.entries(providedVariants).forEach(([variant, value]) => {
      if (variants[variant] && variants[variant][value]) {
        result += ` ${prefix}-${variants[variant][value]}`;
      }
    });

    compoundVariants.forEach((compoundVariant) => {
      const shouldApply = Object.entries(compoundVariant).every(
        ([variant, value]) => providedVariants[variant] === value
      );

      if (shouldApply) {
        result += ` ${prefix}-${compoundVariant.class}`;
      }
    });

    Object.entries(defaultVariants).forEach(([variant, value]) => {
      if (!providedVariants[variant]) {
        result += ` ${prefix}-${variants[variant][value]}`;
      }
    });

    Object.entries(mediaQueries).forEach(([query, styles]) => {
      result += ` ${prefix}-${query}{${styles}}`;
    });

    result += ` ${prefix}-${globalStyles}`;

    Object.entries(customUtilities).forEach(([utility, styles]) => {
      result += ` ${prefix}-${utility}{${styles}}`;
    });

    return result.trim();
  };
};

export { vx }