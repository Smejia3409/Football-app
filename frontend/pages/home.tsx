import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";

const home = () => {
  const router = useRouter();

  const getCookie = () => {
    let cookie: any = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie;
  };

  useEffect(() => {
    if (!getCookie()) {
      router.push("/");
    }
  });

  return (
    <div>
      <Nav />
    </div>
  );
};

export default home;
