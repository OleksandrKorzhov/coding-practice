console.log(global);

// global.something = () => { - this way works
something = () => { // this way not!
  console.log('something works!');
};

something();
