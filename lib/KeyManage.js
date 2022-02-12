const Configstore = require('configstore');
const pkg = require('../package.json');


class KeyManage{
    constructor(){
        this.conf = new Configstore(pkg.name)
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No API Key Found')
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No API Key Found')
        }
        this.conf.delete('apiKey')

        return;
    }

}
module.exports = KeyManage;