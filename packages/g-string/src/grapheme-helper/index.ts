/*
[usage]
splitGraphemesFromString('J̴͖̒͗ú̷̗͜s̸̨̊́t̷͓͓͂ ̴̝͓̅M̸͓̆̈́o̸̭̖̓n̶̢͐î̶̢͝k̸͍̲̈a̴̖̔')

returns
[
  'J̴͖̒͗', 'ú̷̗͜', 's̸̨̊́', 't̷͓͓͂',
  ' ̴̝͓̅',
  'M̸͓̆̈́', 'o̸̭̖̓', 'n̶̢͐', 'î̶̢͝', 'k̸͍̲̈', 'a̴̖̔'
]

instead of
[
  'J', '̴', '̒',  '͗',  '͖',  'u', '̷',  '́', '̗',  '͜',  's',
  '̸',  '̊', '́',  '̨',  't', '̷',  '͂',  '͓', '͓',  ' ', '̴',
  '̅',  '̝', '͓',  'M', '̸',  '̆',  '̈́',  '͓', 'o', '̸',  '̓',
  '̭',  '̖', 'n', '̶',  '͐',  '̢',  'i', '̶', '̂',  '͝',  '̢',
  'k', '̸', '̈',  '͍',  '̲',  'a', '̴',  '̔', '̖'
]
*/

export { createIteratorForGraphemesFromString } from './createIteratorForGraphemesFromString'
export { createIterableObjectForGraphemesFromString } from './createIterableObjectForGraphemesFromString'
export { splitGraphemesFromString } from './splitGraphemesFromString'
export { countGraphemesFromString } from './countGraphemesFromString'
