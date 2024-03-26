"use client";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { IComboBoxProps } from "@/types";
import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateQueryString } from "@/Hooks";
import { useSearchParams } from "next/navigation";

export default function ComboBox<T extends FieldValues>({
  className,
  setValue,
  stateName,
  placeholder,
  data,
  light = true,
  NotFoundMessage = "No data found",
  getDefaultValueFromURL,
  selectBox,
  isSuccess,
  callBcFn,
}: IComboBoxProps<T>) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const searchParams = useSearchParams();
  const [push] = useCreateQueryString();

  useEffect(() => {
    if (isSuccess) {
      setSelectedItem("");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data && getDefaultValueFromURL) {
      console.log("selectedItem");

      const title = data?.find(
        (item) =>
          Number(item.id) ===
          Number(searchParams.get(`${getDefaultValueFromURL}`))
      )?.title;

      if (title) {
        //!to handle the case if the user enters in the url an id tat doesn't exist, so it prevents setting the value to undefined or ull
        setSelectedItem(title.toLowerCase());
      } else setSelectedItem("");
    }
  }, []);
  const { i18n } = useTranslation();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        //! here we control the shadow
        className={cn(
          ` transition-shadow w-full ${
            open ? "shadow-[0_0_0_2px]" : "shadow-[0_0_0_1px]"
          } shadow-input  rounded-[6px] overflow-hidden h-10 outline-none`,
          className
        )}
      >
        <div
          //! here we control the background

          className={`selected-item text-base flex outline-none round justify-between w-full px-3 items-center gap-5 ${
            light ? "bg-white" : " bg-transparent"
          }  w-full h-full  cursor-pointer  ${
            selectedItem ? "text-input" : "text-input  "
          }`}
        >
          <span
            className={` grow text-start ${
              selectedItem ? "opacity-100" : " opacity-50 "
            }`}
          >
            {selectedItem
              ? data?.find(
                  (item) => item?.title?.toLowerCase() === selectedItem
                )?.title
              : placeholder}
          </span>
          <FontAwesomeIcon
            className={`transition-all text-[0.9rem] max-w-[20px] max-h-[20px] duration-200 ease-in-out ${
              selectedItem ? "opacity-100" : "opacity-50"
            } ${open ? "rotate-180" : "rotate-0"}`}
            icon={faChevronDown}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="PopoverContent  p-0">
        <Command
          className={` ${
            light
              ? "bg-white border-primary "
              : "bg-background border-background"
          }`}
        >
          <div
            className={`search-wrapper ${
              selectBox ? "h-0 opacity-0 pointer-events-none " : "h-12 "
            }  w-full   ${
              light ? "bg-white justify-" : "bg-background justify-"
            } `}
          >
            <CommandInput
              className={` placeholder:text-input placeholder:opacity-50 placeholder:font-medium rounded-[6px] `}
              autoFocus={light ? false : true}
              placeholder={`${
                i18n?.language === "ar" ? "ابحث ..." : "Search ..."
              } `}
            />
          </div>
          <CommandEmpty>
            {i18n?.language === "ar" ? "لا يوجد نتائج" : NotFoundMessage}
          </CommandEmpty>{" "}
          <CommandGroup className="h-fit max-h-72 overflow-y-auto">
            {data?.map((item) => (
              <CommandItem
                className={`   hover:bg-input 
                text-input  ${
                  light
                    ? "aria-selected:bg-input aria-selected:text-background"
                    : "aria-selected:bg-input aria-selected:text-background"
                } ${
                  selectedItem === item?.title?.toLowerCase()
                    ? "bg-input text-background"
                    : "pl-8 rtl:pl-0 rtl:pr-8"
                } `}
                key={item?.id}
                value={item?.title}
                onSelect={(currentValue) => {
                  //!it converts to lower case by default
                  setSelectedItem(
                    currentValue === selectedItem ? "" : currentValue
                  );
                  setValue && setValue(stateName, item?.id);
                  /*getDefaultValueFromURL && push("sort", currentValue);
                  callBcFn && callBcFn(item?.id); */
                  setOpen(false);
                }}
              >
                {selectedItem === item?.title?.toLowerCase() && (
                  <FontAwesomeIcon
                    className={cn("mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4")}
                    icon={faCheck}
                  />
                )}

                {item?.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
