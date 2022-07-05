import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/colors'

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.buttonPressed] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        marginBottom: 10,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.75
    }
})