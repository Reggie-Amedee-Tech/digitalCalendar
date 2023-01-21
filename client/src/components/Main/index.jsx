import styles from "./styles.module.css"
import Calendar from "../Calendar"
import CurrentProjects from "../CurrentProjects"

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Digital Calendar</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <Calendar />
      <CurrentProjects />
    </div>
  )
}

export default Main
