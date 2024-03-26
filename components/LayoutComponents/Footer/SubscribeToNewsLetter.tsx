"use client";

import { IDynamicColors } from "@/types/CardsTypes";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function SubscribeToNewsLetter({
  CTA_BG = "bg-primary",
  colors,
}: {
  CTA_BG?: string;
  colors?: IDynamicColors;
}) {
  const { t } = useTranslation("LayoutComponents");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      from: "Web",
    },
  });

  /* const {
    mutate,
    isPending,
    error: ServerErrors,
  } = usePostData(true, () => {
    reset();
  }); */

  const onSubmit = (data: { email: string; from: string }) => {
    //mutate({ api: import.meta.env.VITE_SUBSCRIBE, data: data });
  };
  return (
    <form className="h-16 " method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <input
          style={{
            backgroundColor: colors?.normal_background_color
              ? colors?.normal_background_color
              : "",
            color: colors?.button_color ? colors?.button_color : "",
          }}
          className="dark-bg-inputs w-full shadow-none focus:shadow-none rounded-r-none rtl:rounded-r-[6px] rtl:rounded-l-none"
          type="text"
          placeholder={t("Footer.email.placeholder")}
          autoComplete="on"
          {...register("email", {
            required: true,
            pattern: /^[A-z][A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <button
          style={{
            backgroundColor: colors?.button_color
              ? colors?.button_color
              : "",
            color: colors?.text_color ? colors?.text_color : "",
          }}
          disabled={!isValid}
          type="submit"
          className={` ${CTA_BG} text-white   w-[105px] shrink-0  flex-center h-10 ${
            isValid ? "opacity-100" : "opacity-90 cursor-not-allowed"
          }`}
        >
          {/* {isPending ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <>{t("Footer.Subscribe")}</>
          )} */}
          {t("Footer.Subscribe")}
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-error">
          {errors.email.type === "required" && t("Footer.email.required_msg")}
          {errors.email.type === "pattern" && t("Footer.email.pattern_msg")}
        </p>
      )}
      {/*  {
        //!--- server errors --------
        ServerErrors?.response?.data?.errors?.email[0] && (
          <p className="mt-2 text-xs text-error">
            {ServerErrors?.response?.data?.errors?.email[0]}
          </p>
        )
      } */}
    </form>
  );
}

export default SubscribeToNewsLetter;
