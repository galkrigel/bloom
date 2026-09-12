import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors, typography } from '@/ui';

/**
 * The tab bar layout.
 *
 * Flutter parallel: a Scaffold with a BottomNavigationBar wired to an
 * IndexedStack — except you never manage the selected index yourself.
 * Each <Tabs.Screen name="x" /> maps to the file app/(tabs)/x.tsx.
 */
export default function TabsLayout() {
  return (
    <Tabs
      // screenOptions applies to EVERY tab. Per-tab `options` override it.
      screenOptions={{
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarLabelStyle: typography.caption,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        headerTitleStyle: { ...typography.title, color: colors.text },
        headerTitleAlign: 'left',
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index" // -> app/(tabs)/index.tsx, the default route "/"
        options={{
          title: 'Expenses',
          // React calls this function and hands it the current colour/size.
          // Passing a FUNCTION that returns UI is called a "render prop".
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
