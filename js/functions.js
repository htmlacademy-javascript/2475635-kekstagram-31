const getStringLength = (string, length) => string.length <= length;

const getPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString;
};

const getNumber = (data) => {
  data = data.toString();
  let result = '';
  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line radix
    const iData = parseInt(data[i]);
    if (!Number.isNaN(iData)) {
      result += iData;
    }
  }
  if (result === '') {
    return NaN;
  }
  return Number(result);
};

const convertTimeToNumber = (timeString) => {
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  return hours * 60 + minutes;
};

const isEnoughTime = (startDay, endDay, startMeeting, meetingDuration) => {
  const startDayInMinutes = convertTimeToNumber(startDay);
  const endDayInMinutes = convertTimeToNumber(endDay);
  const startMeetingInMinutes = convertTimeToNumber(startMeeting);
  return startMeetingInMinutes >= startDayInMinutes && (endDayInMinutes - startMeetingInMinutes) >= meetingDuration;
};

