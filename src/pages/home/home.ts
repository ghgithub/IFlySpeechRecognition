import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  speechText: string;
  constructor(public navCtrl: NavController,public platform:Platform) 
  {
    // if(platform.is('android') || platform.is('ios')){
    //   console.log(xunfeiListenSpeaking);   
    
    // }
    // else {
    //     console.log('error');
    //   }
    this.speechText = "这是系统默认的语音";
  }

  // 开启语音
  startListen(): void{
    xunfeiListenSpeaking.startListen(success=>{
      if(success){
        //data即是返回的文字
        this.speechText = success;
        console.log(success);
      }else{
        console.log(success);
        console.log('没有值');
      }

      setTimeout(this.startSpeak(),3000);
 
      },err=>{
        console.log(err);
      },true,false);   
  }

  // 停止语音
  stopListen(): void{
    xunfeiListenSpeaking.stopListen();   
  }

  // 开启说话
  startSpeak(): void{
    xunfeiListenSpeaking.startSpeak(success=>{
      //success即是返回的文字
      console.log(success);
      },err=>{
        console.log(err);
      },this.speechText);   
  }

  // 停止说话
  stopSpeak(): void{
    xunfeiListenSpeaking.stopSpeak();   
  }

// 中止说话
  pauseSpeaking(): void{
    xunfeiListenSpeaking.pauseSpeaking();   
  }

  // 恢复说话
  resumeSpeaking(): void{
    xunfeiListenSpeaking.resumeSpeaking();   
  }
}
