import {
  Text as RNText, // rename the import so our own component can be called Text
  type TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { colors, typography, type ColorName, type TypographyVariant } from './theme';

/**
 * Our themed Text.
 *
 * Why wrap RN's Text at all? Because raw <Text> has no default color, size or
 * font. Every screen would repeat the same style object. This is the same
 * reason you'd build an AppText widget in Flutter.
 */

// `type Props` is the component's constructor signature.
// Flutter parallel: the named parameters of a widget constructor.
type Props = RNTextProps & {
  variant?: TypographyVariant; // ? means optional, like `String? foo` in Dart
  color?: ColorName;
  center?: boolean;
};

export function Text({
  variant = 'body', // default value, like `this.variant = TextVariant.body`
  color = 'text',
  center = false,
  style, // the caller can always pass extra styles to override ours
  ...rest // everything else (numberOfLines, onPress, accessibilityLabel...) passes through
}: Props) {
  return (
    <RNText
      // A style ARRAY merges left-to-right; later entries win.
      // `false` and `undefined` entries are skipped, which is how you do
      // conditional styling in RN.
      style={[
        styles.base,
        typography[variant],
        { color: colors[color] },
        center && styles.center,
        style, // caller's overrides go LAST so they always win
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    // RN has no global stylesheet — text does NOT inherit from a parent View.
    // Every Text styles itself. This is the biggest difference from CSS.
  },
  center: { textAlign: 'center' },
});
