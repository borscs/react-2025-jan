import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import * as stream from "node:stream";
import fs from "node:fs";

const db = sql('meals.db');

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	
	// throw new Error('Loading meals failed');
	return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, {lower: true});
	meal.institutions = xss(meal.institutions);
	
	console.log(meal.slug);
	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;
	
	
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();
	
	
	stream.write(Buffer.from(bufferedImage), (err) => {
		if(err){
			throw new Error('Saving image failed!');
		}
	});
	
	meal.image = `/images/${fileName}`;
	
	db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}
