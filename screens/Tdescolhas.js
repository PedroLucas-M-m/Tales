import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.Text}>
        Escolha o tipo de Equação
        </Text>
      <View style={styles.conteiner1}>
      <TouchableOpacity style={styles.botão}
          onPress={() => navigation.navigate('Calculo1')}>
        <Image
          style={styles.Img}
          source={require('./img/03.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botão}
          onPress={() => navigation.navigate('Calculo2')}>
        <Image
          style={styles.Img}
          source={require('./img/04.png')}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;