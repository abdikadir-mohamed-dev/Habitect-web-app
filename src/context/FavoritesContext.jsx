import { createContext, useContext, useEffect, useMemo, useState } from "react";
import API from "../services/api";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [savedRecords, setSavedRecords] = useState([]);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("access_token");
    
    // Robust check: ensures token exists, isn't null, isn't "undefined", and isn't empty
    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
      setFavoriteIds([]);
      setSavedRecords([]);
      return;
    }

    try {
      const response = await API.get("/saved-properties");
      const records = response.data;
      setSavedRecords(records);
      setFavoriteIds(records.map((item) => item.property_id));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setFavoriteIds([]);
        setSavedRecords([]);
      } else {
        console.error("Failed to fetch favorites from database", error);
      }
    }
  };

  // Fetch favorites on mount, and listen for manual auth changes or token updates
  useEffect(() => {
    fetchFavorites();

    window.addEventListener("auth_changed", fetchFavorites);
    return () => {
      window.removeEventListener("auth_changed", fetchFavorites);
    };
  }, []);

  const toggleFavorite = async (propertyId) => {
    const token = localStorage.getItem("access_token");
    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
      alert("Please sign in to save properties.");
      return;
    }

    const isAlreadySaved = favoriteIds.includes(propertyId);

    try {
      if (isAlreadySaved) {
        const recordToDelete = savedRecords.find((item) => item.property_id === propertyId);
        if (recordToDelete) {
          await API.delete(`/api/saved-properties/${recordToDelete.id}`);
        }
        setFavoriteIds((current) => current.filter((id) => id !== propertyId));
        setSavedRecords((current) => current.filter((item) => item.property_id !== propertyId));
      } else {
        const response = await API.post("/saved-properties", { property_id: propertyId });
        const newRecord = response.data;
        
        setFavoriteIds((current) => [...current, propertyId]);
        setSavedRecords((current) => [...current, newRecord]);
      }
    } catch (error) {
      console.error("Failed to update favorite", error);
      alert("Could not update favorites. Please try again.");
    }
  };

  const isFavorite = (propertyId) => favoriteIds.includes(propertyId);

  const value = useMemo(
    () => ({ favoriteIds, toggleFavorite, isFavorite, refreshFavorites: fetchFavorites }),
    [favoriteIds, savedRecords]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return ctx;
}