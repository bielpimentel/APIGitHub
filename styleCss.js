import {StyleSheet} from 'react-native';


const styleCss = StyleSheet.create({
  area:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  input:{
    height: 38,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    margin: 5,
    color: '#888',
    fontSize: 15,
    padding: 10,
  },
  mainText:{
    color: '#2a88c7',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3eab16',
    marginTop: 20,
  },
  button:{
    backgroundColor: '#008fff',
    width: 200,
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },
  textButton:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  returnMsg:{
    marginTop: 15,
    fontSize: 15,
    paddingBottom: 15,
    textAlign: 'center',
  },
  errorMsg:{
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
  }
});

export {styleCss};