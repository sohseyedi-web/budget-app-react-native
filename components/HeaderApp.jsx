import { Image, Pressable, StyleSheet, View } from 'react-native'
import { hp } from '../utils/common'
import { useRouter } from 'expo-router'
import { PlusIcon, Cog6ToothIcon } from "react-native-heroicons/outline";
import { useState } from 'react';
import ModalProvider from './ModalProvider';
import TransactionForm from './TransactionForm';

const HeaderApp = () => {

    const router = useRouter()
    const [isModalVisible, setModalVisible] = useState(false);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleRouter = (value) => {
        router.push(value)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => handleRouter("/profile")}>
                <Image style={styles.avatar} source={require("../assets/defaultUser.png")} resizeMode='contain' />
            </Pressable>
            <View style={styles.icons}>
                <Pressable
                    style={[styles.icon, { backgroundColor: "#73EC8B" }]}
                    onPress={openModal}
                >
                    <PlusIcon size={"28"} color={"#141414"} />
                </Pressable>
                <ModalProvider title={"Transaction"} onClose={closeModal} isModalVisible={isModalVisible}>
                    <TransactionForm onClose={closeModal} />
                </ModalProvider>
                <Pressable
                    style={[styles.icon, { backgroundColor: "#c1c1c1" }]}
                    onPress={() => handleRouter("/setting")}
                >
                    <Cog6ToothIcon size={"28"} color={"#141414"} />
                </Pressable>
            </View>
        </View>
    )
}

export default HeaderApp
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    avatar: {
        height: hp(6),
        width: hp(6),
        borderRadius: 18
    },
    icons: {
        flexDirection: "row",
        columnGap: 10
    },
    icon: {
        height: hp(6),
        width: hp(6),
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: '100%',
        height: hp(6.6),
        borderColor: '#202020',
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 10,
        backgroundColor: "#16161a",
        marginBottom: 10,
        fontSize: hp(2.5),
        color: "#fff",
    },
})
