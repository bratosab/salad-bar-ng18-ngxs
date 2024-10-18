function getAnswer() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum++;
  }
  return 42;
}

onmessage = (e) => {
  switch (e.data) {
    case "answer":
      postMessage(getAnswer());
      break;
  }
};
