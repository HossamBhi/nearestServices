import { IMAGES_URL } from "./config";
const generateUID = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const places_tags_db = [
  {
    id: generateUID(),
    title: "tag name",
    des: "tag description",
  },
];

const resturants_menu_db = {
  1: [
    {
      id: generateUID(),
      title: "McNuggets 4 Pieces", // place name
      des: "", // note about place
      image: IMAGES_URL + "McNuggets_4_Pieces.jpg", // banner image
      tags: [], // category of this shop ( fried, pizza,... )
      rate: 4,
    },
    {
      id: generateUID(),
      title: "Chicken Fillet Spicy Large Meal", // place name
      des: "", // note about place
      image: IMAGES_URL + "Chicken_Fillet_Spicy_Large_Meal.jpg", // banner image
      tags: [], // category of this shop ( fried, pizza,... )
      rate: 4,
    },
    {
      id: generateUID(),
      title: "Mix 2 Medium Meal", // place name
      des: "", // note about place
      image: IMAGES_URL + "Mix_2_Medium_Meal.jpg", // banner image
      tags: [], // category of this shop ( fried, pizza,... )
      rate: 4,
    },
    {
      id: generateUID(),
      title: "McNuggets 9 Pieces Medium Meal", // place name
      des: "", // note about place
      image: IMAGES_URL + "McNuggets_9_Pieces_Medium_Meal.jpg", // banner image
      tags: [], // category of this shop ( fried, pizza,... )
      rate: 4,
    },
  ],
};

const resturants_db = [
  {
    id: 1,
    title: "McDonald's", // place name
    des: "McDonald's is a restaurant located in Egypt, serving a selection of Fast Food, Sandwiches, Burgers that delivers across Tagammoa 5 - El Showifat.", // note about place
    image: IMAGES_URL + "McDonalds.png", // banner image
    tags: [], // category of this shop ( fried, pizza, ... )
    lat: 30, // position on lat
    lng: 30, // position in lang
    deliveryAreas: [], // this place can delivery to this areas
    deliveryInRangeBykm: 2, // place can delivery in this range from its position
    rate: 4,
    comments: [],
    items: resturants_menu_db[1],
  },
];
const groceries_db = [];
const places_db = {
  Restaurant: resturants_db,
  Grocery: groceries_db,
};

const categories_db = [
  {
    id: "Restaurant",
    title: "Restaurant",
    des: "Find deals, free delivery, and more from our restaurant partners.",
    count: resturants_db.length,
    image: IMAGES_URL + "chicken.jpg",
  },
  {
    id: "Grocery",
    title: "Grocery",
    des: "Don’t stand in line - order online! Choose from top stores delivering groceries to you.",
    count: 0,
    image: IMAGES_URL + "supermarket.jpg",
  },
  {
    id: "Pharmacy",
    title: "Pharmacy",
    des: "Got the sniffles? We’ve got you. Get medicine delivered to you quickly and easily.",
    count: 0,
    image: IMAGES_URL + "pharmacy.jpg",
  },
  {
    id: "Flowers",
    title: "Flowers",
    des: "Show them you care. We're ready to deliver flowers and chocolates to your loved one.",
    count: 0,
    image: IMAGES_URL + "flowers.jpg",
  },
  {
    id: "Bekary",
    title: "Bekary",
    des: "Don’t stand in line - order online! Choose from top stores delivering bekaries to you.",
    count: 0,
    image: IMAGES_URL + "bekary.jpg",
  },
  {
    id: "Library",
    title: "Library",
    des: "Don’t stand in line - order online! Choose from top stores delivering libraries to you.",
    count: 0,
    image: IMAGES_URL + "library.jpg",
  },
  {
    id: "Dessert",
    title: "Dessert",
    des: "Don’t stand in line - order online! Choose from top stores delivering desserts to you.",
    count: 0,
    image: IMAGES_URL + "dessert.jpg",
  },
  {
    id: "Makwa",
    title: "Makwa",
    des: "Don’t stand in line - order online! Choose from top stores delivering makwa to you.",
    count: 0,
    image: IMAGES_URL + "makwa.jpg",
  },
  {
    id: "Pets",
    title: "Pets",
    des: "Don’t stand in line - order online! Choose from top stores delivering pets reqiures to you.",
    count: 0,
    image: IMAGES_URL + "pharmacy.jpg",
  },
];

export const getPlacesDB = (placeId: number) =>
  new Promise((res, rej) => setTimeout(() => res(places_db[placeId]), 1000));

export const getCategoriesDB = () =>
  new Promise((res, rej) => setTimeout(() => res(categories_db), 1000));

// dummy reviews
const dummyReviews = [
  {
    id: generateUID(),
    authorName: "Hossam Bhi",
    authorImage: require("../assets/profile.png"),
    text: "Nice place to have soto banjar with a beautiful scene of natural atmosphere beside the river . Get a traditional and trademark food in Banjarmasin with family or fiends.",
    rate: 4,
    created_at: new Date(2022, 6, 5),
    helpful: 1,
    images: [
      require("../assets/review1.jpg"),
      require("../assets/review2.jpg"),
      require("../assets/review3.jpg"),
      require("../assets/review4.jpg"),
    ],
  },
  {
    id: generateUID(),
    authorName: "Hossam",
    authorImage: null,
    text: "Nice place to have soto banjar with a beautiful scene of natural atmosphere beside the river . Get a traditional and trademark food in Banjarmasin with family or fiends.",
    rate: 2,
    created_at: new Date(2022, 7, 17),
    helpful: 1,
    images: [],
  },
];
export const dummyRatingReviews = {
  total: dummyReviews.length,
  averageRate: 2.5,
  reviews: dummyReviews,
};
