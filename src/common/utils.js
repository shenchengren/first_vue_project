export class Utils {
    constructor() {
        this.job = 'development';
    }
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        //   console.info(cname + "=" + cvalue + "; " + expires);
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
}

export class A extends Utils {
    constructor(){
        super(); // 必须调用super方法才能正确拿到this
    }
}