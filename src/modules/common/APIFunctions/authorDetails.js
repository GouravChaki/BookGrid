import axios from "axios";
import { showToastMessage } from "../Functions/toast";

export const fetchAuthorBirthDate = async (authorKey) => {
    try {
      const authorRes = await axios.get(`https://openlibrary.org/authors/${authorKey}.json`);
      return authorRes.data.birth_date || null;
    } catch (error) {
      showToastMessage("error", `Error fetching author birth date for ${authorKey}`,8000,1);
      console.log(`Error fetching author birth date for ${authorKey}:`, error);
      return null;
    }
  };
  
export const fetchAuthorTopWork = async (authorName) => {
    try {
      const authorTopWorkRes = await axios.get(`https://openlibrary.org/search/authors.json?q=${authorName}&limit=1`);
      return authorTopWorkRes.data.docs[0]?.top_work || null;
    } catch (error) {
      showToastMessage("error", `Error fetching author top work for ${authorName}:`,8000,1);
      console.log(`Error fetching author top work for ${authorName}:`, error);
      return null;
    }
  };
  