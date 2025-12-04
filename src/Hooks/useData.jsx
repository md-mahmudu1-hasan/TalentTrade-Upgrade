import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get('/Data.json')
        .then(response => {
            setData(response.data);
            setError(null);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [])
    return {data, loading, error}
}

export default useData