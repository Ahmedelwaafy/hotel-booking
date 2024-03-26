import { cn } from "../../lib/utils";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface ICheckBoxProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors?: FieldErrors;
  name: Path<T>;
  label: string;
  value?: number | string;
  ServerErrors?: string;
  className?: string;
  Bgcolor?: string;
  children?: React.ReactNode | string;
  required?: boolean;
}
function CheckBox<T extends FieldValues>({
  register,
  name,
  label,
  value,
  errors,
  ServerErrors,
  className,
  Bgcolor = "light",
  children,
  required = false,
}: ICheckBoxProps<T>) {
  return (
    <label
      //title={label}
      className={cn(
        ` w-fit gap-2 flex items-center justify-center  custom_checkbox cursor-pointer ${
          Bgcolor === "dark" ? "text-" : "text-"
        }   `,
        className
      )}
      htmlFor={name}
    >
      <input
        id={name}
        name={name}
        className="hidde  border-secondary checked:bg-secondary hover:bg-secondary hover:border-secondary"
        type="checkbox"
        defaultValue={value}
        {...register(`${name}`, { valueAsNumber: true, required: required })}
      />

      <span className="">{children ? children : label}</span>
    </label>
  );
}

export default CheckBox;
