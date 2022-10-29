import { t } from "i18next";
import React from "react";
import { StyleProp, StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "react-native-paper";
import CustomeIcon from "./CustomeIcon";
import CustomeText from "./CustomeText";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 4,
    // marginBottom: 20,
    borderWidth: 1,
    // shadow
    shadowColor: "#00000005",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
  },
  inputCon: {
    paddingEnd: 16,
    flex: 1,
  },
  title: {
    fontSize: 11,
    lineHeight: 11,
    color: "#9B9B9B",
  },
  input: {
    fontSize: 14,
    lineHeight: 21,
  },
  validateMsg: {
    textAlign: "center",
    color: "#F01F0E",
    fontSize: 12,
    paddingBottom: 20,
    paddingTop: 4
  },
});

interface TextInputProps {
  title?: string;
  placeholder?: string;
  value?: any;
  onChangeText?: any;
  containerStyle?: StyleProp<any>;
  titleStyle?: StyleProp<any>;
  inputStyle?: StyleProp<any>;
  isValidInput?: null | boolean;
  validateMsg?: string;
  [key: string]: any;
}

export default ({
  containerStyle,
  titleStyle,
  inputStyle,
  title,
  placeholder,
  value,
  onChangeText,
  isValidInput = null,
  validateMsg,
  ...props
}: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.surface,
            borderColor:
              isValidInput === null
                ? colors.surface
                : isValidInput
                ? "#2AA952"
                : "#FF0000",
            marginBottom: validateMsg && isValidInput === false ? 0 : 20,
          },
          containerStyle,
        ]}
      >
        <View style={styles.inputCon}>
          {value?.length > 0 && title && (
            <CustomeText style={[styles.title, titleStyle]}>
              {title}
            </CustomeText>
          )}

          <TextInput
            placeholder={placeholder || title || t("typeSomeThing")}
            placeholderTextColor={"#9B9B9B"}
            style={[styles.input, { color: colors.text }, inputStyle]}
            {...{ value, onChangeText, ...props }}
          />
        </View>
        {isValidInput !== null && (
          <CustomeIcon
            name={isValidInput ? "check" : "x"}
            color={isValidInput ? "#2AA952" : "#FF0000"}
          />
        )}
      </View>
      {validateMsg && isValidInput === false && (
        <CustomeText style={styles.validateMsg}>{validateMsg}</CustomeText>
      )}
    </View>
  );
};
