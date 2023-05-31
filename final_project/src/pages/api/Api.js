import axios from "axios";

export default async function handler(
   req, res 
) {
   if (req.method === "GET") {
      const options = {
         method: "GET",
         url: "https://realtor.p.rapidapi.com/locations/v2/auto-complete",
         params: {
            input: "new york",
            limit: "10",
         },
         headers: {
            "X-RapidAPI-Key":
               "3f81916779msh1e8592bbbb7bf9cp101621jsn84195c6ca371",
            "X-RapidAPI-Host": "realtor.p.rapidapi.com",
         },
      };

      try {
         const response = await axios.request(options);
         console.log(response.data);
         return res.send(response.data);
      } catch (error) {
         console.error(error);
      }
   }
}