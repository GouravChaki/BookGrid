import { paginatedBooks } from "../../../common/Functions/allBooks";

export const handleChange = async (row, setLoading, state, setState, page) => {
  try {
    setLoading(true);
    const booksData = await paginatedBooks({
      limit: row,
      page: page,
      offset: (page - 1) * row + 1,
    });
    if (booksData.success) {
      setState({
        ...state,
        initialized: true,
        allBooks: booksData.data,
      });
    } else {
      console.error("Failed to fetch data");
    }
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
