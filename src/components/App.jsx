import {RecipeItem} from "./recipe-items/RecipeItem.jsx";
import {Header} from "./header/Header.jsx";
import {User} from "./user/User.jsx";

function App() {

  return (
      <section>
          <Header/>
          <User/>
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
      </section>
  )
}

export default App
