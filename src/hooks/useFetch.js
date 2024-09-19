import { useState , useEffect } from "react";



export function useFetch(fetchFunction , initialValue) {
    const [ fetchedData , setFetchedData ] = useState(initialValue);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const places = await fetchFunction();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, []);


    return { isFetching ,  fetchedData , setFetchedData , error };
}