import { StyleSheet, View } from 'react-native';
import { Card, Screen, Text, colors, radius, spacing } from '@/ui';

/** Route: "/insights" — the pie chart arrives in Step 6. */
export default function InsightsScreen() {
  return (
    <Screen scroll>
      <Card style={styles.chartPlaceholder}>
        <View style={styles.circle} />
        <Text variant="label" color="textSecondary" center>
          Category breakdown lands here in Step 6
        </Text>
      </Card>

      <View style={styles.section}>
        <Text variant="heading">By category</Text>
        <Card>
          <Text variant="body" color="textSecondary">
            Once the mock data exists (Step 3) this becomes a real list.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  chartPlaceholder: {
    alignItems: 'center',
    gap: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  circle: {
    width: 160,
    height: 160,
    // borderRadius = half the width turns a square into a circle.
    // There is no <Circle> — you round the corners all the way.
    borderRadius: radius.full,
    borderWidth: 24,
    borderColor: colors.surfaceMuted,
  },
  section: { gap: spacing.md },
});
