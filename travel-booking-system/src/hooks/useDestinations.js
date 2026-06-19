import { useEffect, useState } from "react";

export default function useDestinations() {
  const [destinations, setDestinations] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response =
          await fetch(
            "https://dummyjson.com/products?limit=6"
          );

        const data =
          await response.json();

        setDestinations(
          data.products
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    destinations,
    loading,
  };
}