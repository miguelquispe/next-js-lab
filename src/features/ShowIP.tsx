import axios from "axios";
import publicIp from "public-ip";
import { FunctionComponent, useState } from "react";
import { useEffect } from "react";

const ShowIP: FunctionComponent = () => {
  const [IP, setIP] = useState("0.0.0.0");

  useEffect(() => {
    const getIp = async () => {
      const ip = await publicIp.v4();
      // const response = await axios("https://api.ipify.org/", {
      //   params: {
      //     format: "json",
      //   },
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const { data } = response;
      setIP(ip);
    };

    getIp();
  }, []);

  return (
    <div>
      <h2>Show IP: {IP}</h2>
      <p>with public-ip pkg</p>
    </div>
  );
};

export default ShowIP;
