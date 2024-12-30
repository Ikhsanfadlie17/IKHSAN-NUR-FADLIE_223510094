import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import styles from "../styles/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomAppBar title="TUGAS 5" />
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Title title="Catatan 1" />
          <Card.Content>
            <Text>Ini adalah catatan pertama.</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate("Detail", {
                  note: "Catatan 1",
                  content: "praktikum dpm.",
                })
              }
            >
              Lihat Detail
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Catatan 2" />
          <Card.Content>
            <Text>Ini adalah catatan kedua.</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate("Detail", {
                  note: "Catatan 2",
                  content: "IKHSAN NUR FADLIE.",
                })
              }
            >
              Lihat Detail
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

export default HomeScreen;
