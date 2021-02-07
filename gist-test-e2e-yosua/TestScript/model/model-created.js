import { Selector } from 'testcafe';

export default class Create {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > div.auth-form-body.mt-3 > form > input.btn.btn-primary.btn-block');
        this.addNew = Selector('body > div.position-relative.js-header-wrapper > div > div:nth-child(6) > a > svg.octicon.octicon-plus.d-none.d-md-inline-block');
        this.gistDescription = Selector('#gists > input');
        this.fileName = Selector('#gists > div.js-gist-file > div > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename');
        this.fieldGist = Selector('#gists > div.js-gist-file > div > div.commit-create.position-relative > div > div.CodeMirror-scroll');
        this.btnOptionCreate = Selector('#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > details > summary');
        this.publicGistBtn = Selector('#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > details > details-menu > label:nth-child(2) > div');
    }
}