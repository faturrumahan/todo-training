import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const passwordSchema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password must be same"),
});

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
  };
  return (
    <section className="password__form">
      <form
        className="flex flex-col gap-y-3"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <input
            {...register("password")}
            type="password"
            className="p-2 border-2 rounded"
            placeholder="password"
          />
          <p className="text-red-400 text-sm">{errors?.password?.message}</p>
        </div>
        <div>
          <input
            {...register("confirmPassword")}
            type="password"
            className="p-2 border-2 rounded"
            placeholder="password confirmation"
          />
          <p className="text-red-400 text-sm">
            {errors?.confirmPassword?.message}
          </p>
        </div>
        <button className="px-5 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PasswordForm;
