/**
 * Declare Styled Components Theme types in Typescript. This allows the theme
 * to be properly typed as it is implemented in our application.
 *
 * Styled Components Typescript API Ref: https://styled-components.com/docs/api#typescript
 *
 */

// import all of Styled Components & original module declarations
import 'styled-components';
import { AppTheme } from '@nerve/core/themes';

// Finally, use our theme type as the base for the typed SC `DefaultTheme`
declare module 'styled-components' {
    export type DefaultTheme = AppTheme;
}
