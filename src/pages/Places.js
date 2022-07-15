import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import AppLoader from "../components/common/AppLoader";
import ItemGrid from "../components/common/ItemGrid";
import Place from "../components/places/Place";
import { getPlacesDB } from "../utils/db";

export const Places = ({ navigation, route }) => {
  const [places, setPlaces] = useState(null);
  const id = route?.params?.id;
  console.log("id");
  useEffect(() => {
    getPlacesDB(id).then((res) => {
      console.log("getPlacesDB: ", res);
      if (!res.error) {
        setPlaces(res);
      }
    });
  }, []);

  if (places === null) return <AppLoader />;
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemGrid item={item} />}
      numColumns={2}
    />
  );
};
