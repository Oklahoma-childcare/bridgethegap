import { useState } from 'react';
import { media, type PhotoName } from '../config/media';

type Props = { photo: PhotoName; alt: string; className?: string; eager?: boolean };

export function Photo({ photo, alt, className = '', eager = false }: Props) {
  const [failed, setFailed] = useState(false);
  return <div className={`photo ${className}`}>
    <img
      src={failed ? '/branding/stem-illustration.svg' : media.photos[photo]}
      alt={failed ? 'Colorful abstract STEM illustration' : alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      onError={() => setFailed(true)}
    />
  </div>;
}
