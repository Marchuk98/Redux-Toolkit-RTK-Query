import React, {useState} from 'react';
import {useCreateRecipeMutation} from "../../store/api/recipe.api.js";


const defaultValue = {
    name:'',
    image:'',
}

export const CreateRecipe = () => {
    const [recipe,setRecipe] = useState(defaultValue)

    const onChangeRecipeNameHandler = (e) => {
        setRecipe({...recipe,name:e.currentTarget.value})
    }
    const onChangeRecipeImageHandler = (e) => {
        setRecipe({...recipe,image:e.currentTarget.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe(recipe).then(()=> {
            setRecipe(defaultValue)
        })
    }

    const [createRecipe] = useCreateRecipeMutation()

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Create new recipe:</p>
            <label>
                <input value={recipe.name} type={"text"} placeholder={'Name'} onChange={onChangeRecipeNameHandler}/>
                <input value={recipe.image} type={"text"} placeholder={'Image'} onChange={onChangeRecipeImageHandler}/>

            </label>
            <button type={"submit"}>Create</button>
        </form>
        </div>
    );
};
