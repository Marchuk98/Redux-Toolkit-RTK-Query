import {RecipeItem} from "./recipe-itme/RecipeItem";

function App() {

  return (
        <div>
            <RecipeItem recipe={{
                id:1,
                name:'Jem'
            }}/>
            <RecipeItem recipe={{
                id:2,
                name:'Toffi'
            }}/>
            <RecipeItem recipe={{
                id:3,
                name:'Peace'
            }}/>
            <RecipeItem recipe={{
                id:4,
                name:'Houdini'
            }}/>
        </div>
  )
}

export default App
