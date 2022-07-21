const keywords = [
    'HTML',
    'CSS',
    'CSS Modules',
    'SCSS',
    'Bootstrap',
    'TailwindCSS',
    'React.js',,
    'JavaScript',
    'Next.js',
    'Figma',
    'Git',
    'Vue.js'
];



const shuffledKeywords =() => {
  return keywords
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
}

$(document).ready(function() {
    const shuffled = shuffledKeywords();
    shuffled.forEach(word => $('#keywords').append(`
      <span class="m-1 m-md-2">${word}</span>
    `))
  
})


