import type { ImgHTMLAttributes } from 'react'

interface AspectMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: '4/3' | '3/4' | '16/9' | '1/1' | '5/4' | 'custom'
  customAspectRatio?: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function AspectMedia({
  aspectRatio = '4/3',
  customAspectRatio,
  alt,
  className = '',
  imageClassName = '',
  priority = false,
  src,
  ...rest
}: AspectMediaProps) {
  const aspectStyle =
    aspectRatio === 'custom' && customAspectRatio
      ? { aspectRatio: customAspectRatio }
      : { aspectRatio: aspectRatio.replace('/', ' / ') }

  return (
    <div
      style={aspectStyle}
      className={`relative w-full overflow-hidden bg-[#EEE9DD] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={`h-full w-full object-cover transition-transform duration-700 ${imageClassName}`}
        {...rest}
      />
    </div>
  )
}
