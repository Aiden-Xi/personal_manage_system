class staffItem{
    constructor(user) {
        this.info = {}
        this.info.name = user.name
        this.info.age = user.age
        this.info.identity = user.identity
        this.info.sex = user.sex
        this.info.description = user.description || ''
        this.key = ++staffItem.key
        switch (user.identity) {
            case '主任':
                this.info.id = 1
                break
            case '老师':
                this.info.id = 2
                break
            case '学生':
                this.info.id = 3
                break
            case '实习':
                this.info.id = 4
                break
            default:
                break
        }
    }
}

staffItem.key = 0

export default class Staff {
    constructor() {
        this.allStaff = [
            new staffItem(Staff.rawData[0]),
            new staffItem(Staff.rawData[1]),
            new staffItem(Staff.rawData[2]),
            new staffItem(Staff.rawData[3]),
            new staffItem(Staff.rawData[4]),
            new staffItem(Staff.rawData[5]),
            new staffItem(Staff.rawData[6]),
            new staffItem(Staff.rawData[7]),
            new staffItem(Staff.rawData[8]),
            new staffItem(Staff.rawData[9]),
            new staffItem(Staff.rawData[10])
        ];
        this.sortType = 0  // 0-身份 1-年龄升  2-年龄降
        this.filterType = 0 // 0-all, 1-主任 2-老师 3-学生 4-实习
        this.currentStaff = [] // 当前包含的用户数量
        this.word = '' // 搜索关键字
        this._sortStaff(this.sortType) // 默认按着身份排序
        this._filterType(this.filterType) // 默认筛选全部
    }

    // 筛选
    _filterType(filterType) {
        let temp_filterType = parseInt(filterType, 10)
        this.filterType = temp_filterType
        if (temp_filterType < 0 || temp_filterType > 4) {
            alert('您搜索条件错误')
            return
        }

        if (temp_filterType === 0) {
            this.currentStaff = this.allStaff
        } else {
            this.currentStaff = this.allStaff.filter((item) => item.info.id === temp_filterType)
        }
    }

    // 排序
    _sortStaff(sortType) {
        let temp_sortType = parseInt(sortType, 10)
        this.sortType = temp_sortType
        switch(temp_sortType) {
            case 0: // 身份
                this.allStaff.sort((item1, item2) => {
                    if (item1.info.id < item2.info.id) {
                        return -1
                    } else if (item1.info.id > item2.info.id) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            case 1: // 年龄升
                this.allStaff.sort((item1, item2) => {
                    if (item1.info.age < item2.info.age) {
                        return -1
                    } else if (item1.info.age > item2.info.age) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            case 2: //年龄降
                this.allStaff.sort((item1, item2) => {
                    if (item1.info.age < item2.info.age) {
                        return 1
                    } else if (item1.info.age > item2.info.age) {
                        return -1
                    } else {
                        return 0
                    }
                })
                break
            default: break
        }
    }

    // 搜索
    _searchStaff(word) {
        this.word = word
        // 在staff中搜索
        this.currentStaff = this.currentStaff.filter((item) => {
            return (item.info.name.indexOf(word) !== -1 ||
                (item.info.age+'').indexOf(word) !== -1 ||
                item.info.identity.indexOf(word) !== -1 ||
                item.info.sex.indexOf(word) !== -1)
        })
    }

    // 对外开放API
    // 增
    addStaffItem(item) {
        let newItem = new staffItem(item)
        this.allStaff.push(newItem)
        // 进行 筛选 排序 搜索过滤
        this._sortStaff(this.sortType)
        this._filterType(this.filterType)
        this._searchStaff(this.word)
        return this
    }
    // 删除
    removeStaffItem(key) {
        let newStaff = this.allStaff.filter((item) => item.key !== key)
        this.allStaff = newStaff
        // 进行 筛选 排序 搜索过滤
        this._filterType(this.filterType)
        this._searchStaff(this.word)
        return this
    }
    // 更改
    editStaffItem(item) {
        this.allStaff.forEach((staffItem) => {
            if (staffItem.key === item.key) {
                staffItem.info.name = item.name;
                staffItem.info.sex = item.sex;
                staffItem.info.age = item.age;
                staffItem.info.identity = item.identity;
                staffItem.info.id = item.id
                staffItem.info.description = item.description;
            }
        })

        this._sortStaff(this.sortType)
        this._filterType(this.filterType)
        this._searchStaff(this.word)
        return this
    }
    // 过滤
    filterStaff(filterType) {
        this._filterType(filterType)
        this._searchStaff(this.word)
        return this
    }
    // 排序
    sortStaff(sortType) {
        this._sortStaff(sortType)
        this._filterType(this.filterType)
        this._searchStaff(this.word)
        return this
    }
    // 搜索
    searchStaff(word) {
        this._filterType(this.filterType)
        this._searchStaff(word)
        return this
    }
}

//模拟数据库
Staff.rawData = [
    { description:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '1', identity: '主任'},
    { description:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '3', identity: '学生'},
    { description:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '3', identity: '学生'},
    { description:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '4', identity: '实习'},
    { description:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '4', identity: '实习'},
    { description:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '3', identity: '学生'},
    { description:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '1', identity: '主任'},
    { description:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '2', identity: '老师'},
    { description:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '3', identity: '学生'},
    { description:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '4', identity: '实习'},
    { description:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '4', identity: '实习'}];

