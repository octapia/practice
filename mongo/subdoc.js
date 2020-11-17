const mongoose = require(`mongoose`);

const { Schema, model } = mongoose;

const childSchema = new Schema({ name: { type: String } });
const parentSchema = new Schema({ child: childSchema });

childSchema.pre(`validate`, next => {
    console.log(2);
    next();
});

childSchema.pre(`save`, next => {
    console.log(3);
    next();
});

parentSchema.pre(`validate`, next => {
    console.log(1);
    next();
});

parentSchema.pre(`save`, next => {
    console.log(4);
    next();
});

let Parent = new model(`Parent`, parentSchema);

let obj = new Parent({ child: { name: 'sakil' } });

console.log(obj);
