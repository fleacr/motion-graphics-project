const animateSVGPaths = () => {
  const paths = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'].map(id => document.getElementById(id));

  paths.forEach(path => {
    KUTE.fromTo(
      path, 
      { draw: '0% 0%' }, 
      { draw: '0% 100%' }, 
      { duration: 2000 }
    ).start();
  });
};

animateSVGPaths();