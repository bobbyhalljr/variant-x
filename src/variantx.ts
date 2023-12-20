// variantx.ts

/* 
    This function dynamically generates Tailwind CSS class names based on
    a provided configuration, allowing for flexible and reusable styling
    of components with support for variants, compound variants, 
    default variants, media queries, global styles, and custom utilities. 
    It enhances the ease of styling by providing a semantic and organized 
    approach to class generation.
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

const vx = (config: VariantConfig) => {
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

    let result = base;

    Object.entries(providedVariants).forEach(([variant, value]) => {
      if (variants[variant] && variants[variant][value]) {
        result += ` ${variants[variant][value]}`;
      }
    });

    compoundVariants.forEach((compoundVariant) => {
      const shouldApply = Object.entries(compoundVariant).every(
        ([variant, value]) => providedVariants[variant] === value
      );

      if (shouldApply) {
        result += ` ${compoundVariant.class}`;
      }
    });

    Object.entries(defaultVariants).forEach(([variant, value]) => {
      if (!providedVariants[variant]) {
        result += ` ${variants[variant][value]}`;
      }
    });

    Object.entries(mediaQueries).forEach(([query, styles]) => {
      result += ` ${query}{${styles}}`;
    });

    result += ` ${globalStyles}`;

    Object.entries(customUtilities).forEach(([utility, styles]) => {
      result += ` ${utility}{${styles}}`;
    });

    return result.trim();
  };
};


export { vx };