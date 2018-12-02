"use strict";
/*jslint browser: true */
/*global window*/


// TODO: fix the onresize that resets all objects
window.addEventListener("load",()=>{
  let Background = new BackgroundParticles();
  let View       = new DocumentDisplay();
  let stage      = View.getCurrentStage();
  Background.init();
  View.beginStage(stage);
});

class DocumentDisplay{
  constructor(){
    this.bodyElement       = document.getElementsByClassName("body")[0];
    this.clientViewElement = document.querySelector(".wrapper");
    this.mainWidth         = this.clientViewElement.offsetWidth;
    this.mainHeight        = this.clientViewElement.offsetHeight;
    this.ScreenProperties  = {W:this.mainWidth,H:this.mainHeight};
    this.onStage           = 1;
    this.addListeners();
  }
  addListeners(){
    let resizeTimer;
    //added window resize event  with setTimeout and clearTimeout for performance
    //So the function only runs at least when the user stops resizing
    window.addEventListener("resize",(ev)=>{
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(()=>this.updateThisAfterResizing(),1000);
    });
  }
  beginStage(){
    let deviceType = UserAgent.prototype.getDeviceType();
    let Stages     = null;
    if(deviceType == "mobile")
      Stages = new MobileStage(this.clientViewElement);
    else if(deviceType == "desktop")
      Stages = new DesktopStage(this.clientViewElement);
    Stages.startOne();
  }
  getCurrentStage(){
    return this.onStage;
  }
  updateThisAfterResizing(){
    /*this.mainWidth         = this.clientViewElement.offsetWidth;
    this.mainHeight        = this.clientViewElement.offsetHeight;
    this.beginStage(this.onStage);*/
  }
}
