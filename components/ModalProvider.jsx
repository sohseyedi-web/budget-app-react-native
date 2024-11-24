import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { wp } from '../utils/common'

const ModalProvider = ({ onClose, title, children, isModalVisible }) => {
    return (
        <Modal
            transparent={true}
            visiblea={isModalVisible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <XMarkIcon size={25} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalContent}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalProvider

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: "90%",
        backgroundColor: '#1c2029',
        borderRadius: 18,
        paddingVertical: 10
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#16161a',
        marginBottom:10,
        paddingHorizontal: wp(4),
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff"
    },
    closeButton: {
        padding: 5,
    },
    modalContent: {
        alignItems: 'center',
        rowGap: 5,
        paddingHorizontal: wp(4),
    },
})