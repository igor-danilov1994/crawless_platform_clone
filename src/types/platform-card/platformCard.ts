export enum PlatformCardMark {
  LIME50 = 'lime50', // #B9E01E
  GOLD50 = 'gold50', // #FAAD14
  ORANGE70 = 'orange70', // #FFC069
  MAGENTA50 = 'magenta50', // #EB2F96
}

export interface Platform {
  name: string;
  markColor: PlatformCardMark;
  data: Data[];
}

export interface Data {
  name: string;
  value: string;
  option: Object;
}
