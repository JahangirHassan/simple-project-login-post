import {createSlice} from "@reduxjs/toolkit";

const initialState ={
posts : [],
loading: false,
error: null
}


const postSlice = createSlice({
          name: "posts",
          initialState,
          reducers : {
           setPosts: (state, action)=>{
               state.posts = action.payload;

           },
           addPost : (state, action)=>{
             state.posts.push(action.payload);
          // console.log("this is testing of user data in post slice  addPost payload:: ", state.posts.push(action.payload))
           },
           updatePost :(state, action)=>{
                 const index = state.posts.findIndex(post => post.$id === action.payload.$id);
               //  console.log("this is checking post id ",index, "and this is action payload id",action.payload.$id)
                  if (index !== -1) {
                    state.posts[index] = action.payload;
            // console.log("this is testing of user data in post slice updatePost payload:: ", action.payload)
                    
                  }
           },
           deletePost: (state, action)=>{
          state.posts.filter(post => post.$id === action.payload.$id); 
       //    console.log("this is testing of delete method  in post slice payload:: ", state.posts.filter(post => post.$id !== action.payload.$id) )
           },
           setLoading : (state, action )=>{
                              state.loading = action.payload;
           },
          }
})


export const {
          setPosts,
          addPost,
          updatePost,
          deletePost,
          setLoading

} = postSlice.actions

export default postSlice.reducer;