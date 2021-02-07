import { Selector } from 'testcafe';

export default class View {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');        
        this.yourGistBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.bg-gray-light.pb-0.pt-3.mb-4 > div > div > ul > li.flex-auto.text-bold.text-right.lh-condensed > a.d-none.d-md-block');
        this.openGist = Selector('#gist-pjax-container > div > div > div.col-9.col-md-9.col-12 > div.gist-snippet > div.js-gist-file-update-container.js-task-list-container.file-box > a');
    }
}