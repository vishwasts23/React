import {
  useRef,
} from "react";

export default function SearchDestination() {
  const searchRef =
    useRef();

  const handleFocus = () => {
    searchRef.current.focus();
  };

  return (
    <div className="search-box">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search Destination"
      />

      <button
        onClick={handleFocus}
      >
        Focus Search
      </button>
    </div>
  );
}