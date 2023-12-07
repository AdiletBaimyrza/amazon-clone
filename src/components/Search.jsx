import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="w-full">
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select className="p-2 h-full w-[60px] rounded-l bg-gray-300 text-black border text-xs xl:text-sm">
          <option value="">All</option>
          <option value="">Arts & Crafts</option>
          <option value="">Automotive</option>
          <option value="">Baby</option>
          <option value="">Beauty & Personal Care</option>
          <option value="">Girl&apos;s Fashion</option>
          <option value="">Books</option>
          <option value="">Computers</option>
          <option value="">Deals</option>
          <option value="">Digital Music</option>
          <option value="">Electronics</option>
          <option value="">Boy&apos;s Fashion</option>
          <option value="">Health & Household</option>
          <option value="">Home & Kitchen</option>
          <option value="">Industrial & Scientific</option>
          <option value="">Luggage</option>
          <option value="">Movies & TV</option>
          <option value="">Music, CDs & Vinyl</option>
          <option value="">Pet Supplies</option>
          <option value="">Prime Video</option>
          <option value="">Software</option>
          <option value="">Sports & Outdoors</option>
          <option value="">Tools & Home Improvement</option>
          <option value="">Toys & Games</option>
          <option value="">Video Games</option>
          <option value="">Women&apos;s Fashion</option>
        </select>
        <input
          type="text"
          className="flex grow items-center h-full border-l border-l-stone-300 text-black"
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
