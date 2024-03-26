"use client";

import { i18nRouterConfig } from "@/i18nRouterConfig";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { IDynamicColors } from "@/types/CardsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function LanguageChanger({
  colors,
}: {
  colors?: IDynamicColors;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nRouterConfig.defaultLocale &&
      !i18nRouterConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger
        style={{
          backgroundColor: colors?.normal_background_color || "white",
          color: colors?.button_color || "var(--primary)",
        }}
        className="text- w-[130px] xl:w-fit flex-center gap-4 px-3 rounded-sm h-12  xl:bg-transparent xl:px-2 text-base "
      >
        <FontAwesomeIcon
          className="text-2xl max-w-[20px] max-h-[20px]"
          icon={faGlobe}
        />
        <span className="xl:hidden">
          {currentLocale === "en" ? "English" : "العربية"}
        </span>
      </PopoverTrigger>
      <PopoverContent
        style={{
          backgroundColor: colors?.normal_background_color || "var(--popover)",
          color: colors?.button_color || "var(--popover-foreground)",
        }}
        align="end"
        className="PopoverContent  min-w-fit flex flex-col gap-1 rounded-sm"
      >
        <button
          style={{
            backgroundColor:
              currentLocale === "en" && colors?.button_color
                ? colors?.button_color
                : currentLocale === "en" && !colors
                ? "var(--primary)"
                : "transparent",
            color:
              currentLocale === "en" && colors?.text_color
                ? colors?.text_color
                : currentLocale === "en" && !colors
                ? "white"
                : "",
          }}
          className={` hover:!bg-primary hover:text-white trns py-1.5 xl:px-2 rounded-sm`}
          onClick={() => handleChange("en")}
        >
          English
        </button>
        <button
          style={{
            backgroundColor:
              currentLocale === "ar" && colors?.button_color
                ? colors?.button_color
                : currentLocale === "ar" && !colors
                ? "var(--primary)"
                : "transparent",
            color:
              currentLocale === "ar" && colors?.text_color
                ? colors?.text_color
                : currentLocale === "ar" && !colors
                ? "white"
                : "",
          }}
          className={` hover:!bg-primary hover:text-white trns py-1.5 xl:px-2 rounded-sm`}
          onClick={() => handleChange("ar")}
        >
          العربية
        </button>
      </PopoverContent>
    </Popover>
  );
}
