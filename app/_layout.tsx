import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * The ROOT layout. Every route in the app renders inside this component.
 *
 * Flutter parallel: this is your `MaterialApp` — the place where app-wide
 * providers live. Later we'll wrap a Redux <Provider> around here too.
 */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* <Stack> is a navigator. Its children are the routes one level down. */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Points at the app/(tabs) folder. Parentheses = "group, not a URL segment". */}
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
