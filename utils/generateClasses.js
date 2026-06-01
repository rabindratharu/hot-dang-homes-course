import classNames from 'classnames';


/**
 * Generates Tailwind CSS classes for layout styling
 * @param {Object} layout - Layout configuration object
 * @returns {string} Combined layout classes
 */
const getLayout = (layout) => {
  const classes = [];

  if (layout) {
    // Display type
    if (layout?.type === 'flex') {
      classes.push('flex gap-2');
    } else if (layout?.type === 'grid') {
      classes.push('grid gap-2');
    } else if (layout?.type === 'block') {
      classes.push('block');
    }

    // Justify content
    if (layout?.justifyContent) {
      const justifyMap = {
        'left': 'justify-start',
        'center': 'justify-center',
        'right': 'justify-end',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly',
        'flex-start': 'justify-start',
        'flex-end': 'justify-end'
      };
      
      classes.push(justifyMap[layout.justifyContent] || '');
    }

    // Orientation (flex direction)
    if (layout?.orientation) {
      if (layout.orientation === 'vertical') {
        classes.push('flex-col');
      } else if (layout.orientation === 'horizontal') {
        classes.push('flex-row');
      }
    }

    // Align items (add if needed)
    if (layout?.alignItems) {
      const alignMap = {
        'start': 'items-start',
        'center': 'items-center',
        'end': 'items-end',
        'stretch': 'items-stretch'
      };
      classes.push(alignMap[layout.alignItems] || '');
    }
  }

  return classes.filter(Boolean).join(' ');
};
/**
 * Gets text alignment class based on alignment value
 * @param {string} textAlign - Text alignment value
 * @returns {string} Tailwind text alignment class
 */
const getTextAlign = (textAlign) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };
  return alignments[textAlign] || '';
};

/**
 * Gets text alignment class based on alignment value
 * @param {string} textAlign - Text alignment value
 * @returns {string} Tailwind text alignment class
 */
const getAlign = (align) => {
  const alignment = {
    wide: 'max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full mx-auto',
  };
  return alignment[align] || '';
};

/**
 * Gets width class based on percentage value
 * @param {number|string} width - Width percentage (25, 50, 75, 100)
 * @returns {string} Tailwind width class
 */
const getWidth = (width) => {
  const widths = {
    25: 'w-1/4',
    50: 'w-1/2',
    75: 'w-3/4',
    100: 'w-full'
  };
  return widths[width] || '';
};

/**
 * Gets font size class based on heading level
 * @param {number|string} level - Heading level (1-6)
 * @returns {string} Tailwind font size class
 */
const getFontSize = (level) => {
  const sizes = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl',
  };
  return sizes[level] || '';
};

/**
 * Generates CSS classes for styling based on the provided style object
 * @param {Object} attributes - Block attributes
 * @param {number|string} attributes.level - Heading level
 * @param {string} attributes.textAlign - Text alignment
 * @param {string} attributes.className - Additional CSS class
 * @param {Object} attributes.style - Style configuration object
 * @returns {string} Combined class names
 */
export const generateClasses = (attributes) => {
  const { level, textAlign, className, style, layout, width, align } = attributes || {};
  return classNames(
    className,
    getTextAlign(textAlign),
    getAlign(align),
    getLayout(layout),
    getFontSize(level),
    getWidth(width),
    getColorClasses(style?.color, style?.elements?.link),
    getSpacingClasses(style?.spacing),
    getBorderClasses(style?.border),
    getTypographyClasses(style?.typography)
  );
};

/**
 * Generates inline styles with CSS variables
 * @param {Object} style - Style configuration object
 * @returns {Object} Object containing CSS variables as inline styles
 */
export const generateStyle = (style) => {
  return {
    ...getColorVariables(style?.color, style?.elements?.link),
    ...getSpacingVariables(style?.spacing),
    ...getBorderVariables(style?.border),
    ...getTypographyVariables(style?.typography)
  };
};

/**
 * Generates CSS variables for dynamic color styling
 * @param {Object} color - Color configuration object
 * @param {Object} link - Link color configuration object
 * @returns {Object} Object containing CSS variables
 */
export const getColorVariables = (color, link) => {
  const cssVariables = {};

  // Helper function to safely set CSS variable
  const setIfValid = (key, value) => {
    if (value && typeof value === 'string' && value.trim()) {
      cssVariables[key] = value.trim();
    }
  };

  // Main colors
  setIfValid('--text-color', color?.text);
  setIfValid('--background-color', color?.background);

  // Link colors
  setIfValid('--link-color', link?.color?.text);
  setIfValid('--link-hover-color', link?.[':hover']?.color?.text);

  return cssVariables;
};

/**
 * Generates CSS variables for dynamic spacing styling
 * @param {Object} spacing - Spacing configuration object
 * @returns {Object} Object containing CSS variables for spacing
 */
export const getSpacingVariables = (spacing) => {
  const cssVariables = {};

  // Helper function to safely set CSS variable
  const setIfValid = (key, value) => {
    if (value && typeof value === 'string' && value.trim()) {
      cssVariables[key] = value.trim();
    }
  };

  // Margin variables
  if (spacing?.margin) {
    const { top, right, bottom, left } = spacing.margin;
    setIfValid('--margin-top', top);
    setIfValid('--margin-right', right);
    setIfValid('--margin-bottom', bottom);
    setIfValid('--margin-left', left);
  }

  // Padding variables
  if (spacing?.padding) {
    const { top, right, bottom, left } = spacing.padding;
    setIfValid('--padding-top', top);
    setIfValid('--padding-right', right);
    setIfValid('--padding-bottom', bottom);
    setIfValid('--padding-left', left);
  }

  return cssVariables;
};

/**
 * Generates CSS variables for dynamic typography styling
 * @param {Object} typography - Typography configuration object
 * @returns {Object} Object containing CSS variables for typography
 */
export const getTypographyVariables = (typography) => {
  const cssVariables = {};

  const setIfValid = (key, value) => {
    if (value && typeof value === 'string' && value.trim()) {
      cssVariables[key] = value.trim();
    } else if (value && typeof value === 'number') {
      cssVariables[key] = value.toString();
    }
  };

  if (typography) {
    setIfValid('--font-size', typography.fontSize);
    setIfValid('--font-style', typography.fontStyle);
    setIfValid('--font-weight', typography.fontWeight);
    setIfValid('--letter-spacing', typography.letterSpacing);
    setIfValid('--line-height', typography.lineHeight);
    setIfValid('--text-decoration', typography.textDecoration);
    setIfValid('--writing-mode', typography.writingMode);
  }

  return cssVariables;
};

/**
 * Generates Tailwind CSS classes for typography using CSS variables
 * @param {Object} typography - Typography configuration object
 * @returns {string} Combined typography classes
 */
const getTypographyClasses = (typography) => {
  const classes = [];

  if (typography) {
    // Font size - use arbitrary property to avoid Tailwind interpreting as color
    if (typography.fontSize?.toString().trim()) {
      classes.push('[font-size:var(--font-size)]');
    }

    // Font style
    if (typography.fontStyle?.trim()) {
      classes.push('[font-style:var(--font-style)]');
    }

    // Font weight
    if (typography.fontWeight?.toString().trim()) {
      classes.push('[font-weight:var(--font-weight)]');
    }

    // Letter spacing
    if (typography.letterSpacing?.toString().trim()) {
      classes.push('[letter-spacing:var(--letter-spacing)]');
    }

    // Line height
    if (typography.lineHeight?.toString().trim()) {
      classes.push('[line-height:var(--line-height)]');
    }

    // Text decoration
    if (typography.textDecoration?.trim()) {
      classes.push('[text-decoration:var(--text-decoration)]');
    }

    // Writing mode
    if (typography.writingMode?.trim()) {
      classes.push('[writing-mode:var(--writing-mode)]');
    }
  }

  return classes.join(' ');
};

/**
 * Generates Tailwind CSS classes for text, background, and link colors using CSS variables
 * @param {Object} color - Color configuration object
 * @param {Object} link - Link color configuration object
 * @returns {string} Combined color classes
 */
const getColorClasses = (color, link) => {
  const classes = [];

  // Main colors - use explicit arbitrary properties
  if (color) {
    if (color.text?.trim()) classes.push('[color:var(--text-color)]');
    if (color.background?.trim()) classes.push('[background-color:var(--background-color)]');
  }

  // Link colors
  if (link) {
    if (link.color?.text?.trim()) {
      classes.push(
        '[&_a]:[color:var(--link-color)]'
      );
    }

    if (link[':hover']?.color?.text?.trim()) {
      classes.push(
        '[&_a:hover]:[color:var(--link-hover-color)]'
      );
    }
  }

  return classes.join(' ');
};

/**
 * Generates Tailwind CSS classes for margin and padding using CSS variables
 * @param {Object} spacing - Spacing configuration object
 * @returns {string} Combined spacing classes
 */
const getSpacingClasses = (spacing) => {
  const classes = [];

  // Handle margin using CSS variables
  if (spacing?.margin) {
    const { top, right, bottom, left } = spacing.margin;

    if (top?.trim()) classes.push('mt-[var(--margin-top)]');
    if (right?.trim()) classes.push('mr-[var(--margin-right)]');
    if (bottom?.trim()) classes.push('mb-[var(--margin-bottom)]');
    if (left?.trim()) classes.push('ml-[var(--margin-left)]');
  }

  // Handle padding using CSS variables
  if (spacing?.padding) {
    const { top, right, bottom, left } = spacing.padding;

    if (top?.trim()) classes.push('pt-[var(--padding-top)]');
    if (right?.trim()) classes.push('pr-[var(--padding-right)]');
    if (bottom?.trim()) classes.push('pb-[var(--padding-bottom)]');
    if (left?.trim()) classes.push('pl-[var(--padding-left)]');
  }

  return classes.join(' ');
};

/**
 * Generates CSS variables for dynamic border styling
 * @param {Object} border - Border configuration object
 * @returns {Object} Object containing CSS variables for border
 */
export const getBorderVariables = (border) => {
  const cssVariables = {};

  const setIfValid = (key, value) => {
    if (value && typeof value === 'string' && value.trim()) {
      cssVariables[key] = value.trim();
    } else if (value && typeof value === 'number') {
      cssVariables[key] = `${value}px`;
    }
  };

  if (border) {
    // Border width
    if (border.width) {
      setIfValid('--border-width', border.width);
    }

    // Border style
    if (border.style) {
      setIfValid('--border-style', border.style);
    }

    // Border color
    if (border.color) {
      setIfValid('--border-color', border.color);
    }

    // Border radius
    if (border.radius) {
      const { topLeft, topRight, bottomLeft, bottomRight } = border.radius;
      setIfValid('--border-radius-top-left', topLeft);
      setIfValid('--border-radius-top-right', topRight);
      setIfValid('--border-radius-bottom-left', bottomLeft);
      setIfValid('--border-radius-bottom-right', bottomRight);
    }
  }

  return cssVariables;
};

/**
 * Generates Tailwind CSS classes for border styling using CSS variables
 * @param {Object} border - Border configuration object
 * @returns {string} Combined border classes
 */
const getBorderClasses = (border) => {
  const classes = [];

  if (border) {
    // Border width - use border-width utility with arbitrary value
    if (border.width?.toString().trim()) {
      classes.push('border-[length:var(--border-width)]');
    }

    // Border style - use border-style utility with arbitrary value
    if (border.style?.trim()) {
      classes.push('border-[image:none]'); // Reset border-image
      classes.push('[border-style:var(--border-style)]'); // Use arbitrary property
    }

    // Border color
    if (border.color?.trim()) {
      classes.push('border-[color:var(--border-color)]');
    }

    // Border radius
    if (border.radius) {
      const { topLeft, topRight, bottomLeft, bottomRight } = border.radius;
      const hasRadius = topLeft || topRight || bottomLeft || bottomRight;

      if (hasRadius) {
        // Check if all corners have the same value for shorthand
        const allSame = topLeft && topLeft === topRight && topLeft === bottomLeft && topLeft === bottomRight;

        if (allSame) {
          classes.push('rounded-[var(--border-radius-top-left)]');
        } else {
          // Individual corner radii
          if (topLeft?.trim()) classes.push('rounded-tl-[var(--border-radius-top-left)]');
          if (topRight?.trim()) classes.push('rounded-tr-[var(--border-radius-top-right)]');
          if (bottomRight?.trim()) classes.push('rounded-br-[var(--border-radius-bottom-right)]');
          if (bottomLeft?.trim()) classes.push('rounded-bl-[var(--border-radius-bottom-left)]');
        }
      }
    }
  }

  return classes.join(' ');
};

// Export helper functions for external use
export {
  getTextAlign,
  getFontSize,
  getSpacingClasses,
  getBorderVariables,
  getBorderClasses,
  getTypographyVariables,
  getTypographyClasses
};