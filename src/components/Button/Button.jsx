import styles from './Button.module.scss'

const Button = ({ nombre }) => {
  return (
    <button className={styles.button}> { nombre } </button>
  )
}

export default Button