interface CloudinaryTransformOptions {
  width: number;
  dpr?: 'auto' | number;
}

/**
 * Injects Cloudinary delivery transforms (auto format/quality, capped width,
 * device-pixel-ratio awareness) into a Cloudinary URL so the CDN serves an
 * appropriately sized/compressed asset instead of the original upload.
 * Non-Cloudinary URLs are returned untouched.
 */
export const getOptimizedImageUrl = (
  url: string | undefined,
  { width, dpr = 'auto' }: CloudinaryTransformOptions
): string | undefined => {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }

  const transforms = `f_auto,q_auto,dpr_${dpr},w_${width},c_limit`;
  return url.replace('/upload/', `/upload/${transforms}/`);
};
