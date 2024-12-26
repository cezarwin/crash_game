import style from "./MainContent.module.css";
import HistoryBlock from "../HistoryBlock/HistoryBlock";
import GameBlock from "../GameBlock/GameBlock";
import Header from "../Header/Header";
import { useEffect } from "react";

const MainContent = ({isFullScreen}) => {

  useEffect(() => {

  }, [isFullScreen]) 

  return (
    <div className={style.container}>
      <Header />
      <HistoryBlock />
      <GameBlock isFullScreen = {isFullScreen}/>
    </div>
  );
};

export default MainContent;
