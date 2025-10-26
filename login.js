
import { createClient } from 
"https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://ogtvhivkeruefeqwcysj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndHZoaXZrZXJ1ZWZlcXdjeXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MTU3MTAsImV4cCI6MjA3NzA5MTcxMH0.NHXYpH0PPeYXEdIHct1EfaMy9KHDzxsAZVE4mGkykC8";
const supabase = createClient(supabaseUrl, supabaseKey);

async function testarConexao() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) console.error('Erro:', error);
  else console.log("Dados:", data);
}

testarConexao();
