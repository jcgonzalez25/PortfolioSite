class Messager{
  constructor(ParentElement,messagerId="messager"){
    this.messages      = [];
    this.repeat        = false;
    this.intervalId    = null;
    this.duration      = 100;
    this.ParentElement = ParentElement;
    this.messagerId    = messagerId;
    this.onComplete    = null;
  }
  errorChecking(){
    if(this.messages.length == 0){
      throw "No Messages To Iterate";
    }
    for(let i=0;i<this.messages.length;i++){
      if(this.messages[i].length == 0){
        throw "All Messages Must Have at least one character";
      }
    }
    if(this.ParentElement == null)
      throw "No parrent element to append to";
  }
  start(){
    this.errorChecking();
    let i               =0;
    let buffer          ="";
    let currentMessage  =0;
    let lastMessage     = this.messages.length-1;
    let iterator = ()=>{
      buffer+=this.messages[currentMessage][i];
      let markup = `<div id='${this.messagerId}'>${buffer}</div>`;
      let lastIndexCharacter = this.messages[currentMessage].length - 1;
      this.ParentElement.innerHTML = markup;
      if(i == lastIndexCharacter){
        if(currentMessage == lastMessage ){
          if(this.repeat == true){
            if(this.onComplete)
              throw "repeat will never call complete";
            currentMessage = 0;
            i=0;
          }else{
            this.stop();
            if(this.onComplete)
              this.onComplete();
          }
        }else{
          currentMessage++;
          i=0;
          buffer = "";
        }
      }else{
        i++;
      }
    };
    let _this = this;
    this.intervalId = setInterval(iterator,_this.duration);
  }
  stop(){
    clearInterval(this.intervalId);
  }
}
