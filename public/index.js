console.log('Script loaded.......!');
console.log('React : ',React);
console.log('ReactDOM : ',ReactDOM)
rootElement=document.getElementById('root');
console.log('ReactDOM : ',rootElement);
const element=(
    <div className='greet'>
        <h1>This is new react jsx element html page.</h1>
        <p>Thanks for watching this page</p>
        </div>
    );
    // ReactDOM.render(element,rootElement);
    const root = ReactDOM.createRoot(rootElement);
    root.render(element);