class Message{
    content;
    type;
    constructor(content, type) {
        this.content = content;
        this.type = type;

    }
    get render(){
        return  `<div class="alert alert-${this.type} alert-dismissible" role="alert">
                  ${this.content}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
    }
    toString(){
        let str = `<div class="alert alert-${this.type} alert-dismissible" role="alert">
                  ${this.content}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
        return str
    }

}

module.exports = Message