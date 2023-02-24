import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState([]);

  const fetchData = async () => {
    setLoading(false);
    try {
      const response = await fetch(url).then((response) => response.json());

      console.log(response);

      if (response) {
        const newDate = response.map((res) => {
          const { idMeal, strMeal, strCategory, strMealThumb, strTags } = res;

          return {
            id: idMeal,
            meal: strMeal,
            category: strCategory,
            img: strMealThumb,
            tag: strTags,
          };
        });
        setDate(newDate);
      } else {
        setDate([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };

  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        data,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
