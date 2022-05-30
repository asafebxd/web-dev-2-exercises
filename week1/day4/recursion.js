<<<<<<< HEAD
const printItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        printItems(array[i]);
    }else {
      console.log(array[i])
    }
  }
};
=======
//Print only items (emojis) in the console. Not the arrays.
const printItems = function (array) {};
>>>>>>> 30afdc4ab838fa104a6286e2f583080b280e62e6

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
