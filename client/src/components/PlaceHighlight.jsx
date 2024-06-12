import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PlaceCard from "./PlaceCard";

function PlaceHighlight() {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getPlace = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      setPlaces(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getPlace();
  }, [searchText]);

  return (
    <section>
      <div className="flex flex-col  justify-center items-center p-0 bg-stone-50">
        <div className="">ค้นหาที่เที่ยว</div>
        <input
          type="text"
          className="text-center search-input border-b-2  w-2/4 h-9 rounded-md "
          placeholder="หาที่เที่ยวแล้วไปกัน.."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>

      <div>
        {places.map((items) => {
          return (
            <PlaceCard
              key={items.eid}
              title={items.title}
              photo={items.photos[0]}
              description={
                items.description.length > 100
                  ? items.description.substring(0, 100) + " ..."
                  : items.description
              }
              tags={items.tags}
              url={items.url}
              additionalPhotos={items.photos.slice(1)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PlaceHighlight;
