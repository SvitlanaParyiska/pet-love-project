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
import { AddPet } from "../../types/InterfaceData";
import { addUserPet } from "../../redux/user/userOperation";
import { selectNoticesSpecies } from "../../redux/dataBase/dataBaseSelectors";
import { getOptions } from "../../helpers/filtersHelper";
import sprite from "/images/sprite.svg";

const AddPetForm = () => {
  const dispatch = useAppDispatch();
  const speciesList = useAppSelector(selectNoticesSpecies);

  return (
    <Formik
      initialValues={{
        title: "",
        name: "",
        imgUrl: "",
        species: "",
        birthday: "",
        sex: "",
      }}
      validationSchema={addPetValidation}
      onSubmit={async (
        { title, name, imgUrl, species, birthday, sex }: AddPet,
        { resetForm }
      ) => {
        if (
          !title.trim() ||
          !name.trim() ||
          !imgUrl.trim() ||
          !species.trim() ||
          !birthday.trim() ||
          !sex.trim()
        ) {
          return;
        }

        try {
          await dispatch(
            addUserPet({ title, name, imgUrl, species, birthday, sex })
          ).unwrap();
          resetForm();
        } catch (error) {
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
        <form onSubmit={handleSubmit} noValidate className="desktop:w-[424px]">
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
          <img src="" />
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
              <svg className="absolute pointer-events-none top-[17px] right-[13px] w-[18px] h-[18px] stroke-midnight fill-white">
                <use href={`${sprite}#icon-calendar`}></use>
              </svg>
              <input
                id="birthday"
                name="birthday"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthday}
                className="w-[144px] p-[12px] cursor-pointer border-1 border-grey rounded-30"
              />
            </div>
            <Select
              options={getOptions(speciesList, "")}
              aria-label="Species"
              placeholder="Type of pet"
              onChange={handleChange}
              onBlur={handleBlur}
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
  );
};

export default AddPetForm;
