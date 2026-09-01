import { useEffect, useState } from "react";

function TypeWwriter({ text, speed = 20, start = false, onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!start || finished) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        setFinished(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed, finished, onComplete]);

  return (
    <>
      {displayText}

      {!finished && start && <span className="animate-pulse">|</span>}
    </>
  );
}

export default TypeWwriter;
