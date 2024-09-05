import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, Image } from "react-native";
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut'

const Home = () => {
  return (
    <View style={styles.loginContainer}>
      <FontAwesomeIcon icon={faUserAstronaut} style={{color: 'transparent'}}/>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.nameApp}>SGRTMobile</Text>
        <Text style={styles.labelApp}>App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    borderColor: 'red',
    borderWidth: 2
  },
  nameApp: {
    color: "#ffffff"
  },
  labelApp: {
    color: "#ffffff",
    fontWeight: '900'
  }
});

export default Home;
