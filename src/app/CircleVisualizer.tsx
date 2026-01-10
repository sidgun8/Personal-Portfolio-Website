'use client';
import React, { useEffect, useRef } from 'react';

interface CircularVisualizerProps {
  stream: MediaStream | null; // Accept the MediaStream as a prop
}

interface ExtendedWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

const CircularVisualizer: React.FC<CircularVisualizerProps> = ({ stream }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stream) return;

    const audioContext = new (window.AudioContext || (window as ExtendedWindow).webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);

    source.connect(analyser);

    analyser.fftSize = 256;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const visualize = () => {
      analyser.getByteFrequencyData(dataArray);

      // Calculate the volume intensity
      const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      const scale = 1 + (volume / 255) * 1; // Scale from 1 to 3
      const intensity = Math.min(volume / 255, 1); // Normalize to a value between 0 and 1

      // Apply styles to the visualizer circle
      if (circleRef.current) {
        circleRef.current.style.transform = `scale(${scale})`;
        circleRef.current.style.boxShadow = `0 0 ${intensity * 50}px`;
      }

      requestAnimationFrame(visualize);
    };

    visualize();

    return () => {
      audioContext.close(); // Clean up the audio context
    };
  }, [stream]);

  return (
    <div
      ref={circleRef}
      className="h-6 w-6 rounded-full transition-transform duration-0 ease-linear shadow flex items-center justify-center border border-red-500"
    >
      <div className='w-2 h-2 rounded-full bg-red-500'></div>
    </div>
  );
};

export default CircularVisualizer;