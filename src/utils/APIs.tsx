import axios from "axios";
import i18next from "i18next";
import { dummyRatingReviews } from "./db";

// console.log("i18next.languages[0]: ", i18next.languages[0]);
// export const getPlacesAPI = async () =>
//   await axios
//     .get(`${API_URL}student/api/v1/semesters`, { data: { lang: APP_LANG } })
//     .then((res) => res.data)
//     .catch(onCatchError);

export const getReviewsAPI = async () =>
  new Promise((res, rej) => setTimeout(() => res(dummyRatingReviews), 1000));
