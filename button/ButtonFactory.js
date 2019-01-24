import Button from "./Button";
import colors from "../colors/colors";
import React from "react";

export function createDeleteButton(handleDelete) {
	return <Button
		width={"120px"}
		value={<span>
			<i className={"typcn typcn-trash"}></i>Delete</span>}
		color={colors.red["600"]}
		onClick={handleDelete}
	/>
}

export function buttonFace(icon, text) {
	return <span>
			<i className={"typcn typcn-" + icon}></i>{text}
			</span>;
}