import Edit from './model/model-edited';

const edit = new Edit();

fixture `Warung Pintar Test - Edit Gist`
    .page `https://github.com/login`

test('Edit a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(edit.username, '****')
        .typeText(edit.password, '****')
        .click(edit.loginBtn)
        .wait(1000)
        .click(edit.yourGistBtn)
        .wait(1000)
        .click(edit.openGist)
        .click(edit.editBtn)
        .click(edit.gistDescription)
        .pressKey('ctrl+a delete')
        .typeText(edit.gistDescription, ' Update')
        .typeText(edit.gistExtension, ' update.json')
        .click(edit.fieldGist)
        .pressKey('ctrl+a delete')
        .typeText(edit.fieldGist, ' update data .json')
        .wait(1000)
        .click(edit.updateBtn)
        .wait(5000)
});
