import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function GuessLogItem({roundNumber, guess}: any) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItems: {
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
    color : 'white'
  },
});
