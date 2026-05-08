import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro" options={{ headerShown: true, title: "Cadastro" }} />
      <Stack.Screen name="preview" options={{ headerShown: true, title: "Seu Cartão" }} />
      <Stack.Screen name="sucesso" />
    </Stack>
  );
}