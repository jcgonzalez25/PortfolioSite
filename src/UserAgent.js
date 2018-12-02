class UserAgent{
  getDeviceType(){
    let navString = navigator.userAgent;
    if( /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navString) )
      return "mobile";
    else if(/[i,I]pad/i.test(navString))
      return "tablet";
    else
      return "desktop";
    console.log("hello");
  }
  onPortraitOrLandscape(){
    let mediaQueryList = window.matchMedia("(orientation: portrait)");
    return mediaQueryList.matches?"portrait":"landscape";
  }
}
