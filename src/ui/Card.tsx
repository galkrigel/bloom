import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { colors, radius, shadow, spacing } from './theme';

/**
 * A white rounded surface.
 *
 * Flutter parallel: Card / Container(decoration: BoxDecoration(...)).
 * Note how ONE View replaces Container + Padding + DecoratedBox — in RN
 * padding, background, border and radius all live on the same element.
 */
type Props = {
  children: ReactNode;
  style?: ViewStyle;
  padded?: boolean;
};

export function Card({ children, style, padded = true }: Props) {
  return <View style={[styles.card, padded && styles.padded, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth, // thinnest line the screen can draw
    borderColor: colors.border,
    ...shadow.card, // spread the platform shadow tokens in
  },
  padded: {
    padding: spacing.lg,
  },
});
