import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

import Loader from './components/loader';
import Weather from './components/weather';

const API_KEY = 'dcdd8a5a9fde98bf810ed3b884c0e992';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );

    setLocation(data);
    setIsLoading(false);
  };

  const setWeather = async (query) => {
    setIsLoading(true);
    const { data } = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`,
      )
      .catch(() => {
        setIsLoading(false);
        Alert.alert('City not found');
      });

    setLocation(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted')
        return Alert.alert('Permission to access location was denied');

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert("I can't find your current location, please try again");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      temp={Math.round(location?.main?.temp)}
      name={location?.name}
      condition={location?.weather?.[0]?.main}
      setWeather={setWeather}
    />
  );
}
