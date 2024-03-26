import { cn } from "@/lib/utils";
import { IHeadingsProps } from "@/types";
function HeadingTwo({ className, children, colored = true }: IHeadingsProps) {
  return (
    <h2
      className={cn(
        "text-[32px] sm:text-2xl  font-poppins leading-tight font-semibold   ss:text-center text-black",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default HeadingTwo;
