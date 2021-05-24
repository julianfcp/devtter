import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", "86400"],
  ["hour", "3600"],
  ["minute", "60"],
  ["second", "1"],
];

const getDateDiff = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000; // tiempo hasta ahora en segundos

  for (const [unit, secsInUnit] of DATE_UNITS) {
    // destructuring de DATE_UNITS
    if (Math.abs(elapsed) > secsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secsInUnit);
      return { value, unit };
    }
  }
};

const useTimeAgo = (timestamp) => {
  const [timeago, setTimeago] = useState(() => getDateDiff(timestamp)); // ejecutar funcion callback

  // calcular timeAgo cada intervalor de sgundos
  useEffect(() => {
    const interval = setInterval(() => {
      // setinterval ejecuta cada 1000 mili segundos
      const newTimeago = getDateDiff(timestamp);
      setTimeago(newTimeago);
    }, 1000);
    return () => clearInterval(interval); // ejecutar funcion callback
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat("es", {
    // Safari no tiene compatibilidad (mirar versiones) usar polyfill
    style: "short",
  });
  const { value, unit } = timeago;
  return rtf.format(value, unit);
};

export default useTimeAgo;
