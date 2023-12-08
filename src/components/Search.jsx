import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callAPI } from "../utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (event) => {
    event.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionsResults) => {
      setSuggestions(suggestionsResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  });

  return (
    <div className="w-full">
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          className="p-2 h-full w-[60px] rounded-l bg-gray-300 text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          type="text"
          className="flex grow items-center h-full border-l border-l-stone-300 text-black"
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();

              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => {
              return (
                <div
                  key={suggestion.id}
                  onClick={() => setSearchTerm(suggestion.title)}
                >
                  {suggestion.title}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Search;
