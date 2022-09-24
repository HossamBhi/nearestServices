// address interfacce
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
