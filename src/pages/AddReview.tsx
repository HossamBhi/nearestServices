import { t } from "i18next";
import React, { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import BlockButton from "../components/common/BlockButton";
import CustomeButton from "../components/common/CustomeButton";
import CustomeText from "../components/common/CustomeText";
import { FontAwesome } from "@expo/vector-icons";
import CustomeIcon from "../components/common/CustomeIcon";
import { FlatList } from "react-native-gesture-handler";
import CustomeImage from "../components/common/CustomeImage";
import { launchImageLibrary, Asset } from "react-native-image-picker";

interface AddReviewProps {
  handleCloseModalPress: () => void;
}

const AddReview: FC<AddReviewProps> = ({ handleCloseModalPress }) => {
  const [files, setFiles] = useState<Asset[]>([]);
  const { colors } = useTheme();
  const [text, setText] = useState("");

  const pickImageFromLibrary = async () => {
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({
      selectionLimit: 5,
      mediaType: "photo",
    });
    // console.log(result);

    if (result.assets) {
      setFiles(result.assets);
    }
  };
  const handleSaveAddress = () => handleCloseModalPress();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, paddingTop: 30 }}
          style={{ flex: 1, paddingHorizontal: 16 }}
        >
          <CustomeText style={styles.title}> {t("whatIsYouRate")}</CustomeText>

          <AirbnbRating
            showRating={false}
            onFinishRating={(rating: number) => {
              console.log("rating: ", rating);
            }}
            ratingContainerStyle={{ paddingBottom: 30 }}
          />
          <CustomeText style={styles.title}>
            {t("pleaseShareYourOpinion")}
          </CustomeText>
          <TextInput
            placeholder={t("writeAReview")}
            value={text}
            onChangeText={setText}
            multiline={true}
            numberOfLines={10}
            style={[
              styles.container,
              { backgroundColor: colors.surface, color: colors.text },
            ]}
            placeholderTextColor={"#9B9B9B"}
          />
          <FlatList
            data={files}
            renderItem={({ item }) => (
              <CustomeImage
                source={{ uri: item.uri }}
                style={styles.reviewImage}
              />
            )}
            horizontal={true}
            style={{ paddingTop: 10 }}
            ListFooterComponent={() => (
              <CustomeButton
                style={[styles.btn, { backgroundColor: colors.surface }]}
                text={t("addYourPhotos")}
                textStyle={styles.btnText}
                onPress={pickImageFromLibrary}
                icon={
                  <CustomeIcon
                    Tag={FontAwesome}
                    name="camera"
                    size={14}
                    style={[styles.icon, { backgroundColor: "#DB3022" }]}
                  />
                }
              />
            )}
          />

          <BlockButton
            text={t("sendReview")}
            onPress={handleSaveAddress}
            style={{ marginBottom: 20, marginTop: 30 }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 20,
    // shadow
    shadowColor: "#00000005",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
    textAlignVertical: "top",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 18,
    textAlign: "center",
  },
  input: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 26,
  },
  icon: {
    padding: 12,
    borderRadius: 100,
    color: "#ffffff",
    marginBottom: 12,
    maxWidth: 52,
    maxHeight: 52,
  },
  btn: {
    width: 104,
    height: 104,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse",
    borderRadius: 4,
    padding: 6,
  },
  reviewImage: {
    width: 104,
    height: 104,
    borderRadius: 4,
    marginEnd: 16,
  },
  btnText: {
    fontSize: 11,
    fontWeight: "700",
  },
});

export default AddReview;
