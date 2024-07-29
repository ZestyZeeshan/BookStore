import Book from "../model/book_model.js";

export const getBook= async (req,res)=>{
    try{
      const book = await Book.find()
      res.status(200).json(book);
    }catch(err){
      console.log('error',err)
      res.status(500).json(err)
      //for internal serval
    }
}

//export default getBook;