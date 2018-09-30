recursive = function (n) {
  if (n == 1)
    return 1;
  return n * recursive(n - 1);
}

tailcall = function (n) {
  function rec(n, acc) {
    if (n == 1)
      return acc;
    return rec(n - 1, acc * n)
  }
  return rec(n, 1);
}

trampoline = function (n) {
  function trampoline(fn) {
    return function () {
      var res = fn.apply(this, arguments);
      while (res instanceof Function) {
        res = res();
      }
      return res;
    }
  }

  function fn(n, acc) {
    if (n == 1)
      return acc;
    return () => fn(n - 1, acc * n);
  }
  return trampoline(fn)(n, 1);
}

fact = {
  "recursive": recursive,
  "tailcall": tailcall,
  "trampoline": trampoline
};

module.exports = fact;