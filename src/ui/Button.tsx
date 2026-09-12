import { ActivityIndicator, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { Text } from './Text';
import { colors, radius, spacing } from './theme';

/**
 * Flutter parallel: ElevatedButton / OutlinedButton / TextButton in one widget.
 *
 * The interesting RN concept here is Pressable's FUNCTION style prop —
 * see the comment below.
 */
type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost'; // a union type, like a Dart enum
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      // Pressable's `style` can be a FUNCTION. RN calls it on every press
      // state change and hands you { pressed }. That's how you get press
      // feedback without any state of your own.
      // Flutter parallel: InkWell's ripple, but you draw it yourself.
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
      // Tells screen readers this is a button, not just a box.
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.textInverse : colors.brand} />
      ) : (
        <Text variant="bodyStrong" color={variant === 'primary' ? 'textInverse' : 'brand'}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center', // cross axis — centers horizontally in a column
    justifyContent: 'center', // main axis — centers vertically in a column
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    gap: spacing.sm,
  },
  primary: { backgroundColor: colors.brand },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: { backgroundColor: 'transparent' },
  pressed: { opacity: 0.75 },
  disabled: { opacity: 0.4 },
});
