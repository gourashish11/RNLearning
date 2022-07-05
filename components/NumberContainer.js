import { Text, StyleSheet, View } from 'react-native'
import Colors from '../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>

    )
}

export default NumberContainer

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.primary700,
        textAlign: 'center'
    },
    container: {
        borderRadius: 8,
        borderWidth: 4,
        padding: 24,
        margin: 24,
        borderColor: Colors.primary700,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

