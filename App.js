import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import api from './src/services/api';
import { styleCss } from './styleCss.js';

export default function App() {
  const [user, setUser] = useState();
  const [infos, setInfos] = useState([]);
  const [notFound, setNotFound] = useState();

  const findUser = async (user) => {
    try {
      const response = await api.get(user);
      setInfos(response.data);
    } catch {
      setNotFound('Whoops... User not found!');
    }
  };

  return (
    <View style={styleCss.area}>
      <Text style={styleCss.mainText}>DEVs Profile</Text>

      <Image
        source={{
          uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png',
        }}
        style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 100 }}
      />

      <TextInput
        style={styleCss.input}
        value={user}
        placeholder="Type a GitHub user"
        onChangeText={setUser}
        onChange={() => {
          setInfos([]);
          setNotFound();
        }}
      />

      <Pressable style={styleCss.button} onPress={() => findUser(user)}>
        <Text style={styleCss.textButton}>SEARCH</Text>
      </Pressable>

      {infos.avatar_url && (
        <Image
          source={{ uri: infos.avatar_url }}
          style={{ width: 150, height: 150, marginTop: 30, borderRadius: 100 }}
        />
      )}
      {infos.name && <Text style={styleCss.returnMsg}>Name: {infos.name}</Text>}
      {infos.login && (
        <Text style={styleCss.returnMsg}>User: {infos.login}</Text>
      )}
      {infos.public_repos != 0 && infos.public_repos && (
        <Text style={styleCss.returnMsg}>
          Public Repos: {infos.public_repos}
        </Text>
      )}
      {infos.html_url && (
        <Text style={styleCss.returnMsg}>Profile Link: {infos.html_url}</Text>
      )}
      {notFound && <Text style={styleCss.errorMsg}>{notFound}</Text>}
    </View>
  );
}
