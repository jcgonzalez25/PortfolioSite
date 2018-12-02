class CSSUtils{
  convertToString(num){return num + "px";}
  appendToObject(styles,DivElement){
    for(let style in Object.keys(styles))
      DivElement.style[style] = styles[style];
  }
}
