
const FthApp = require('./FthApp')

class FthWebMiddleware extends FthApp {
    constructor() {
        this.request
        this.response
        this._fthwebmiddleware_basetypetoken = true
    }

    async _flowIn(flowCtrl) {
        // by default do no shit.
    }

    async _handleError(err, app, flowCtrl) {
        return false;
    }

    async _flowOut(flowCtrl) {
        // by default do 0 stuff.
    }

    redirect(url) {
        this.response.writeHead(307, {'Location': url});
    }

    async _main(args) {
        console.log('The Abstract Middleware class is really not meant to be executed directy.')
    }

}

FthApp.register(module, FthWebMiddleware)