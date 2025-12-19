"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./shadcnui/field";
import { Textarea } from "./shadcnui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteFormFieldSchema } from "@/lib/zodSchema";
import { Button } from "./shadcnui/button";
import { NoteFormFieldType } from "@/lib/types";
import { FilePlus, Loader } from "lucide-react";
import { customDelay } from "@/hooks/customDelay";
import createNote from "@/hooks/serverActions/createNote";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NoteForm = () => {
	// Initialize the useForm hook
	const {
		handleSubmit,
		formState: { isSubmitting, isValid },
		control,
		reset,
	} = useForm({
		resolver: zodResolver(noteFormFieldSchema),
		defaultValues: {
			noteTitle: "",
			noteBody: "",
		},
		mode: "all",
	});

	const { push } = useRouter();

	// Form handler function
	const noteFormHandlerFunc = async (noteData: NoteFormFieldType) => {
		// Delaying the form submission
		await customDelay(1500);

		// save note data in the database
		const { message, success } = await createNote(noteData);

		//  Error toast message
		if (!success) {
			toast.error(message);
		}

		//  Success toast message
		if (success) {
			toast.success(message);

			// Reset note fields after submission
			reset();

			//  redirect to the home page
			push("/");
		}
	};

	return (
		<>
			<form
				id="note-form"
				onSubmit={handleSubmit(noteFormHandlerFunc)}
				className="grid grid-cols-1 gap-4"
				noValidate>
				{/* Title field  */}
				<FieldGroup>
					<Controller
						name="noteTitle"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="note-title">Title</FieldLabel>
								<Textarea
									{...field}
									id="note-title"
									aria-invalid={fieldState.invalid}
									placeholder="Enter the title here"
									autoComplete="off"
									className="resize-none"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>

				{/* Note body field  */}
				<FieldGroup>
					<Controller
						name="noteBody"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="note-body">Note</FieldLabel>
								<Textarea
									{...field}
									id="note-body"
									aria-invalid={fieldState.invalid}
									placeholder="Enter your note here..."
									autoComplete="off"
									className="min-h-[200px] resize-none"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>

				{/* Submit button  */}

				<Button
					size={"lg"}
					type="submit"
					disabled={!isValid || isSubmitting}
					className="flex cursor-pointer items-center">
					{isSubmitting ? (
						<>
							<Loader className="animate-spin" /> <span>Submitting...</span>
						</>
					) : (
						<>
							<FilePlus />
							<span>Add Note</span>
						</>
					)}
				</Button>
			</form>
		</>
	);
};

export default NoteForm;
