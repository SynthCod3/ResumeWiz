import { useState } from "react";
import styles from "./index.module.css";
import { SiLinkedin } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";

const SignIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const checkValidation = () => {
		if (data.password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}

		if (data.email === "") {
			toast.error("Email is required");
			return;
		}
	};

	const handleSignIn = async () => {
		let { data: res, error } = await supabase.auth.signInWithPassword({
			email: data.email,
			password: data.password,
		});
		if (error) {
			throw error.message;
		} else {
			return res;
		}
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		checkValidation();
		toast.promise(handleSignIn(), {
			loading: "Signing in...",
			success: () => {
				navigate("/editor");
				return <b>Signed in successfully</b>;
			},
			error: (error) => {
				return <b>{error}</b>;
			},
		});
	};

	return (
		<div>
			<div className={styles.sigInWrapper}>
				<div className={styles.sigInHeader}>
					<span>Log In</span>
					<span>Please sign in to your existing account</span>
				</div>
				<form onSubmit={handleSubmit}>
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
