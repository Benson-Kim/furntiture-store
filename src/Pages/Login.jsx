import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ visible, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = (data) => {
		console.log(data);
	};
	return (
		<div className="w-full">
			<div id="backdrop" className="font-sans antialiased bg-grey-lightest">
				<div className="w-full bg-green fixed shadow z-1">
					<div className="container mx-auto">
						<div className="w-full flex justify-between items-center py-4 px-8">
							<div className="text-center text-white font-bold">Your Company</div>
							<div className="items-center hidden sm:flex">
								<a href="/" className="text-white hover:text-green-lightest no-underline mx-2 px-2 py-2">
									Link 1
								</a>
								<a href="/" className="text-white hover:text-green-lightest no-underline mx-2 px-2 py-2">
									Link 2
								</a>
								<a
									href="/"
									className="bg-green-dark hover:bg-green-darker rounded-full text-white no-underline mx-2 px-4 py-2">
									Link 3
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full bg-grey-lightest pt-16">
					<div className="container mx-auto py-8">
						<div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
							<div className="py-4 px-8 text-white rounded-t bg-green-400 text-xl font-sans text-center border-b border-grey-lighter">
								Register for a free account
							</div>
							<form onSubmit={handleSubmit(submitForm)} className="py-4 px-8">
								<div className="flex mb-4">
									<div className="w-1/2 mr-1">
										<label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">
											First Name
										</label>
										<input
											{...register("firstName", {
												required: "Please enter your first name",
											})}
											className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
											id="firstName"
											type="text"
											placeholder="Your first name"
										/>
										{errors?.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
									</div>
									<div className="w-1/2 ml-1">
										<label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">
											Last Name
										</label>
										<input
											{...register("lastName", {
												required: "Please enter your last name",
											})}
											className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
											id="lastName"
											type="text"
											placeholder="Your last name"
										/>
										{errors?.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
									</div>
								</div>
								<div className="mb-4">
									<label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
										Email Address
									</label>
									<input
										{...register("email", {
											required: "Please enter valid email address",
										})}
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="email"
										type="email"
										placeholder="Your email address"
									/>
									{errors?.email && <p className="text-red-500">{errors.email.message}</p>}
								</div>
								<div className="mb-4">
									<label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
										Password
									</label>
									<input
										{...register("password", {
											required: "Please enter your password",
											minLength: {
												value: 8,
												message: "Your password must contain at least 8 characters",
											},
										})}
										className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
										id="password"
										type="password"
										placeholder="Your secure password"
									/>
									{errors?.password && <p className="text-red-500">{errors.password.message}</p>}
								</div>
								<div className="flex items-center justify-between my-8">
									<button
										className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
										type="submit">
										Sign Up
									</button>
									<p
										onClick={() => onClose()}
										className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
										Cancel
									</p>
								</div>
							</form>
						</div>
						<p className="text-center my-4">
							<a href="/" className="text-grey-dark text-sm no-underline hover:text-grey-darker">
								I already have an account
							</a>
						</p>
					</div>
				</div>
				<footer className="w-full bg-grey-lighter py-8">
					<div className="container mx-auto text-center px-8">
						<p className="text-grey-dark mb-2 text-sm">
							This is a product of <span className="font-bold">Your Company</span>
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Login;
