const listener = {
  listenDom (dom: any, opt: any) {
    dom.onmousedown = () => {

      var isSelect = true;

      var evt = window.event || arguments[0];
      var startX = (evt.x || evt.clientX);

      var startY = (evt.y || evt.clientY);
      // var startX = evt.screenX;

      // var startY = evt.screenY;

      opt.mouseDownCallback({x: startX, y: startY});

      var selDiv = document.createElement("div");

      selDiv.style.cssText = "position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #0099FF;background-color:#C3D5ED;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;";

      selDiv.id = "selectDiv";

      // document.body.appendChild(selDiv);

      selDiv.style.left = startX + "px";

      selDiv.style.top = startY + "px";

      let _x = 0, _y = 0;

      this.clearEventBubble(evt);

      dom.onmousemove = () => {

        evt = window.event || arguments[0];

        if (isSelect) {

          if (selDiv.style.display == "none") {

            selDiv.style.display = "";

          }

          _x = (evt.x || evt.clientX);

          _y = (evt.y || evt.clientY);
          opt.mouseMoveCallback({x: _x, y: _y});

          selDiv.style.left = Math.min(_x, startX) + "px";

          selDiv.style.top = Math.min(_y, startY) + "px";

          selDiv.style.width = Math.abs(_x - startX) + "px";

          selDiv.style.height = Math.abs(_y - startY) + "px";

        }

        this.clearEventBubble(evt);

      }

      dom.onmouseup = function () {
        opt.mouseUpCallback({x: _x, y: _y});

        isSelect = false;

        if (selDiv) {

          document.body.removeChild(selDiv);

        }

        _x = null, _y = null, startX = null, startY = null, evt = null;

      }

    }
  },
  clearEventBubble(evt: MouseEvent) { 

    if (evt.stopPropagation) 
  
      evt.stopPropagation(); 
  
    else 
  
      evt.cancelBubble = true; 
  
    if (evt.preventDefault) 
  
      evt.preventDefault(); 
  
    else 
  
      evt.returnValue = false; 
  
  } 
}

export { listener };