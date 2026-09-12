import { StyleSheet, View } from 'react-native';
import { Button, Card, Screen, Text, colors, radius, spacing } from '@/ui';

/**
 * Route: "/"
 *
 * Everything here is built from our design system — no raw colours or
 * pixel values in this file. That's the rule that keeps the app consistent.
 */
export default function ExpensesScreen() {
  return (
    <Screen scroll>
      {/* --- Balance summary --- */}
      <Card>
        <Text variant="label" color="textSecondary">
          Spent this month
        </Text>
        <Text variant="display" style={styles.amount}>
          ₪4,182
        </Text>

        {/* flexDirection: 'row' is how you make a Row. There is no <Row> tag. */}
        <View style={styles.deltaRow}>
          <View style={styles.badge}>
            <Text variant="caption" color="brand">
              ↓ 12%
            </Text>
          </View>
          <Text variant="caption" color="textSecondary">
            vs. last month
          </Text>
        </View>
      </Card>

      {/* --- Placeholder rows, replaced by real data in Step 4 --- */}
      <View style={styles.section}>
        <Text variant="heading">Recent</Text>
        <Card padded={false}>
          <PlaceholderRow merchant="Shufersal" category="Groceries" amount="₪248.90" />
          <Divider />
          <PlaceholderRow merchant="Wolt" category="Restaurants" amount="₪72.00" />
          <Divider />
          <PlaceholderRow merchant="Paz" category="Transport" amount="₪310.45" last />
        </Card>
      </View>

      <Button label="Add expense" onPress={() => {}} />
    </Screen>
  );
}

/**
 * A small component defined in the same file because it's only used here.
 * Once it's needed elsewhere it moves to src/features/expenses/components/.
 *
 * Flutter parallel: a private _PlaceholderRow widget below your main class.
 */
function PlaceholderRow({
  merchant,
  category,
  amount,
  last = false,
}: {
  merchant: string;
  category: string;
  amount: string;
  last?: boolean;
}) {
  return (
    <View style={[styles.row, last && styles.rowLast]}>
      {/* flex: 1 makes this View eat the leftover width, pushing the
          amount to the right edge. Flutter parallel: Expanded. */}
      <View style={styles.rowText}>
        <Text variant="bodyStrong">{merchant}</Text>
        <Text variant="caption" color="textSecondary">
          {category}
        </Text>
      </View>
      <Text variant="bodyStrong">{amount}</Text>
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  amount: { marginTop: spacing.xs },
  deltaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  badge: {
    backgroundColor: colors.brandSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  section: { gap: spacing.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  rowLast: {},
  rowText: { flex: 1, gap: 2 },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: spacing.lg,
  },
});
