import { Stack } from "expo-router";
import '@/global.css'; // It causes error in the browser, works fine in the emulator

export default function RootLayout() {
  return <Stack />;
}
