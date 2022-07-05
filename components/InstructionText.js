import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors';

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.title, style]}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary700,
        textAlign: 'center',
        padding: 10
    }
});

