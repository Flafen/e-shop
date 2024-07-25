import { useState, useEffect } from 'react'
import './MainMenu.scss'
import { StoriesSlider } from "../../Header/StoriesSlider/StoriesSlider"
import { Body } from "../../Body/Body"
import dataJson from '../../data.json';

export function MainMenu() {

  const [data, setData] = useState(null);
  
  function saveToLocalStorage(key, value) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  function getFromLocalStorage(key) {
    if (key) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  const storedMen = getFromLocalStorage("men");
  const storedWomen = getFromLocalStorage("women");

  useEffect(() => {
    if (storedMen && storedWomen) {
      setData({ men: storedMen, women: storedWomen });
    } else if (dataJson) {
      setData(dataJson);
      saveToLocalStorage("men", dataJson.men);
      saveToLocalStorage("women", dataJson.women);
    }
  }, [dataJson]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StoriesSlider></StoriesSlider>
      <Body
        men={storedMen }
        women={storedWomen}
        saveToLocalStorage={saveToLocalStorage}
      ></Body>
    </>
  )
}

