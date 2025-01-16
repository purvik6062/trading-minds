import { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;

      script.onload = () => {
        if (window.TradingView) {
          new window.TradingView.widget({
            container_id: "tradingview-chart",
            symbol: "Bitcoin", // Replace with desired symbol
            theme: "dark",
            interval: "D",
            width: "100%",
            height: "500",
          });
        }
      };

      chartRef.current.appendChild(script);
    }
  }, []);

  return <div id="tradingview-chart" ref={chartRef}></div>;
};

export default TradingViewChart;
