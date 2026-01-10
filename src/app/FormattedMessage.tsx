import React from "react";
import Link from "next/link";

interface FormattedMessageProps {
  message: string; // Message must be a string
}

const FormattedMessage: React.FC<FormattedMessageProps> = ({ message }) => {
  // Regex to match URLs, excluding those that end with a dot or comma
  const urlRegex = /https:\/\/[^\s/$.?#].[^\s]*[^.,\s]/g;

  const matches = message.match(urlRegex) || [];

  const formattedMessage = message.split(urlRegex).reduce<React.ReactNode[]>((acc, part, index) => {
    acc.push(part);

    if (index < matches.length) {
      const match = matches[index];
      acc.push(
        <Link key={index} href={match} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          {match}
        </Link>
      );
    }

    return acc;
  }, []);

  return <div>{formattedMessage}</div>;
};

export default FormattedMessage;