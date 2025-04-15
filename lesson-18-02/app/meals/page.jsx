import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meals(){
	const meals = await getMeals();
	
	return(
		<main className={classes.main}>
			<MealsGrid meals={meals}/>
		</main>
	)
	
}

export default  async function MealsPage() {
	

	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{' '}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">
						Share Your Favorite Recipe
					</Link>
				</p>
				<Suspense fallback={<div className={classes.loading}>Loading...</div>}>
					<Meals/>
				</Suspense>
			</header>
		</>
	)
}
