/** @format */

import { useState, useEffect } from "react";

const SearchBar = ({
  //   search,
  setSearch,
  maxLength,
  setMaxLength,
  descendingOrder,
  ascendingOrder,
}) => {
  const [setOrder, setSwitch] = useState(false);
  const [orderLabel, setOrderLabel] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const maxLengthHandler = (e) => {
    setMaxLength(e.target.value);
  };

  const switchOrder = () => {
    if (setOrder == false) {
      descendingOrder();
      setOrderLabel("Descending Order");
      setSwitch(true);
    } else {
      ascendingOrder();
      setOrderLabel("Ascending Order");
      setSwitch(false);
    }
  };

  return (
    <form>
      <div>
        <center>
          <div>
            <div>
              <label htmlFor='text'>{orderLabel}</label>
            </div>
            <div>
              <label htmlFor='search'>Search</label>
            </div>
            <input
              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              type='text'
              name='search'
              onChange={searchHandler}
            />
          </div>

          <div>
            <label htmlFor='max-length'>Maximum Length</label>
            <div>
              <input
                className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                type='number'
                name='max-length'
                onChange={maxLengthHandler}
                value={maxLength}
              />
            </div>
          </div>

          <button
            className='pb-50 inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
          active:bg-primary-700 
          active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
          dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
            onClick={switchOrder}
            type='button'
          >
            Ascend/Descend
          </button>
        </center>
      </div>
    </form>
  );
};

export default SearchBar;
