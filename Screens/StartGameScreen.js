
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react'
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({ onConfirmNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(text) {
        setEnteredNumber(text)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function comfirmNumberHandler() {
        const number = parseInt(enteredNumber)

        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 to 99', [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])
            return

        }
        onConfirmNumber(number);
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.guessNumberContainer}>
                <Title>Guess my number</Title>
            </View>

            <Card>
                <InstructionText>Enter a number</InstructionText>

                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={comfirmNumberHandler}>Confirm</PrimaryButton>
                    </View>

                </View>

            </Card>

        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 24,
        marginTop: 100,
    },
    guessNumberContainer: {
        marginHorizontal: 48,
        padding: 8
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary700,
        color: Colors.primary700,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 4
    }
});
