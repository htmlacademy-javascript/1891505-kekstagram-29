/**
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
function pickItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

/**
 * Проверит, подходит ли `value` по длине.
 * @param {string} value
 * @param {number} maxLength
 * @returns {boolean}
 */
function fitsLength(value, maxLength) {
  return value.length <= maxLength;
}

/**
 * Проверит, является ли `value` палиндромом.
 * @param {string | number} value
 * @returns {boolean}
 */
function isPalindrome(value) {
  const normalized = String(value).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

/**
 * Извелечет из `value` цифры.
 * @param {string | number} value
 * @returns {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');

  return digits ? Number(digits) : NaN;
}

/**
 * Поверит не выходит ли встреча за рамки рабочего дня.
 * @param {string} workStart - Начало рабочего дня в формате `часы:минуты`.
 * @param {string} workEnd - Конец рабочего дня в формате `часы:минуты`.
 * @param {string} meetingStart - Начало встречи в формате `часы:минуты`.
 * @param {number} meetingDuration - Продолжительность встречи в минутах.
 * @returns {boolean}
 */
function isWithinWorkingDay(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartTime = parseTime(workStart);
  const workEndTime = parseTime(workEnd);
  const meetingStartTime = parseTime(meetingStart);

  return (
    meetingStartTime >= workStartTime &&
    meetingDuration <= workEndTime - meetingStartTime
  );
}

/**
 * Извлечёт количество минут из строки вида `часы:минуты`.
 * @param {string} time
 * @returns {number}
 */
function parseTime(time) {
  const parts = time.split(':').map(Number);
  const [hours, minutes] = parts;
  const minutesPerHour = 60;

  return hours * minutesPerHour + minutes;
}

export {
  pickItemFromArray,
  pickIntegerInRange,
  fitsLength,
  isPalindrome,
  parseDigits,
  isWithinWorkingDay,
  parseTime,
};
