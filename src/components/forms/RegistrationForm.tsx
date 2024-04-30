import { useState } from "react";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { Formik } from "formik";
import { registerValidation } from "../../helpers/schemas";
import { SignUpForm } from "../../types/auth";
import { signUp } from "../../redux/user/userOperation";
import toast from "react-hot-toast";
import Input from "../ui/Input";
import IconValidation from "../ui/IconValidation";
import AuthErrorMessage from "../ui/AuthErrorMessage";
import clsx from "clsx";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerValidation}
      onSubmit={async (
        { name, email, password, confirmPassword }: SignUpForm,
        { resetForm }
      ) => {
        if (
          !name.trim() ||
          !email.trim() ||
          !password.trim() ||
          !confirmPassword.trim()
        ) {
          return;
        }

        try {
          await dispatch(signUp({ name, email, password })).unwrap();
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
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            touched={touched.password}
            errors={errors.password}
            inputStyles={clsx(
              "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
              touched.password && errors.password && "!border-red",
              touched.password && !errors.password && "!border-green"
            )}
            icon={true}
            wrapperStyles={clsx(
              touched.email && errors.email
                ? "mb-[16px] tablet:mb-[16px]"
                : "mb-[16px] tablet:mb-[16px]"
            )}
          >
            <IconValidation
              touched={touched.password}
              errors={errors.password}
            />

            {touched.password && errors.password ? (
              <AuthErrorMessage message={errors.password} />
            ) : touched.password && !errors.password ? (
              <AuthErrorMessage message="Password is secure" isError={false} />
            ) : null}
          </Input>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm password"
            showPassword={showConfirmPassword}
            toggleShowPassword={toggleShowConfirmPassword}
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
            inputStyles={clsx(
              "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
              touched.confirmPassword &&
                errors.confirmPassword &&
                "!border-red",
              touched.confirmPassword &&
                !errors.confirmPassword &&
                "!border-green"
            )}
            icon={true}
            wrapperStyles={clsx(
              "mb-[40px] tablet:mb-[64px]",
              touched.confirmPassword && errors.confirmPassword
                ? "mb-[16px] tablet:mb-[16px]"
                : "mb-[16px] tablet:mb-[16px]"
            )}
          >
            <IconValidation
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
            />

            {touched.confirmPassword && errors.confirmPassword ? (
              <AuthErrorMessage message="Passwords does not match" />
            ) : touched.confirmPassword && !errors.confirmPassword ? (
              <AuthErrorMessage message="Passwords match" isError={false} />
            ) : null}
          </Input>
          <div>
            <button
              type="submit"
              className="mb-[16px] block w-full bg-accent rounded-30 font-bold text-14 tablet:text-16 text-white leading-[1.29] tablet:leading-[1.25]tracking-[-0.03em] py-[12px] tablet:py-[16x] transition-colors duration-350 hover:bg-buttonAccent focus:bg-buttonAccent"
            >
              REGISTRATION
            </button>
            <Link
              to="/login"
              className="block w-full text-center text-darkGrey text-12 tablet:text-14 leading-[1.17] tracking-[-0.03em] hover:text-current transition-colors duration-350 md:text-14 tablet:leading-[1.43]"
            >
              Already have an account?
              <span className="text-accent font-bold">Login</span>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
