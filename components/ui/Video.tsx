import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VideoProps {
  url: string;
  title: string;
  channel: string;
  thumbnail: string;
}

export const Video: React.FC<VideoProps> = ({
  url,
  title,
  channel,
  thumbnail,
}) => {
  return (
    <Link
      href={url}
      className="flex flex-col p-4 bg-white hover:shadow-lg shadow-violet-200 w-fit rounded-xl transition-shadow duration-300"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={600}
        height={100}
        className="rounded-xl"
      />
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-gray-600">{channel}</p>
    </Link>
  );
};
