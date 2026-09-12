import { StyleSheet, View } from 'react-native';
import { Card, Screen, Text, colors, spacing } from '@/ui';

/** Route: "/settings" */
export default function SettingsScreen() {
  return (
    <Screen scroll>
      <View style={styles.section}>
        <Text variant="heading">Cards</Text>
        <Card padded={false}>
          <SettingsRow label="Connected cards" value="None yet" />
          <Divider />
          <SettingsRow label="Sync" value="Phase 2" />
        </Card>
      </View>

      <View style={styles.section}>
        <Text variant="heading">General</Text>
        <Card padded={false}>
          <SettingsRow label="Currency" value="ILS ₪" />
          <Divider />
          <SettingsRow label="Categories" value="8" />
        </Card>
      </View>
    </Screen>
  );
}

function SettingsRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text variant="body">{label}</Text>
      <Text variant="body" color="textSecondary">
        {value}
      </Text>
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  section: { gap: spacing.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // pushes the two children to opposite ends — Flutter's
    // MainAxisAlignment.spaceBetween
    justifyContent: 'space-between',
    padding: spacing.lg,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: spacing.lg,
  },
});
