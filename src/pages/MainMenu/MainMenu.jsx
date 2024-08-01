import { useSelector, useDispatch } from "react-redux";
import './MainMenu.scss';
import { StoriesSlider } from "../../Header/StoriesSlider/StoriesSlider";
import { Body } from "../../Body/Body";
import dataJson from '../../data.json';

export function MainMenu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cardData);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StoriesSlider></StoriesSlider>
      <Body></Body>
    </>
  );
}
