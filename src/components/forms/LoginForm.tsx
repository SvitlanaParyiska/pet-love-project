import { useState } from "react";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { Formik } from "formik";
import { SignIn } from "../../types/auth";
import { signIn } from "../../redux/user/userOperation";
import toast from "react-hot-toast";
import { loginValidation } from "../../helpers/schemas";
import clsx from "clsx";
import IconValidation from "../ui/IconValidation";
import { Link } from "react-router-dom";
import AuthErrorMessage from "../ui/AuthErrorMessage";
import Input from "../ui/Input";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async ({ email, password }: SignIn, { resetForm }) => {
        if (!email.trim() || !password.trim()) {
          return;
        }
        try {
          await dispatch(signIn({ email, password })).unwrap();

          resetForm();
        } catch (error) {
          toast.error(error as string);
        }

        resetForm();
      }}
      validationSchema={loginValidation}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} noValidate className="tablet:w-[424px]">
          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            wrapperStyles={clsx(
              touched.email && errors.email
                ? "mb-[16px] tablet:mb-[16px]"
                : "mb-[16px] tablet:mb-[16px]"
            )}
            inputStyles={clsx(
              "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
              touched.email && errors.email && "!border-red",
              touched.email && !errors.email && "!border-green"
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
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            placeholder="Password"
            icon={true}
            touched={touched.password}
            errors={errors.password}
            inputStyles={clsx(
              "px-[12px] py-[12px] tablet:px-[16px] tablet:py-[16px]",
              touched.password && errors.password && "!border-red ",
              touched.password && !errors.password && "!border-green "
            )}
            wrapperStyles="mb-[40px] tablet:mb-[64px]"
          >
            <IconValidation
              touched={touched.password}
              errors={errors.password}
            />

            {touched.password && errors.password ? (
              <AuthErrorMessage message={errors.password} />
            ) : null}
          </Input>

          <div className="">
            <button
              type="submit"
              className="mb-[16px] block w-full bg-accent rounded-30 font-bold text-14 tablet:text-16 text-white leading-[1.29] tablet:leading-[1.25]tracking-[-0.03em] py-[12px] tablet:py-[16x] transition-colors duration-350 hover:bg-buttonAccent focus:bg-buttonAccent"
            >
              LOG IN
            </button>
            <Link
              to={"/register"}
              className="block w-full text-center text-darkGrey text-12 tablet:text-14 leading-[1.17] tracking-[-0.03em] hover:text-current transition-colors duration-350 md:text-14 tablet:leading-[1.43]"
            >
              Don't have an account?
              <span className="text-accent font-bold">Register</span>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
