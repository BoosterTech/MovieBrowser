import { useEffect } from "react";

const RefreshOnConnectionRestore = () => {
  useEffect(() => {
    const checkInternetConnection = () => {
      if (navigator.onLine) window.location.reload();
    };

    window.addEventListener("online", checkInternetConnection);
    return () => {
      window.removeEventListener("online", checkInternetConnection);
    };
  }, []);

  return null;
};

export default RefreshOnConnectionRestore;
