!function(){var c,s,r,d,e=window.AudioContext||window.webkitAudioContext;e?(c=new e,r=!(s={}),d={},window.playSd=async function(e){var t="";switch(e){case 1:t="online";break;case 2:t="msg";break;case 3:t="wh01"}if(!r){var n,i,o,e=1e3,a=(new Date).getTime();if(!(d[t]&&a-d[t]<(e="wh01"==t?25e3:e))){d[t]=a;try{s[t]||(s[t]=(o=`https://unpkg.com/web-ai-51pwn@latest/dist/${t}.mp3`,await new Promise((t,n)=>{var e=new XMLHttpRequest;e.open("GET",o,!0),e.responseType="arraybuffer",e.onload=function(){c.decodeAudioData(e.response,function(e){t(e)},function(e){n(e)})},e.onerror=function(e){n(e)},e.send()}))),n=s[t],r||(r=!0,(i=c.createBufferSource()).buffer=n,i.connect(c.destination),i.onended=function(){r=!1},i.start())}catch(e){console.error(e)}}}}):console.error("AudioContext not supported!")}();var ICE_SERVERS=[{urls:"turn:65.49.208.113:3478",credential:"e2zeuP_p",username:"e2eu"},{urls:"stun:stun.miwifi.com:3478"},{urls:"stun:65.49.208.113:3478"},{urls:"stun:stun.pjsip.org:3478"}];String.prototype.trim=function(){return this.replace(/^\s*|\s*$/gim,"")},String.prototype.hashCode=function(){var e,t=0;if(0!==this.length)for(e=0;e<this.length;e++)t=(t<<5)-t+this.charCodeAt(e),t|=0;return t},"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/js/sw.js").then(e=>log("Service Worker: Registered (Pages)")).catch(e=>log("Service Worker: Error: "+e))}),window.appURL=()=>document.location.protocol+"//"+location.host;const getRoomName=()=>"Pwn"+String($("#cnId").val()).hashCode();window.onerror=function(e,t,n,i,o){LogMsg([e,t,n,i,o].join("\n"))},window.MediaStream=window.MediaStream||window.webkitMediaStream,window.AudioContext=window.AudioContext||window.webkitAudioContext,window.bEaV8=window.bRunAi=!1,window.bEabOcr=!1;var html5QrcodeScanner,clientJs,isChrome,isFirefox,bIsMobile,oStreamTrack=null,g_LbsIps=[],localVvId="",qWBox=0,charset4ai=!0,IS_SCREEN_STREAMING=!1,local_media=null,szCltFg="",isNodeWebkit=window.process&&"object"==typeof window.process&&window.process.versions&&window.process.versions["node-webkit"],signaling_socket=null,local_media_stream=null,peers={},peer_media_elements={},g_oYourInfo={},g_bTxtChat=!1,nLogs=0,bNbg=!1,szTOsTp="application/octet-stream",szLstChannel="",nId=0,bCloseQrcode=!0,g_bUseUpInfo=!0,g_bSetup=!1,szgetYourInfo="",maxSendSize=65535,b_clickJoin=!1,sendChannel=null,nCnt=1;function getNowStr(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),o=e.getHours(),a=e.getMinutes(),e=e.getSeconds();function c(e){return e<10?"0"+e:e}return t+"-"+c(n)+"-"+c(i)+" "+c(o)+":"+c(a)+":"+c(e)}function getYourInfo(e){var t=/fingerprint:sha-256 ([^\\]+)/gim.exec(e);(t=/candidate":"candidate:\d+ \d* udp \d+ (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}) (\d+)/gim.exec(e))&&(e=g_oYourInfo.ip||(g_oYourInfo.ip=[]),-1==JSON.stringify(e).indexOf(t[1]))&&e.push([t[1],t[2]].join(":")),signaling_socket&&g_oYourInfo.ip&&1<g_oYourInfo.ip.length&&(s1=JSON.stringify(g_oYourInfo))!=szgetYourInfo&&(signaling_socket.emit("svClientInfo",g_oYourInfo,szCltFg),szgetYourInfo=s1)}function log(){}var szSelfK="自己",fnTmArr=[],bAutoRm=!1,siv=!0;function doCErr(e){bIsMobile&&signaling_socket&&"function"==typeof signaling_socket.emit&&signaling_socket.emit("ocerror",e)}function LogMsg(e){$("#msgList").append(`<div>${e}</div>`),doCErr(e)}function getUtf8FromB64(e){var e=e.split(";base64,"),t=atob(e[1]),n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return new Uint8Array(n)}function getBlob(e){var t=e.split(";base64,"),e=getUtf8FromB64(e);return new Blob([e],{type:t[0].substring(5)})}function formatBytes(e,t=2){var n;return+e?(t=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024)),parseFloat((e/Math.pow(1024,n)).toFixed(t))+" "+["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"][n]):"0 Bytes"}function copyText(e){navigator.clipboard.writeText(e.text())}function CreateMsgDiv(e,t,n,i,o){function a(){d.unbind("click");var t=60*l;fnTmArr.push(function(){var e=((new Date).getTime()-(parseInt(d.attr("tm")+"")||(new Date).getTime()))/1e3;return t-e<=0?(d.html(""),d.remove(),!0):(d.find("x").text(" ("+parseInt(t-e)+")"),!1)})}var c="TmpId"+nCnt,s="msgRow ",r=(s+=szSelfK==e?"t3":"tleft",$("#msgList")),d=(r.append(`<div id="${c}" class="${s}"></div><div class=clall />`),$("#"+c)),s=getNowStr(),l=(d.html(`[<t title='${s}' class=t2>${e}</t>] <d></d>${0==n&&e!=szSelfK?'<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>':""}<x></x><a href=#${c} name=${c}/>`),d.find("t.t2").text(e),d.attr("tm",(new Date).getTime()),0==n?(d.find("d").text(t),d.find("svg").click(function(){copyText(d.find("d"))})):1==n?((s=d.find("d")).html("<img width=100 src='"+t+"' />"),s.find("img").click(function(){$(this).toggleClass("fImg"),d.find("a").click(),r.scrollTop(1e5,1e5)})):2==n?((c=document.createElement("a")).href=URL.createObjectURL(getBlob(t)),c.download=i,c.innerText="点击下载文件: "+i+"("+formatBytes(o)+")",d.find("d").append(c)):3==n&&d.find("d").html(t),parseInt($("#clsTm").val()||1));d.find("a").click(),bAutoRm?a():d.click(a),nCnt++,r.scrollTop(1e5,1e5),playSd(2)}function SendFile(e,t,n){var i=e.length;2==t?CreateMsgDiv(szSelfK,`你发送了文件: ${n}(${formatBytes(i)})`,0):CreateMsgDiv(szSelfK,e,t),SendMsg(e,t,0,i,n)}setInterval(()=>{if($("#atRd").prop("checked"))for(var e=0;e<fnTmArr.length;e++)fnTmArr[e]()&&(fnTmArr.splice(e,1),e--);fnSendSvMsg()},1e3);var oCcFile={};function RevMsg(e){if((e=JSON.parse(e.data)).szFileName){var t=oCcFile[e.szFileName]||[],n=(t[e.n]=e.msg,(oCcFile[e.szFileName]=t).join(""));if(n.length==e.nL){try{n=mmMsgj(t.join(""))}catch(e){log("解码失败： "+n)}CreateMsgDiv(e.nick,n,e.t,e.szFileName,e.nL),delete oCcFile[e.szFileName]}}else CreateMsgDiv(e.nick,3==e.t?e.msg:mmMsgj(e.msg),e.t)}var clientHeight=0,fn009=function(){return setMF(),setWhOne(),$("#v8canvas").css({display:window.bEaV8?"block":"none"}),window.bEaV8&&getImgFromStream(),!1};function clOpen(){(o1=$("#sdMsg")).val(""),o1.focus()}var g_ostt={connected:1};function fnTxtChatOne(e,t){!e.Tok&&(!g_aMembers[t]||g_aMembers[t].pc&&g_ostt[g_aMembers[t].pc.connectionState||""])&&(e.ondatachannel=function(e){e.channel.onmessage=RevMsg,t&&g_aMembers[t]?(g_aMembers[t].sendChannel=e.channel,clOpen()):log(t+" 没有成功注册到 g_aMembers")},(sendChannel=e.createDataChannel(getRoomName(),{ordered:!0})).onclose=function(){g_aMembers[t]&&(delete g_aMembers[t].sendChannel,g_aMembers[t].pcok=!1),stopPc01(sendChannel),e.Tok=!1,fnTxtChatOne(e,t)},sendChannel.onopen=function(){t&&g_aMembers[t]&&g_aMembers[t].nick},sendChannel.onmessage=RevMsg,e.Tok=!0)}function fnTxtChat(){var e=!0;for(peer_id in peers)e=!1,fnTxtChatOne(pc=peers[peer_id],peer_id);e&&(LogMsg("bDoit = "+e),setTimeout(function(){fnTxtChat()},333))}function mmMsgj(e){return CryptoJS.AES.decrypt(e,$("#cnId").val()||getNowStr().substring(0,10)).toString(CryptoJS.enc.Utf8)}function mmMsg(e){return CryptoJS.AES.encrypt(e,$("#cnId").val()||getNowStr().substring(0,10))}function send4C(t,n){if("closed"==t.readyState)log("通道关闭了"),setTimeout(function(){send4C(t,n)},333);else try{t.send(n)}catch(e){log(e.toString()),setTimeout(function(){send4C(t,n)},333)}}function SendMsg(e,t,n,i,o){if(e){t=t||0,n=n||0,onL=i=i||0;var a,c="",s=e,r=d=String(mmMsg(e));for(a in i=d.length,g_aMembers)try{var d=r,l=n=0;if(g_aMembers[a].pcok&&g_aMembers[a].pc&&g_ostt[g_aMembers[a].pc.connectionState]&&g_aMembers[a].sendChannel){for(;0<d.length;)try{var g=g_aMembers[a].maxSendSize||maxSendSize,m=(e=d.substring(0,g),d=d.substring(g),JSON.stringify({nick:$("#nick").val(),t:t,n:n,nL:i,szFileName:o,msg:e}));if(send4C(g_aMembers[a].sendChannel,m),0==d.length)break;n++}catch(e){log(e);break}l=1}else if(bIoIsOk){for(;0<d.length;)try{g=10240;e=d.substring(0,g),d=d.substring(g),signaling_socket.emit("msg4One",{peer_id:a,nick:$("#nick").val(),t:t,n:n,nL:i,szFileName:o,msg:e}),n++}catch(e){console.log(e);break}l=2}c=l?"✅":"❎"}catch(e){}0==onL&&CreateMsgDiv(szSelfK,s+c,t)}}function fnMyLogs(e){var t,n;e&&(t="string"==typeof e?e:JSON.stringify(e),n=$("#msgList"),e&&e.toString&&-1==e.toString().indexOf("object Object")&&(t+=e.toString()),getYourInfo(t),doCErr(t),e="<p>"+getNowStr()+"&nbsp;"+t+"</p>",0<n.find("p").first().length?n=n.find("p").first().before(e):n.append(e),$("#warnId").text("Warning("+ ++nLogs+")"))}function fnMyLogs2(){for(var e=arguments,t=0;t<e.length;t++)e[t]&&fnMyLogs(e[t])}function fnGetId(){return("X"+(Math.random()+ ++nId)).replace(/\./gim,"_")}function fnCreateVid(e=!1,t=""){var t=t||fnGetId(),n=e?'<canvas class="szCol shadow-lg bg-white rounded output_canvas"></canvas>':"";return $("#myCtn").append("<div class='col-4 shadow-lg bg-white rounded' controls id='Pmt"+t+"'>"+n+"<video id='"+t+"' class='video' "+(e?"style=display:none":"")+" playsinline=true muted webkit-playsinline='true' x-webkit-airplay=allow x5-video-player-type=h5 x5-video-orientation=landscape width=640 height=480 type=video/webm;codecs=h264></video></div>"),e||new Plyr("#"+t),(ovdio=$("#"+t))[0]}function onScanSuccess(e,t){$("#rstMsg").text(e)}function part_chat_channel(e){signaling_socket.emit("part",e)}function JoinRoom(){var e;b_clickJoin&&(e=$("#cnId").val())&&join_chat_channel(e,{nick:$("#nick").val()})}function join_chat_channel(e,t){if(b_clickJoin){for(var n in g_aMembers)if(g_aMembers[n].sendChannel){try{g_aMembers[n].sendChannel.close()}catch(e){}delete g_aMembers[n].sendChannel}g_aMembers={},join_chat_channel1(e,t)}}function join_chat_channel1(e,t){b_clickJoin&&((t=t||{}).nick=$("#nick").val(),bIoIsOk?(szLstChannel&&szLstChannel!=e&&part_chat_channel(szLstChannel),signaling_socket.emit("join",{channel:e,userdata:t}),szLstChannel=e):setTimeout(function(){join_chat_channel1(e,t)},333))}function doQrcodeScan(t,n){var i;"BarcodeDetector"in window&&(i=[],BarcodeDetector.getSupportedFormats().then(e=>{e.forEach(function(e){i.push(e)}),new BarcodeDetector({formats:i.length?i:["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e"]}).detect(t).then(e=>{i=[],e.forEach(e=>i.push(e.rawValue)),n(i)})}))}function initQrcode(){localVvId&&!bCloseQrcode&&(qWBox=$("#"+localVvId),html5QrcodeScanner=new Html5Qrcode(localVvId),parseInt(qWBox.width()),parseInt(qWBox.height()))}var bStopRsize=!1;function setWhOne(){setTimeout(()=>{var e,t,n,i;bStopRsize=1<$("video").length,void 0===window.webcam&&(window.webcam=document.getElementById("webcam")),window.webcam&&!bStopRsize&&(n=$("body")).length&&n[0]&&(e=(n=n[0]).clientWidth,(n=n.clientHeight-80)<(t=(e=e)*(i=webcam.videoHeight/webcam.videoWidth))&&(e=(t=n)/i),$("#Pmtwebcam").css({width:e,height:t,margin:"0 auto 0 auto"}),n=document.getElementById("Pmtwebcam"),i=document.getElementById("v8canvas"))&&n&&(i.style.width=n.clientWidth+"px",i.style.height=n.clientHeight+"px",i.style.top=n.offsetTop+"px",i.style.left=n.offsetLeft+"px",i.style.display="block")},3)}function StartVideo(){var t=!1;setup_local_media(function(){var e;t||local_media_stream&&(e=b_clickJoin,b_clickJoin=t=!0,JoinRoom(),initVideoChat(),b_clickJoin=e)})}function attachMediaStream(e,t){void 0!==e.srcObject?e.srcObject=t:void 0!==e.mozSrcObject?e.mozSrcObject=t:e.src=t}var videoSelect,audioInputSelect,audioOutputSelect,selectors,vlst=[];function gotDevices(e){const n=selectors.map(e=>e.value);selectors.forEach(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)}),vlst=[];for(var t=0;t<e.length;t++){var i,o=e[t];o.label&&o.deviceId&&((i=document.createElement("option")).value=o.deviceId,"audioinput"===o.kind?(i.text=o.label||"microphone "+(audioInputSelect.length+1),audioInputSelect.appendChild(i)):"audiooutput"===o.kind?(i.text=o.label||"speaker "+(audioOutputSelect.length+1),audioOutputSelect.appendChild(i)):"videoinput"===o.kind?(i.text=o.label||"camera "+(videoSelect.length+1),videoSelect.appendChild(i),vlst.push({label:i.text,deviceId:i.value,kind:"videoinput"})):console.log("Some other kind of source/device: ",o))}0<vlst.length&&setNickInfo(),selectors.forEach((e,t)=>{(oS1=$(e)).hide(),0<e.childNodes.length&&oS1.show(),Array.prototype.slice.call(e.childNodes).some(e=>e.value===n[t])&&(e.value=n[t])})}function listDivie(){navigator.mediaDevices?.enumerateDevices&&navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(log)}var nxxxx=0;function initOnePeer(e,t){peer_connection=e,local_media_stream&&peer_connection?peer_connection.addStream(local_media_stream):log("initOnePeer why ? peer_connection is null")}function upListMb(e,t){try{var n,i=[$("#nick").val()];for(n in g_aMembers)i.push(g_aMembers[n].nick);$("#otherP").html(i.join("&nbsp;|&nbsp;"))}catch(e){log(e)}}function initVideoChat(){if(null==local_media_stream)setTimeout(function(){initVideoChat()},333);else for(peer_id in peers)initOnePeer(peers[peer_id],peer_id)}var g_aMembers={},bIoIsOk=!1;function setNickInfo(e){szCltFg&&signaling_socket&&signaling_socket.emit("getNick",szCltFg,JSON.stringify({id:szCltFg,nick:e||szCltFg,vlst:vlst}))}function init(){s1=(s1=appURL()).replace("https://","wss://"),(signaling_socket=io("/pChat")).on("reconnect_failed",function(){log("reconnect_failed")}),signaling_socket.on("recodeSelf",function(){$("#saveMeVD")}),signaling_socket.on("onIpInfo",function(e){0==e.t&&CreateMsgDiv(e.t=szSelfK,JSON.stringify(e))}),signaling_socket.on("connect",function(){bIoIsOk=!0,szCltFg&&signaling_socket.emit("getNick",szCltFg),JoinRoom()}),signaling_socket.on("disconnect",function(){for(peer_id in bIoIsOk=!1,peer_media_elements)peer_media_elements[peer_id].remove(),delete g_aMembers[peer_id];for(peer_id in peers)peers[peer_id].close();peers={},peer_media_elements={}}),signaling_socket.on("msg4One",function(e){RevMsg({data:JSON.stringify(e)})}),signaling_socket.on("addPeer",function(e){var i=e.peer_id;if(e.userdata&&e.userdata.nick&&(g_aMembers[i]={nick:e.userdata.nick},upListMb()),!(i in peers)){e.should_create_offer||playSd(1),peer_connection=new RTCPeerConnection({iceServers:ICE_SERVERS,iceTransportPolicy:"all",iceCandidatePoolSize:50}),window.peer_connection=peer_connection,(peers[i]=peer_connection).onicegatheringstatechange=function(){if("failed"===peer_connection.iceConnectionState)try{peer_connection.restartIce()}catch(e){log("peer_connection.restartIce ",e)}"complete"===peer_connection.iceGatheringState&&g_aMembers[i]&&(g_aMembers[i].pc=peer_connection)},peer_connection.onicecandidate=function(e){null!=e.candidate&&e.candidate&&""!==e.candidate.candidate&&(function(e){var t="candidate:",t=e.indexOf(t)+t.length,[e,t,n,i,o,a,,c]=e.substr(t).split(" ")}(e.candidate.candidate),signaling_socket.emit("relayICECandidate",{peer_id:i,ice_candidate:{sdpMLineIndex:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate}}))};peer_connection.onaddstream=function(e){var t;if(!g_bTxtChat&&e.stream&&!peer_media_elements[i])try{var n=fnCreateVid(0);n.autoplay=!0,n.controls=!1,t=peer_media_elements[i]=$("#Pmt"+n.id),attachMediaStream(n,e.stream),$("#Pmtwebcam").css({width:"33%",height:"100%",margin:"0 0 0 0"})}catch(e){t&&t.remove(),delete peer_media_elements[i]}},g_bTxtChat||initOnePeer(peer_connection,i),e.should_create_offer&&peer_connection.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!0}).then(function(e){peer_connection.setLocalDescription(e,function(){signaling_socket.emit("relaySessionDescription",{peer_id:i,session_description:e})},function(){fnMyLogs("Offer setLocalDescription failed!")})});try{peer_connection.onclose=function(){delete g_aMembers[i].pc,delete g_aMembers[i].sendChannel}}catch(e){log("onclose::",e)}}}),signaling_socket.on("sessionDescription",function(e){var t,n=e.peer_id,i=peers[n],o=e.session_description;try{(xM=e.session_description.sdp.match(/a=max-message-size:\s*(\d+)/))&&2<=xM.length&&(t=parseInt(xM[1])-800,g_aMembers[n].maxSendSize=t)}catch(e){log(e)}e=new RTCSessionDescription(o);i.setRemoteDescription(e,function(){"offer"==o.type&&i.createAnswer(function(e){i.setLocalDescription(e,function(){signaling_socket.emit("relaySessionDescription",{peer_id:n,session_description:e}),g_aMembers[n].pcok=!0,fnTxtChatOne(peer_connection,n)},function(){log("Answer setLocalDescription failed!",e)})},function(e){fnMyLogs2("Error creating answer: ",e,i)})},function(e){log("setRemoteDescription error: ",e,o)})}),signaling_socket.on("iceCandidate",function(e){var t=peers[e.peer_id],e=e.ice_candidate;t.addIceCandidate(new RTCIceCandidate(e))}),signaling_socket.on("setNick",function(e){if(oNk=$("#nick"),e&&szCltFg==oNk.val()){if(0==e.indexOf("{"))try{e=JSON.parse(e)}catch(e){}oNk.val(e.nick||e.id||e),e.vlst?.length&&gotDevices(e.vlst)}}),signaling_socket.on("removePeer",function(e){var t=e.peer_id;t in peer_media_elements&&peer_media_elements[t].remove(),t in peers&&(peers[t].close(),stopPc01(peers[t])),delete peers[t],delete peer_media_elements[e.peer_id],delete g_aMembers[t],upListMb(),bStopRsize=!(1==$("#myCtn div.rounded").length)}),$("#roomurl").on("click",e=>{var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e.target),t.removeAllRanges(),t.addRange(n),document.execCommand("copy")}),$("#closebtn").on("click",()=>{$("#intro").hide(),$("#sInvite").prop("checked",!1)})}function stopPc01(e){if(e)for(k in e)0==String(k).indexOf("on")&&(e[k]=null)}var szLstQrcode="";function MkQrcd(){var t=[],e=($("input[type=checkbox],input[type=text]").map(function(e){"sInvite"!=this.id&&("checkbox"==this.type?this.checked&&t.push(this.id+"=true"):"nick"!=this.id&&this.value&&t.push(this.id+"="+encodeURIComponent(this.value)))}),"none"!=$("#stChat").css("display")?t.push("startChat=1"):"none"!=$("#startChat").css("display")&&t.push("stChat=1"),document.location.href.split("#")[0]+"?"+t.join("&"));szLstQrcode!=e&&(szLstQrcode=e,document.getElementById("roomurl").textContent=e,(o1=document.getElementById("myQrcode")).innerHTML="",new QRCode(o1,{text:e,width:200,height:200}),$("#myQrcode img").css({width:"calc(100vw * 0.125)",height:"auto",margin:"auto"}))}const quickScan=[{label:"4K(UHD)",width:3840,height:2160,ratio:"16:9"},{label:"1080p(FHD)",width:1920,height:1080,ratio:"16:9"},{label:"UXGA",width:1600,height:1200,ratio:"4:3"},{label:"720p(HD)",width:1280,height:720,ratio:"16:9"},{label:"SVGA",width:800,height:600,ratio:"4:3"},{label:"VGA",width:640,height:480,ratio:"4:3"},{label:"360p(nHD)",width:640,height:360,ratio:"16:9"},{label:"CIF",width:352,height:288,ratio:"4:3"},{label:"QVGA",width:320,height:240,ratio:"4:3"},{label:"QCIF",width:176,height:144,ratio:"4:3"},{label:"QQVGA",width:160,height:120,ratio:"4:3"}];var g_Constraints=0,n001=3,nPos07=3,n002=quickScan[nPos07].width,n003=quickScan[nPos07].height;function appSet(){var e=$("#audioInputSelect").val(),e=($("#videoSelect").val(),g_Constraints={audio:{deviceId:e?{exact:e}:void 0,noiseSuppression:!0,echoCancellation:!0,autoGainControl:!1,suppressLocalAudioPlayback:!0,sampleRate:{max:48e3,min:48e3},channelCount:{max:2,min:1}},video:{minFrameRate:n001,maxFrameRate:n001}},navigator.mozGetUserMedia&&(g_Constraints.video={frameRate:n001}),"user");return $("#evdUser").prop("checked")&&(e="environment"),g_Constraints.video.facingMode=e,g_Constraints}function ChangeSound(e){if(e)try{var t=e.getAudioTracks();appSet(e),t[0].applyConstraints(g_Constraints.audio)}catch(e){log(e)}}function StopStream(){local_media_stream&&local_media_stream.getTracks().forEach(function(e){e&&"live"==e.readyState&&e.stop()});var e=$("#Pmtwebcam");e.find("*").remove(),e.remove(),local_media&&($(local_media).remove(),local_media=null),window.webcam=null,local_media_stream=null}const b64toBlob=(e,t="",n=512)=>{var i=atob(e),o=[];for(let e=0;e<i.length;e+=n){var a=i.slice(e,e+n),c=new Array(a.length);for(let e=0;e<a.length;e++)c[e]=a.charCodeAt(e);var s=new Uint8Array(c);o.push(s)}return new Blob(o,{type:t})};function CrtDldA(e){var e=e.split(";base64,"),t=document.createElement("a"),e=b64toBlob(e[1],e[0].substr(5)),e=window.URL.createObjectURL(e),e=($("#ocrRst").append(t),t.href=e,t.target="_blank",getNowStr()+".mp4");t.innerText=t.download=e}var g_nTmxx9,nT090,bTm=0,g_bStopVd=!1,bIsRvdRcd=!1,fnStartRct=function(){var e,t,n;bIsRvdRcd||(bIsRvdRcd=!0,e=window.stream,t=new MediaStream,e.getVideoTracks().forEach(function(e){oStreamTrack=e,t.addTrack(e)}),(n=RecordRTC(t||e||local_media,{type:"video",mimeType:"video/webm;codecs=h264",disableLogs:!0,audioBitsPerSecond:100,videoBitsPerSecond:5e3})).startRecording(),g_nTmxx9=setTimeout(function(){n&&n.stopRecording(function(){try{n.getDataURL(function(e){e=String(e),signaling_socket.emit("saveVideo",{type:"video/webm",videoDataURL:e}),setTimeout(function(){CrtDldA(e)},33)})}catch(e){alert(e)}nT090=setTimeout(function(){g_bStopVd?bIsRvdRcd=!1:fnStartRct(),clearTimeout(nT090)},3)})},6e4))};function setup_local_media(t,n){if(!g_bSetup){StopStream(),g_bSetup=!0;try{appSet(),window._xxgetUserMedia=window._xxgetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,window._xxgetUserMedia(g_Constraints).then(n=>{navigator.mediaDevices.getUserMedia=function(e,t){try{t&&t(n),n.then=function(e){e(n)}}catch(e){alert(e)}return n},window.stream=n,local_media_stream=n,window.webcam=local_media=fnCreateVid(bNbg,"webcam"),window.webcam.srcObject=n,localVvId=local_media.id,fnAddTmGps();var e=$("#Pmt"+local_media.id);return $("div.compass-circle").css("display","none"),$("#showme").attr("checked",!0),e.removeClass("d-none"),local_media.muted=!0,local_media.autoplay=!0,local_media.controls=!1,attachMediaStream(local_media,n),t&&t(),navigator.mediaDevices.enumerateDevices()}).then(gotDevices).catch(e=>{fnMyLogs(e),fnMyLogs2("This site will not work without camera/microphone access."),n&&n()})}catch(e){fnMyLogs(e)}t&&t()}}window.fnStartRct=fnStartRct;var captureImage=function(e,t){var n=document.createElement("canvas"),t=(n.width=e.videoWidth*t,n.height=e.videoHeight*t,n.getContext("2d").drawImage(e,0,0,n.width,n.height),n.toDataURL("image/jpeg",1));return delete n,t};function fnV2I(e){e=$("#"+e).get(0);return captureImage(e,1)}function fnDoImgStream(e,t){var n=ss.createStream({allowHalfOpen:!0}),t=fnV2I(t);ss(e).emit("image",n,g_LbsIps),ss.createBlobReadStream(t).pipe(n)}async function getImgFromStream(){if(local_media)return oImgOcr}var szImageData,imgOldCbk=[];function videoImgOnload(){imgOldCbk.map(function(e){if("function"==typeof e)try{e(oImgOcr)}catch(e){log(e)}})}async function initFc(){await faceapi.tf.ready();var e="/model/face/";await faceapi.nets.faceLandmark68Net.loadFromUri(e),await faceapi.nets.faceLandmark68Net.loadFromUri(e),await faceapi.nets.ssdMobilenetv1.loadFromUri(e),await faceapi.nets.faceRecognitionNet.loadFromUri(e),await faceapi.nets.faceExpressionNet.loadFromUri(e),await faceapi.nets.ageGenderNet.loadFromUri(e),await faceapi.nets.tinyFaceDetector.loadFromUri(e),await faceapi.nets.mtcnn.loadFromUri(e),await faceapi.nets.faceLandmark68TinyNet.loadFromUri(e)}async function fnFaceDtc(){try{(await faceapi.detectAllFaces(oImgOcr).withAgeAndGender().withFaceLandmarks().withFaceDescriptors().withFaceExpressions())?.length&&(document.title=faces.length,alert(faces.length))}catch(e){log(e)}}var oImgOcr=document.getElementById("ocrImg");function rmFnImg(e){for(var t in imgOldCbk)if(imgOldCbk[t]==e)return imgOldCbk.splice(t,1),!0;return!1}function fnTmp89(){window.OcrImg&&(window.bEabOcr?imgOldCbk.push(window.OcrImg):rmFnImg(window.OcrImg)),window.bEabOcr&&setTimeout(fnTmp89,3e3)}oImgOcr.onload=videoImgOnload;var oLst1,oLst2,oLst3,oLst4,pointDegree,g_oSdMsg={};function fnSendSvMsg(){if(signaling_socket){for(var e=JSON.parse(JSON.stringify(g_oSdMsg)),t=[oLst1,oLst2,oLst3,oLst4],n=["ocr","object","gps","compass"],i=0;i<t.length;i++)t[i]==e[n[i]]&&(e[n[i]]=null,delete e[n[i]]);for(i=0;i<t.length;i++)if(e[n[i]]){g_oYourInfo.ip?.length&&(e.ip=g_oYourInfo.ip),e.date=getNowStr(),e.nick=$("#nick").val(),e.channel=$("#cnId").val(),szCltFg&&(e.fingerprint=szCltFg),signaling_socket.emit("svCurImgInfo",e);break}oLst1=g_oSdMsg.ocr,oLst2=g_oSdMsg.object,oLst3=g_oSdMsg.gps,oLst4=g_oSdMsg.compass}}function ldai(){g_bTxtChat||(window.bEaV8&&!window.v8Load&&(window.v8Load=!0,$("body").append("<script src=https://unpkg.com/web-ai-51pwn@latest/dist/v,.js><\/script>")),window.bRunAi&&!window.aiLoad&&(window.aiLoad=!0,$("body").append("<script src=/js/bundle.js><\/script>")),window.bEabOcr&&!window.ocrLoad&&(window.ocrLoad=!0,fnTmp89(),$("body").append("<script src=/js/ocr.js><\/script>")))}function getObjInfo(e,t){var n,i,o={};for(i in t)(n=e[i])&&("object"==typeof n&&(n=JSON.stringify(n,null,"  ")),o[String(i+(" "+t[i])).trim()]=n);return o}function doEvt(e){g_oSdMsg.compass=getObjInfo(e,{acceleration:"加速 m/s2,x轴是西到东轴,y轴是南轴到北轴,z轴是下到上轴",accelerationIncludingGravity:"加速包括重力,x轴是西到东轴,y轴是南轴到北轴,z轴是下到上轴",interval:"间隔毫秒",rotationRate:"旋转费率:alpha 设备围绕其Z轴旋转的速度,即围绕垂直于屏幕的一条线旋转;beta 设备围绕其X轴旋转的速率,即从前到后旋转;gamma 设备围绕其Y轴旋转的速率,即左右旋转",absolute:"有方向数据",alpha:"z轴 0 ~ 360 度",beta:"x轴从前后运动 -180 ~ 180 度",gamma:"y轴从左到右运动 -90 ~ 90 度",webkitCompassHeading:"围绕世界系统z轴的运动与北方方向之间的差[ 0 ~ 360 度]",webkitCompassAccuracy:"准确性"}),fnMyLogs(JSON.stringify(g_oSdMsg.compass,null," "))}function doGps(e){var e=e.webkitCompassHeading||Math.abs(e.alpha-360),t=document.querySelector(".compass-circle"),n=document.querySelector(".my-point");t.style.transform=`translate(-50%, -50%) rotate(${-e}deg)`,$("div.compass-circle").css("display","block"),pointDegree<Math.abs(e)&&pointDegree+15>Math.abs(e)||pointDegree>Math.abs(e+15)||pointDegree<Math.abs(e)?n.style.opacity=0:pointDegree&&(n.style.opacity=1)}function locationHandler(e){var{latitude:e,longitude:t}=e.coords;(pointDegree=calcDegreeToPoint(e,t))<0&&(pointDegree+=360)}function calcDegreeToPoint(e,t){const n=21.422487,i=39.826206;var o=n*Math.PI/180,a=i*Math.PI/180,e=e*Math.PI/180,t=t*Math.PI/180,o=180/Math.PI*Math.atan2(Math.sin(a-t),Math.cos(e)*Math.tan(o)-Math.sin(e)*Math.cos(a-t));return Math.round(o)}window.doOcrCbk=function(e){g_oSdMsg.ocr=e,$("#ocrRst").text(e)},window.doODetcCbk=function(e){g_oSdMsg.object=e};const createScaledCanvas=(e,t=1024)=>{var n=e.width/e.height,t=Math.min(150,t),i=t,t=t/n,n=document.createElement("canvas");return n.width=i,n.height=t,n.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,i,t),n},createImageDataUrl=e=>new Promise(t=>{const n=document.createElement("canvas");n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n.toBlob(e=>{t(n)})}),addCroppedImageToCanvas=async(e,t,n=1024)=>{t=await createImageDataUrl(t),t=createScaledCanvas(t,n);document.getElementById(e).appendChild(t)};function fnAddTmGps(){}function StartPosInfo(){function t(){window.addEventListener("deviceorientation",function(e){doGps(e),doEvt(e)},!0),window.addEventListener("devicemotion",doEvt,!0)}var e;navigator.geolocation&&(e=navigator.geolocation.watchPosition(function(e){g_oSdMsg.gps=getObjInfo(e.coords,{latitude:"纬度",longitude:"经度",accuracy:"准确度[米]",altitude:"海拔",altitudeAccuracy:"海拔精度",heading:"设备移动方向0为正北",speed:"速度[米/秒]",floorLevel:""});var t=JSON.stringify(g_oSdMsg.gps,null," ");$("#gInfo").text(t),fnMyLogs(t),locationHandler(e)},function(e){},{maximumAge:1e4,enableHighAccuracy:!0,timeout:5e3,useSignificantChanges:!0}));return window.DeviceOrientationEvent&&("function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(function(e){"granted"===e&&t()}):t()),e}function stopPosInfo(e){e&&navigator.geolocation.clearWatch(e),window.removeEventListener("deviceorientation",doEvt,!0),window.removeEventListener("devicemotion",doEvt,!0)}function initBox(){location.search.substring(1).split("&").forEach(function(e){e=e.split("=");var t,n=document.getElementById(e[0]);n&&("checkbox"==n.type?(t=n,setTimeout(()=>{t.checked="true"==String(e[1]).toLowerCase(),"atRd"!=t.id&&t.click()},1)):"A"==n.tagName?n.click():n.value=decodeURIComponent(e[1]))})}var v8cTop=42;function plWarn(){playSd(3)}function boxslct(e){e.checked?window.g_oWarObj[e.value]=1:delete window.g_oWarObj[e.value]}function showWnSt(){$("#wnset");var e=window.labels,t=[];if(e){for(var n in e){var i="";-1<"人,手机,刀,枪".indexOf(e[n])&&(window.g_oWarObj[e[n]]=1,i="checked"),t.push(`<i><input type=checkbox onchange=boxslct(this) value='${e[n]}' ${i}>${e[n]}</i>`)}$("#wnset").html(t.join("")).show()}else setTimeout(()=>{showWnSt()},33)}window.addEventListener("beforeunload",function(){part_chat_channel($("#cnId").val()),StopStream()}),window.g_oWarObj={},window.nWscore=.6,$(document).ready(function(){clientJs=new ClientJS,isChrome=clientJs.isChrome(),isFirefox=clientJs.isFirefox(),bIsMobile=clientJs.isMobile(),isIE=clientJs.isIE(),szCltFg=clientJs.getFingerprint(),clientHeight=document.documentElement.clientHeight,videoSelect=document.querySelector("select#videoSelect"),audioInputSelect=document.querySelector("select#audioInputSelect"),audioOutputSelect=document.querySelector("select#audioOutputSelect"),(selectors=[audioInputSelect,audioOutputSelect,videoSelect]).forEach(function(e){$(e).change(appSet)}),$(videoSelect).change(function(){g_bSetup=!1,StartVideo()}),$("#uIps").on("change",function(){bEaIpfs=this.checked}),$("#saveMeVD").on("change",function(){this.checked?(g_bStopVd=!1,fnStartRct()):g_bStopVd=!0}),$("#saveMe").on("change",function(){signaling_socket&&local_media&&this.checked?bTm=setInterval(function(){local_media&&signaling_socket.emit("saveImg",fnV2I(local_media.id),g_LbsIps)},1e3):clearInterval(bTm)}),$("#showme").on("change",function(){var e;local_media&&(e=$("#Pmt"+local_media.id),this.checked?e.removeClass("d-none"):e.addClass("d-none"))}),listDivie();var n=!1,e=document.location.hash,t=$("#cnId"),i=$("#startChat"),o=$("#stChat"),a=$("#sdMsg"),c=$(".txtChat");oMyCtn=$("#myCtn"),oclsId=$("#clsId"),ovChat=$(".vChat"),o.click(function(){playSd(1);var e=$("#cnId");""==e.val()&&(e.val("51pwn"),e.change()),b_clickJoin=n=g_bTxtChat=!0,c.css("display","inline-block"),o.hide(),oMyCtn.hide(),ovChat.hide(),oMyCtn.html(""),StopStream(),g_bSetup=!g_bTxtChat,JoinRoom(),$("#eLpos").click(),setMF()}),i.click(function(e){playSd(1);var t=$("#cnId");""==t.val()&&(t.val("51pwn"),t.change()),n=!(g_bTxtChat=!(b_clickJoin=!0)),o.show(),i.hide(),c.hide(),oMyCtn.show(),ovChat.show(),StartVideo(),$("#eLpos").click(),ldai()});function s(e,n){var t=new FileReader;t.onload=function(e){var t=this.result;SendFile(t,0==t.indexOf("data:image")?1:2,n)},t.readAsDataURL(e)}function r(e){e?g.show():g.hide()}var d,l=!1,g=($("#eLpos").change(function(){this.checked?(l||(l=!0,$("body").append("<div class=compass><div class=arrow></div><div class=compass-circle></div><div class=my-point></div></div>")),d=StartPosInfo()):stopPosInfo(d)}),init(),$("#ux8").change(function(){window.x8md="yolov8"+(this.checked?"x":"n")+"-seg"}),$("#eAi").change(function(){window.bEaV8=this.checked,window.bEaV8&&window.v8Load&&"function"==typeof window.detectImgV8&&window.detectImgV8(),ldai(),showWnSt()}),$("#eOcr").change(function(){window.bEabOcr=this.checked,ldai(!0)}),szLstChannel=getRoomName(),(oNick=$("#nick")).val(szCltFg),oNick.change(function(){bIoIsOk&&setNickInfo($(this).val())}),t.change(function(){n&&JoinRoom()}),initQrcode(),a.keydown(function(e){13==e.keyCode&&(SendMsg(a.val()),a.val(""))}),a.bind("paste",function(e){var t,n=(e.clipboardData||e.originalEvent.clipboardData).items;for(t in n){var i=n[t];i&&("file"===i.kind||i.type&&0===i.type.indexOf("image"))&&s(i.getAsFile(),"paste")}}),(oAutoRm=$("#atRd")).change(function(){bAutoRm=this.checked}),oMsgBox=$("#msgList"),bAutoRm=oAutoRm.prop("checked"),oclsId.click(function(){oMsgBox.html(""),fnTmArr=[]}),$("form").submit(function(e){return!1}),fnTmArr.push(fn009),document.addEventListener("WeixinJSBridgeReady",function(){$("video").each(function(){this.play()})}),oUpf=$("#upFile"),$("#mId").click(function(){oUpf.click()}),oUpf.change(function(){for(x in this.files){if("length"==x)break;s(this.files[x],this.files[x].name)}}),$("input").each(function(){this.title=this.placeholder||this.title||""}),$(".rtool i").click(function(e){var t=$(this).find("input[type=checkbox]");0<t.length&&(t[0].checked=!t[0].checked,t.change())}),$("#its").click(function(){var e=$("div.rtool");e.attr("show")?(e.hide(),e.removeAttr("show")):(e.show(),e.attr("show",!0))}),e&&(t.val(e.substring(1)),StartVideo()),$("#roomurl").bind("mouseover",MkQrcd),$("#intro"));r($("#sInvite").change(function(){MkQrcd(),r(this.checked)}).prop("checked")),$("div.rtool input[type=checkbox]").addClass("btn btn-secondary"),bIsMobile&&($("#evdUser").prop("checked",!0),window.addEventListener("orientationchange",function(e){e=e.orientation||screen.orientation&&screen.orientation.angle;v8cTop=-90==e||90==e?126:42})),initBox(),$("script").remove()});