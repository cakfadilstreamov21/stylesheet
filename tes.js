pre {
background-color:white;
background-image:-webkit-linear-gradient(top, #f5f5f5 50%, white 50%);
background-image:-moz-linear-gradient(top, #f5f5f5 50%, white 50%);
background-image:-ms-linear-gradient(top, #f5f5f5 50%, white 50%);
background-image:-o-linear-gradient(top, #f5f5f5 50%, white 50%);
background-image:linear-gradient(top, #f5f5f5 50%, white 50%);
-webkit-background-size:30px 30px;
-moz-background-size:30px 30px;
-ms-background-size:30px 30px;
-o-background-size:30px 30px;
background-size:30px 30px;
background-repeat:repeat;
font:bold 12px/15px "Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace;
color:#333;
border:2px solid #666;-moz-border-radius: 5px;
-webkit-border-radius: 5px;
-khtml-border-radius: 5px;
border-radius: 5px;
position:relative;
padding:0 7px;
margin:10px 5px;
overflow:auto;
word-wrap:normal;
white-space:pre;
-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.2);
-moz-box-shadow:0 1px 2px rgba(0,0,0,0.2);
box-shadow:0 1px 2px rgba(0,0,0,0.2);
position:relative;
 }
pre[data-codetype] {
padding:29px 1em 7px 1em;
 }
pre[data-codetype]:before {
content:attr(data-codetype);
display:block;
position:absolute;
top:0;
right:0;
left:0;
background-color:#666;
padding:0 7px;
font:bold 11px/20px Arial,Sans-Serif;
color:white;
}
pre[data-codetype="Catatan !!"] {border-color:#ff0000;color:#ce0000;}
pre[data-codetype="HTML"] {border-color:#0B7E88;color:#08464B;}
pre[data-codetype="CSS"] {border-color:#7B990C;color:#4B5D08;}
pre[data-codetype="JavaScript"] {border-color:#545448;color:#1F2E24;}
pre[data-codetype="JQuery"] {border-color:#395540;color:#2E2E27;}
pre[data-codetype="PHP"] {border-color:#FF9900;color:#865003;}
pre[data-codetype="XML"] {border-color:#FF0C39;color:#790015;}
pre[data-codetype="Catatan !!"]:before {background-color:#ff0000;}
pre[data-codetype="HTML"]:before {background-color:#0B7E88;}
pre[data-codetype="CSS"]:before {background-color:#7B990C;}
pre[data-codetype="JavaScript"]:before {background-color:#545448;}
pre[data-codetype="JQuery"]:before {background-color:#395540;}
pre[data-codetype="PHP"]:before {background-color:#FF9900;}
pre[data-codetype="XML"]:before {background-color:#FF0C39;
  }
kbd{position:relative;color:#28a1f0;background:#294851;padding:0px;-webkit-user-select:text;-khtml-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}
kbd:before{position:absolute;content:'Double click to select';display:table;bottom:0px;left:0;background:#4c4c4c;color:#fff;padding:4px;border-radius:2px;font-size:75%;line-height:1;opacity:0;visibility:hidden;transform:scale(0.8);z-index:2;transition:all .3s;}
kbd:hover:before{transform:scale(1.0);opacity:1;visibility:visible;transition:all .3s}

pre::after {
    content: "Double click selection";
    padding: 2px 10px;
    width: auto;
    height: auto;
    font: 11px "Consolas",Arial,"Helvetica Neue","Lucida Grande",sans-serif;
    position: absolute;
    right: 0px;
    top: 0px;
    color: #fff;
    border-radius: 0px 0px 2px 2px;
    background-color: rgba(161, 164, 165, 0.61);
}
