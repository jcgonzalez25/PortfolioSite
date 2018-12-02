
class IntroBubbleAnimation extends PopAnimator{
  constructor(BubbleObject){
    super(BubbleObject);
  }
  animate(){
    let center = {top:"25vh"};
    this.BubbleObject.set(center);
  }
}
class IntroHandler{
  constructor(CanvasElement,cssLabel="introMessager"){
    this.CanvasElement     = CanvasElement;
    this.Controller        = new IntroBubbleAnimation(CanvasElement);
    this.cssLabel          = cssLabel;
    this.IntroElement      = this.createIntroElement();
    this.MessageController = new Messager(this.IntroElement);
  }
  setMobile(){
    this.IntroElement.id = "mobileMessager";
  }
  createIntroElement(){
    let IntroElement = document.createElement("DIV");
    IntroElement.id  = this.cssLabel;
    return IntroElement;
  }
  addElementToDom(){
    if(!this.IntroElement)
      throw "No element Created";
    this.CanvasElement.appendChild(this.IntroElement);
  }
  startIntroMessage(){
    let MessageController = this.MessageController;
    let introMessages     = ["Hello I'm JC   ","A Full-Stack Developer  ","Welcome  ","Learn More About Me "];
    MessageController.messages = introMessages;
    MessageController.start();
  }
}
