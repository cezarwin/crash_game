import ButtonGameBlock from "../ButtonGameBlock/ButtonGameBlock";
import HistoryGameBlock from "../HistoryGameBlock/HistoryGameBlock";
import MainGameBlock from "../MainGameBlock/MainGameBlock";
import style from "./GameBlock.module.css";
import RoundHistory from '../RoundHistory/RoundHistory'
import LeftPanel from "../LeftPanel/LeftPanel";
import { useEffect, useState } from "react";

const GameBlock = ({isFullScreen}) => {

  console.log(isFullScreen)

  return (
    <div className={isFullScreen ? style.fullScreen : style.game} >
      <MainGameBlock isFullScreen = {isFullScreen}/>
      {/* <ButtonGameBlock /> */}
    </div>
  );
};

export default GameBlock;
