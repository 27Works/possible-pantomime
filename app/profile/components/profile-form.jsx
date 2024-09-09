"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export const ProfileForm = ({ dealers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "JosephineRobinson",
      email: "j.robertson@gmail.com",
      country: "Australia",
      dealer: "Radical Australia East",
      radical: "SR1",
      purchaseYear: "2006",
      chassisNumber: "234455",
    },
  });

  const [showList, setShowList] = useState(false);
  const [inputs, setInputs] = useState({});

  const onSubmit = (data) => {
    setInputs({ ...inputs, ...data });
    setShowList(true);
  };

  return (
    <form
      className="bg-[#161616] p-8 text-white border border-1 rounded-lg border-[#8C8C8C] border-opacity-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="mb-6 bg-clip-text bg-gradient-to-r from-[#F2CB13] to-[#E77003] text-xl font-futura_pt_bold text-transparent">
        MY PROFILE
      </h1>
      {showList && (
        <ul className="list-disc pl-4 mb-6 gap-y-2 font-futura_pt_book text-lg">
          <li>Full name: {inputs.fullName}</li>
          <li>Email: {inputs.email}</li>
          <li>Country: {inputs.country}</li>
          <li>Dealer: {inputs.dealer}</li>
          <li>Radical: {inputs.radical}</li>
          <li>Year of purchase: {inputs.purchaseYear}</li>
          <li>Chassis number: {inputs.chassisNumber}</li>
        </ul>
      )}
      <div className="grid gap-6 mb-6 grid-cols-2 font-futura_pt_book">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            {...register("fullName", {
              pattern: {
                required: true,
                value: /^[a-zA-Z]+$/,
                message: "Please input a valid full name",
              },
              onBlur: (e) => {
                console.log(e);
              },
            })}
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.fullName
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
          />
          {errors.fullName && (
            <p className="text-base text-red-600">{errors.fullName?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: {
                required: true,
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please input a valid email",
              },
            })}
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.email
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
          />
          {errors.email && (
            <p className="text-base text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select
            {...register("country", {
              pattern: {
                required: true,
              },
            })}
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.country
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
          >
            <option value="Australia" className="bg-[#161616]">
              Australia
            </option>
            <option value="United Kingdom" className="bg-[#161616]">
              United Kingdom
            </option>
            <option value="Canada" className="bg-[#161616]">
              Canada
            </option>
          </select>
          {errors.country && (
            <p className="text-base text-red-600">{errors.country?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="dealer">Dealer</label>
          <select
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.dealer
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
            {...register("dealer", {
              pattern: {
                required: true,
              },
            })}
          >
            {dealers?.map((dealer) => (
              <option
                value={dealer.title}
                className="bg-[#161616]"
                key={dealer.id}
              >
                {dealer.title}
              </option>
            ))}
          </select>
          {errors.dealer && (
            <p className="text-base text-red-600">{errors.dealer?.message}</p>
          )}
        </div>
      </div>
      <div className="mb-6 font-futura_pt_book">
        <label htmlFor="radical">Which Radical do you own?</label>
        <select
          {...register("radical", {
            required: true,
          })}
          className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
            errors.radical
              ? "border-red-600 focus:border-red-600 focus:ring-red-600"
              : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
          }`}
        >
          <option value="SR1" className="bg-[#161616]">
            SR1
          </option>
          <option value="SR3" className="bg-[#161616]">
            SR3
          </option>
          <option value="SR10" className="bg-[#161616]">
            SR10
          </option>
        </select>
        {errors.radical && (
          <p className="text-base text-red-600">{errors.radical?.message}</p>
        )}
      </div>
      <div className="grid gap-6 mb-6 grid-cols-2 font-futura_pt_book">
        <div>
          <label
            htmlFor="purchaseYear"
            className="flex justify-between items-center"
          >
            <span>Year of purchase</span>
            <span className="text-[#B6B6B6] text-xs">Optional</span>
          </label>
          <input
            type="text"
            {...register("purchaseYear", {
              pattern: {
                value: /^(198[1-9]|199\d|20\d{2})$/,
                message: "Please input a valid year of purchase",
              },
            })}
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.purchaseYear
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
          />
          {errors.purchaseYear && (
            <p class="text-base text-red-600">{errors.purchaseYear?.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="chassisNumber"
            className="flex justify-between items-center"
          >
            <span>Chassis number</span>
            <span className="text-[#B6B6B6] text-xs">Optional</span>
          </label>
          <input
            {...register("chassisNumber", {
              pattern: {
                value: /^[0-9]+$/,
                message: "Please input a valid number",
              },
            })}
            type="text"
            className={`text-lg bg-transparent border border-1 rounded-md w-full px-4 py-2.5 ${
              errors.chassisNumber
                ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                : "border-gray-400 focus:ring-[#F2CB13] focus:border-[#F2CB13]"
            }`}
          />
          {errors.chassisNumber && (
            <p class="text-base text-red-600">
              {errors.chassisNumber?.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="button button-colored font-futura_pt_bold disabled:cursor-not-allowed disabled:opacity-40"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        SAVE PROFILE
      </button>
    </form>
  );
};
