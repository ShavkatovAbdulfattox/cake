import { createClient } from "@supabase/supabase-js";
// import { data } from "autoprefixer";

export const supabase = createClient(
  "https://eqjnltswiiuiqntmujov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxam5sdHN3aWl1aXFudG11am92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTM5ODEsImV4cCI6MjAwNDA2OTk4MX0.baCCdqq3KbjMtWjBF3fthKMbXO9uSJUamc9YG-EIhqc"
);

// const fetchData = async () => {
//   const { data, error } = await supabase.from("your_table_name").select("*");

//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//     // Do something with the fetched data
//   }
// };
