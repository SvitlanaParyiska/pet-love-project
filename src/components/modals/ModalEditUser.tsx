import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { selectFullUser } from "../../redux/user/userSelectors";
import { modalUserSchema } from "../../helpers/schemas";
import Input from "../ui/Input";
import IconValidation from "../ui/IconValidation";
import { useState } from "react";
import clsx from "clsx";
import AuthErrorMessage from "../ui/AuthErrorMessage";
import sprite from "/images/sprite.svg";
import { editUser, getFullCurrentUser } from "../../redux/user/userOperation";
import toast from "react-hot-toast";

interface ModalEditUser {
  closeEditUserModal: () => void;
}

interface ModalUserForm {
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

const ModalEditUser = ({ closeEditUserModal }: ModalEditUser) => {
  const currentUser = useAppSelector(selectFullUser);
  const [avatar, setAvatar] = useState<string>(currentUser.avatar);
  const dispatch = useAppDispatch();

  const initialValues: ModalUserForm = {
    name: currentUser.name,
    email: currentUser.email,
    phone: currentUser.phone,
    avatar: currentUser.avatar,
  };

  const handleAvatarChange = (imgUrl: string) => {
    if (imgUrl) {
      setAvatar(imgUrl);
    }
  };

  return (
    <>
      <h3>Edit information</h3>
      <div className=" mx-auto mb-[16px] w-[86px] h-[86px] rounded-full overflow-hidden bg-light flex justify-center items-center">
        {avatar ? (
          <img src={avatar} alt="user avatar" />
        ) : (
          <svg aria-label="icon footprint" className="w-[32px] h-[32px] ">
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (
          { name, email, phone, avatar }: ModalUserForm,
          { resetForm }
        ) => {
          try {
            await dispatch(editUser({ name, email, phone, avatar })).unwrap();
            resetForm();
            await dispatch(getFullCurrentUser()).unwrap();
            closeEditUserModal();
          } catch (error) {
            console.log(error);
            toast.error(error as string);
          }
        }}
        validationSchema={modalUserSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex mb-[10px] tablet:mb-[18px] gap-[8px]">
              <Input
                id="avatar"
                type="text"
                name="avatar"
                value={values.avatar}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter URL"
                inputStyles={clsx(
                  "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px] w-[170px]",
                  touched.avatar && errors.avatar && "!border-red",
                  touched.avatar && !errors.avatar && "!border-green"
                )}
                wrapperStyles={clsx(touched.avatar && errors.avatar ? "" : "")}
              >
                <IconValidation
                  touched={touched.avatar}
                  errors={errors.avatar}
                />

                {touched.avatar && errors.avatar ? (
                  <AuthErrorMessage message={errors.avatar} />
                ) : null}
              </Input>
              <button
                type="button"
                onClick={() => handleAvatarChange(values.avatar)}
                className="flex items-center py-[10px] px-[7px] rounded-30 bg-light gap-[5px] text-12  leading-[1.33] tracking-[-0.02em]"
              >
                <p>Upload photo</p>
                <svg className="w-[16px] h-[16px]">
                  <use href={`${sprite}#icon-upload-cloud`}></use>
                </svg>
              </button>
            </div>

            <Input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
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
            <Input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              inputStyles={clsx(
                "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
                touched.email && errors.email && "!border-red",
                touched.email && !errors.email && "!border-green"
              )}
              wrapperStyles={clsx(
                touched.email && errors.email
                  ? "mb-[16px] tablet:mb-[16px]"
                  : "mb-[16px] tablet:mb-[16px]"
              )}
            >
              <IconValidation touched={touched.email} errors={errors.email} />

              {touched.email && errors.email ? (
                <AuthErrorMessage message={errors.email} />
              ) : null}
            </Input>
            <Input
              id="phone"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+380"
              inputStyles={clsx(
                "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
                touched.phone && errors.phone && "!border-red",
                touched.phone && !errors.phone && "!border-green"
              )}
              wrapperStyles={clsx(
                touched.phone && errors.phone
                  ? "mb-[16px] tablet:mb-[16px]"
                  : "mb-[16px] tablet:mb-[16px]"
              )}
            >
              <IconValidation touched={touched.phone} errors={errors.phone} />

              {touched.phone && errors.phone ? (
                <AuthErrorMessage message={errors.phone} />
              ) : null}
            </Input>
            <button
              type="submit"
              className="rounded-30 w-full py-[14px] text-white font-bold bg-accent flex items-center justify-center text-16 leading-[1.25] tracking-[-0.03em] transition-all duration-350 active:bg-buttonAccent focus:bg-buttonAccent hover:bg-buttonAccent"
            >
              Save
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ModalEditUser;
