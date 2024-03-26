"use client";
import { useCreateQueryString } from "@/Hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { IComboBoxProps } from "@/types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

export default function SelectBox<T extends FieldValues>({
  className,
  setValue,
  stateName,
  placeholder,
  data,
  light = false,
  getDefaultValueFromURL,
  isSuccess,
  colors,
}: IComboBoxProps<T>) {
  const searchParams = useSearchParams();

  const [push] = useCreateQueryString();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setSelectedItem("");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data && searchParams) {
      const id = data?.find(
        (item) =>
          Number(item.id) ===
          Number(searchParams.get(`${getDefaultValueFromURL}`))
      )?.id;

      if (id) {
        //!to handle the case if the user enters in the url an id tat doesn't exist, so it prevents setting the value to undefined or null
        setSelectedItem(id.toString());
      } else setSelectedItem("");
    }
  }, [data, getDefaultValueFromURL, searchParams]);

  return (
    <Select
      open={open}
      onOpenChange={setOpen}
      value={selectedItem}
      onValueChange={(currentValue) => {
        setSelectedItem(currentValue);
        setValue && setValue(stateName, currentValue);
        getDefaultValueFromURL && push("sort", currentValue);
      }}
    >
      <SelectTrigger
        style={{
          boxShadow: colors?.button_color ? colors?.button_color : "",
        }}
        className={cn(
          ` transition-shadow ${
            open ? "shadow-[0_0_0_2px]" : "shadow-[0_0_0_1px]"
          } shadow-primary  rounded-[6px] overflow-hidden h-10 outline-none truncate  `,
          className
        )}
      >
        <div
          style={{
            color: colors?.button_color ? colors?.button_color : "",
          }}
          className={`selected-item rtl:rtl text-base flex outline-none round justify-between w-full px-3 items-center gap-5 ${
            light ? "bg-muted-foreground" : "bg-white"
          }  w-full h-full  cursor-pointer  ${
            selectedItem ? "text-primary" : "text-primary  "
          }`}
        >
          <span className={`${selectedItem ? "opacity-100" : " opacity-50 "}`}>
            <SelectValue placeholder={placeholder} />
          </span>

          <FontAwesomeIcon
            className={`transition-all text-[0.9rem] duration-200 max-w-[20px] max-h-[20px] ease-in-out ${
              selectedItem ? "opacity-100" : "opacity-50"
            } ${open ? "rotate-180" : "rotate-0"}`}
            icon={faChevronDown}
          />
        </div>
      </SelectTrigger>
      <SelectContent
        className={` ${
          light
            ? "bg-muted-foreground border-muted-foreground"
            : "bg-white border-primary"
        } `}
        position="popper"
      >
        <SelectGroup>
          {data?.map((item) => (
            //! if we put the check icon here it will be displayed also in the select trigger
            <SelectItem
              textValue={item?.id}
              showCheckIcon={selectedItem === item?.id?.toString()}
              className={`${
                light
                  ? "focus:bg-primary focus:text-background"
                  : "focus:bg-primary focus:text-background"
              } ${
                selectedItem === item?.id?.toString()
                  ? "bg-primary text-background"
                  : "pl-8 rtl:pl-0 rtl:pr-8 "
              } rtl:rtl`}
              key={item?.id}
              value={item?.id?.toString()}
            >
              {item?.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
