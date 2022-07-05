import Title from '../components/Title';
import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import Card from '../components/Card';

function generateRandomNumberBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        generateRandomNumberBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialNumber = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialNumber)
    const [rounds, setRounds] = useState(0)

    useEffect(() => {
        if (currentGuess === userNumber) {
            minBoundary = 1
            maxBoundary = 100
            setCurrentGuess(null)
            onGameOver(rounds)
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessNumberHandler(direction) {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert('Dont lie', 'You know that this is wrong', [{ text: 'Sorry', style: 'cancel' }])
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess

        } else {
            minBoundary = currentGuess + 1
        }

        setRounds(rounds + 1)

        const randomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(randomNumber)

    }

    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <InstructionText style={{ marginBottom: 12 }}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessNumberHandler.bind(this, 'higher')}>+</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessNumberHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>

                </View>

            </Card >
        </View >

    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    higherLowerContainer: {
        marginBottom: 10
    },
    higherLowerText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        padding: 5
    }
});
