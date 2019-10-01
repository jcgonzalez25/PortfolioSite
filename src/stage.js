const {styler,tween,easing} = window.popmotion;
class PopAnimator{
  constructor(BubbleObject){
    this.BubbleObject = styler(BubbleObject);
  }
}
class Stage {
  constructor(CanvasElement){
    this.Canvas      = CanvasElement;
    this.IntroElement= new IntroHandler(CanvasElement);
    this.LinksHandler= new LinksHandler(CanvasElement);
  }
}
class MobileStage extends Stage{
  constructor(CanvasElement){
    super(CanvasElement);
    this.IntroElement.setMobile();
  }
  startOne(){
    this.IntroElement.addElementToDom();
    this.LinksHandler.initLinkElements("linkBox");
    this.LinksHandler.placeLinks();
    this.IntroElement.MessageController.onComplete = ()=>this.LinksHandler.animateOneAfterAnother();
    this.IntroElement.startIntroMessage();
  }
}
class DesktopStage extends Stage{
  constructor(CanvasElement){
    super(CanvasElement);
  }
  startOne(){
    this.IntroElement.addElementToDom();
    this.LinksHandler.initLinkElements("linkBubble");
    this.LinksHandler.placeLinks();
    this.IntroElement.MessageController.onComplete = ()=>this.LinksHandler.animateOneAfterAnother();
    this.IntroElement.startIntroMessage();
  }
}
