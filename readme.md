# Portfolio V1

# Features 
* `class Messager` Implemented myself, you may use the class to make the textanimation
    * Changing the `messages` will output the animation messages
    * Takes a callback `onComplete` that will be triggered afteranimation completes
    * Changing duration can also be implemented
```
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
}
```
* `class UserAgent` nice static methods to get device type, or onportrait or  landscape
```
class UserAgent{
  getDeviceType(){...}
  onPortraitOrLandscape(){...}
}

```

# Notes
* Not completed decided to change implmentation.
# Demo
![](demo.gif)