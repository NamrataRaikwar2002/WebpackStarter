import Logo from './logo.svg';
import './App.css';

const root = document.getElementById("root");
const name = 'Namrata'
root.innerHTML = `
<main class='main'>
<img src=${Logo} alt='build icon'/>
<h1> learning web tooling today</h1>
<button id='showBtn'>Show About</button>
<div id='about-Page'></div>
</main>`;

const aboutPage = document.querySelector('#about-Page');
const showAboutPage = () => {
    aboutPage.innerHTML = 'loading...';
    import('./App').then(({
        default: App
    }) => {
        aboutPage.innerHTML = App({
            name
        });
    })
}

document.querySelector('#showBtn').addEventListener("click", showAboutPage)