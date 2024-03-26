import { cn } from "@/lib/utils";
import Link from "next/link";

const Breadcrumbs = ({ className ,text}: { className?: string ;text?:string}) => {

  return (
    <nav aria-label="breadcrumb">
      
      <ul
        className={cn(
          "breadcrumb flex justify-center gap-1 rtl:ltr",
          className
        )}
      >
        <li className="breadcrumb-item">
          <Link className="" href="">{text}</Link>
        </li>
        {/* {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(1, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={index}
              className={`breadcrumb-item${isLast ? " active" : ""} ${
                index === 0 && "hidden"
              }`}
            >
              {isLast ? (
                // If it's the last item, display the text without a link
                pathname?.replace(/-/g, " ")
              ) : (
                // If it's not the last item, display a link
                <LangLink to={routeTo}>
                  {pathname?.replace(/-/g, " ")} /{" "}
                </LangLink>
              )}
            </li>
          );
        })} */}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
