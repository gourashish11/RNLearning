
import { StyleSheet, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [confirmedNumber, setConfirmedNumber] = useState()
  const [isGameOver, setGameIsOver] = useState(false)
  const [rounds, setRounds] = useState(0)

  function confirmNumberHandler(number) {
    console.log('confirm number')
    setConfirmedNumber(number)
  }

  function gameOverHandler(rounds) {
    setRounds(rounds)
    setGameIsOver(true)
  }

  function restartGameHandler() {
    setConfirmedNumber(null)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />
  if (confirmedNumber) {
    screen = <GameScreen userNumber={confirmedNumber} onGameOver={gameOverHandler} />
  }

  if (isGameOver) {
    screen = <GameOverScreen rounds={rounds} userNumber={confirmedNumber} onRestartGame={restartGameHandler} />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>

      </ImageBackground>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
