import { createContext, useContext, useEffect, useState } from "react";

const PropertiesContext = createContext();

const API = import.meta.env.VITE_API_URL || "http://localhost:5555";

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);

  // Load properties from Flask
  const fetchProperties = async () => {
    try {
      const res = await fetch(`${API}/api/properties`);
      const data = await res.json();

      const formatted = data.map((property) => ({
        id: property.id,
        title: property.title,
        city: property.location?.split(" ")[0] || "",
        state: property.location?.split(" ").slice(1).join(" ") || "",
        price: property.price,
        beds: property.bedrooms,
        baths: property.bathrooms,
        description: property.description,
        image: property.image_url,
      }));

      setProperties(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const addProperty = async (property) => {
    await fetch(`${API}/api/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });

    fetchProperties();
  };

  const updateProperty = async (property) => {
    await fetch(`${API}/api/properties/${property.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });

    fetchProperties();
  };

  const deleteProperty = async (id) => {
    await fetch(`${API}/api/properties/${id}`, {
      method: "DELETE",
    });

    fetchProperties();
  };

  const getProperty = (id) => {
    return properties.find((property) => String(property.id) === String(id));
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