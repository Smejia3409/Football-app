import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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

  return <div>home</div>;
};

export default home;
