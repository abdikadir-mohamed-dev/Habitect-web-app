import { createContext, useContext, useEffect, useState } from "react";
import { properties as initialProperties } from "../data/properties";

const PropertiesContext = createContext();

const STORAGE_KEY = "habitect-properties";

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }

    return initialProperties;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
  }, [properties]);

  const addProperty = (property) => {
    setProperties((prev) => [...prev, property]);
  };

  const updateProperty = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === updatedProperty.id
          ? updatedProperty
          : property
      )
    );
  };

  const deleteProperty = (id) => {
    setProperties((prev) =>
      prev.filter((property) => property.id !== id)
    );
  };

  const getProperty = (id) => {
    return properties.find((property) => property.id === id);
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        addProperty,
        updateProperty,
        deleteProperty,
        getProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties() {
  return useContext(PropertiesContext);
}