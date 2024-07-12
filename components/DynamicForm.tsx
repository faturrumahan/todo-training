import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const dynamicSchema = yup.object({
  data: yup
    .array()
    .of(yup.object().shape({ text: yup.string().required() }))
    .min(1),
});

const DynamicForm = () => {
  const { control, register, handleSubmit } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      data: [
        {
          text: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "data" });

  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <section className="dynamic__form">
      {fields.map((field, index) => (
        <div key={index} className="mb-2">
          <input
            {...register(`data.${index}.text`)}
            className="p-2 border-2 rounded"
            placeholder="input some text"
          />
        </div>
      ))}
      <div className="flex justify-between gap-2">
        <button
          className="px-5 py-2 bg-green-600 text-white rounded w-full"
          onClick={() => append({ text: "" })}
        >
          Add
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded w-full"
          onClick={handleSubmit(onSubmitHandler)}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default DynamicForm;
