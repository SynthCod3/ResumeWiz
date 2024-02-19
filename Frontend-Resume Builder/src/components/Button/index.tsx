import styles from './index.module.css'
type Props = {
    name: string;
}

const Button = (props: Props) => {
  return (
    <div className={styles.buttonWrapper}> <button>{props.name}</button></div>
  )
}

export default Button