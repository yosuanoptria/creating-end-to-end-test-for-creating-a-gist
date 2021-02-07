import Delete from './model/model-deleted';

const deleted = new Delete();

fixture `Warung Pintar Test - Delete Gist`
    .page `https://github.com/login`

test('Delete a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(deleted.username, '****')
        .typeText(deleted.password, '****')
        .click(deleted.loginBtn)
        .wait(1000)
        .click(deleted.yourGistBtn)
        .wait(1000)
        .click(deleted.openGist)
        .click(deleted.deleteBtn)     
});
