function thirdLogin(rs){


  var divs = document.getElementsByClassName('loginDiv');
  for(var i=0; i<divs.length; i++){
      if(divs[i].className.indexOf('showDiv') >= 0){
          removeClass(divs[i], 'showDiv')
      }
  }

  var loginDiv = null;
  switch (rs) {
    case 'qq':
      loginDiv = document.getElementById('loginWithQQ');
      break;
    case 'wx':
      loginDiv = document.getElementById('loginWithWX');
      break;
    case 'wb':
      loginDiv = document.getElementById('loginWithWB');
      break;
    default:
      break;
  }
  toggleDiv(loginDiv, 'showDiv')
}

function toggleDiv(div, className){
  if(div.className.indexOf(className) > 0){
    removeClass(div, className);
  }else{
    addClass(div, className);
  }
}

function showStep(rs, step){
  var divs = document.getElementsByClassName(rs)[0].getElementsByClassName('stepDiv');

  var stepLis = document.getElementsByClassName(rs)[0].getElementsByClassName('step');

  for(var i=0; i<divs.length; i++){
      if(divs[i].className.indexOf('addWidth')>=0){
          removeClass(divs[i], 'addWidth');
      }
      if(stepLis[i].className.indexOf('selected') >= 0){
        removeClass(stepLis[i], 'selected');
      }
  }

  var currentDiv = divs[step];
  toggleDiv(currentDiv, 'addWidth');
  toggleDiv(stepLis[step], 'selected')
}

function removeClass(_node, className){
  _node.className = _node.className.replace(className, '')
  _node.className = _node.className.trim();

}

function addClass(_node, className){
  _node.className = _node.className + ' ' + className;
}
