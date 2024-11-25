import { StyleSheet, View } from 'react-native';
import ScreenProvider from './../components/ScreenProvider';
import BackButton from '../components/BackButton';
import { wp } from '../utils/common';
export default function ProfilePage() {
    return (
        <ScreenProvider bg={"#141414"}>
            <View style={styles.container}>
                <BackButton />
            </View>
        </ScreenProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
})