import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from './theme';

/**
 * Every screen's outer shell: background colour, horizontal padding, and
 * respect for the notch / home indicator.
 *
 * Flutter parallel: Scaffold + SafeArea + a default Padding.
 */
type Props = {
  children: ReactNode; // anything renderable. Flutter parallel: `Widget child`
  scroll?: boolean;
  padded?: boolean;
  style?: ViewStyle;
};

export function Screen({ children, scroll = false, padded = true, style }: Props) {
  // A HOOK. Any function starting with `use` is a hook, and hooks may only be
  // called at the top level of a component — never inside an if or a loop.
  // This one reads the safe-area sizes from context.
  const insets = useSafeAreaInsets();

  const content = [styles.content, padded && styles.padded, style];

  // We only pad the BOTTOM manually. The tab bar already handles its own
  // inset, but a scroll view needs room so content isn't hidden behind it.
  if (scroll) {
    return (
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[content, { paddingBottom: insets.bottom + spacing.xl }]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.flex, content]}>{children}</View>;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    // NOTE: on a ScrollView the layout styles must go on contentContainerStyle,
    // not style. Putting flex:1 here would break scrolling — a classic RN bug.
    gap: spacing.lg,
  },
  padded: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
});
