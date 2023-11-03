export const convertTo24Hour = (time: string) => {
  var d = new Date('1/1/2013 ' + time);
  var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

  return hours + ':' + minutes;
};
