import axios from "axios";
import { FunctionComponent, useState } from "react";
import { useEffect } from "react";

const ShowIP: FunctionComponent = () => {
  const [IP, setIP] = useState("0.0.0.0");

  useEffect(() => {
    const getIp = async () => {
      const response = await axios("https://api.ipify.org/", {
        params: {
          format: "json",
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = response;
      setIP(data.ip);
    };

    getIp();
  }, []);

  return (
    <div>
      <h2>Show IP: {IP}</h2>
    </div>
  );
};

export default ShowIP;
