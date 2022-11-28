import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";

interface modalContainerProps {
  children?: JSX.Element;
  hideModal?: () => void;
  visible?: boolean;
  flexEnd?: string;
}

const ModalContainer = ({
  children,
  hideModal,
  visible,
  flexEnd,
}: modalContainerProps) => {
  const { height } = useWindowDimensions();
  return (
    <Modal visible={visible} transparent={true}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={hideModal}>
          <View
            style={{
              backgroundColor: "#00000065",
              flex: 1,
              justifyContent: flexEnd ? "flex-end" : "center",
              minHeight: height,
            }}
          >
            <Pressable>{children}</Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Modal>
  );
};

export default ModalContainer;
