const printItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        printItems(array[i]);
    }else {
      console.log(array[i])
    }
  }
};

const array = ['😎', '💩', '🤗', '😼', '😂'];
printItems(array);


const array2 = ['😎', ['💩', '🤗'], '😼', '😂'];
printItems(array2);

const array3 = [
  '😎',
  [
    ['💩', ['🤗']],
    [[['😼']], '😂'],
  ],
];

printItems(array3);
