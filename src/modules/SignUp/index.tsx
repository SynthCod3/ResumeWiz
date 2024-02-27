import styles from './index.module.css'

const SignUp = () => {
  return (
    <div className={styles.Wrapper}>
            <div className={styles.Header}>
                    <span>Sign Up</span>
                    <span>Please sign up to get started</span>
            </div>
            <form >
                
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="email address"
                    />
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="password"
                    />
                    <span>Re-Type Password</span>
                    <input
                        type="password"
                        placeholder="••••••••"
                        
                    />
                <button type="submit">Sign Up</button>
            </form>
            <span>
                Alreay have an account? &nbsp;
                <a href="/login">Login</a>
            </span>
            {/* <p>OR</p>
      <button className={styles.Google}>
        <Googlesvg /> <p>Sign up with Google</p>
      </button> */}
        </div>
  )
}

export default SignUp