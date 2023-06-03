// product props
export interface productType {
  id: any;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

// address data
export interface addressProps {
  id?: string | number;
  created_at?: any;
  area?: string;
  streetName?: string;
  buildingType?: string;
  buildingName?: string;
  floorNo?: string;
  apartmentNumber?: string;
  addressName?: string;
  landmark?: string;
  mobileNo?: string;
  landlineNo?: string;
  location: any;
}

// review data
export interface reviewProps {
  authorName?: string;
  authorImage?: string;
  text?: string;
  rate?: number | string;
  created_at?: any;
  helpful?: number;
  images?: [];
}

export interface orderType {
  id?: string | number;
  created_at?: any;
  orderNumber?: string;
  trackingNumber?: string;
  items: productType[] | [];
  total?: number;
  paymentMethod?: {};
  shippingAddress?: addressProps;
  deliveryFees?: number;
  discount?: number;
  orderStatus: string | number;
  // orderStatus: "notConfirmied" | "delivered" | "processing" | "cancelled" // 1 | 2 | 3 |4
}
