import React from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import styles from "../styles/styles";

const DetailScreen = ({ route, navigation }) => {
  const { note, content } = route.params;

  return (
    <View style={styles.container}>
      <CustomAppBar title={note} navigation={navigation} back />
      <View style={styles.content}>
        <Text style={styles.detailText}>{content}</Text>
        <TextInput
          label="Edit Catatan"
          mode="outlined"
          multiline
          style={styles.textInput}
          defaultValue={content}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          Simpan
        </Button>
      </View>
    </View>
  );
};

export default DetailScreen;
