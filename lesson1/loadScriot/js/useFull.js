console.log('useFull');

loadScript('js/a.js', () => {
    console.log('from useFull a', a);
    loadScript('js/b.js', () => {
        console.log('result sum = ', a + b)
    });
});