import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { Link } from "react-router-dom";
import clsx from "clsx";
import IconValidation from "../ui/IconValidation";
import AuthErrorMessage from "../ui/AuthErrorMessage";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import { addPetValidation } from "../../helpers/schemas";
import Select from "react-select";
import { addUserPet } from "../../redux/user/userOperation";
import { selectNoticesSpecies } from "../../redux/dataBase/dataBaseSelectors";
import { getOptions } from "../../helpers/filtersHelper";
import sprite from "/images/sprite.svg";
import { useState } from "react";

const AddPetForm = () => {
  const dispatch = useAppDispatch();
  const speciesList = useAppSelector(selectNoticesSpecies);
  const [checkboxField, setCheckboxField] = useState<string>("");
  const [selectField, setSelectField] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const handleSex = (item: string) => {
    setCheckboxField(item);
  };

  const handleSelectField = (item: string) => {
    setSelectField(item);
  };

  const handleAvatarChange = (imgUrl: string) => {
    if (imgUrl) {
      setAvatar(imgUrl);
    }
  };

  return (
    <>
      <div className="flex gap-[8px] mb-[8px]">
        <button type="button" onClick={() => handleSex("female")}>
          {checkboxField === "female" ? (
            <svg aria-label="icon female" className="w-[32px] h-[32px]">
              <use href={`${sprite}#icon-female-active`} />
            </svg>
          ) : (
            <svg aria-label="icon female" className="w-[32px] h-[32px] ">
              <use href={`${sprite}#icon-female`} />
            </svg>
          )}
        </button>
        <button type="button" onClick={() => handleSex("male")}>
          {checkboxField === "male" ? (
            <svg aria-label="icon male" className="w-[32px] h-[32px] ">
              <use href={`${sprite}#icon-male-active`} />
            </svg>
          ) : (
            <svg aria-label="icon male" className="w-[32px] h-[32px] ">
              <use href={`${sprite}#icon-male`} />
            </svg>
          )}
        </button>
        <button type="button" onClick={() => handleSex("multiple")}>
          {checkboxField === "multiple" ? (
            <svg aria-label="icon multiple" className="w-[32px] h-[32px] ">
              <use href={`${sprite}#icon-multiple-active`} />
            </svg>
          ) : (
            <svg aria-label="icon multiple" className="w-[32px] h-[32px] ">
              <use href={`${sprite}#icon-multiple`} />
            </svg>
          )}
        </button>
      </div>
      <div className=" mx-auto mb-[16px] w-[68px] h-[68px] rounded-full overflow-hidden bg-light flex justify-center items-center">
        {avatar ? (
          <img src={avatar} alt="user avatar" />
        ) : (
          <svg aria-label="icon footprint" className="w-[32px] h-[32px] ">
            <use href={`${sprite}#icon-footprint`} />
          </svg>
        )}
      </div>

      <Formik
        initialValues={{
          title: "",
          name: "",
          imgUrl: "",
          birthday: "",
        }}
        validationSchema={addPetValidation}
        onSubmit={async ({ title, name, imgUrl, birthday }, { resetForm }) => {
          if (!checkboxField.trim()) {
            toast.error("fill in sex");
            return;
          }
          try {
            await dispatch(
              addUserPet({
                title,
                name,
                imgURL: imgUrl,
                species: selectField,
                birthday,
                sex: checkboxField,
              })
            ).unwrap();
            resetForm();
          } catch (error) {
            console.log(error);
            toast.error(error as string);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="desktop:w-[424px]">
            <div className="flex mb-[10px] tablet:mb-[18px] gap-[8px]">
              <Input
                id="imgUrl"
                type="text"
                name="imgUrl"
                value={values.imgUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter URL"
                inputStyles={clsx(
                  "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px] w-[170px]",
                  touched.imgUrl && errors.imgUrl && "!border-red",
                  touched.imgUrl && !errors.imgUrl && "!border-green"
                )}
                wrapperStyles={clsx(touched.imgUrl && errors.imgUrl ? "" : "")}
              >
                <IconValidation
                  touched={touched.imgUrl}
                  errors={errors.imgUrl}
                />

                {touched.imgUrl && errors.imgUrl ? (
                  <AuthErrorMessage message={errors.imgUrl} />
                ) : null}
              </Input>
              <button
                type="button"
                onClick={() => handleAvatarChange(values.imgUrl)}
                className="flex items-center py-[10px] px-[7px] rounded-30 bg-light gap-[5px] text-12  leading-[1.33] tracking-[-0.02em]"
              >
                <p>Upload photo</p>
                <svg className="w-[16px] h-[16px]">
                  <use href={`${sprite}#icon-upload-cloud`}></use>
                </svg>
              </button>
            </div>

            <Input
              id="title"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Title"
              inputStyles={clsx(
                "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
                touched.title && errors.title && "!border-red",
                touched.title && !errors.title && "!border-green"
              )}
              wrapperStyles={clsx(
                touched.title && errors.title
                  ? "mb-[16px] tablet:mb-[16px]"
                  : "mb-[16px] tablet:mb-[16px]"
              )}
            >
              <IconValidation touched={touched.title} errors={errors.title} />

              {touched.title && errors.title ? (
                <AuthErrorMessage message={errors.title} />
              ) : null}
            </Input>

            <Input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Pet's Name"
              inputStyles={clsx(
                "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
                touched.name && errors.name && "!border-red",
                touched.name && !errors.name && "!border-green"
              )}
              wrapperStyles={clsx(
                touched.name && errors.name
                  ? "mb-[16px] tablet:mb-[16px]"
                  : "mb-[16px] tablet:mb-[16px]"
              )}
            >
              <IconValidation touched={touched.name} errors={errors.name} />

              {touched.name && errors.name ? (
                <AuthErrorMessage message={errors.name} />
              ) : null}
            </Input>
            <div className="flex gap-[12px] mb-[31px] tablet:mb-[40px]">
              <div className="relative">
                <Input
                  id="birthday"
                  type="text"
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="0000-00-00"
                  inputStyles={clsx(
                    "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px] w-[170px]",
                    touched.birthday && errors.birthday && "!border-red",
                    touched.birthday && !errors.birthday && "!border-green"
                  )}
                  wrapperStyles={clsx(
                    touched.birthday && errors.birthday ? "" : ""
                  )}
                >
                  <IconValidation
                    touched={touched.birthday}
                    errors={errors.birthday}
                  />

                  {touched.birthday && errors.birthday ? (
                    <AuthErrorMessage message={errors.birthday} />
                  ) : null}
                </Input>
                <svg className="absolute pointer-events-none top-[12px] right-[12px] w-[18px] h-[18px] stroke-midnight fill-white">
                  <use href={`${sprite}#icon-calendar`}></use>
                </svg>
              </div>
              <Select
                options={getOptions(speciesList, "")}
                aria-label="Species"
                placeholder="Type"
                required
                onChange={(e) => {
                  if (e) {
                    handleSelectField(e.value);
                  }
                }}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderRadius: "30px",
                    color: "#262626",
                    fontFamily: "inherit",
                    border: "1px solid rgba(38, 38, 38, 0.15)",
                    fontWeight: 500,
                    fontSize: "14px",
                    width: "143px",
                    padding: "2px",
                  }),
                }}
              />
            </div>

            <div className="flex flex-wrap gap-[8px] items-center justify-end">
              <Link
                to={"/profile"}
                className="bg-greyButton rounded-30 font-bold px-[26px] tablet:px-[58px] py-[12px] tablet:py-[14px] text-14 leading-[1.29] tracking-[-0.03px] hover:text-accent transition-colors duration-350 tablet:text-16 tablet:leading-[1.25]"
              >
                Back
              </Link>
              <button
                type="submit"
                className="bg-accent rounded-30 font-bold text-white px-[26px] tablet:px-[58px] py-[12px] tablet:py-[14px] text-14 leading-[1.29] tracking-[-0.03px] hover:bg-buttonAccent transition-colors duration-350 tablet:text-16 tablet:leading-[1.25]"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddPetForm;
