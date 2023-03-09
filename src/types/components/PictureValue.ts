import PictureVariant from './PictureVariant';

export default interface PictureValue {
  altText: string;
  variants: PictureVariant[];
  loopVideos: boolean;
}
