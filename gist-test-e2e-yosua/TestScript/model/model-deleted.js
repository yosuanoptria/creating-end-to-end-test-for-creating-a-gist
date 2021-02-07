import { Selector } from 'testcafe';

export default class Delete {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');        
        this.yourGistBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.bg-gray-light.pb-0.pt-3.mb-4 > div > div > ul > li.flex-auto.text-bold.text-right.lh-condensed > a.d-none.d-md-block');
        this.deleteBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.bg-gray-light.pb-0.pt-3.mb-4 > div > div.mb-3.d-flex.px-3.px-md-3.px-lg-5 > ul > li:nth-child(2) > form > button');
    }
}