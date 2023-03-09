import { Item } from '@sitecore-jss/sitecore-jss/types/layout/models';

/*
 * Due to lack of documentation or skills searching it,
 * here's our own interface to handle DroptreeItems.
 * There's got to be some existing stuff for this.
 * But for now:
 */
export default interface ItemWithUrl extends Item {
  id: string;
  url: string;
}
