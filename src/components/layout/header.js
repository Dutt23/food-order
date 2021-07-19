import styles from './header.module.css'
import HeaderCartButton from './header-cart-button'
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img alt ="Table full of delicious food"src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"/>
      </div>
    </>
  )
}


export default Header