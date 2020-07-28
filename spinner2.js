//characters to animate spinnning motion
const spinChar = ['| ', '/ ', '- ', '\\ ', '| ', '/ ', '- ', '\\ ', '| '];

const spinner = (text) => {
  interval = 0;
  for (const char of text) {
    setTimeout(()=> {
      process.stdout.write(`\r${char}`);
    }, interval);
    interval += 100;
    
  }
  setTimeout(()=> console.log('\n'), interval + 100);
};

spinner(spinChar);