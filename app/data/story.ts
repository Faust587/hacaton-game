import {TStory} from './types';

export const generalStory: TStory[] = [
  {
    id: 0,
    story: [
      {color: '#78e9a2', text: '[ CONNECTING ]'},
      {color: '#78e9a2', text: '[ VERIFICATION OF ENCRYPTION KEYS ]'},
      {color: '#78e9a2', text: '[ DECRYPTION ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ SUCCESS ]'},
      {color: '#78e9a2', text: '[ ВХІД ОПЕРАТОРА: ЗАСЕКРЕЧЕНО ]'},
      {color: '#78e9a2', text: '[ ЗАВАНТАЖЕННЯ ЗАВДАННЯ ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {
        color: '#78e9a2',
        text: '[ ШАНОВНИЙ, ЗАСЕКРЕЧЕНО. ЗГІДНО ДО РАПОРТУ КОМАНДИРА ЗАСЕКРЕЧЕНО ТА ЗАСЕКРЕЧЕНО, ВАМ ДОРУЧЕНО ЗАВДАННЯ №104 ]',
      },
      {
        color: '#78e9a2',
        text: '[ Відмова від цього завдання рахується за державну зраду ]',
      },
    ],
    choice: {
      id: 1,
      pressed: -1,
      variant1: {
        text: '[ ВІДМОВИТИСЬ ]',
        chapter: 1,
      },
      variant2: {
        text: '[ ПРИЙНЯТИ ]',
        chapter: 2,
      },
    },
    fail: false,
    finish: false,
  },
  // ВІДМОВА. ЗРАДА
  {
    id: 1,
    story: [
      {color: '#78e9a2', text: 'Ви зробили свій вибір...'},
      {color: '#78e9a2', text: 'Тепер з вами матиме діло СБУ та його підвал'},
      {color: '#78e9a2', text: '[ CONNECTION LOST ]'},
      {color: '#78e9a2', text: '[ TRY TO RECONNECT (1) ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ TRY TO RECONNECT (2) ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ TRY TO RECONNECT (3) ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ MISSION FAILED ]'},
    ],
    fail: true,
    finish: false,
  },
  // ПРИЙНЯТИ. ЗРАДА ВІДМІНЯЄТЬСЯ
  {
    id: 2,
    story: [
      {color: '#78e9a2', text: 'Раді бачити вас в наших рядах, ЗАСЕКРЕЧЕНО'},
      {color: '#78e9a2', text: '[ LOADING DATA ]'},
      {color: '#78e9a2', text: '[ ... ... ... ]'},
      {color: '#78e9a2', text: '[ ЗАВДАННЯ №104 ]'},
      {color: '#78e9a2', text: '[ ОСНОВНА ЗАДАЧА: ]'},
    ],
    choice: {
      id: 2,
      pressed: -1,
      variant1: {
        text: 'go here 2',
        chapter: 3,
      },
      variant2: {
        text: 'no, go here 2',
        chapter: 4,
      },
    },
    fail: false,
    finish: false,
  },
];
