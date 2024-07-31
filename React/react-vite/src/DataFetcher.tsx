import React, { useState, useEffect } from "react";
import axios from "axios";

// Define a TypeScript interface for the album data
interface Album {
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define the API endpoint and the fetch function
    const fetchData = async () => {
      try {
        const response = await axios.get<Album[]>(
          "https://jsonplaceholder.typicode.com/users/1/albums"
        );
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.message) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Conditional rendering based on loading and error state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="bg-gray-500 mt-6 p-6 text-xl mx-96 rounded-lg">
      <h2 className="text-2xl font-extrabold">Albums</h2>
      <ul>
        {data.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
