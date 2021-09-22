const MB = 1_000_000;

function toMB(num) {
  return (num / MB).toFixed(1);
}

function tableRow(count, len, mbs) {
  return `<tr><td>${count}</td><td>${toMB(len)}</td><td>${toMB(mbs)}</td></tr>`
}

const strs = [];
let i = 0;
runBtn.onclick = async function addString() {
  strs.push('X'.repeat(100 * MB));
  strs.at(-1)[0];

  const memory = await performance.measureUserAgentSpecificMemory();
  const chars = strs.reduce((t, s) => t + s.length, 0);

  table.insertAdjacentHTML('beforeend', tableRow(strs.length, chars, memory.bytes));;
  i++;
  if (i < 11)
    setTimeout(addString, 1000);
}


