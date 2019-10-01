
class LinkBubbleAnimation extends PopAnimator{
  constructor(BubbleObject,sectorId){
    super(BubbleObject);
    this.sectorId       = sectorId;
    this.moveTo         = null;
    this.afterAnimation = {update:this.BubbleObject.set,complete:null};
  }
  startAt(positionToSet){
    this.location = positionToSet;
    this.BubbleObject.set(positionToSet);
  }
  animate(){
   let obj = this.afterAnimation;
    //error is with this;
    console.log(this.location);
    console.log(this.moveTo);

    tween({
      from:this.location,
      to: this.moveTo,
      ease: easing.easeInOut,
      duration: 1000
    }).start(v=>this.BubbleObject.set(v));
  }
}
class Link{
  constructor(CanvasElement,linkLabel){
    this.CanvasElement = CanvasElement;
    this.linkName      = linkLabel;
    this.LinkElement   = this.createLinkElement();
    this.Controller    = new LinkBubbleAnimation(this.LinkElement);
  }
  createLinkElement(){
    let TempLinkElement = document.createElement("DIV");
    TempLinkElement.id  = this.linkName;
    return TempLinkElement;
  }
  appendLinkToDOM(startFrom){
    this.CanvasElement.appendChild(this.LinkElement);
  }
}
