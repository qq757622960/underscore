/** 
 * @Author: YISHI 
 * @Date: 2019-08-19 10:04:36 
 * @Desc: 数组练习 
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
    var nums = [10, 4, 2, 8, 6, 3, 6];
    var falsy = [null, false, NaN, undefined, '', "", 0, 6, 2, 5];

    /* Moudle range
    ----------------------------------------------------- */
    var arr = _.range(1, 11, 5);
    console.log(arr);

    /* Moudle findIndex 
    ----------------------------------------------------- */
    // var index = _.findIndex(persons, {
    //     name: 'yy'
    // });
    // console.log(index);

    /* Moudle 使用二分法确定 value 在 list 中的位置序号
    ----------------------------------------------------- */
    // var index = _.sortedIndex(nums, 5);
    // console.log(index);

    /* Moudle 返回 value 在该 array 中的索引值
    ----------------------------------------------------- */
    // var index = _.indexOf(nums, 2);
    // console.log(index);


    /* Moudle 将 array 分成多个数组
    ----------------------------------------------------- */
    // var arr = _.chunk(nums, 2);
    // console.log(arr);

    /* Moudle 将数组转换成对象
    ----------------------------------------------------- */
    // var obj = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
    // console.log(obj);

    /* Moudle unzip 与 zip 相反
    ----------------------------------------------------- */
    // var arr = _.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
    // console.log(arr);

    /* Moudle zip 将每个数组相应位置的值合并在一起
    ----------------------------------------------------- */
    // var arr = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
    // console.log(arr);

    /* Moudle 去除重复
    ----------------------------------------------------- */
    // var arr = _.uniq([1, 2, 1, 4, 1, 3]);
    // console.log(arr);

    /* Moudle 返回的值来自 array 参数数组
    ----------------------------------------------------- */
    // var arr = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
    // console.log(arr);

    /* Moudle 返回一个交集
    ----------------------------------------------------- */
    // var arr = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    // console.log(arr);

    /* Moudle 返回一个并集
    ----------------------------------------------------- */
    // var arr = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    // console.log(arr);

    /* Moudle without
    ----------------------------------------------------- */
    // var arr = _.without(nums, 6, 2);
    // console.log(arr);

    /* Moudle 将多层嵌套数组转换成一层数组
    ----------------------------------------------------- */
    // var arr = _.flatten([1, [2], [3, [[4]]]]);
    // console.log(arr);

    /* Moudle rest
    ----------------------------------------------------- */
    // var arr = _.rest(nums);
    // console.log(arr);

    /* Moudle last: 返回 array 中最后一个元素
    ----------------------------------------------------- */
    // var last = _.last(funs, 2);
    // console.log(last);

    /* Moudle initial: 返回数组中除了最后一个元素外的其他全部元素
    ----------------------------------------------------- */
    // var arrs = _.initial(funs, 2);
    // console.log(arrs);

    /* Moudle first: 返回 array 的第一个元素
    ----------------------------------------------------- */
    // var first = _.first(funs);
    // console.log(first);

}());