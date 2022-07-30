import { useForm } from "react-hook-form";

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = (data) => {
		console.log(data);
	};

	return (
		<div>
			<main className="flex items-center justify-center py-8 min-h-screen">
				<form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-[500px] gap-4">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="border-2 py-2 px-4"
						{...register("firstName", {
							required: "Please enter your first name",
						})}
					/>
					{/* --- displays error message for first name */}
					{errors?.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="border-2 py-2 px-4"
						{...register("lastName", {
							required: "Please enter your last name",
						})}
					/>
					{/* --- displays error message for last name */}
					{errors?.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

					<label htmlFor="age">Age</label>
					<input
						type="number"
						className="border-2 py-2 px-4"
						{...register("age", {
							required: "Please enter your age",
							valueAsNumber: true,
							min: {
								value: 16,
								message: "You must be greater than 15",
							},
						})}
					/>
					{/* --- displays error message for age */}
					{errors?.age && <p className="text-red-500">{errors.age.message}</p>}

					<select {...register("gender", { required: "Please provide your gender" })} className="border-2 py-2 px-4">
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="others">Others</option>
					</select>
					{/* --- displays error message for gender */}
					{errors?.gender && <p className="text-red-500">{errors.gender.message}</p>}

					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						className="border-2 py-2 px-4"
						{...register("email", { required: "Please enter a valid enail" })}
					/>
					{/* ---displays error message for email */}
					{errors?.email && <p className="text-red-500">{errors.email.message}</p>}

					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="border-2 py-2 px-4"
						{...register("password", {
							required: "Please enter your password",
							minLength: {
								value: 8,
								message: "Your password must contain at least 8 characters",
							},
						})}
					/>
					{/* ---displays error message for password */}
					{errors?.password && <p className="text-red-500">{errors.password.message}</p>}

					<button className="py-2 px-4 border bg-slate-300 hover:bg-slate-500 hover:text-slate-50" type="submit">
						Submit
					</button>
				</form>
			</main>
		</div>
	);
}
