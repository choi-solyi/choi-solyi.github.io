const clockTitle = document.querySelector('.js-clock')

// clockTitle.innerText = "lala";

function getClock() {
  const today = new Date()

  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDay()
  const hours = String(today.getHours()).padStart(2, '0')
  const minutes = String(today.getMinutes()).padStart(2, '0')
  const seconds = String(today.getSeconds()).padStart(2, '0')

  clockTitle.innerText = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`
}
setInterval(getClock, 1000)
