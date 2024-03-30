/** @format */
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import { Button } from "../components/Button";

// ! Component

export const MainScreen: React.FC = () => {
  const [imageText, setImageText] = useState<string>("Not Image");
  const [url, setUrl] = useState<string | null>(null);
  const [activeIndicator, setActiveIndicator] = useState<boolean>(true);

  const handleImageOne = () => {
    setImageText(() => "Image 1");
    setUrl(
      () =>
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    );
  };

  const handleImageTwo = () => {
    setImageText(() => "Image 2");
    setUrl(
      () =>
        "https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
    );
  };

  const handleImageThree = () => {
    setImageText(() => "Image 3");
    setUrl(() => "https://www.imageen.com/graphics/info/sunset_ocean_tree.jpg");
  };

  const handleStartLoading = () => {
    setActiveIndicator(true);
  };

  const handleEndLoading = () => {
    setActiveIndicator(false);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{imageText}</Text>
      <View></View>
      <ActivityIndicator
        size={"large"}
        animating={activeIndicator}
        color={"#adff2f"}
      />
      {url ? (
        <Image
          onLoadStart={handleStartLoading}
          onLoadEnd={handleEndLoading}
          resizeMode={"cover"}
          style={styles.url}
          src={url}
        />
      ) : (
        <ActivityIndicator
          size={"large"}
          animating={activeIndicator}
          color={"#adff2f"}
        />
      )}
      <View style={styles.container}>
        <Button onPress={handleImageOne} text={"Image 1"} />
        <Button onPress={handleImageTwo} text={"Image 2"} />
        <Button onPress={handleImageThree} text={"Image 3"} />
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  url: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },

  text: {
    backgroundColor: "#adff2f",
    padding: 10,
  },

  container: {
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
