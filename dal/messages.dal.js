import { supabase } from "../db/supabase/client.js";

export async function insertToDB(Obj) {
  return await supabase
    .from("messages")
    .insert([Obj])
    .select()
    .single();
}

export async function findRowByID(id) {
  return await supabase
    .from("messages")
    .select("*")
    .eq("id", id)
    .single();
}

export async function findByUsername(username) {
  return await supabase
    .from("messages")
    .select("*")
    .eq("username", username);
}
