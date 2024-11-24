import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenProvider({ children, bg = "white", not = false }) {
    const { top } = useSafeAreaInsets();

    const paddingTop = !not ? (top > 5 ? top + 5 : 15) : 0

    return (
        <View style={{ flex: 1, backgroundColor: bg, paddingTop }}>
            <StatusBar style="light" />
            {children}
        </View>
    );
}