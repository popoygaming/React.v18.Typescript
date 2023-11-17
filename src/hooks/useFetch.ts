import { useEffect, useState } from "react";
import { UNABLE_TO_FETCH_DATA } from "../utils/constants";

// use this useeffect generic function or custom use effect hook for all GET API calls in the app
// use 'retData' to read the http result
// use 'isPending' as property or flag for status of the API request. Can be the flag for shimmer or skeleton component
// use 'error' to get the details of request error
const useFetch = (url: string): IUseFetchResult => {
  const [retData, setRetData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<any | null>(null);
  const errMsg: string = `Error encoutered in useFetch while calling API ${url}. Error details: `;

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            console.error(`${errMsg}${res.statusText}`);
            throw Error(UNABLE_TO_FETCH_DATA);
          }
          return res.json();
        })
        .then((data) => {
          setRetData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err);
          console.error(`${errMsg}${err}`);
        });
    }, 1000);
  }, [errMsg, url]);

  return { retData, isPending, error };
};
export default useFetch;
