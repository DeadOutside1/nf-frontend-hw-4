import React, { FC, ReactNode, ImgHTMLAttributes } from 'react';

// Define the type for the Avatar props
interface AvatarProps {
  children: ReactNode;
}

// Define the type for the AvatarImage props
interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

// Define the Avatar component
export const Avatar: FC<AvatarProps> = ({ children }) => {
  return <div className="avatar">{children}</div>;
};

// Define the AvatarImage component
export const AvatarImage: FC<AvatarImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} className="avatar-img" {...props} />;
};
