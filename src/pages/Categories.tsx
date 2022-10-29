import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import AppLoader from "../components/common/AppLoader";
import { getCategoriesDB } from "../utils/db";
import ItemGrid from "../components/common/ItemGrid";
import PageContainer from "../components/PageContainer";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [viewType, setViewType] = useState(2); // 0 for hide, 1 for grid , 2 for list
  useEffect(() => {
    getCategoriesDB().then((res: any) => {
      console.log("res: ", res);
      if (!res?.error) {
        setCategories(res);
      }
    });
  }, []);

  if (categories === null) return <AppLoader />;
  return (
    <PageContainer viewType={viewType} setViewType={setViewType}>
      {viewType === 1 ? (
        <FlatList
          key="list"
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemGrid item={item} />}
          style={{ flex: 1, width: "100%" }}
        />
      ) : (
        <FlatList
          key="grid"
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemGrid item={item} />}
          style={{ flex: 1, width: "100%" }}
          numColumns={2}
        />
      )}
    </PageContainer>
  );
}
