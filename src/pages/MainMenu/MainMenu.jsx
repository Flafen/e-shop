import { useSelector } from "react-redux";
import './MainMenu.scss';
import { StoriesSlider } from "../../Header/StoriesSlider/StoriesSlider";
import { Body } from "../../Body/Body";

export function MainMenu() {
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
