"use client";

import { Button } from "@/components/ui/button";
import { Check, LoaderCircle, Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { speechToText } from "./(actions)/actions";
import CircularVisualizer from "./CircleVisualizer";

interface TalkProps {
  setResult: (result: string) => void;
  isGettingAns: boolean;
}

export default function Talk({ setResult, isGettingAns }: TalkProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const micButtonRef = useRef<HTMLButtonElement>(null);

  let chunks: Blob[] = []; // Let variable for chunks to store audio data

  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  const toggleRecording = async () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }

    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
    }

    setMediaRecorder(null);
    setRecording(false);
    setTimer(0);

    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);

      const recorder = new MediaRecorder(stream);
      recorder.onstart = () => (chunks = []); // Reset chunks on start
      recorder.ondataavailable = (e) => chunks.push(e.data); // Store audio data
      recorder.onstop = handleRecordingStop;

      setMediaRecorder(recorder);
      recorder.start();
      setRecording(true);
      toast.success("Recording started");

      timerInterval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 30) {
            micButtonRef.current?.click();
            toast.info("Recording automatically stopped after 30 seconds.");
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
      
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Microphone access is required to start recording.");
    }
  };

  const handleRecordingStop = async () => {
    // Create audio blob from chunks
    const audioBlob = new Blob(chunks, { type: "audio/webm" });

    const formData = new FormData();
    formData.append("file", audioBlob, "audio.webm");

    setIsLoading(true);

    try {
      const data = await speechToText(formData);  // Transcription
      setResult(data.message as string);  // Set the result
      toast.success("Transcription successful");
    } catch (error) {
      console.error("Error during transcription:", error);
      toast.error("Failed to transcribe audio. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (recording) {
      return () => clearInterval(timerInterval.current!);
    }
  }, [recording]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
      {recording && audioStream && (
          <div className="flex items-center gap-2">
            <CircularVisualizer stream={audioStream} />
            <span className="text-sm w-10 items-center text-center">{`00:${timer < 10 ? `0${timer}` : timer}`}</span>
          </div>
        )}
        <Button
          ref={micButtonRef}
          type="button"
          onClick={toggleRecording}
          disabled={isLoading || isGettingAns}
          className="transform rounded-full"
          size="icon"
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin size-5" />
          ) : recording ? (
            <Check className="size-5" />
          ) : (
            <Mic className="size-5" />
          )}
        </Button>
      </div>
    </div>
  );
}