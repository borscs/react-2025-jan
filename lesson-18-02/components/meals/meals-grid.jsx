import classes from './meals-grid.module.css';
import MealItem from "@/components/meals/meal-item";

export default function MealsGrid({meals}) {
	return (
		<ul className={classes.meals}>
			{meals.map((meal, index) => (
				<li key={index}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	)
}
