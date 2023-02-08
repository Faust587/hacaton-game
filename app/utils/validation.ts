import {TButton, TMessage} from '../data/types';

export const isTMessage = (item: TMessage | TButton): item is TMessage => {
  return !!(item as TMessage).text;
};
