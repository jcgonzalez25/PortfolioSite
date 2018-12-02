class LinksHandler{
  constructor(CanvasElement){
    this.CanvasElement = CanvasElement;
    this.links         = null;
    this.PlacementHandler    = new PlacementHandler();
  }
  initLinkElements(linkLabel){
    let links = [],sectorMeasurement;
    let sectorId,amnt=4;
    for(sectorId=1;sectorId<=amnt;sectorId++){
      links[sectorId] = new Link(this.CanvasElement,linkLabel);
    }
    this.links = links;
  }
  placeLinks(placement = "bottom"){
    let measurement=null,movingDirection=null;
    this.PlacementHandler.Layout = placement=="bottom"?placement:"sides";
    for(let sectorId = 1; sectorId <= 4; sectorId++){
      measurement     = this.PlacementHandler.getMeasurementsFor(sectorId);
      movingDirection = this.PlacementHandler.getTravelPositon(sectorId);
      this.links[sectorId].appendLinkToDOM();
      this.links[sectorId].Controller.startAt(measurement);
      this.links[sectorId].Controller.moveTo = movingDirection;
    }
  }
  animateOneAfterAnother(){
    let headLink = this.links[1];
    for(let i=1;i<=3;i++){
      this.links[i].Controller.afterAnimation.complete=()=>{this.links[i+1].Controller.animate();};
    }
    headLink.Controller.animate();
  }
  animateAll(deviceType="desktop"){
    for(let i=1;i<=this.links.length-1;i++){
      this.links[i].Controller.animate();
    }
  }
}
