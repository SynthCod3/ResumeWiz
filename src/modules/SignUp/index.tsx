import { useState } from "react";
import styles from "./index.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const checkValidation = () => {
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		if (data.password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}

		if (data.email === "") {
			toast.error("Email is required");
			return;
		}
	};

	const handleSignUp = async () => {
		let { data: res, error } = await supabase.auth.signUp({
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
		toast.promise(handleSignUp(), {
			loading: "Signing up...",
			success: () => {
				navigate("/profile-create");
				return <b>Signed in successfully</b>;
			},
			error: (error) => {
				return <b>{error}</b>;
			},
		});
	};

	return (
		<div className={styles.Wrapper}>
			<div className={styles.Header}>
				<span>Sign Up</span>
				<span>Please sign up to get started</span>
			</div>
			<form onSubmit={handleSubmit}>
				<span>Email</span>
				<input
					type="email"
					placeholder="email address"
					required
					onChange={(e) =>
						setData({ ...data, email: e.target.value })
					}
				/>
				<span>Password</span>
				<input
					type="password"
					placeholder="password"
					required
					onChange={(e) =>
						setData({ ...data, password: e.target.value })
					}
				/>
				<span>Re-Type Password</span>
				<input
					type="password"
					placeholder="••••••••"
					required
					onChange={(e) =>
						setData({ ...data, confirmPassword: e.target.value })
					}
				/>
				<button type="submit">Sign Up</button>
			</form>
			<span>
				Alreay have an account? &nbsp;
				<a href="/signin">Sign In</a>
			</span>
			{/* <p>OR</p>
      <button className={styles.Google}>
        <Googlesvg /> <p>Sign up with Google</p>
      </button> */}
		</div>
	);
};

export default SignUp;
