import Create from './model/model-created';
import Delete from './model/model-deleted';
import Edit from './model/model-edited';
import View from './model/model-viewed';

const create = new Create();
const view = new View();
const edit = new Edit();
const deleted = new Delete();

fixture `Warung Pintar Test - End to End Test`
    .page `https://github.com/login`

test('Create a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(create.username, '*****')
        .typeText(create.password, '*****')
        .click(create.loginBtn)
        .click(create.addNew)
        .wait(2000)
        .typeText(create.gistDescription, 'Warung Pintar End to End Test')
        .typeText(create.fileName, 'warung pintar-test-e2e.md')
        .typeText(create.fieldGist, 'this snippet just for end to end test')
        .wait(1000)
        .click(create.btnOptionCreate)
        .click(create.publicGistBtn)
        .wait(5000)
});

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