import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

export const PrivateRoute = () => {
	const navigate = useNavigate();

	async function handleClick() {
		const session = await supabase.auth.getSession();
		if (!session.data.session?.access_token) {
			await supabase.auth.signOut();
		}
	}

	useEffect(() => {
		handleClick();
	}, [navigate]);

	return <Outlet />;
};
