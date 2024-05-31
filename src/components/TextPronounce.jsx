// https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api?hl=zh-tw
// ISO Language Codes: http://www.lingoes.net/en/translator/langcode.htm
import { SoundFilled } from "@ant-design/icons";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useMemo, useState } from "react";
const TextPronounce = ({ text, lang = "en-US" }) => (
  <BrowserOnly>
    {() => {
      const [slowRate, setSlowRate] = useState(false);
      const [isVoiceEnd, setIsVoiceEnd] = useState(false);

      const isSpeechSynthesisSupported = useMemo(() => {
        return (
          "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
        );
      }, [window]);

      if (!isSpeechSynthesisSupported) {
        return null;
      }

      const msg = useMemo(() => new SpeechSynthesisUtterance(text), [text]);
      const playSound = async () => {
        let rate = 0.8;
        if (slowRate) {
          rate = 0.5;
        }
        msg.rate = rate;
        msg.lang = lang;
        window.speechSynthesis.speak(msg);
        setIsVoiceEnd(true);
        setSlowRate(!slowRate);
      };
      msg.onend = () => {
        setIsVoiceEnd(false);
      };
      return (
        <button
          className='sounds_btn'
          onClick={playSound}
          disabled={isVoiceEnd}
        >
          <SoundFilled />
        </button>
      );
    }}
  </BrowserOnly>
);
export default TextPronounce;
