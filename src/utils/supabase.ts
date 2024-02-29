import { createClient } from "@supabase/supabase-js";

const getSupabaseConfig = async () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !anonKey) {
    console.error("Supabase URL or Anon Key is missing.");
    return null;
  }

  return createClient(supabaseUrl, anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });
};

export const supabase = await getSupabaseConfig();
