/** 
 * @param {number} timestamp
 * @returns {string}
 */
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

/** 
 * @param {number} start
 * @param {number} end
 * @returns {object}
 */
function calculatePauseTime(start, end, toggles) {
    let pauseTime = 0;
  
    for (let i = 0; i < toggles.length; i += 2) {
      let pauseStart = toggles[i];
      let pauseEnd = toggles[i + 1] || end;
  
      if (pauseStart < end && pauseEnd > start) {
        let effectivePauseStart = Math.max(start, pauseStart);
        let effectivePauseEnd = Math.min(end, pauseEnd);
        pauseTime += effectivePauseEnd - effectivePauseStart;
      }
    }
  
    return pauseTime;
  }

function calculateStopwatchTime(stopwatch) {
  const { started, toggles } = stopwatch;
  let isRunning = !toggles.length || toggles.length % 2 === 0;

  let endTime = isRunning ? Date.now() : toggles[toggles.length - 1];
  let totalElapsed = endTime - started;
  let pauseTime = calculatePauseTime(started, endTime, toggles);
  let totalTime = totalElapsed - pauseTime;

  return {
    totalTime,
    totalTimeDisplay: formatTimestamp(totalTime),
    isRunning
  };
}

function calculateLapTimes(stopwatch) {
    const { laps, toggles, started } = stopwatch;
    if (laps.length === 0) return [];
  
    let lapTimes = [];
  
    for (let i = 0; i < laps.length; i++) {
      let lapStart = i === 0 ? started : laps[i - 1];
      let lapEnd = laps[i];
  
      let lapElapsed = lapEnd - lapStart;
      let pauseTime = calculatePauseTime(lapStart, lapEnd, toggles);
      let lapTime = lapElapsed - pauseTime;
  
      lapTimes.push(lapTime);
    }
  
    return lapTimes;
  }

export {
    formatTimestamp,
    calculatePauseTime,
    calculateLapTimes,
    calculateStopwatchTime
};
  