import React from "react";

export default class Box extends React.Component{
  render() {
    return (
      <div className="box">
        <div className="top" style={{backgroundImage: "url('/images/top.jpg')"}}></div>
        <div>
          {[...Array(4)].map((v, i) => (
            <span key={i} style={{'--i': i}}>
              <img src={'/images/' + i + '.jpg'} alt="" />
            </span>
          ))}
        </div>
        <div className="bottom" style={{backgroundImage: "url('/images/bottom.jpg')"}}></div>
      </div>
    );
  }
}
