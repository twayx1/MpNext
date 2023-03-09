import PictureRegion from './PictureRegion';

export default interface PictureVariant {
  name: string;
  src: string;
  mediaId: string;
  region: PictureRegion | null;
  videoId: string;
}
