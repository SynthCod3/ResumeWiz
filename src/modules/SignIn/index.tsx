import { useState } from "react";
import styles from "./index.module.css";
import { SiLinkedin } from "react-icons/si";

const SignIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	return (
		<div>
			<div className={styles.sigInWrapper}>
				<div className={styles.sigInHeader}>
					<span>Log In</span>
					<span>Please sign in to your existing account</span>
				</div>
				<form>
					<div>
						Email
						<input
							type="email"
							placeholder="email address"
							required
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}
						/>
					</div>
					<div>
						Password
						<input
							type="password"
							placeholder="••••••••"
							required
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
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
					<SiLinkedin /> Sign in with Linkedin
				</button>
			</div>
		</div>
	);
};

export default SignIn;
