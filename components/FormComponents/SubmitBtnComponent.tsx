import { cn } from "@/lib/utils";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISubmitBtnComponentProps {
  value: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  alignment?: "vertical" | "horizontal";
  className?: string;
}

function SubmitBtnComponent({
  value = "Send",
  disabled,
  isSubmitting,
  alignment = "vertical",
  className,
}: ISubmitBtnComponentProps) {
  return (
    <button
      disabled={disabled}
      className={cn(" mt-3 text-secondary w-full rounded-[6px] border-secondary border h-10 flex-center font-semibold text-lg trns hover:bg-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-secondary disabled:hover:bg-secondary", className)}
      type="submit"
    >
      <span>
        {isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : value}
      </span>
    </button>
  );
}

export default SubmitBtnComponent;
