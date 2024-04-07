function checkLength (string, maxLength) {
  const result = (string.length <= maxLength) ? true : false;
  return result;
}

function checkIfPalindrom (string) {
  const noSpaceString = string.replaceAll(' ','');
  const normalisedString = noSpaceString.toUpperCase();
  let reversedString = '';
  for (let i = normalisedString.length - 1; i >= 0; i--) {
    reversedString += normalisedString[i];
  }
  const isPalindrom = (reversedString === normalisedString);
  return isPalindrom;
}

const makeTimeToNumber = (timeString) => {

const transformTimeToNumber = (timeString) => {
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  return hours * 60 + minutes;
};

const checkEnoughTime = (startDay, endDay, startMeeting, meetingDuration) => {
  const startDayInMinutes = makeTimeToNumber(startDay);
  const endDayInMinutes = makeTimeToNumber(endDay);
  const startMeetingInMinutes = makeTimeToNumber(startMeeting);
const CheckIfIsEnoughTime = (startDay, endDay, startMeeting, meetingDuration) => {
  const startDayInMinutes = transformTimeToNumber(startDay);
  const endDayInMinutes = transformTimeToNumber(endDay);
  const startMeetingInMinutes = transformTimeToNumber(startMeeting);
  return startMeetingInMinutes >= startDayInMinutes && (endDayInMinutes - startMeetingInMinutes) >= meetingDuration;
}}};
