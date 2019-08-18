
/** 
 * @Author: YISHI 
 * @Date: 2019-08-18 23:05:53 
 * @Desc: 集合练习 
 */

(function () {  

    var funs = [
        '函数对象',
        '函数字面量',
        '调用',
        '参数',
        '返回',
        '异常',
        '扩充类型的功能',
        '递归',
        '作用域',
        '闭包',
        '回调',
        '模块',
        '级联',
        '柯里化',
        '记忆'
    ];
    var fun = {
        '1': '函数对象',
        '2': '函数字面量',
        '3': '调用',
        '4': '参数',
        '5': '返回',
        '6': '异常',
        '7': '扩充类型的功能',
        '8': '递归',
        '9': '作用域',
        '10': '闭包',
        '11': '回调',
        '12': '模块',
        '13': '级联',
        '14': '柯里化',
        '15': '记忆'
    };
    var persons = [
        {
            'name': 'mmx',
            'age': 26
        },
        {
            'name': 'wzt',
            'age': 25
        },
        {
            'name': 'yy',
            'age': 26
        }
    ]
    var nums = [10, 4, 2, 8, 6, 3, 6 ];
    var falsy = [null, false, NaN, undefined, '', "", 0, 6, 2, 5];

    /* Moudle compact
    ----------------------------------------------------- */
    var arrs = _.compact(falsy);
    console.log(arrs);

    /* Moudle partition
    ----------------------------------------------------- */
    // var arrs = _.partition(nums, function (num) {
    //     return num % 2 === 0
    // });
    // console.log(arrs);

    /* Moudle size
    ----------------------------------------------------- */
    // var size = _.size(persons);
    // console.log(size);

    /* Moudle toArray
    ----------------------------------------------------- */
    // var arrs = (function () { return _.toArray(arguments).slice(0); }(1, 2, 3, 4));
    // console.log(arrs);
    

    /* Moudle sample
    ----------------------------------------------------- */
    // var arrs = _.sample(nums, 3);
    // console.log(arrs);

    /* Moudle shuffle
    ----------------------------------------------------- */
    // var arrs = _.shuffle(nums);
    // console.log(arrs);

    /* Moudle countBy
    ----------------------------------------------------- */
    // var arrs = _.countBy(nums, function(num) {
    //     return num % 2 === 0 ? 'even' : 'odd';
    // });

    // console.log(arrs);

    /* Moudle indexBy
    ----------------------------------------------------- */
    // var ages = _.indexBy(persons, 'age');
    // console.log(ages);

    /* Moudle groupBy
    ----------------------------------------------------- */
    // var arrs = _.groupBy(nums, function(value) {
    //     return Math.floor(value);
    // });

    // console.log(arrs);

    /* Moudle sortBy
    ----------------------------------------------------- */
    // var arrs = _.sortBy(persons, 'age');

    // console.log(arrs);

    // var nums = _.sortBy(nums, function(value) {
    //     console.log(Math.sin(value));
    //     return Math.sin(value);
    // });
    // console.log(nums);

    /* Moudle min
    ----------------------------------------------------- */
    // var age = _.min(persons, function (value) {
    //     return value.age;
    // });

    // console.log(age);

    /* Moudle max
    ----------------------------------------------------- */
    // var age = _.max(persons, function (value) {
    //     return value.age;
    // });

    // console.log(age);

    /* Moudle pluck
    ----------------------------------------------------- */
    // var arrs = _.pluck(persons, 'name');
    // console.log(arrs);

    /* Moudle invoke
    ----------------------------------------------------- */
    // var arrs = _.invoke([[8, 9, 1], [6, 1, 5]], 'slice', 2);

    // console.log(arrs);

    /* Moudle contains
    ----------------------------------------------------- */
    // var hasValue = _.contains(nums, 10, 0);

    // console.log(hasValue);

    /* Moudle some
    ----------------------------------------------------- */
    // var isValue = _.some(funs, function (value) {
    //     return value === '函数对象';
    // });

    // console.log(isValue);

    /* Moudle every
    ----------------------------------------------------- */
    // var isValue = _.every(funs, function (value) {
    //     return value === '函数对象';
    // });

    // console.log(isValue);

    /* Moudle reject
    ----------------------------------------------------- */
    // var arrs = _.reject(funs, function(value) {
    //     return value === '函数对象';
    // });

    // console.log(arrs);

    /* Moudle where
    ----------------------------------------------------- */
    // var arrs = _.where(persons, { name: 'wzt' });
    // console.log(arrs);

    /* Moudle findWhere
    ----------------------------------------------------- */
    // var arrs = _.findWhere(objArr, { name: 'wzt' });
    // console.log(arrs);

    /* Moudle filter
    ----------------------------------------------------- */
    // var evens = _.filter(obj, function (value) {
    //     return value === '函数字面量';
    // });

    // console.log(evens);

    /* Moudle find
    ----------------------------------------------------- */
    // var even = _.find(obj, function (value, key) {
    //     return value === '函数字面量';
    // });

    // console.log(even);


    /* Moudle reduceRight
    ----------------------------------------------------- */
    // 从右边计算总值
    // var sum = _.reduceRight(numArr, function(memo, value, key, numArr ) {
    //     return memo + value;
    // }, 0);

    // console.log(sum);

    /* Moudle reduce
    ----------------------------------------------------- */

    // 计算总值
    // var sum = _.reduce(numArr, function (memo, value, key, numArr ) {
    //     return memo + value;
    // }, 0);

    // console.log(sum);


    /* Moudle map
    ----------------------------------------------------- */

    // 遍历数组/对象
    // var maps = _.map(obj, function (value, key, obj) {
    //     return 'ys-' + value;
    // });

    // console.log(maps);


    /* Moudle each
    ----------------------------------------------------- */

    // 遍历 NodeList
    // var els = document.querySelectorAll('h2');
    // _.each(els, function (value, key) {
    //     console.log(value);
    // });

    // 遍历 arguments
    // var sum = function () {
    //     _.each(arguments, function (value, key) {
    //         console.log(value);
    //     });
    // };

    // sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

    // 遍历对象
    // _.each(obj, function (value, key, list) {
    //     console.log(value + ':' + key);
    // }); 

    // 遍历数组
    // _.each(arr, function (element, index, list) {
    //     console.log(element + ':' + index);
    // });

}());