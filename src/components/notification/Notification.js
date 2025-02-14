import React, { useEffect } from 'react'

const SampleNotification = () => {
  useEffect(() => {
    // 檢查瀏覽器是否支持通知
    if (!('Notification' in window)) {
      alert('Your browser does not support desktop notifications')
    }

    // 請求通知權限
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }

    // 當頁面失去焦點或縮小時觸發通知
    const handleFocusChange = () => {
      if (document.hidden) {
        // 頁面失去焦點或縮小，顯示通知
        const notify = new Notification('頁面縮小', {
          body: '頁面已縮小或失去焦點！',
          icon: 'https://via.placeholder.com/50' // 自定義通知圖標
        })
        notify.onclick = (e) => {
          // e.preventDefault()
          // window.open('http://localhost:3000') // 打開特定網頁
          window.focus()
          notify.close()
        }
      }
    }

    // 設置事件監聽器
    document.addEventListener('visibilitychange', handleFocusChange)

    // 清除事件監聽器
    return () => {
      document.removeEventListener('visibilitychange', handleFocusChange)
    }
  }, [])

  return (
    <div>
      <h1>React Chrome 通知示範</h1>
      <p>請縮小或切換到其他頁面以查看通知。</p>
    </div>
  )
}

export default SampleNotification
