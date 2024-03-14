import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

const weatherOptions = {
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Amazing weather today!',
    description: 'Good weather goes for a walk!, stop staying at home!',
  },

  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#141e30', '#243b55'],
    title: 'Sit at home!',
    description: 'Do you see what is on the street?',
  },

  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Take an umbrella!',
    description: 'Perhaps the rain will increase soon!',
  },

  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#1CB5E0'],
    title: 'It is raining outside!',
    description: 'So there will be a rainbow soon!',
  },

  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'Amazing weather today!',
    description: 'Good weather goes for a walk!, stop staying at home!',
  },

  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#b79891', '#94716b'],
    title: 'Dusty weather!',
    description: 'Better close the window and stay at home!',
  },

  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56ccf2', '#2f80ed'],
    title: 'On the street smoke :(',
    description: 'I do not advise going out unnecessarily !',
  },

  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3e5151', '#decba4'],
    title: 'Amazing weather today!',
    description: 'Good weather goes for a walk!, stop staying at home!',
  },

  Mist: {
    iconName: 'weather-sunny',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Amazing weather today!',
    description: 'Good weather goes for a walk!, stop staying at home!',
  },

  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757f9a', '#d7dde8'],
    title: 'The clouds are blocking the sun!',
    description: 'Good weather goes for a walk!, stop staying at home!',
  },
};
const Weather = ({ temp, name, condition, setWeather }) => {
  const [query, setQuery] = useState('');

  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={weatherOptions[condition]?.iconName}
          size={96}
          color="white"
        />

        <Text style={styles.temp}>{temp} °C</Text>

        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Enter your city'}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            style={styles.btn}
            title={'Search'}
            onPress={() => setWeather(query)}
          />
        </View>

        <Text style={styles.title}>{weatherOptions[condition]?.title}</Text>

        <Text style={styles.description}>
          {weatherOptions[condition]?.description}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  icon: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  temp: { fontSize: 48, color: 'white', marginTop: 5 },
  name: { fontSize: 42, color: 'white', marginTop: 5 },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    textAlign: 'left',
  },

  searchContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
  },

  btn: {
    width: '30%',
    backgroundColor: '#e8e8e8',
  },
});

export default Weather;
