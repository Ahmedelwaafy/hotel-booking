"use client";

import { useCreateQueryString, useWindowSize } from "@/Hooks";
import { cn } from "@/lib/utils";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useCallback, useReducer } from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  lastPage: number | string;
  className?: string;
};
function Pagination({ lastPage, className = "w-full" }: PaginationProps) {
  const searchParams = useSearchParams();

  const { width } = useWindowSize();
  const [replace] = useCreateQueryString();
  type PaginationState = { page: number };

  type PaginationAction = {
    type: string;
    payload: number;
  };

  function reducer(state: PaginationState, action: PaginationAction) {
    switch (action.type) {
      case "setPage": {
        return {
          ...state,
          page: action.payload,
        };
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    page: Number(searchParams.get("page")) || 1,
  });

  const previousPage = useCallback(() => {
    replace("page", String(state.page - 1));
    dispatch({ type: "setPage", payload: state.page - 1 });
  }, [replace, state.page]);

  const NextPage = () => {
    replace("page", String(state.page + 1));
    dispatch({ type: "setPage", payload: state.page + 1 });
  };

  const PaginationChange = useCallback(
    (e: any) => {
      replace("page", String(Number(e.selected) + 1));
      dispatch({ type: "setPage", payload: Number(e.selected) + 1 });
    },
    [replace]
  );

  return (
    <nav
      className={cn(
        `all__properties--pagination trns  flex justify-between items-center my-16`,
        className
      )}
    >
      <div
        className={`w-fit ${state.page <= 1 && "cursor-not-allowed"} ${
          +lastPage > 1 ? "block" : "hidden"
        }`}
      >
        <button
          disabled={state.page <= 1}
          className=" w-[50px] aspect-square text-lg rounded-xs bg- trns bg-accent disabled:opacity-50 disabled:pointer-events-none hover:opacity-80"
          onClick={previousPage}
        >
          <FontAwesomeIcon
            className="rotate-180 rtl:rotate-0"
            icon={faAnglesRight}
          />
        </button>
      </div>
      <ReactPaginate
        previousLinkClassName="pagination__previous"
        nextLinkClassName="pagination__next"
        breakLabel="..."
        pageCount={Number(lastPage)}
        onPageChange={(e) => PaginationChange(e)}
        marginPagesDisplayed={width && width > 1000 ? 3 : 1}
        pageRangeDisplayed={width && width > 1000 ? 5 : 1}
        renderOnZeroPageCount={null}
        containerClassName="pagination__wrapper"
        activeClassName="active__page--pagination"
        forcePage={state.page - 1}
      />
      <div
        className={`w-fit ${state.page >= +lastPage && "cursor-not-allowed"} ${
          +lastPage > 1 ? "block" : "hidden"
        }`}
      >
        <button
          disabled={state.page >= +lastPage}
          className=" w-[50px] aspect-square text-lg rounded-xs bg- trns bg-accent disabled:opacity-50 disabled:pointer-events-none hover:opacity-80"
          onClick={NextPage}
        >
          <FontAwesomeIcon className="rtl:rotate-180 " icon={faAnglesRight} />
        </button>
      </div>
    </nav>
  );
}
export default Pagination;
