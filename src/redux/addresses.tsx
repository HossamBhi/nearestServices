import { createSlice } from "@reduxjs/toolkit";
import { addressProps } from "../utils/types";

const initialState = { addresses: [], activeAddress: null } as {
  addresses: addressProps[];
  activeAddress: any;
};

const addresses = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddressAction: (state, { payload }: { payload: addressProps }) => {
      if (state.addresses?.length === 0) {
        state.activeAddress = payload.id;
      }
      state.addresses = state.addresses
        ? [...state.addresses, payload]
        : [payload];
    },
    removeAddressAction: (state, { payload }) => {
      if (state.activeAddress == payload) {
        state.activeAddress = null;
      }
      state.addresses = state.addresses.filter(
        (address) => address.id != payload
      );
    },
    updateAddressAction: (state, { payload }) => {
      const { id, newAddress } = payload;
      const findIndex = state.addresses.findIndex(
        (address) => address.id == id
      );
      state.addresses[findIndex] = newAddress;
    },
    changeActiveAddressAction: (state, { payload }) => {
      state.activeAddress = payload; // id of address
    },
  },
});

export const {
  addAddressAction,
  removeAddressAction,
  updateAddressAction,
  changeActiveAddressAction,
} = addresses.actions;
export default addresses.reducer;
