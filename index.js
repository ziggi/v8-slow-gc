const generateData = () => {
  return {
    hello: `asd ${Math.random()}`,
    hello1: `vx ${Math.random()}`,
    hello2: `cbv ${Math.random()}`,
    hello3: `zxc ${Math.random()}`,
    hello4: `vb ${Math.random()}`,
  };
};

const map = new Map();
let index = 0;

const add = () => {
  console.log('add', index);

  for (let i = 0; i < 100_000; i += 1) {
    index += 1;
    map.set(index, generateData());

    if (index % 1_000_000 === 0) {
      console.log('index', index);
    }
  }
};

let prevAddTime = Date.now();
let addTimeDiff = 10;

setInterval(() => {
  const time = Date.now();
  const diff = time - prevAddTime;

  if (diff > addTimeDiff) {
    add();

    if (index > 9_000_000) {
      addTimeDiff = 5_000;
    }

    if (index > 15_000_000) {
      addTimeDiff = Infinity;
    }

    prevAddTime = time;
  }
}, 0);

const repeatMs = 1000;
let prevCallTime = Date.now();

setInterval(() => {
  console.log('diffMs', (Date.now() - prevCallTime) - repeatMs);

  prevCallTime = Date.now();
}, repeatMs);
