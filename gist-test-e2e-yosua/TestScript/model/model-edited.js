import { Selector } from 'testcafe';

export default class Edit {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');        
        this.yourGistBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.bg-gray-light.pb-0.pt-3.mb-4 > div > div > ul > li.flex-auto.text-bold.text-right.lh-condensed > a.d-none.d-md-block');
        this.openGist = Selector('#gist-pjax-container > div > div > div.col-9.col-md-9.col-12 > div.gist-snippet > div.js-gist-file-update-container.js-task-list-container.file-box > a');
        this.editBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.bg-gray-light.pb-0.pt-3.mb-4 > div > div.mb-3.d-flex.px-3.px-md-3.px-lg-5 > ul > li:nth-child(1) > a');
        this.gistDescription = Selector('#gists > input');
        this.gistExtension = Selector('#gists > div.js-gist-file > div.file.js-code-editor.container-preview.show-code.mx-0 > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename');
        this.fieldGist = Selector('#gists > div.js-gist-file > div.file.js-code-editor.container-preview.show-code.mx-0 > div.commit-create.position-relative > div > div.CodeMirror-scroll')
        this.updateBtn = Selector('#edit_gist_107769276 > div > div.form-actions > button');
    }
}