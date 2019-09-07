window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            lists: [
                {id: 1, img: 'img/apple.png', name: '苹果', number: 2, price: 8},
                {id: 2, img: 'img/humber.png', name: '汉堡', number: 1, price: 35},
                {id: 3, img: 'img/ice.png', name: '冰淇淋', number: 4, price: 18}
            ],
            searching: '',
            newSearch: []
        },
        filters: {
            changeDollar: function (val) {
                return '￥' + val.toFixed(2);
            }
        },
        computed: {
            totalPrice: function () {
                return this.newSearch.reduce((total, item) => {
                    return total + item.number*item.price;
                }, 0);
            },
            totalNum: function () {
                return this.newSearch.reduce((total, num) => {
                    return total + num.number;
                }, 0);
            },
            isHas: function () {
                return this.newSearch.length===0 ? true : false;
            }
        },
        methods: {
            changeNum: function(who, index){
                switch (who) {
                    case 1:
                        this.lists[index].number++;
                        break;
                    case -1:
                        this.lists[index].number===1 ? this.lists[index].number=1 : this.lists[index].number--;
                        break;
                    default:
                        console.log('报错');
                }
            },
            del: function (index) {
                if(confirm('你确定删除 '+this.lists[index].name+' 吗？')){
                    this.lists.splice(index, 1);
                }
            },
            newLists: function () {
                if(this.search===''){
                    this.newSearch = this.lists;
                }else{
                    this.newSearch = this.lists.filter(item => {
                        return item.name.includes(this.searching);
                    });
                }
            }
        },
        created: function () {
            this.newSearch = this.lists;
        }
    });
};