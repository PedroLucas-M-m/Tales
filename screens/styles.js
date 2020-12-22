import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  botão: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 70,
    width: 75,
    borderRadius: 10,
    margin: 12,
  },

  botão2: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 70,
    width: 75,
    borderRadius: 10,
    margin: 12,
    
  },

  Img: {
    padding: 10,
    margin: 5,
    height: 65,
    width: 65,
    resizeMode: 'stretch',
  },

  Text: {
    fontSize: 20,
    alignItems: 'center',
  },

  Text1: {
    fontSize: 15,
    alignItems: 'center',
  },

  conteiner1: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },

  conteiner:{
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1
 },

 submitButton: {
  padding: 10,
  margin: 15,
  borderRadius: 10,
  borderColor: '#000000',
  borderWidth: 1,
  height: 40,
},

submitButtonText:{
  color: '#000000'
}

});