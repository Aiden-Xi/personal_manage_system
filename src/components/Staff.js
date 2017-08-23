class staffItem{
    constructor(user) {
        this.info = {}
        this.info.name = user.name
        this.info.age = user.age
        this.info.id = user.id
        this.info.sex = user.sex
        this.info.description = user.description || ''
        this.key = ++staffItem.key
        console.log(`key=== ${this.key}`)
    }
}

staffItem.key = 0

