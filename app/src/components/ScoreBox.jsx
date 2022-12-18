import React, {Component} from 'react';
import propTypes from 'prop-types'

const ScoreBox = (props) => {
  const teString = ["グー", "チョキ", "パー"]
  const judmentString = ["引き分け", "勝ち", "負け"]
  return (
    <table>
      <tbody  className="siimple--bg-dark">
      <tr><th className="siimple--color-white"> あなた </th><td  className="siimple--color-white">{teString[props.human]}</td> </tr>
      <tr><th className="siimple--color-white"> コンピュータ </th><td  className="siimple--color-white">{teString[props.computer]}</td> </tr>
      <tr><th className="siimple--color-white"> 勝敗 </th><td  className="siimple--color-white">{judmentString[props.judgment]}</td> </tr>
      </tbody>
    </table>
  )
}

ScoreBox.propTypes = {
  human: propTypes.number,
  conputer: propTypes.number,
  judgment: propTypes.number
}

export default ScoreBox;
