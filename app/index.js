import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Speech from 'expo-speech';

export default function Page() {

  const [text, setText] = useState('');

  const clearText = () => {
    setText('')
  }

  const speak = (text) => {
    Speech.speak(text, {
      language: 'es-MX',
      voice: 'Microsoft Sabina - Spanish (Mexico)',
    })
    Speech.VoiceQuality.Enhanced
  };

  const stop = () => {
    Speech.stop()
  }
  return (
    <ImageBackground style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
      source={require('../img/m.png')}
      resizeMode='cover'

    >
      <View style={{
        height: '80%', width: '70%', backgroundColor: 'pink', borderRadius: 25,
        shadowColor: "#38434D",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        alignItems: 'center',
      }}>
        <Text style={styles.title}>Escribe tu mensaje</Text>
        <View style={{ width: '100%', height: '80%', padding: 25, justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <TextInput
            style={{
              flex: 1, width: '60%', backgroundColor: 'white',
              borderRadius: 25, textAlign: 'left', padding: 25, fontSize: 20,
            }}
            multiline
            textAlignVertical='top'
            value={text}
            onChangeText={setText}
            maxLength={750}
            placeholder='Tu mensaje aquí...'
            placeholderTextColor={'38434D'}

          />

          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity
              onPressIn={() => speak(text)}
              style={{
                height: 30, width: 120, backgroundColor: 'white',
                borderRadius: 10, justifyContent: 'center', alignItems: 'center',
                shadowColor: "#38434D",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,
                elevation: 11,
              }}>
              <Text style={{ color: '38434D', fontSize: 15, fontWeight: 'bold' }}>Hablar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPressIn={stop}
              style={{
                height: 30, width: 120, backgroundColor: 'white',
                borderRadius: 10, justifyContent: 'center', alignItems: 'center',
                shadowColor: "#38434D",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}>
              <Text style={{ color: '38434D', fontSize: 15, fontWeight: 'bold' }}>Pausar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={clearText}
            style={{
              height: 30, width: 180, backgroundColor: 'white',
              borderRadius: 10, justifyContent: 'center', alignItems: 'center',
              shadowColor: "#38434D",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,
            }}>
            <Text style={{ color: '38434D', fontSize: 15, fontWeight: 'bold' }}>Borrar todo el texto</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Text style={{ top: '8%', fontWeight: '600', color: '#38434D' }}>by gianmendoza</Text>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: 'pink'
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 25,
    borderRadius: 10,
    right: '15%',
    color: "#38434D",
    paddingTop: 20
  },
});
