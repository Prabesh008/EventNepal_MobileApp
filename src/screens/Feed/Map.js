import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function Map() {
  //getting the user location
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location.coords);
      // console.log(location.coords.latitude);
      // console.log("/////////////////////");
      // console.log(location);
    })();
  }, []);

  let latitude = location.latitude;
  let longitude = location.longitude;

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  //   console.log(text);
  // } else if (location) {
  //   text = JSON.stringify(location);
  //   console.log(text);
  // }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 27.7281729,
          longitude: 85.2955202,
          latitudeDelta: 0.015,
          longitudeDelta: 0.025,
        }}
      >
        <Marker
          coordinate={{
            latitude: 27.7281729,
            longitude: 85.2955202,
          }}
          title={"Initial Position"}
          description={"This is my current location"}
        />

        <Marker
          coordinate={{
            latitude: 27.728144,
            longitude: 85.2985202,
          }}
          title={"Final Position"}
          description={"This is the location of the event"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
