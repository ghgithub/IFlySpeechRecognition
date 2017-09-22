declare var exec: any;
declare var xunfeiListenSpeaking: {
    startListen: (success: any, error: any, isShowDialog: any, isShowPunc: any) => void;
    stopListen: () => void;
    startSpeak: (success: any, error: any, speakMessage: any) => void;
    stopSpeak: () => void;
    pauseSpeaking: () => void;
    resumeSpeaking: () => void;
};
