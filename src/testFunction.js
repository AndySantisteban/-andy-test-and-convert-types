// @ts-check
const { performance } = require('perf_hooks');

const TimeExecute = {
  /**This function receives a function and returns a number **/
  testTimeCount: (/** @type {() => void} */ func) => {
    let t0 = performance.now();
    func;
    let t1 = performance.now();
    return `🕑 :${Math.round((t1 - t0) * 1000) / 1000}`;
  },
  /** This function receives a function and a parameter in seconds.**/
  testTimeCheck: (/** @type {() => void} */ func, /** @type {number} */ check) => {
    let t0 = performance.now();
    func;
    let t1 = performance.now();
    let time = t1 - t0;
    check = check || 0;
    if (time > check) {
      return `❌ Failed Test, time exceeded to ${check} ms`;
    } else {
      return `✅ Test completed, great time `;
    }
  },
  /** Esta funcion recibe una funcion y un parámetro en segundos.**/
  testTimeFunctions: (/** @type {() => void} */ func, /** @type {() => void} */ func2) => {
    var time1 = TimeExecute.testTimeCount(func);
    var time2 = TimeExecute.testTimeCount(func2);
    if (time1 > time2) {
      return `Function primary with: ${time1} ms, performs better than function secondary with: ${time2} ms`;
    } else {
      return `Function secondary with: ${time2} ms, performs better than function primary with: ${time1} ms`;
    }
  },
};

module.exports = TimeExecute;
