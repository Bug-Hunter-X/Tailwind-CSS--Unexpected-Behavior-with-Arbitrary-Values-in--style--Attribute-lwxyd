# Tailwind CSS: Unexpected Behavior with Arbitrary Values in `style` Attribute

This repository demonstrates an uncommon bug in Tailwind CSS where using arbitrary values in the `style` attribute can cause unexpected styling inconsistencies. This is because Tailwind's utility classes rely on its internal system for applying styles, and injecting arbitrary values directly may lead to conflicts.

## Bug Description

Using `calc()` or other direct CSS values within the `style` attribute might clash with how Tailwind manages styles.  This is more likely to be seen when dealing with responsive designs and complex layouts where Tailwind's built-in responsive modifiers aren't used. 

## How to Reproduce

1.  Clone the repository.
2.  Run `npm install` (if using npm, or the equivalent for your package manager). 
3.  Open `index.html` in your browser.

You will see the issue if the calculated width unexpectedly doesn't behave as you might assume.

## Solution

The best practice is to avoid using arbitrary values in the `style` attribute and instead use Tailwind's own responsive modifiers and utility classes whenever possible. This ensures compatibility and consistency. If you must use specific values, do so in a separate CSS file to avoid any unintended consequences with Tailwind's class system.