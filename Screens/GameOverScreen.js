import { View, Image, StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import PrimaryButton from '../components/PrimaryButton'
function GameOverScreen({ rounds, userNumber, onRestartGame }) {
    return (
        <View style={{ marginHorizontal: 24, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card>
                <InstructionText>Game is over</InstructionText>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summeryText}>
                    You have taken
                    <Text style={styles.highlightedText}> {rounds} </Text>
                    rounds to guess the number
                    <Text style={styles.highlightedText}> {userNumber} </Text>
                </Text>
                <PrimaryButton onPress={onRestartGame}>Restart Game</PrimaryButton>
            </Card>
        </View>

    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 50,
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        marginBottom: 20
    },
    image: {
        height: '100%',
        width: '100%'
    },
    summeryText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    highlightedText: {
        color: Colors.primary700
    }
})