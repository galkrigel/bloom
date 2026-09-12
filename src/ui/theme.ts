/**
 * Design tokens — the single source of truth for how Bloom looks.
 *
 * Flutter parallel: this is your ThemeData / AppColors class. The difference is
 * that nothing here is magic: it's a plain object. There is no InheritedWidget
 * and no `Theme.of(context)`. You just import it.
 */

export const colors = {
  // Surfaces
  background: '#F7F8FA', // the page behind everything
  surface: '#FFFFFF', // cards sit on top of the background
  surfaceMuted: '#F2F4F7', // pressed states, chips
  border: '#EAECF0',

  // Text — three levels of emphasis, matching most modern design systems
  text: '#101828',
  textSecondary: '#667085',
  textTertiary: '#98A2B3',
  textInverse: '#FFFFFF',

  // Brand — Bloom is green (things growing)
  brand: '#16A34A',
  brandDark: '#15803D',
  brandSoft: '#DCFCE7',

  // Semantic
  danger: '#D92D20',
  dangerSoft: '#FEE4E2',
  warning: '#F79009',
  success: '#12B76A',
} as const;

/**
 * A spacing SCALE, not free numbers. Always use spacing.md, never `16`.
 * This is what stops a UI from drifting into 14px here, 15px there.
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999, // a big number is how you make a pill/circle in RN
} as const;

/**
 * Type scale. Each entry is a plain style object you can spread into a
 * StyleSheet. Flutter parallel: TextTheme.headlineMedium etc.
 *
 * Note fontWeight values are STRINGS in React Native ('700', not 700).
 */
export const typography = {
  display: { fontSize: 34, fontWeight: '700', letterSpacing: -0.5 },
  title: { fontSize: 24, fontWeight: '700', letterSpacing: -0.3 },
  heading: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 15, fontWeight: '400' },
  bodyStrong: { fontSize: 15, fontWeight: '600' },
  label: { fontSize: 13, fontWeight: '500' },
  caption: { fontSize: 12, fontWeight: '400' },
} as const;

/**
 * iOS and Android express elevation differently, so we bundle both.
 * Spread this into a style: `...shadow.card`
 */
export const shadow = {
  card: {
    shadowColor: '#101828',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android only — ignored on iOS
  },
} as const;

// Handy derived types, so components can say `variant: TypographyVariant`
export type TypographyVariant = keyof typeof typography;
export type ColorName = keyof typeof colors;
