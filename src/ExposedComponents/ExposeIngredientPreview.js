import React from 'react';
// Importing Actual Component
import IngredientPreview from '../Components/IngredientPreview';
function ExposeIngredientPreview(props) {
	const { open, isLoading, onClose, name, protein, fat, carbs, alcohol, fibre, calories, quantity, unit, comments } =
		props;

	return (
		<IngredientPreview
			open={open}
			isLoading={isLoading}
			onClose={onClose}
			name={name}
			protein={protein}
			fat={fat}
			carbs={carbs}
			alcohol={alcohol}
			fibre={fibre}
			calories={calories}
			quantity={quantity}
			unit={unit}
			comments={comments}
		/>
	);
}

export default ExposeIngredientPreview;
