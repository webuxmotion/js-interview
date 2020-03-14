export const myBind = (cb, context) => {
  return function() {
    cb.apply(context, arguments);
  }
}

function fn(a, b) {
  console.log(a, b, this);
}

const magicFunc = myBind(fn, {});

magicFunc(2, 3);