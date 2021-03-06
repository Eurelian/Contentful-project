import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import ShirtCategoryCard from "./ShirtCategoryCard";
import MugCategoryCard from "./MugCategoryCard";
import ComicCategoryCard from "./ComicCategoryCard";
import Footer from "./Footer";
import Typography from "@material-ui/core/Typography";

const CategoryPage = ({ data, mugData, shirtData }) => {
	const comic = data;
	const mug = mugData;
	const tshirt = shirtData;
	const { id } = useParams();
	let itemList = [];

	if (id === "mug") {
		if (mug) {
			itemList = mug.map((item) => {
				return (
					<Grid item xs={12} sm={4}>
						<Link
							style={{ textDecoration: "none" }}
							to={`/category/${id}/${item.mug_slugs}`}
							key={item.mug_id}
						>
							<MugCategoryCard data={item} />
						</Link>
					</Grid>
				);
			});
		}
	}
	if (id === "book") {
		if (comic) {
			itemList = comic.map((item) => {
				return (
					<Grid item xs={12} sm={4}>
						<Link
							style={{ textDecoration: "none" }}
							to={`/category/${id}/${item.book_slugs}`}
							key={item.book_id}
						>
							<ComicCategoryCard data={item} />
						</Link>
					</Grid>
				);
			});
		}
	}

	if (id === "shirt") {
		if (tshirt) {
			itemList = tshirt.map((item) => {
				return (
					<Grid item xs={12} sm={4}>
						<Link
							style={{ textDecoration: "none" }}
							to={`/category/${id}/${item.shirt_slugs}`}
							key={item.shirt_id}
						>
							<ShirtCategoryCard data={item} />
						</Link>
					</Grid>
				);
			});
		}
	}

	return (
		<React.Fragment>
			<Grid
				container
				justify='center'
				style={{ margin: "0 auto", width: "80%", marginTop: "100px" }}
			>
				{itemList}
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default CategoryPage;
