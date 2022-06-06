import React from "react";
import { useSelector } from "react-redux";
import NewProduct from "../../../../NewProduct/NewProduct";
import { CardYate } from "./cardYate/CardYate";
import "./myYacht.css";

export const MyYacht = () => {
	const allYates = useSelector((state) => {
		return state.allYates;
	});
	return (
		<div>
			{allYates ? (
				<div className="card_yates_container">
					{allYates?.map((yate) => (
						<CardYate key={yate.id} yate={yate} />
					))}
				</div>
			) : (
				<div className="myYatchNoYacth">
					<h2>You don't have any yacht yet.</h2>
					<p> do you want to add one?</p>
					<button
						type="button"
						class="btn btn-success"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal2"
					>
						Create new Yacht
					</button>
				</div>
			)}

			<div
				class="modal modal-xl fade"
				id="exampleModal2"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<NewProduct />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// <Link to="/userSite/newproduct">Crear nuevo yate</Link>;
};
