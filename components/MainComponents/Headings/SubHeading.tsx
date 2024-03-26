import { cn } from "@/lib/utils";
import { IHeadingsProps } from "@/types";

function SubHeading({ className, children }: IHeadingsProps) {
  return (
    <p className={cn("text-base mt-1 text-muted-foreground ", className)}>
      {children}
    </p>
  );
}

export default SubHeading;
