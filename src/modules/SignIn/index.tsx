
import { FcGoogle } from 'react-icons/fc';
import styles from './index.module.css'; 


const SignIn = () => {

   
    return (
      <div>
        <div className={styles.sigInWrapper}>
            <div className={styles.sigInHeader}>
                <span>Log In</span>
                <span>Please sign in to your existing account</span>
            </div>
            <form >
                <div>
                    Email
                    <input
                        type="email"
                        placeholder="email address"
                    />
                </div>
                <div>
                    Password
                    <input
                        type="password"
                        placeholder="••••••••"
                    />
                </div>
                <div className={styles.ForgotPass}>
                    {/* <div>
                    {" "}
                    <input id="remeberme" type="checkbox" />
                    <label htmlFor="remeberme">Remember me </label>
                  </div>
                  <button>Forgot Password</button> */}
                </div>
                <button type="submit">Sign In</button>
            </form>

            <span className={styles.link}>
                Don&apos;t have an account? &nbsp;
                <a href="/signup">Sign up</a>
            </span>
            <span>OR</span>
              <button className={styles.Google}>
              <FcGoogle /> Sign in with Google
              </button>
        </div>
        </div>
    )
}


export default SignIn