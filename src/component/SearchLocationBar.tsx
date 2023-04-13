import { percent, px } from "csx";
import { useState, useEffect, useRef } from "react";
import { style } from "typestyle";
import { getLocation } from "../api/weather";
import { Location } from "../model/Location";
import { Colors } from "../style/designSystem";

const ulCss = style({
  padding: 0,
  margin: 0,
  display: "block",
  listStyle: "none",
  position: "absolute",
  width: percent(100),
  backgroundColor: Colors.gray3,
  color: "white",
});

const liCss = style({
  padding: "7.5px 4px 7.5px 6px",
  backgroundColor: "inherit",
  cursor: "pointer",
  border: "1px solid #616475",
});

const inputCss = style({
  margin: 0,
  border: "none",
  flex: 1,
  display: "block",
  padding: "7.5px 4px 7.5px 6px",
  backgroundColor: "inherit",
  color: "inherit",
});

interface Props {
  value: Location;
  setValue: (value: Location) => void;
}

export const SearchLocationBar = ({ value, setValue }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<Location>>([]);

  const onChange = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      getLocation(search).then((result) => {
        setOpen(true);
        setSuggestions(result);
      });
    }
  }, [search]);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ display: "block", position: "relative" }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          backgroundColor: Colors.gray3,
          color: "white",
          border: "2px solid white",
          borderRadius: px(4),
          padding: px(2),
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          type="text"
          onChange={onChange}
          value={search}
          className={inputCss}
          placeholder="Search for place"
        />
      </div>
      {open && (
        <ul className={ulCss}>
          {suggestions.map((el) => (
            <li
              key={el.id}
              className={liCss}
              onClick={() => {
                setValue(el);
                setSearch(`${el.name} (${el.region} - ${el.country})`);
                setOpen(false);
              }}
            >{`${el.name} (${el.region} - ${el.country})`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
