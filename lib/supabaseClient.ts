import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("ENV:", {
    url: supabaseUrl,
    key: supabaseAnonKey,
  });
  throw new Error("Supabase env vars mangler");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);