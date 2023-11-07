import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((obj) => setData(obj))
    }, [url]);

    return data;
}