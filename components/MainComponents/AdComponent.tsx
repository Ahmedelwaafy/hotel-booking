import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  data: {
    link: string;
    type: string;
    imgSrc?: string;
    title?: string;
    sub_title?: string;
  };
  wrapperClassName?: string;
  imgClassName?: string;
  imgWidth?: number;
  imgHeight?: number;
};
function AdComponent({
  data,
  wrapperClassName = "site_container h-fit",
  imgClassName,
  imgWidth,
  imgHeight,
}: props) {
  return (
    <Link
      target="_blank"
      href={data?.link}
      className={cn("", wrapperClassName)}
    >
      {data?.type === "img" ? (
        <>
          <div
            className={cn(
              "w-fit h-fit group rounded-lg object-cover overflow-hidden relative text-white",
              imgClassName
            )}
          >
            {(data?.title || data?.sub_title) && (
              <div className="ad__overlay absolute w-full h-full inset-0 z-40 bg-black/30 flex-col-center gap-5">
                <h4 className="font-semibold text-xl">{data?.title}</h4>
                <h5>{data?.sub_title}</h5>
              </div>
            )}
            <Image
              className={cn(
                "w-full h-full group-hover:scale-110 trns object-cover "
              )}
              src={data?.imgSrc}
              alt="ad"
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        </>
      ) : (
        <div>other</div>
      )}
    </Link>
  );
}

export default AdComponent;
