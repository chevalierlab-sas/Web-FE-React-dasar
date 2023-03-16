import React, { useEffect, useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";

function NoteItems() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getInitialData();
      setData(initialData);
    };

    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2">
      {data
        .filter((item) => !item.archived)
        .map((item) => (
          <div className="card bg-primary shadow-xl my-4 mx-2" key={item.id}>
            <div className="card-body p-4 color text-white">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm">{showFormattedDate(item.createdAt)}</p>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NoteItems;