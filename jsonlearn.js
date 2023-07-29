const _ =require('lodash');

const items=[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


//why json is very important while sharing our packages with developers