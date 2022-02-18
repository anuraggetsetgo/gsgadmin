import React from 'react';
// Import Original Recipe Preview
import RecipePreview from '../Components/RecipePreview';
function ExposeRecipePreview(props) {
	const { open, onClose, isLoading, recipe, mappedIngredients } = props;
	return (
		<RecipePreview
			open={open}
			onClose={onClose}
			isLoading={isLoading}
			recipe={recipe}
			mappedIngredients={mappedIngredients}
		/>
	);
}

export default ExposeRecipePreview;
