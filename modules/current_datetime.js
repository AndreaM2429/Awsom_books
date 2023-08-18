const setdate = () => {
  const curDate = document.getElementById('now');
  curDate.textContent = new Date().toDateString('en-us', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  });
};
export default setdate;