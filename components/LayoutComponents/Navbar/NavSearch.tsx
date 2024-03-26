"use client";

import useDebounce from "@/Hooks/useDebounce";
import { cn } from "@/lib/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { IDynamicColors } from "../../../types/CardsTypes";

function NavSearch({
  placeholder,
  className,
  colors,
}: {
  placeholder: string;
  className: string;
  colors?: IDynamicColors;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredText, setFilteredText] = useState(
    searchParams.get("q")?.replace(/-/g, " ") || ""
  );
  const debouncedFilteredText = useDebounce(filteredText);

  useEffect(() => {
    if (debouncedFilteredText) {
      //TODO: call search api
    }
  }, [debouncedFilteredText]);
  const [togglePlaceholder, setTogglePlaceholder] = useState(true);

  function handleTyping(e: React.KeyboardEvent<HTMLInputElement>) {
    const Target = e.target as HTMLInputElement;

    if (e.key === "Enter" && Target.value !== "") {
      router.push(`/search?q=${Target.value?.replace(/\s/g, "-")}`);
    }
  }
  return (
    <div className={cn("w-[560px] ss:w-[330px] h-12", className)}>
      <label className="relative h-full w-full" htmlFor="NavSearch">
        <div
          style={{
            color: colors?.button_color
              ? colors?.button_color
              : "var(--secondary)",
          }}
          className={` pointer-events-none trns flex-center nav__search--placeholder absolute inset-0  gap-2 min-w-full min-h-full `}
        >
          <Link
            className={`w-5 max-w-[20px] max-h-[20px] pointer-events-auto trns ${
              filteredText || !togglePlaceholder
                ? "-translate-x-[150px] ss:-translate-x-12 rtl:translate-x-[150px]  rtl:ss:translate-x-12"
                : " "
            } `}
            href={
              debouncedFilteredText
                ? `/search?q=${(debouncedFilteredText as string)?.replace(
                    /\s/g,
                    "-"
                  )}`
                : `/search`
            }
          >
            <FontAwesomeIcon
              className="w-full max-w-full max-h-full "
              icon={faMagnifyingGlass}
            />
          </Link>
          <span
            className={`  w-fit trns ${
              filteredText || !togglePlaceholder
                ? "opacity-0 translate-x-14 rtl:-translate-x-14"
                : "opacity-50 "
            }`}
          >
            {placeholder}
          </span>
        </div>
        <input
          style={{
            backgroundColor: colors?.text_color ? colors?.text_color : "",
            color: colors?.button_color ? colors?.button_color : "",
          }}
          //autoFocus
          className="w-full h-full dark-bg-inputs shadow-muted focus:shadow-muted text-center pl-11 ss:pl-9 rtl:pl-4 rtl:ss:pl-1 rtl:pr-11 rtl:ss:pr-9"
          type="search"
          onKeyUp={handleTyping}
          value={filteredText}
          onFocus={() => setTogglePlaceholder(false)}
          onBlur={() => {
            if (!filteredText) setTogglePlaceholder(true);
          }}
          onChange={(e) => setFilteredText(e.target.value)}
          name="NavSearch"
          autoComplete="off"
          id="NavSearch"
        />
      </label>
    </div>
  );
}

export default NavSearch;
