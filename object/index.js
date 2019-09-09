/** 
 * @Author: YISHI 
 * @Date: 2019-08-20 22:29:50 
 * @Desc: Object 
 */

;(function () {  

    var ys = _.noConflict();

    console.log(ys.functions(ys));

    /* Moudle defaults
    ----------------------------------------------------- */
    // var iceCream = { flavor: "chocolate" };
    // var obj = _.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });
    // console.log(obj);

    /* Moudle omit
    ----------------------------------------------------- */
    // var obj = _.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'userid');
    // console.log(obj);

    /* Moudle pick
    ----------------------------------------------------- */
    // var obj = _.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age', 'userid');
    // console.log(obj);

    /* Moudle extend
    ----------------------------------------------------- */
    // var obj = _.extend({ name: 'moe' }, { age: 50 });
    // console.log(obj);

    /* Moudle functions
    ----------------------------------------------------- */
    // var arr = _.functions(_);
    // console.log(arr);

    /* Moudle create
    ----------------------------------------------------- */
    // var Stooge = function (name) { this.name = name; }
    // var moe = _.create(Stooge.prototype, { name: 'Moe' });
    // console.log(moe);

    /* Moudle invert
    ----------------------------------------------------- */
    // var obj = _.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
    // console.log(obj);

    /* Moudle pairs
    ----------------------------------------------------- */
    // var arr = _.pairs({ one: 1, two: 2, three: 3 });
    // console.log(arr);

    /* Moudle mapObject
    ----------------------------------------------------- */
    // var obj = _.mapObject({ start: 5, end: 12 }, function (value, key) {
    //       return value + 5;
    // });
    // console.log(obj);

    /* Moudle values
    ----------------------------------------------------- */
    // var vals = _.values({ one: 1, two: 2, three: 3 });
    // console.log(vals);

    /* Moudle allKeys
    ----------------------------------------------------- */
    // function Stooge(name) {  
    //     this.name = name;
    // };
    // Stooge.prototype.silly = true;

    // var keys = _.allKeys(new Stooge('Moe'));
    // console.log(keys);


    /* Moudle keys
    ----------------------------------------------------- */
    // var keys = _.keys({ one: 1, two: 2, three: 3 });
    // console.log(keys);

}());