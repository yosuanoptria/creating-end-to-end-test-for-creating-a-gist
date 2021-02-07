import Create from './model/model-created';

const create = new Create();

fixture `Warung Pintar Test - Create Gist`
    .page `https://github.com/login`

test('Create a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(create.username, 'rodessirait01@gmail.com')
        .typeText(create.password, 'notResponding17.')
        .click(create.loginBtn)
        .click(create.addNew)
        .wait(2000)
        .click(create.newGist)
        .wait(2000)
        .typeText(create.gistDescription, 'Warung Pintar End to End Test')
        .typeText(create.fileName, 'warung pintar-test-e2e.md')
        .typeText(create.fieldGist, 'this snippet just for end to end test')
        .wait(1000)
        .click(create.btnOptionCreate)
        .click(create.publicGistBtn)
        .wait(5000)
});
