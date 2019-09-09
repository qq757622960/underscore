/** 
 * @Author: YISHI 
 * @Date: 2019-08-20 13:37:59 
 * @Desc: function 
 */

(function () {  

    

    /* Moudle compose
    ----------------------------------------------------- */
    // var greet = function (name) { return "hi: " + name; };
    // var exclaim = function (statement) { return (statement+'').toUpperCase() + "!"; };
    // var welcome = _.compose(greet, exclaim);

    // console.log(welcome());

    /* Moudle negate
    ----------------------------------------------------- */
    // var isFalsy = _.negate(Boolean);
    // var arr = _.find([-2, -1, 0, 1, 2], isFalsy);
    // console.log(arr);

    /* Moudle wrap
    ----------------------------------------------------- */
    // var hello = function (name) { return "hello: " + name; };
    // hello = _.wrap(hello, function (func) {
    //     return "before, " + func("moe") + ", after";
    // });

    // console.log(hello());

    /* Moudle after/before
    ----------------------------------------------------- */
    // var func = _.before(3, function () {
    //     console.log(123);
    // });

    // func();
    // func();
    // func();
    // func();

    /* Moudle once
    ----------------------------------------------------- */
    // var sum = function() { console.log(123); };
    // var initialize = _.once(sum);

    // initialize();
    // initialize();
    // initialize();

    /* Moudle throttle
    ----------------------------------------------------- */
    // var throttled = _.throttle(function() { console.log(123); }, 100);
    // console.log(throttled());


    /* Moudle defer
    ----------------------------------------------------- */
    // _.defer(function() { alert('deferred'); });

    /* Moudle delay
    ----------------------------------------------------- */
    // _.bind(functionName, object, [*arguments])
    // var log = _.bind(console.log, console);
    // _.delay(log, 1000, 'logged later');

    /* Moudle partial
    ----------------------------------------------------- */
    // var subtract = function (a, b) { return b - a; };
    // var sub5 = _.partial(subtract, 5);

    // var sum = sub5(20);
    // console.log(sum);


    /* Moudle bindAll
    ----------------------------------------------------- */
    // var buttonView = {
    //     label: 'underscore',
    //     onClick: function () { alert('clicked: ' + this.label); },
    //     onHover: function () { console.log('hovering: ' + this.label); }
    // };

    // _.bindAll(buttonView, 'onClick', 'onHover');
    
    // buttonView.onClick();
    // buttonView.onHover();


    /* Moudle bind 绑定函数 function 到对象 object 上
       也就是无论何时调用函数, 函数里的 this 都指向这个 object
    ----------------------------------------------------- */
    // var func = function (greeting) {
    //     return greeting + ':' + this.name;
    // };
    // func = _.bind(func, {name: 'moe'}, 'hi');

    // console.log(func());

}());