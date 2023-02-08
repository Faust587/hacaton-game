export type TMessage = {
  color: '#78e9a2' | '#cad6dd' | '#bf3751';
  text: string;
};

export type TButton = {
  id: number;
  variant1: {
    text: string;
    chapter: number;
  };
  variant2: {
    text: string;
    chapter: number;
  };
  pressed: -1 | 1 | 2;
};

export type TStory = {
  id: number;
  story: TMessage[];
  choice?: TButton;
  fail: boolean;
  finish: boolean;
};
