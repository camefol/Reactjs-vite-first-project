import supabase from "../providers/supabaseProvider";

export const fetchServices = async () => {
  try {
   
    const { data, error } = await supabase
      .from('data_services')
      .select('*')
    if (error) throw error
    return data
  } catch (error) {
    console.log(error)
  } 
}