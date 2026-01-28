import React, { useRef, useEffect } from "react";

const config = {
  numOfLayers: 5,
  bgColor: "#ffffff",
  colorSchema: "rainbow",
};

const DynamicWallpaper = () => {
  const canvasRef = useRef(null);
  const shadowCanvasRef = useRef(null);
  const timestampRef = useRef(performance.now());
  const fpsHistoryRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shadowCanvas = shadowCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const shadowCtx = shadowCanvas.getContext("2d");

    const setUpVars = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;
      const wCenterX = wWidth / 2;
      const wCenterY = wHeight / 2;
      const wHypot = Math.hypot(wWidth, wHeight);
      const wMin = Math.min(wWidth, wHeight);
      const angle = Math.atan(wHeight / wWidth);
      const layers = generateLayers();

      return {
        wWidth,
        wHeight,
        wCenterX,
        wCenterY,
        wHypot,
        wMin,
        angle,
        layers,
      };
    };

    const generateLayers = () => {
      const layers = [];

      for (let i = 0; i < config.numOfLayers; i++) {
        const radius = (i + 1) * (config.wMin / config.numOfLayers / 2);
        const color = getColorForLayer(i);
        layers.push({ radius, color });
      }

      return layers;
    };

    const getColorForLayer = (layerIndex) => {
      const colors = {
        rainbow: [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
        ],
        grayscale: [
          "#000000",
          "#222222",
          "#444444",
          "#666666",
          "#888888",
          "#aaaaaa",
          "#cccccc",
        ],
      };

      const colorSchema = colors[config.colorSchema] || colors.rainbow;
      const colorIndex = layerIndex % colorSchema.length;
      return colorSchema[colorIndex];
    };

    const drawLayer = (ctx, { radius, color }, { wCenterX, wCenterY }) => {
      ctx.beginPath();
      ctx.arc(wCenterX, wCenterY, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    };

    const draw = (
      ctx,
      { wWidth, wHeight, wCenterX, wCenterY, wHypot, wMin, angle, layers }
    ) => {
      ctx.clearRect(0, 0, wWidth, wHeight);
      ctx.fillStyle = config.bgColor;
      ctx.fillRect(0, 0, wWidth, wHeight);

      layers.forEach((layer) => {
        drawLayer(ctx, layer, { wCenterX, wCenterY, wHypot, angle });
      });
    };

    const drawShadow = (
      shadowCtx,
      ctx,
      { wWidth, wHeight, wCenterX, wCenterY, wHypot, wMin, angle, layers }
    ) => {
      shadowCtx.clearRect(0, 0, wWidth, wHeight);

      layers.forEach((layer) => {
        drawLayer(shadowCtx, layer, { wCenterX, wCenterY, wHypot, angle });
      });

      shadowCtx.globalCompositeOperation = "source-in";
      shadowCtx.shadowBlur = wHypot * 0.02;
      shadowCtx.shadowColor = "#00000005";
      shadowCtx.fillStyle = "#000000";
      shadowCtx.fillRect(0, 0, wWidth, wHeight);

      ctx.drawImage(shadowCanvas, 0, 0);
    };

    const handleWindowResize = () => {
      const { wWidth, wHeight } = setUpVars();
      canvas.width = wWidth;
      canvas.height = wHeight;
      shadowCanvas.width = wWidth;
      shadowCanvas.height = wHeight;
    };

    const update = () => {
      const now = performance.now();
      const elapsed = now - timestampRef.current;
      timestampRef.current = now;

      const fps = 1000 / elapsed;
      fpsHistoryRef.current.push(fps);
      if (fpsHistoryRef.current.length > 60) {
        fpsHistoryRef.current.shift();
      }

      const averageFps =
        fpsHistoryRef.current.reduce((total, value) => total + value, 0) /
        fpsHistoryRef.current.length;

      const { layers } = setUpVars();

      drawShadow(shadowCtx, ctx, { ...setUpVars(), layers });
      draw(ctx, { ...setUpVars(), layers });

      requestAnimationFrame(update);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      <canvas ref={shadowCanvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default DynamicWallpaper;
