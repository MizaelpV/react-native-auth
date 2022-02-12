import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle, Rect, Path, G, Defs, feFlood } from 'react-native-svg';
import React from 'react';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TouchableOpacity />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Svg
            width='144'
            height='114'
            viewBox='0 0 144 114'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <Rect
              x='0.5'
              y='73.266'
              width='15.1798'
              height='35.383'
              stroke='black'
            />
            <Rect
              x='30.4326'
              y='54.6702'
              width='15.1798'
              height='53.9787'
              stroke='black'
            />
            <Rect
              x='60.3652'
              y='36.883'
              width='15.1798'
              height='72.5745'
              stroke='black'
            />
            <Rect
              x='90.2978'
              y='19.9042'
              width='15.1798'
              height='88.7447'
              stroke='black'
            />
            <Rect
              x='120.23'
              y='0.5'
              width='15.1798'
              height='108.149'
              stroke='black'
            />
            <Rect
              x='8.0899'
              y='76.8085'
              width='16.1798'
              height='36.383'
              fill='#003366'
              fill-opacity='0.85'
            />
            <Rect
              x='38.0225'
              y='58.2128'
              width='16.1798'
              height='54.9787'
              fill='#003366'
              fill-opacity='0.85'
            />
            <Rect
              x='67.9551'
              y='40.4255'
              width='16.1798'
              height='73.5745'
              fill='#003366'
              fill-opacity='0.85'
            />
            <Rect
              x='97.8877'
              y='23.4468'
              width='16.1798'
              height='89.7447'
              fill='#003366'
              fill-opacity='0.85'
            />
            <Rect
              x='127.82'
              y='4.04254'
              width='16.1798'
              height='109.149'
              fill='#003366'
              fill-opacity='0.85'
            />
          </Svg>
        </View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Here know yourself better</Text>
      </View>
      {/* Body */}
      <View style={styles.containerLayers}>
        <View style={styles.curvedLineOne} />
        <View style={styles.curvedLineTwo} />
        <View style={styles.curvedLineThree} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogIn}>
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   backgroundColor: '#ffffff',
  // },
  header: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 110,
  },
  title: {
    marginTop: 25,
    fontSize: 50,
    color: '#000044',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000044',
    fontSize: 20,
  },
  container: {
    borderRadius: 12,
    position: 'relative',
    height: '100%',
  },
  containerLayers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    borderColor: '#3056ED',
    marginTop: 50,
  },

  curvedLineOne: {
    width: '25%',
    height: 100,
    position: 'absolute',
    top: 50,
    borderRadius: 50,
    backgroundColor: '#E63462',
    transform: [{ scaleX: 5 }, { scaleY: 2 }],
  },
  curvedLineTwo: {
    width: '25%',
    height: 100,
    position: 'absolute',
    top: 160,
    borderRadius: 50,
    backgroundColor: '#C0C0C0',
    transform: [{ scaleX: 5 }, { scaleY: 2 }],
  },
  curvedLineThree: {
    width: '25%',
    height: '100%',
    position: 'absolute',
    top: 680,
    borderRadius: 50,
    backgroundColor: '#000044',
    transform: [{ scaleX: 5 }, { scaleY: 2 }],
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonLogIn: {
    borderRadius: 25,
    width: 150,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    borderColor: '#E63462',
    borderWidth: 2,
    backgroundColor: '#E63462',
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonRegister: {
    borderRadius: 25,
    width: 150,
    height: 50,
    borderColor: '#E63462',
    borderWidth: 2,
    justifyContent: 'center',
  },
});
