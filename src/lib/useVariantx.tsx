// useVariantX.ts

/**
 * A React hook that provides dynamic class generation based
 * on a configuration using the VariantX utility.
 * @param config - The configuration object specifying base,
 * variants, compoundVariants, defaultVariants, mediaQueries, globalStyles, 
 * and customUtilities.
 * @returns An object with the current dynamic class and a function to
 * update it with new options.
 *
 * @example
 * ```tsx
 * // Example usage in a component:
 * const { dynamicClass, updateDynamicClass } = useVariantX(componentConfig);
 * 
 * // Update dynamic class when props change
 * React.useEffect(() => {
 *   updateDynamicClass({ color: 'red', size: 'large' });
 * }, []);
 * 
 * // Render component with dynamic class
 * return <div className={dynamicClass}>Your content goes here</div>;
 * ```
 *
 * @table
 * | Parameter | Type            | Description                                                                                   |
 * |-----------|-----------------|-----------------------------------------------------------------------------------------------|
 * | config    | `VariantConfig` | The configuration object specifying base, variants, compoundVariants, defaultVariants, mediaQueries, globalStyles, and customUtilities. |
 * | Returns   | `Object`        | An object with the current dynamic class and a function to update it with new options.        |
 *
 * @table
 * | Method                  | Type                                 | Description                                  |
 * |-------------------------|--------------------------------------|----------------------------------------------|
 * | dynamicClass            | `string`                             | The current dynamically generated class.     |
 * | updateDynamicClass      | `(options: Record<string, string>) => void` | A function to update the dynamic class based on new options. |
 */

import { useEffect, useState } from 'react';
import { vx, VariantConfig } from './variantx';

const useVariantX = (config: VariantConfig) => {
  const [dynamicClass, setDynamicClass] = useState<string>('');

  useEffect(() => {
    const generateClass = vx(config);
    setDynamicClass(generateClass({})); // Initialize with default props
  }, [config]);

  const updateDynamicClass = (options: Record<string, string>) => {
    const generateClass = vx(config);
    setDynamicClass(generateClass(options));
  };

  return { dynamicClass, updateDynamicClass };
};

export { useVariantX };
