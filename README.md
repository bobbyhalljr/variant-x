# VariantX Documentation 

## Introduction

Welcome to the VariantX documentation! VariantX is a utility for dynamically generating Tailwind CSS class names based on a provided configuration. This documentation will guide you through its features, usage, and integration. Created by [Bobby Hall Jr](https://linkedin.com/in/bobbyhalljr), also the creator of [TM-UI](https://instagram.com/tomorrows_ui)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Creating a Configuration](#creating-a-configuration)
   - [Using the `vx` Function](#using-the-vx-function)
   - [Using the `useVariantX` Hook](#using-the-usevariantx-hook)
3. [Examples](#examples)
   - [Example Component](#example-component)
   - [Media Queries and Global Styles](#media-queries-and-global-styles)
   - [Applying Dynamic Styles to a Button](#applying-dynamic-styles-to-a-button)
   - [Extenting Styles for a Card Component](#extenting-styles-for-a-card-component)
   - [Extenting Styles for a Navigation Bar](#extending-styles-for-a-navigation-bar)
4. [Advanced Usage](#advanced-usage)
   - [Custom Utilities](#custom-utilities)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To use the VariantX system in your project, you can install it via npm:

```bash
npm install variantx
```

## Usage
### Creating a Configuration
The first step is to create a configuration object that defines the base styles, variants, compound variants, default variants, media queries, global styles, and custom utilities.

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

## Using the `vx` Function
The `vx` function is used to dynamically generate Tailwind CSS class names based on the provided configuration.

```tsx
// example-usage.tsx
import { vx } from 'tailwind-variants';
import { config } from './variantx-config';

const generateClass = vx(config);

const dynamicClass = generateClass({
  // ... your variant options here
});
```

## Using the useVariantX Hook
The `useVariantX` hook simplifies the usage of VariantX in React components.

```tsx
// example-component.tsx 
import React from 'react';
import { useVariantX } from 'tailwind-variants';
import { config } from './variantx-config';

const YourComponent: React.FC<{ color: string; size: string }> = ({ color, size }) => {
  const { dynamicClass, updateDynamicClass } = useVariantX(config);

  React.useEffect(() => {
    updateDynamicClass({ color, size });
  }, [color, size]);

  return <div className={dynamicClass}>Your content goes here</div>;
};
```

# Examples

## Example Component
Here's an example of how you can use VariantX in a React component.

```tsx
// Example usage of VariantX in a React component
import { useVariantX } from 'tailwind-variants';
import { config } from './variantx-config';

const YourComponent: React.FC<{ color: string; size: string }> = ({ color, size }) => {
  const { dynamicClass, updateDynamicClass } = useVariantX(config);

  React.useEffect(() => {
    updateDynamicClass({ color, size });
  }, [color, size]);

  return <div className={dynamicClass}>Your content goes here</div>;
};
```

## Media Queries and Global Styles
You can also include media queries and global styles in your configuration.

```tsx
// Example media queries and global styles in the configuration
const config: VariantConfig = {
  base: 'text-base p-4',
  mediaQueries: {
    '@media (min-width: 768px)': 'padding: 20px;',
  },
  globalStyles: 'border rounded',
  // ... other configuration options
};
```

# Advanced Usage

## Custom Utilities
VariantX supports the addition of custom utilities for more flexibility.

```tsx
// Example custom utilities in the configuration
const config: VariantConfig = {
  customUtilities: {
    '.custom-utility': 'margin: 10px;',
  },
  // ... other configuration options
};
```

# More Examples ...

## Applying Dynamic Styles to a Button

```tsx
// CustomButton.tsx
import React from 'react';
import { useVariantX } from 'variantx';
import { config as buttonConfig } from './variantx-config';

const CustomButton: React.FC<{ variant: string; size: string }> = ({ variant, size }) => {
  // Use the VariantX hook with the button configuration
  const { dynamicClass, updateDynamicClass } = useVariantX(buttonConfig);

  React.useEffect(() => {
    // Update the dynamic class based on the provided props
    updateDynamicClass({ variant, size });
  }, [variant, size]);

  return <button className={dynamicClass}>Click me</button>;
};

export default CustomButton;
```


## Applying Dynamic Styles to a Card Component

```tsx
// CardComponent.tsx
import React from 'react';
import { useVariantX } from 'tailwind-variants';
import { config as cardConfig } from './variantx-config';

const CardComponent: React.FC<{ color: string; size: string }> = ({ color, size }) => {
  // Use the VariantX hook with the card configuration
  const { dynamicClass, updateDynamicClass } = useVariantX(cardConfig);

  React.useEffect(() => {
    // Update the dynamic class based on the provided props
    updateDynamicClass({ color, size });
  }, [color, size]);

  return <div className={dynamicClass}>Card content goes here</div>;
};

export default CardComponent;
```

## Applying Dynamic Styles to a Navigation Bar

```tsx
// Navbar.tsx
import React from 'react';
import { useVariantX } from 'tailwind-variants';
import { config as navbarConfig } from './variantx-config';

const Navbar: React.FC<{ theme: string }> = ({ theme }) => {
  // Use the VariantX hook with the navbar configuration
  const { dynamicClass, updateDynamicClass } = useVariantX(navbarConfig);

  React.useEffect(() => {
    // Update the dynamic class based on the provided theme
    updateDynamicClass({ theme });
  }, [theme]);

  return <nav className={dynamicClass}>Navbar content goes here</nav>;
};

export default Navbar;
```

## Customizing the Configuration
The configuration (`variantx-config.ts`) can be customized based on your project's specific styling needs. You can define variants for colors, sizes, compound variants, media queries, global styles, and custom utilities.

For more advanced use cases and examples, refer to the [VariantX GitHub repository](https://github.com/bobbyhalljr/variantx).

Feel free to explore and experiment with the VariantX system to streamline your styling workflow and maintain a consistent design language throughout your application.

## Contributing
If you would like to contribute to the VariantX system, please follow our [contribution guidelines](#CONTRIBUTION-md).

## License
This project is licensed under VariantX © 2023 by Bobby Hall Jr is licensed under CC BY 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/

This license requires that reusers give credit to the [creator](https://www.linkedin.com/in/bobbyhalljr). It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.

VariantX © 2023 by Bobby Hall Jr is licensed under CC BY 4.0 

### Note:
**Please note that the paths for `variantx-config.ts`, `example-usage.tsx`, and `example-component.tsx` are placeholders. Make sure to adjust them based on your project structure.**