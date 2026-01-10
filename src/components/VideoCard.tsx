import { Play } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

const VideoCard = ({ iframe }: { iframe: ReactNode }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handlePlayClick = () => {
        setFadeOut(true); // Start the fade-out transition
        setTimeout(() => setShowVideo(true), 300); // Wait for the transition to finish before hiding the overlay
    };

    return (
        <div className="relative w-full md:w-1/2 mx-auto">
            {iframe}
            {!showVideo && (
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-secondary flex flex-col items-center justify-center text-center text-primary gap-4 rounded-lg md:rounded-2xl transition-opacity duration-300 ${
                        fadeOut ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    <h1 className="text-lg md:text-2xl font-semibold tracking-wide">
                        Use State Hook
                    </h1>
                    <p className="text-sm md:text-base font-">
                        Learn how to effectively use the <code>useState</code> hook in React.
                    </p>
                    <button
                        onClick={handlePlayClick}
                        className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Play className="w-5 h-5" />
                        <span className="text-sm md:text-base font-medium">Play Video</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoCard;