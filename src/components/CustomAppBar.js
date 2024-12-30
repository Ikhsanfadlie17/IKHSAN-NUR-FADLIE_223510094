import React from "react";
import { Appbar } from "react-native-paper";

const CustomAppBar = ({ title, navigation, back }) => {
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
