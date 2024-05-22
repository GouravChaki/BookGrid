import { paginatedBooks } from "../../../common/Functions/allBooks";

export const handleChange = async (event, setLoading, setRow, state, setState) => {
  try {
    setLoading(true);
    const booksData = await paginatedBooks({ limit: event.target.value, page: 1, offset: 1 });
    if (booksData.success) {
      setState({
        ...state,
        initialized: true,
        allBooks: booksData.data,
      });
      setRow(event.target.value);
    } else {
      console.error("Failed to fetch data");
    }
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
