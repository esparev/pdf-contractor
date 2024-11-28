import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PDF Contractor',
    short_name: 'PDF Contractor',
  };
}
