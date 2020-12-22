import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,resultado:0,resultadon:0,resultadop:0,delta: 0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let A = (this.state.a * this.state.e) - (this.state.c * this.state.g)
   let B = (this.state.a * this.state.f)+(this.state.b * this.state.e)-(this.state.c* this.state.h)-(this.state.d * this.state.g)
   let C = (this.state.d * this.state.h)-(this.state.b * this.state.f)
   let s = this.state
   let delta = this.state
   let bq = this.state
   let bp =this.state
   let dq = this.state
   let t = this.state
   let x = this.state
   if(A === 0 &&  B === 0 &&  C === 0){
     s.resultadoText ='Sem Solução'
   }
   else if(A !== 0 && B === 0 && C === 0){
    s.resultadoText ='Sem Solução'
  }
   else if (B !== 0 && A === 0 && C === 0){
    s.resultadoText ='Sem Solução'
  }
  else if (C !== 0 && A === 0 && B === 0){
    s.resultadoText ='Sem Solução'
  }
  else if(C !== 0 && B !== 0 && A === 0){
    t.resultado = (C / B)
    s.resultadoText ='com Solução'
  }
  else{
    bq = B*B
    if(bq > 0){
      delta = (B*B)+(4*A*C)
      if(B < 0){
        bp = B * (-1)
        dq = Math.sqrt(delta)
        t.resultado = (bp + dq) / (2 * A)
      }
      else{
        t.resultado = (B + dq) / (2 * A)
      }
    }
    else{
      delta = (B*B)-(4*A*C)
      if(B < 0){
        bp = B * (-1)
        dq = Math.sqrt(delta)
        t.resultado = (bp + dq) / (2 * A)
      }
      else{
        t.resultado = (B + dq) / (2 * A)
      }
    }
    s.resultadoText ='posivel Solução'
  }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>
				Voce escolheu a Equaçao do tipo 1
   			</Text>
        <View style={styles.entrada}>
        <Text style={styles.Text1}>A</Text>
          <TextInput autoCapitalize="none" placeholder="a" keyboardType="numeric" style={styles.input} onChangeText={(a) => { this.setState({ a }) }} />
          <Text style={styles.inputt}>X+</Text>
          <TextInput autoCapitalize="none" placeholder="b" keyboardType="numeric" style={styles.input} onChangeText={(b) => { this.setState({ b }) }} />

        <Text style={styles.Text1}>B</Text>
          <TextInput autoCapitalize="none" placeholder="c" keyboardType="numeric" style={styles.input} onChangeText={(c) => { this.setState({ c }) }} />
          <Text style={styles.inputt}>X+</Text>
          <TextInput autoCapitalize="none" placeholder="d" keyboardType="numeric" style={styles.input} onChangeText={(d) => { this.setState({ d }) }} />
        </View>
        <View style={styles.entrada}>
        <Text style={styles.Text1}>C</Text>
          <TextInput autoCapitalize="none" placeholder="e" keyboardType="numeric" style={styles.input} onChangeText={(e) => { this.setState({ e }) }} />
          <Text style={styles.inputt}>X+</Text>
          <TextInput autoCapitalize="none" placeholder="f" keyboardType="numeric" style={styles.input} onChangeText={(f) => { this.setState({ f }) }} />
        <Text style={styles.Text1}>D</Text>
          <TextInput autoCapitalize="none" placeholder="g" keyboardType="numeric" style={styles.input} onChangeText={(g) => { this.setState({ g }) }} />
          <Text style={styles.inputt}>X+</Text>
          <TextInput autoCapitalize="none" placeholder="h" keyboardType="numeric" style={styles.input} onChangeText={(h) => { this.setState({ h }) }} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>X = {this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    fontSize: 15,
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
    alignItems: 'center',
  },
  entrada: {
    flexDirection: 'row',
    width: "70%",
    justifyContent: 'space-between', 
  },
  input: {
    height: 30,
    textAlign: "center",
    width: "10%",
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 20,
    marginTop: 34,
  },
  inputt: {
    height: 30,
    textAlign: "center",
    width: "15%",
    fontSize: 20,
    marginTop: 34,
  },
  button: {
    padding: 10,
    margin: 30,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,
    height: 40,
  },
  buttontext: {
    color: '#000000'
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 45,
    fontWeight: 'bold',
    padding: 6,
  },
});