import { Stack } from "expo-router";
import { BudgetProvider } from "../context/BudgetProvider";

const RootLayout = () => {
  return (
    <BudgetProvider>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </BudgetProvider>
  )
};

export default RootLayout;
