import View from './model/model-viewed';

const view = new View();

fixture `Warung Pintar Test - View Gist`
    .page `https://github.com/login`

test('View a public Gist', async t => {
    await t
    .maximizeWindow()
    .typeText(view.username, '****')
    .typeText(view.password, '****')
    .click(view.loginBtn)
    .wait(1000)
    .click(view.yourGistBtn)
    .wait(1000)
    .click(view.openGist)
});
