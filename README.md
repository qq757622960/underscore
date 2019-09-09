2019.8.21

1. 循环 (array/Object, iteratee, [context])
   iteratee 是数组的情况下: (element, index, list)
   iteratee 是对象的情况下: (value, key, list)
   predicate === iteratee

2. each(list, iteratee, [context]): 遍历每一个元素, 返回数组/对象
3. map(list, iteratee, [context]): 遍历每一个元素生成一个数组 用在需要改变数组原始值的场景下
4. reduce(list, iteratee, [memo], [context]): 把 list 中的元素归结为 1 个值, 用在拼接字符串、求和、2维数组合并为一个数组中
5. reduceRight(list, iteratee, [memo], [context]): 与值相反
6. find(list, predicate, [context]): 在 list 中逐项查找, 返回第一个真值 的元素值, 如果没有则返回 undefined, 用在查找一个对象数组中的某个对象
7. filter(list, predicate, [context]): 遍历 list 中的每一个值, 返回数组(通过真值检测所组成的数组)
8. findWhere(list, properties): 遍历整个 list, 根据 properties key->value 返回第一个值
9. where(list, properties): 遍历整个 list, 返回数组(这个数组中包含 properties 所列出的 key->value)
10. reject(list, predicate, [context]): 返回数组(没有通过真值检测组成的数组)
11. every(list, [predicate], [context]): 返回 boolean, 如果 list 中的所有元素都通过真值检测, 则返回 true
12. some(list, [predicate], [context]): list 中的任何一个元素只要通过 predicate 真值检测就返回 true。一旦找到符合条件的元素, 那么就直接中断 list 的遍历, 返回 boolean
13. contains(list, value, [fromIndex]): 如果数组中包含 value 则返回 true
14. invoke(list, methodName, *arguments): 遍历数组元素, 每个元素执行 methodName 方法, 任何传递给 invoke 的额外参数, invoke 都会在调用 methodName 方法的时候传递给它
15. pluck(list, propertyName): 萃取数组对象中某个属性值, 返回一个数组
16. max(list, [iteratee], [context]): 返回 list 中的最大值
17. min 同理
18. sortBy(list, iteratee, [context]): 返回一个排序后的 list 拷贝副本
19. groupBy 把一个集合分组为多个集合, 通过 iterator 返回的结果进行分组
20. indexBy(list, iteratee, [context]): 给定一个 list, 和一个用来返回一个在列表中的每个元素键的 iterator 函数
21. countBy(list, iteratee, [context]): 返回一个对象
22. shuffle(list): 返回一个随机乱序的 list 副本
23. sample(list, [n]): 从 list 中产生一个随机样本, 传递一个数字表示从 list 中返回 n 个随机元素
24. toArray(list): 把 list 转换成一个数组, 在转换 arguments 对象时非常有用
25. size(list): 返回 list 的长度
26. parttion(list, predicate): 把一个数组拆分为两个数组, 第一个数组元素满足 predicate, 而第二个的所有元素均不满足 predicate
27. compact(list): 返回一个除去了所有 falsy 值的 list 副本

总结: 返回数组/单值/第一个值/-Infinity  目的、语法、实践