import React, { useState } from 'react';
import styles from './CreateRecipe.module.css';
import { useCreateRecipeMutation } from '../sotre/api/recipe.api';

const defaultValue = {
    name: '',
    image: '',
}

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(recipe)
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }

    return <div>
        <form type="submit" onSubmit={handleSubmit}>
            <p>Create new recipe:</p>
            <label >
                <input className={styles.input} type="text" placeholder='Name' value={recipe.name} onChange={
                    e => setRecipe({ ...recipe, name: e.target.value })
                } />
                <input className={styles.input} type="text" placeholder='Image' value={recipe.image} onChange={
                    e => setRecipe({ ...recipe, image: e.target.value })
                } />
            </label>
            <button className={styles.btnDefault} type='submit'>Create</button>
        </form>
    </div>;
}



export default CreateRecipe;