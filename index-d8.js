const map = new Map();
let index = 0;

for (let i = 0; i < 10000000; i += 1) {
  index += 1;
  map.set(index, {
    hello: `asd ${Math.random()}`,
    hello1: `vx ${Math.random()}`,
    hello2: `cbv ${Math.random()}`,
    hello3: `zxc ${Math.random()}`,
    hello4: `vb ${Math.random()}`,
  });
}

console.log('memory filled');

let prevTickTime = Date.now();
let timeDiff = 3000;

while (true) {
  if (Date.now() - prevTickTime > timeDiff) {
    const startTime = Date.now();
    %CollectGarbage(0); // d8, node (V8)
    // Bun.gc(true); // bun
    // gc(); // node (ChakraCore)
    console.log(`gc took ${Date.now() - startTime} ms`);

    prevTickTime = Date.now();

    // map should not been collected
    if (timeDiff > Infinity) {
      break;
    }
  }
}

// map should not been collected
console.log(map.size);
