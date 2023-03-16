import React, { useEffect, useState } from "react";
import { getInitialData } from "../utils";

const ActiveNote = () => {
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
      <h2>Catatan Aktif</h2>
     <div>
     {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ActiveNote;