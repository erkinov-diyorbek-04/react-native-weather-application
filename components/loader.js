import AnimatedLoader from 'react-native-animated-loader';
import { StyleSheet } from 'react-native';
const Loader = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('../assets/loader.json')}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
};

const styles = StyleSheet.create({ lottie: { width: 200, height: 200 } });

export default Loader;
