import { createClient } from "@supabase/supabase-js";
import { env } from "~/env.mjs";

const SUPABASE_URL = env.DATABASE_URL;
const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);