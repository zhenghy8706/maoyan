// import Movie from "@pages/movie"
export default{
    path :"/movie",
    name:"movie",
    component:()=>import("@pages/movie")
}