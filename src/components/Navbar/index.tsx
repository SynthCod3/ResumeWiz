import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
const Navbar = () => {
	const navigate = useNavigate();

	const handleSignUp = () => {
		navigate("/signup");
	};

	return (
		<div className={styles.navbarWrapper}>
			<div className={styles.navbarHeading}>
				Resume<span>Wiz</span>
			</div>
			<div className={styles.navbarLinks}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/templates">Template</a>
					</li>
					<li>About</li>
				</ul>
			</div>
			<div className={styles.navbarButton}>
				<button onClick={handleSignUp}>Sign Up</button>
			</div>
		</div>
	);
};

export default Navbar;
