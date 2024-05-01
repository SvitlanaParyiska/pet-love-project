import * as Yup from "yup";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const imageUrlRegex = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

export const registerValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Confirm password is required"),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const addPetValidation = Yup.object({
  title: Yup.string().required("Title is required"),
  name: Yup.string().required("Name is required"),
  imgUrl: Yup.string()
    .matches(imageUrlRegex, "Invalid Url")
    .required("Photo is required"),
  species: Yup.string().required("Species is required"),
  birthday: Yup.string()
    .matches(birthdayRegex, "Invalid birthday")
    .required("Birthday is required"),
});
