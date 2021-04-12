const add = () => {
  console.log('add');
};
const del = () => {
  console.log('del');
};

const foo = add();
const bar = del;

console.log(foo, bar);
