/**
 * Barrel file — one import path for the whole design system.
 * Lets screens write:  import { Screen, Text, Card, Button } from '@/ui';
 *
 * Flutter parallel: a `part`/`export` file in your package.
 */
export { Button } from './Button';
export { Card } from './Card';
export { Screen } from './Screen';
export { Text } from './Text';
export * from './theme';
