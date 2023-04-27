import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [itemId, setItemId] = useState(null);

    // 6 - Estado de loading

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async() => {
        setLoading(true);
        try {
          const res = await fetch(url);
  
          const json = await res.json();
  
          setData(json);
  
          setMethod(null);
  
          // 8 - tratando erros
          setError(null);
        } catch (error) {
          console.log(error.message);
  
          setError("Houve um erro ao carregar os dados!");
        }
  
        setLoading(false);
      };
        fetchData();
    }, [url, callFetch]);

    const httpConfig = (data, method) => {
        if(method === "POST"){
          setConfig({
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          });
          setMethod("POST");
        }
        else if(method === "DELETE"){
          setConfig({
            method: "DELETE",
            headers:{
              "Content-Type": "application/json",
            },
          });
          setMethod("DELETE");
          setItemId(data);
        }
      };

    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
            else if(method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`;
                console.log(deleteUrl)
                const res = await fetch(deleteUrl, config);
                const json = await res.json();
                setCallFetch(json);
            }

        };
        httpRequest();
    }, [config, method, url, itemId]);

  
    return {data, httpConfig, loading, error};
};