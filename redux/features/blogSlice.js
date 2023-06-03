import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// all blogs get
export const blogData = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    // const response = await fetch('http://eduker-server.onrender.com/blog');
    // const data = response.json();

    const mine = await fetch(
      // 'http://127.0.0.1:8000/api/get-blogs'
      'https://admin.goabroadconsult.com'
      )
    const miData = mine.json();

    console.log("Their Data :")
    console.log("Mine : ", miData)
    
    return miData;
  }
)
// get single blog
export const singleBlog = createAsyncThunk(
  'event/fetchEvent',
  async (id) => {
    console.log("okay : ",id)
    // const response = await fetch(`https://eduker-server.onrender.com/blog/${id}`)
    // const event = response.json();

    const miSingle = await fetch(`127.0.0.1:8000/api/single-blog/${id}`)
    const singleData = miSingle.json();

    
    return singleData;
  }
)
// blogSlice
export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    allBlogs: [],
    status: '',
    blog: {},
    blogStatus: ''
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(blogData.fulfilled, (state, action) => {
      state.allBlogs = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(blogData.pending, (state, action) => {
        state.status = 'pending'
      })
    // single blog
    builder.addCase(singleBlog.fulfilled, (state, action) => {
      state.blog = action.payload
      state.blogStatus = 'fulfilled'
    }),
      builder.addCase(singleBlog.pending, (state, action) => {
        state.blogStatus = 'pending'
      })
  },

})


export const fetchData = async (id) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const response = await 
  fetch(
    `https://admin.goabroadconsult.com`
    // `http://127.0.0.1:8000/api/single-blog/${id}`
  , requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => console.log('error', error));

  return response;
}

// export const {  } = blogSlice.actions

export default blogSlice.reducer
