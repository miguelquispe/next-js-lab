import { FunctionComponent, useState } from "react";
import { useEffect } from "react";

const ShowIP: FunctionComponent = () => {
  const [IP, setIP] = useState("0.0.0.0");

  useEffect(() => {
    const getIp = async () => {
      const req = await fetch("https://api.ipify.org/?format=json");
      const res = await req.json();
      setIP(res.ip);
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
