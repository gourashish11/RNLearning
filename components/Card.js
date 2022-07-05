import { View, StyleSheet } from 'react-native'
import Colors from '../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        alignItems: 'center',
        marginTop: 20
    }
});