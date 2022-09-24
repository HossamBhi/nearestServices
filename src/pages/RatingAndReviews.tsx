import { NavigationProp } from "@react-navigation/native";
import { t } from "i18next";
import React, {
  FC,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FlatList, View } from "react-native";
import FloatingButton from "../components/addresses/FloatingButton";
import CustomeIcon from "../components/common/CustomeIcon";
import SimplePageHeader from "../components/pageHeader/SimplePageHeader";
import { MaterialIcons } from "@expo/vector-icons";
import RatingResult from "../components/ratingAndReviews/RatingResult";
import { getReviewsAPI } from "../utils/APIs";
import AppLoader from "../components/common/AppLoader";
import ReviewCard from "../components/ratingAndReviews/ReviewCard";
import { reviewProps } from "../utils/types";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import AddReview from "./AddReview";
import { useTheme } from "react-native-paper";

interface RatingAndReviewsProps {
  navigation: NavigationProp<any>;
}

const RatingAndReviews: FC<RatingAndReviewsProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const [data, setDate] = useState<{ reviews: reviewProps[] } | null>(null);
  const [sheetStatus, setSheetStatus] = useState(-1);
  useEffect(() => {
    getReviewsAPI().then((res: any) => setDate(res));
  }, []);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(
    () => bottomSheetModalRef.current?.present(),
    []
  );
  const handleCloseModalPress = useCallback(
    () => bottomSheetModalRef.current?.close(),
    []
  );
  const handleSheetChanges = useCallback(
    (index: number) => setSheetStatus(index),
    []
  );

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, position: "relative" }}>
        <SimplePageHeader title={t("ratingAndReviews")} />
        {data === null ? (
          <AppLoader />
        ) : (
          <>
            <FlatList
              data={data.reviews}
              renderItem={({ item, index }) => <ReviewCard review={item} />}
              ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
              ListHeaderComponent={() => <RatingResult data={data} />}
              ListFooterComponent={() => <View style={{ height: 30 }} />}
            />
            <FloatingButton
              onPress={handlePresentModalPress}
              text={t("writeAReview")}
              icon={
                <CustomeIcon
                  Tag={MaterialIcons}
                  name="edit"
                  color="#ffffff"
                  size={14}
                />
              }
            />
          </>
        )}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: colors.background }}
          handleIndicatorStyle={{ backgroundColor: "#9B9B9B", width: "10%" }}
          onChange={handleSheetChanges}
          style={{
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <AddReview handleCloseModalPress={handleCloseModalPress} />
        </BottomSheetModal>
        {sheetStatus != -1 && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#00000050",
              height: "100%",
              width: "100%",
            }}
          ></View>
        )}
      </View>
    </BottomSheetModalProvider>
  );
};

export default RatingAndReviews;
