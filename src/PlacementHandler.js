class PlacementHandler{
  constructor(){
    this.LinkBallSizes={w:"10vw",h:"10vh"};
    this.Layout       = "bottom";
  }
  bottomMeasurements(sector){
    let l;
    if(sector == 1)
      l= "10vw";
    else if(sector == 2)
      l= "30vw";
    else if(sector == 3)
      l= "50vw";
    else if(sector == 4)
      l= "70vw";
    return {left:l,top:"100vh"};
  }
  sideMeasurements(sector){
    let pos;

    if(sector == 1){
      pos = {left:"-40vw",top:"0"};
    }
    else if(sector == 2){
      pos = {left:"-40vw",top:"20vh"};
    }
    else if(sector == 3){
      pos = {left:"-40vw",top:"60vh"};
    }else if(sector == 4){
      pos = {left:"-40vw",top:"80vh"};
    }
    return pos;
  }
  getMovementCord(sector){
    let pos;
    if(sector == 1){
      pos = {left:"40vw",top:"0"};
    }
    else if(sector == 2){
      pos = {left:"40vw",top:"20vh"};
    }
    else if(sector == 3){
      pos = {left:"40vw",top:"60vh"};
    }else if(sector == 4){
      pos = {left:"40vw",top:"80vh"};
    }
    return pos;
  }
  getMeasurementsFor(sectorNumber){
    if (this.Layout == "bottom")
      return this.bottomMeasurements(sectorNumber);
    else if(this.Layout == "sides")
      return this.sideMeasurements(sectorNumber);
  }
  getTravelPositon(sectorNumber){
    if(this.Layout === "bottom"){
      return { y:"-50vh",scale:1};
    }else if (this.Layout === "sides") {
      return this.getMovementCord(sectorNumber);
    }
  }

}
