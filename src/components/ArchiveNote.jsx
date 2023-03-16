import React, { useEffect, useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";

function ArchiveNote() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getInitialData();
      setData(initialData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Arsip</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        {data
          .filter((item) => item.archived)
          .map((item) => (
            <div className="card bg-gray-400 shadow-xl my-4 mx-2" key={item.id}>
              <div className="card-body p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">{showFormattedDate(item.createdAt)}</p>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArchiveNote;