class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {

    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы')
    }

    let timeRegexp = /^([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
    if (!timeRegexp.test(time)) {
      console.warn('Используйте формат времени HH:MM');
    }

    let availabilityAlarm = this.alarmCollection.find(alarm => alarm.time === time);
    if (availabilityAlarm) {
      console.warn('Уже присутствует звонок на это же время')
    }

    this.alarmCollection.push({ callback: callback, time: time, canCall: true });

  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      let currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}