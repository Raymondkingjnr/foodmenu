import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };

  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = response.data.meals;

      console.log(data);

      if (data) {
        const newdata = data.map((item) => {
          const { idMeal, strCategory, strMealThumb, strMeal, strTags } = item;

          return {
            id: idMeal,
            category: strCategory,
            img: strMealThumb,
            meal: strMeal,
            tag: strTags,
          };
        });
        setFoods(newdata);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        loading,
        foods,
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
