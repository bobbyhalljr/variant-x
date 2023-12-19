# User flow for VariantX:

1. **Installation:**
   - Users install the `variantx` package in their project using the package manager of their choice (`npm` or `yarn`).

   ```bash
   npm install variantx
   ```

2. **Configuration:**
   - Users create a configuration file (`variantx-config.ts`) where they define their styling preferences, including base styles, variants, compound variants, default variants, media queries, global styles, and custom utilities.

   ```tsx
   // variantx-config.ts
   import { vx, VariantConfig } from 'variantx';

   const config: VariantConfig = {
     // ... your configuration here
   };

   export { config };
   ```

<!-- drop down -->
<details>
  <summary>Click to view full configuration file</summary>

```tsx
// variantx-config.ts
import { vx, VariantConfig } from 'variantx';

const config: VariantConfig = {
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
  mediaQueries: {
    'lg:': 'min-width: 1024px',
  },
  globalStyles: '...',
  customUtilities: {
    '.custom-utility': '...',
  },
};

export { config };
```
</details>
<!-- end of drop down -->


3. **Integration:**
   - Users import the `useVariantX` hook and their configuration in the components where they want to apply dynamic styling.

   ```tsx
   // CustomComponent.tsx
   import React from 'react';
   import { useVariantX } from 'variantx';
   import { config } from './variantx-config';

   const CustomComponent: React.FC<{ prop1: string; prop2: string }> = ({ prop1, prop2 }) => {
     const { dynamicClass, updateDynamicClass } = useVariantX(config);

     React.useEffect(() => {
       updateDynamicClass({ prop1, prop2 });
     }, [prop1, prop2]);

     return <div className={dynamicClass}>Component content goes here</div>;
   };

   export default CustomComponent;
   ```

4. **Hook Usage:**
   - Users employ the `useVariantX` hook to get access to the dynamic class generation functionality. This hook returns `dynamicClass` and `updateDynamicClass` functions.

   ```tsx
   const { dynamicClass, updateDynamicClass } = useVariantX(config);
   ```

5. **Updating Styles:**
   - Users call the `updateDynamicClass` function with the desired options (e.g., props) to dynamically update the generated class based on component-specific requirements.

   ```tsx
   React.useEffect(() => {
     updateDynamicClass({ prop1, prop2 });
   }, [prop1, prop2]);
   ```

6. **Application in Components:**
   - Users apply the dynamically generated class (`dynamicClass`) to the desired HTML elements within their React components.

   ```tsx
   return <div className={dynamicClass}>Component content goes here</div>;
   ```

7. **Customization:**
   - Users can customize the configuration to suit their project's styling needs, allowing for a high level of flexibility and adaptability.

   ```tsx
   const config: VariantConfig = {
     // ... customizations here
   };
   ```

8. **Iterative Development:**
   - Users iterate through the development process, refining and adjusting styles dynamically as needed.

By following these steps, developers can seamlessly integrate the VariantX system into their React projects, making it a valuable asset for maintaining a consistent and flexible styling approach.