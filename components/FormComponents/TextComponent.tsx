import { cn } from "@/lib/utils";
import { IFormElementProps } from "@/types";
import {
  faCircleInfo,
  faHandHoldingHeart,
  faShield,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldValues } from "react-hook-form";

function TextComponent<T extends FieldValues>({
  register,
  name,
  label = "",
  placeholder,
  dirtyFields,
  required = true,
  validations = {},
  errors,
  ServerErrors,
  inputStyle,
  dir,
  value,
  Bgcolor = "light",
  alignment = "vertical",
  withIcon = true,
  icon = "user",
  t,
  disabled = false,
  className,
  tooltip,
}: IFormElementProps<T>) {
  return (
    <label
      className={cn(
        `flex w-1/2 md:w-full   ${
          alignment === "vertical"
            ? "flex-col gap-[10px] items-start "
            : "gap-6   md:h-auto  items-center md:flex-col md:gap-2 md:items-start"
        } ${label ? "h-[98px]" : "h-[64px]"} justify-start relative  `,
        className
      )}
      htmlFor={name}
    >
      {label && (
        <h3
          className={`text-base flex items-center gap-1 whitespace-nowrap ${
            alignment === "vertical" ? "min-w-fit " : "min-w-[210px] truncate"
          } trns ${errors?.[name] || ServerErrors ? " text-error " : ""}`}
        >
          {label}{" "}
          {tooltip && (
            <FontAwesomeIcon
              className="text-sm max-w-[20px] max-h-[20px] pt-0.5"
              title={tooltip}
              icon={faCircleInfo}
            />
          )}
        </h3>
      )}
      <div className="flex-col items-start  justify-center gap-0 w-full ">
        <input
          dir={dir}
          disabled={disabled}
          className={`w-full peer ${
            withIcon && "pl-9 focus:pl-9 rtl:pl-0 rtl:pr-9 rtl:focus:pr-9 "
          }  ${
            Bgcolor === "dark" ? "dark-bg-inputs" : "light-bg-inputs"
          } ${inputStyle} ${
            errors?.[name] || ServerErrors
              ? "shadow-error focus:shadow-error text-error focus:text-error placeholder:text-error focus:placeholder:text-error "
              : ""
          }`}
          type="text"
          id={name}
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          {...register(`${name}`, {
            required: required,
            ...validations,
          })}
        />{" "}
        {withIcon && (
          <FontAwesomeIcon
            className={`.input__icon w-4 trns absolute left-3 rtl:left-auto rtl:right-3   peer-focus:opacity-100 ${
              dirtyFields?.[name] ? "opacity-100" : "opacity-50"
            } ${label ? "top-[47px]" : "top-[11px]"} ${
              errors?.[name] || ServerErrors ? " text-error " : ""
            }`}
            icon={
              icon === "user"
                ? faUser
                : icon === "code"
                ? faShield
                : icon === "referral"
                ? faHandHoldingHeart
                : faUser
            }
          />
        )}
        {errors?.[name] && (
          <p className="pt-2 text-xs text-error ">
            {errors?.[name]?.type === "required" &&
              t(`validations.${name}.required`)}
            {errors?.[name]?.type === "pattern" &&
              t(`validations.${name}.pattern`)}
          </p>
        )}
        {
          //!--- server errors --------

          ServerErrors && (
            <p className="pt-2 text-xs text-error">{ServerErrors}</p>
          )
        }
      </div>
    </label>
  );
}

export default TextComponent;
