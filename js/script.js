var gateway = `ws://${window.location.hostname}/ws`;
  var websocket;
  window.addEventListener('load', onLoad);
  function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen    = onOpen;
    websocket.onclose   = onClose;
    websocket.onmessage = onMessage;

  }
  function onOpen(event) {
    console.log('Connection opened');
  }
  function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
  }
  function onMessage(event) {
    //-----------------------------------------use for update state of button to web when press button
    // this function is called when "void notify_to_Clients()" is run
    var password_state_out_html;
    var socket_data_receive;
    var password_status;
    var password_status_wrong;
    var door_status;
    var door_state_out_html;

    socket_data_receive = event.data; //get data from "void notify_to_Clients()"

    password_status = event.data%(10);
    password_status_wrong = (event.data/(1000)).toFixed(0);
    door_status = (event.data/(100)).toFixed(0);
    
    switch (password_status){
      case 0: password_state_out_html = "[ ][ ][ ][ ][ ][ ]";
      break;
      case 1: password_state_out_html =  "[*][ ][ ][ ][ ][ ]";
      break;
      case 2: password_state_out_html =  "[*][*][ ][ ][ ][ ]";
      break;
      case 3: password_state_out_html =  "[*][*][*][ ][ ][ ]";
      break;
      case 4: password_state_out_html =  "[*][*][*][*][ ][ ]";
      break;
      case 5: password_state_out_html =  "[*][*][*][*][*][ ]";
      break;
      case 6: password_state_out_html =  "[*][*][*][*][*][*]";
      break;
      default: password_state_out_html =  "[*][*][*][*][*][*]>";
      break;
    }

    if (door_status == 0){
      door_state_out_html = "OPEN";
    }
    else {
      door_state_out_html = "CLOSE";
    }

    if (password_status_wrong == 1){
      document.getElementById('state_password').innerHTML = "WRONG PASSWORD!";
    }
    else {
      document.getElementById('state_password').innerHTML = password_state_out_html;
    }

    
    document.getElementById('state_door').innerHTML = door_state_out_html;
  }

  function onLoad(event) {
    initWebSocket();
    initButton1();
    initButton2();
    initButton3();
    initButton4();
    initButton5();
    initButton6();
    initButton7();
    initButton8();
    initButton9();
    initButton0();
    initButton_clear();
    initButton_enter();
  }
  function initButton1() {
    document.getElementById('button1').addEventListener('click', click1);
  }
  function click1(){
    websocket.send('click_command1');
  }
  function initButton2() {
    document.getElementById('button2').addEventListener('click', click2);
  }
  function click2(){
    websocket.send('click_command2');
  }
  function initButton3() {
    document.getElementById('button3').addEventListener('click', click3);
  }
  function click3(){
    websocket.send('click_command3');
  }
  function initButton4() {
    document.getElementById('button4').addEventListener('click', click4);
  }
  function click4(){
    websocket.send('click_command4');
  }
  function initButton5() {
    document.getElementById('button5').addEventListener('click', click5);
  }
  function click5(){
    websocket.send('click_command5');
  }
  function initButton6() {
    document.getElementById('button6').addEventListener('click', click6);
  }
  function click6(){
    websocket.send('click_command6');
  }
  function initButton7() {
    document.getElementById('button7').addEventListener('click', click7);
  }
  function click7(){
    websocket.send('click_command7');
  }
  function initButton8() {
    document.getElementById('button8').addEventListener('click', click8);
  }
  function click8(){
    websocket.send('click_command8');
  }
  function initButton9() {
    document.getElementById('button9').addEventListener('click', click9);
  }
  function click9(){
    websocket.send('click_command9');
  }
  function initButton0() {
    document.getElementById('button0').addEventListener('click', click0);
  }
  function click0(){
    websocket.send('click_command0');
  }
  function initButton_clear() {
    document.getElementById('button_clear').addEventListener('click', click_clear);
  }
  function click_clear(){
    websocket.send('click_command_clear');
  }
  function initButton_enter() {
    document.getElementById('button_enter').addEventListener('click', click_enter);
  }
  function click_enter(){
    websocket.send('click_command_enter');
  }