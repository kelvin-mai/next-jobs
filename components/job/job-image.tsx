import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

import css from './job.module.css';

export interface JobImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size: number;
}

export const JobImage: React.FC<JobImageProps> = ({ size, ...props }) => {
  // onError doesn't work as intended with SSR
  const [loaded, setLoaded] = useState(false);
  const containerStyle = {
    height: size,
    width: size,
  };
  const placeholderStyle = {
    ...containerStyle,
    lineHeight: `${size}px`,
    fontSize: `${size * (1 / 5)}px`,
  };
  const handleLoadImage = () => {
    setLoaded(true);
  };
  const shouldDisplay = loaded ? 'block' : 'none';
  return (
    <div className={css['image-container']} style={containerStyle}>
      {!loaded && (
        <div className={css['image-placeholder']} style={placeholderStyle}>
          not found
        </div>
      )}
      <img
        {...props}
        style={{ display: shouldDisplay }}
        onLoad={handleLoadImage}
      />
    </div>
  );
};
