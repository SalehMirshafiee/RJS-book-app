import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={searchHandler}
      />
      <button onClick={searchHandler}>
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}

export default SearchBox;
